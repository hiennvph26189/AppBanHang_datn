import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../common/Header';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { Avatar } from 'react-native-paper';
import CustomHeader from '../common/CustomHeader';



const RePass = () => {
    const [showPassWord, setShowPass] = useState(true)
    const [showPassWord2, setShowPass2] = useState(true);
    const [showPassWord1, setShowPass1] = useState(true);
    const [password, setPassWord] = useState('');
    const [badPasswd, setBadPasswd] = useState(false);
    const [repasswd, setRePasswd] = useState('');
    const [badrepasswd, setBadRePasswd] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [BadPasswd1, setBadPasswd1] = useState(false);
    const [badConfirmPassword, setBadConfirmPassword] = useState(false);
    const [err, setError] = useState(false);
    const [errMessage, setErrorMessage] = useState('');
    const [profile, setProfile] = useState({});

    showPass = () => {
        setShowPass(!showPassWord)

    }

    const showPass1 = () => {
        setShowPass1(!showPassWord1)

    }
    const showPass2 = () => {
        setShowPass2(!showPassWord2)

    }
    const validate = () => {
        if (password) {
            setBadPasswd(false)
        } else {
            setBadPasswd(true)
            setErrorMessage("Vui lòng nhập mật khẩu của bạn")
            return
        }
        if (repasswd) {
            setBadPasswd1(false)
        } else {
            setBadPasswd1(true)
            setErrorMessage("Vui lòng nhập mật khẩu muốn đổi")
            return
        }
        if (confirmPassword) {

            if (confirmPassword !== repasswd) {
                setBadConfirmPassword(true)
                setErrorMessage("Mật khẩu không trùng khớp. Vui lòng nhập lại mật khẩu")
            } else {
                setBadConfirmPassword(false)
            }
        } else {
            setBadConfirmPassword(true)
            setErrorMessage("Vui lòng nhập lại mật khẩu của bạn")
            return
        }
    }

    return (
        <>
            <CustomHeader
                title={'Đổi mật khẩu'} />
            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                <Avatar.Image

                    source={{
                        uri: profile.anhDaiDien ? profile.anhDaiDien : 'https://tse4.mm.bing.net/th?id=OIP.eImXLrEHmxuAIYAz3_VKhAHaHt&pid=Api&P=0'

                    }}
                    size={100}
                />
            </View>
            <View>
                <View style={{ position: 'relative' }} >
                    <CustomTextInput
                        placeholder={'Xin Nhập Mật Khẩu'}
                        value={password}
                        onChangeText={text => { setPassWord(text); }}
                        type={showPassWord1 ? 'password' : 'texxt'}
                        icon={require('../images/pass.png')}
                    />
                    <Pressable style={{ position: 'absolute', right: 50, top: 44 }} onPress={() => showPass1()}>
                        {showPassWord1 ?
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={require('../images/eye.png')}
                            />
                            :
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={require('../images/hidden.png')}
                            />}
                    </Pressable>
                    {
                        badPasswd == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                    }
                </View>
            </View>
            <View>
                <View style={{ position: 'relative' }} >
                    <CustomTextInput
                        placeholder={'Nhập mật khẩu muốn đổi'}
                        value={repasswd}
                        onChangeText={text => { setRePasswd(text); }}
                        type={showPassWord2 ? 'password' : 'texxt'}
                        icon={require('../images/pass.png')}
                    />
                    <Pressable style={{ position: 'absolute', right: 50, top: 44 }} onPress={() => showPass2()}>
                        {showPassWord2 ?
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={require('../images/eye.png')}
                            />
                            :
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={require('../images/hidden.png')}
                            />}
                    </Pressable>
                    {
                        BadPasswd1 == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                    }
                </View>
            </View>
            <View>
                <View style={{ position: 'relative' }}>
                    <CustomTextInput
                        value={confirmPassword}
                        onChangeText={text => { setConfirmPassword(text); }}
                        type={showPassWord ? 'password' : 'text'}
                        placeholder={"Nhập Lại Mật Khẩu"} icon={require('../images/pass.png')}

                    >

                    </CustomTextInput>
                    <Pressable style={{ position: 'absolute', right: 50, top: 44 }} onPress={() => showPass()}>
                        {showPassWord ?
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={require('../images/eye.png')}
                            />
                            :
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={require('../images/hidden.png')}
                            />}
                    </Pressable>
                </View>
                {
                    badConfirmPassword == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                }
            </View>
            <CommonButton
                title={'Đổi mật khẩu'}
                bgColor={'#000'}
                textColor={'#fff'}
                onPress={() => { validate() }} />

        </>
    );
};

export default RePass
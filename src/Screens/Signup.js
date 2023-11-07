import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';

const Signup = () => {
    const navigation = useNavigation();
    const [showPassWord, setShowPass] = useState(true)
    const [showPassWord1, setShowPass1] = useState(true)
    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false);
    const [email, setEmail] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [address, setAddress] = useState('');
    const [BadAddress, setBadAddress] = useState(false);
    const [password, setPassword] = useState('');
    const [BadPassWord, setBadPassWork] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [badConfirmPassword, setBadConfirmPassword] = useState(false);
    const [phone, setPhone] = useState('');

    const [err, setError] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    showPass = () => {
        setShowPass(!showPassWord)

    }
    showPass1 = () => {
        setShowPass1(!showPassWord1)

    }

    const validate = () => {
        const phoneNumber = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (name) {
            setBadName(false)
        } else {
            setBadName(true)
            setErrMessage("Vui lòng nhập họ và tên")
            return
        }
        if (phone) {

            if (phoneNumber.test(phone) === true) {
                setError(false)

            } else {
                setError(true)
                setErrMessage("Số điện thoại không đúng định dạng")
                return
            }
        } else {
            setError(true)
            setErrMessage("Vui lòng nhập số điện thoại")
            return
        }
        if (email) {

            if (regexEmail.test(email) === true) {
                setBadEmail(false)

            } else {
                setBadEmail(true)
                setErrMessage("Email không đúng định dạng")
                return
            }
        } else {
            setBadEmail(true)
            setErrMessage("Vui lòng nhập email")
            return
        }
        if (address) {
            setBadAddress(false)
        } else {
            setBadAddress(true)
            setErrMessage("Vui lòng nhập địa chỉ của bạn")
            return
        }
        if (password) {
            setBadPassWork(false)
        } else {
            setBadPassWork(true)
            setErrMessage("Vui lòng nhập mật khẩu của bạn")
            return
        }
        if (confirmPassword) {

            if (confirmPassword !== password) {
                setBadConfirmPassword(true)
                setErrMessage("Mật khẩu không trùng khớp. Vui lòng nhập lại mật khẩu")
            } else {
                setBadConfirmPassword(false)
            }
        } else {
            setBadConfirmPassword(true)
            setErrMessage("Vui lòng nhập mật khẩu của bạn")
            return
        }
    };
    return (

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../images/LogoChao.png')}
                    style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 50, borderRadius: 50 }}
                />
                <Text style={{
                    marginTop: 50,
                    alignSelf: 'center',
                    fontSize: 24,
                    fontWeight: '600',
                    color: '#000',
                }}>
                    Create New Account
                </Text>
                <CustomTextInput
                    placeholder={'Nhập họ Tên'}
                    value={name}
                    onChangeText={txt => {
                        setName(txt);
                    }}
                    icon={require('../images/user.png')}
                />
                {badName === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Vui lòng nhập họ tên
                    </Text>
                )}
                <CustomTextInput
                    placeholder={'Vui lòng nhập số điện thoại'}
                    value={phone}
                    keyboardType={'number-pad'}
                    onChangeText={txt => {
                        setPhone(txt);
                    }}
                    icon={require('../images/phone1.png')}
                />
                {err === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        {errMessage}
                    </Text>
                )}
                <CustomTextInput
                    placeholder={'Xin Vui Lòng Nhập Email'}
                    value={email}
                    onChangeText={txt => {
                        setEmail(txt);
                    }}
                    icon={require('../images/email.png')}
                />
                {badEmail === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        {errMessage}
                    </Text>
                )}

                <CustomTextInput
                    placeholder={'Enter Address Id'}
                    value={address}
                    onChangeText={txt => {
                        setAddress(txt);
                    }}
                    icon={require('../images/address.png')}
                />
                {BadAddress === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Address Id
                    </Text>
                )}

                <View style={{ position: 'relative' }}>
                    <CustomTextInput
                        value={password}
                        onChangeText={text => { setPassword(text); }}
                        placeholder={"Xin Nhập Mật Khẩu"} icon={require('../images/pass.png')}
                        type={showPassWord1 ? 'password' : 'texxt'}>
                    </CustomTextInput>

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
                </View>
                {
                    BadPassWord == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                }
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
                <CommonButton
                    title={'Sign up'}
                    bgColor={'#000'}
                    textColor={'#fff'}
                    onPress={() => {
                        validate();
                    }}
                />
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '800',
                        alignSelf: 'center',
                        marginTop: 20,
                        textDecorationLine: 'underline',
                        marginBottom: 50,
                    }} onPress={() => {
                        navigation.goBack();
                    }}>
                    Already have Account?
                </Text>
            </View>
        </ScrollView>
    );
};

export default Signup
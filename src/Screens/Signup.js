import { View, Text, ScrollView, Image, Pressable, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { ADD_MENBER } from '../../API';
import axios from 'axios';

const Signup = () => {
    const [showPassWord, setShowPass] = useState(true)
    const [showPassWord1, setShowPass1] = useState(true)
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [BadPhone, setBadPhone] = useState(false);
    const [name, setName] = useState('');
    const [BadName, setBadName] = useState(false);
    const [email, setEmail] = useState('');
    const [BadEmail, setBadEmail] = useState(false);
    const [address, setAddress] = useState('');
    const [BadAddress, setBadAddress] = useState(false);
    const [password, setPassWord] = useState('');
    const [BadPassWord, setBadPassWork] = useState(false);
    const [repassword, setRePassword] = useState('');
    const [BadRePassWord, setBadRePassWord] = useState(false);
    const [BadRechecked, setBadReCechked] = useState(false);

    const [checked, setChecked] = useState('');
    const [err, setError] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    showPass = () => {
        setShowPass(!showPassWord)

    }
    showPass1 = () => {
        setShowPass1(!showPassWord1)

    }

    dangKi = () => {
        const phoneNumber = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
        if (name) {
            setBadName(false)
        } else {
            setBadName(true)
            setErrMessage("Vui lòng nhập họ và tên")
            return
        }
        if (checked) {
            setBadReCechked(false)
        } else {
            setBadReCechked(true)
            setErrMessage("Vui lòng chọn Giới tính")
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
        if (!repassword) {
            setBadRePassWord(true);
            setErrMessage("Vui lòng nhập lại mật khẩu của bạn");
            return;
        } else if (repassword !== password) {
            setBadRePassWord(true);
            setErrMessage("Nhập lại mật khẩu không chính xác");
            return;
        } else {
            setBadRePassWord(false);
        }
        const data = {
            email: email,
            tenThanhVien: name,
            gioiTinh: checked,
            soDienThoai: phone,
            anhDaiDien: 'https://tse4.mm.bing.net/th?id=OIP.eImXLrEHmxuAIYAz3_VKhAHaHt&pid=Api&P=0',
            anhCK: 'https://tse4.mm.bing.net/th?id=OIP.eImXLrEHmxuAIYAz3_VKhAHaHt&pid=Api&P=0',
            diaChi: address,
            matKhau: repassword,
        }
        axios.post(ADD_MENBER, data).then(res => {
            if (res.data.errCode === 1) {
                setBadEmail(true)
                setErrMessage(res.data.errMessage)
                return
            } else if (res.data.errCode === 0) {
                ToastAndroid.showWithGravity(
                    'Đăng kí thành công',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM, 25, 50,
                );
                navigation.goBack()
            }

        }).catch(err => console.log(err))
    }
    return (

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../images/LogoChao.png')}
                    style={{ width: 100, height: 100, alignSelf: "center", marginTop: 100, borderRadius: 70 }}>
                </Image>
                <Text
                    style={{ marginTop: 50, alignSelf: "center", fontSize: 24, fontWeight: 600 }}
                >Create New Account</Text>
                <CustomTextInput
                    value={phone}
                    type = "number-pad"
                    onChangeText={text => { setPhone(text); }}
                    placeholder={"Xin Nhập Số Điện Thoại"} icon={require('../images/phone1.png')}>
                </CustomTextInput>
                {
                    err == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                }
                <CustomTextInput
                    value={email}
                    type="email"
                    onChangeText={text => { setEmail(text); }}
                    placeholder={"Xin Nhập Email"} icon={require('../images/email.png')}>
                </CustomTextInput>
                {
                    BadEmail == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                }
                <CustomTextInput
                    value={name}
                    onChangeText={text => { setName(text); }}
                    placeholder={"Nhập họ Tên"} icon={require('../images/user.png')}>
                </CustomTextInput>
                {
                    BadName == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                }
                <View style={styles.gioiTinh}>
                    <Text style={styles.text_GioiTinh}>Giới tính: </Text>
                    <RadioButton
                        value="1"
                        status={checked === '1' ? 'checked' : 'unchecked'} //if the value of checked is Apple, then select this button
                        onPress={() => setChecked('1')} //when pressed, set the value of the checked Hook to 'Apple'
                    />
                    <Text>Nam</Text>
                    <RadioButton
                        value="2"
                        status={checked === '2' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('2')}
                    />
                    <Text>Nữ</Text>
                    <RadioButton
                        value="3"
                        status={checked === '3' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('3')}
                    />
                    <Text>Khác</Text>

                </View>
                {
                    BadRechecked == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                }
                <CustomTextInput
                    value={address}
                    onChangeText={text => { setAddress(text); }}
                    placeholder={"Xin Nhập Địa Chỉ Của Bạn"} icon={require('../images/address.png')}>
                </CustomTextInput>
                {
                    BadAddress == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                }
                <View style={{ position: 'relative' }}>
                    <CustomTextInput
                        value={password}
                        onChangeText={text => { setPassWord(text); }}
                        type={showPassWord1 ? 'password' : 'texxt'}
                        placeholder={"Xin Nhập Mật Khẩu"} icon={require('../images/pass.png')}>
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
                        value={repassword}
                        onChangeText={text => { setRePassword(text); }}
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
                    BadRePassWord == true && (<Text style={{ marginTop: 10, marginLeft: 40, color: 'red' }}>{errMessage}</Text>)
                }

                <CommonButton title={'Sign up'} bgColor={'#000'} textColor={'#fff'}
                    onPress={() => { dangKi() }}
                >
                </CommonButton>
                <Text style={{ fontSize: 18, fontWeight: '800', alignSelf: "center", marginTop: 20, textDecorationLine: "underline", marginBottom: 50 }}
                    onPress={() => { navigation.goBack(); }} > Already Have Account</Text>
            </View>
        </ScrollView>
    );
};

export default Signup;
const styles = StyleSheet.create({
    gioiTinh: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 25,
        marginLeft: 20,
        width: '80%',
        justifyContentc: 'center',
        alignItems: 'center'
    },
    text_GioiTinh: {
        fontSize: 16,
        marginRight: 15,
        fontWeight: 'bold'
    }
});
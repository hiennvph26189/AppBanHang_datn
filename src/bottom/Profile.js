import { View, SafeAreaView, ScrollView, RefreshControl, StyleSheet, Button, Pressable, Image, ToastAndroid } from "react-native";
import { Avatar, Title, Caption, Text, TouchableRipple } from "react-native-paper"
import { React, useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import axios from "axios";
import Header from "../common/Header";
import { PROFILEMEMBER, LOGIN } from "../../API";
import CommonButton from "../common/CommonButton";
import CustomTextInput from "../common/CustomTextInput";
import { updateEmail } from "../redux/actions/Actions";

const Profile = (props) => {

    // khác
    const navigation = useNavigation();
    const [image, setImage] = useState('');
    const info = useSelector(state => state.Reducers.arrUser);
    //login
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [showPassWord1, setShowPass1] = useState(true);
    const [err, setError] = useState(false);
    const [errMessage, setErrorMessage] = useState('');
    // get profile
    const [profile, setProfile] = useState({});
    const [refreshing, setRefeshing] = useState(false);
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    const price = (price) => {
        let x = price;
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x;
    }

    const data = {
        id: info.id,
    }
    // chuyển mà đổi mk
    const rePasswd = () => {
        navigation.navigate('RePasswd');
    }
    // logout
    const singOut = () => {
        dispatch(updateEmail({}, false))
        props.setSelectedTab1()

    }

    // chuyển màn hình lịch sử đơn hàng
    const historyBuyProduct = () => {
        navigation.navigate('History');
    }
    //lấy dữ liệu về sau khi đã đăn nhập
    const getProfile = () => {
        axios.post(PROFILEMEMBER, data).then((response) => {

            if (response.data.errCode === 0) {

                setProfile({ ...response.data.userMember })
                setRefeshing(false)
            }
        })
    }
    // validate trước khi đăng nhập
    const Login = () => {
        navigation.navigate('Login');
    }

    useEffect(() => {
        setError(false);
        getProfile();
    }, [isFocused])
    // refresh lại dữ liệu
    const onRefresh = () => {
        setRefeshing(true);
        getProfile();

    }

    return (
        <>
            {info.id > 0 ?
                <SafeAreaView style={styles.container}>
                    <Header
                        title={'Profile'}
                        show={true}
                    />
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={() => { onRefresh() }}
                            />
                        }
                    >
                        <View style={styles.userInfoSectiom}>
                            <View style={{ flexDirection: 'row' }}>
                                <Avatar.Image
                                    source={{
                                        uri: profile.anhDaiDien ? profile.anhDaiDien : 'https://tse4.mm.bing.net/th?id=OIP.eImXLrEHmxuAIYAz3_VKhAHaHt&pid=Api&P=0'

                                    }}
                                    size={100}
                                />
                                <View style={{ marginLeft: 20 }}>
                                    <View style={[styles.row, {
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }]}>
                                        <Title style={[styles.title, {
                                            marginTop: 15,
                                            marginBottom: 5

                                        }]}>
                                            {profile.tenThanhVien ? profile.tenThanhVien : ''}
                                        </Title>

                                    </View>
                                    {profile.gioiTinh == 1 &&
                                        <Caption style={styles.caption}>
                                            Giới tính: Nam
                                        </Caption>
                                    }
                                    {profile.gioiTinh == 2 &&
                                        <Caption style={styles.caption}>
                                            Giới tính: Nữ
                                        </Caption>
                                    }
                                    {profile.gioiTinh == 3 &&
                                        <Caption style={styles.caption}>
                                            Giới tính: Khác
                                        </Caption>
                                    }
                                </View>
                            </View>

                        </View>
                        <View style={styles.userInfoSectiom}>
                            <View style={styles.row}>
                                <Icon name="map-marker-radius" size={20} color='#777777' />
                                <Text style={{ color: '#777777', marginLeft: 20 }}>{profile.diaChi ? profile.diaChi : ''}</Text>
                            </View>
                            <View style={styles.row}>
                                <Icon name="phone" size={20} color='#777777' />
                                <Text style={{ color: '#777777', marginLeft: 20 }}>{profile.soDienThoai ? profile.soDienThoai : ''}</Text>
                            </View>
                            <View style={styles.row}>
                                <Icon name="email" size={20} color='#777777' />
                                <Text style={{ color: '#777777', marginLeft: 20 }}>{profile.email ? profile.email : ''}</Text>
                            </View>

                        </View>
                        <View style={[styles.infoBoxWrapper,]}>
                            <View style={[styles.infoBox, {
                                borderRightColor: '#dddddd',
                                borderRightWidth: 1

                            }]}>
                                <Title style={styles.title}>{price(profile.tienTk ? profile.tienTk : 0)}  </Title>
                                <Caption>Wallet</Caption>
                            </View>
                            <View style={styles.infoBox}>
                                {/* <Title style={styles.title}>{countAllOrders()}</Title> */}
                                <Caption>Orders</Caption>
                            </View>
                        </View>
                        <View style={styles.menuWrapper}>
                            <TouchableRipple>
                                <View style={styles.menuItem}>
                                    <Icon name="heart-outline" color="#000" size={25} />
                                    <Text style={styles.menuItemText}>
                                        Sản phẩm yêu thích
                                    </Text>
                                </View>

                            </TouchableRipple>
                            <TouchableRipple onPress={()=>{navigation.navigate('ListAddress')}}>
                                <View style={styles.menuItem}>
                                    <Icon name="credit-card" color="#000" size={25} />
                                    <Text style={styles.menuItemText}>
                                        Nạp tiền
                                    </Text>
                                </View>

                            </TouchableRipple>
                            <TouchableRipple onPress={()=>{navigation.navigate('NewAddress')}}>
                                <View style={styles.menuItem}>
                                    <Icon name="history" color="#000" size={25} />
                                    <Text style={styles.menuItemText}>
                                        Lịch sử nạp tiền
                                    </Text>
                                </View>

                            </TouchableRipple>
                            <TouchableRipple onPress={() => { historyBuyProduct() }}>
                                <View style={styles.menuItem}>
                                    <Icon name="book" color="#000" size={25} />
                                    <Text style={styles.menuItemText}>
                                        Lịch sử mua hàng
                                    </Text>
                                </View>

                            </TouchableRipple>
                            <TouchableRipple >
                                <View style={styles.menuItem}>
                                    <Icon name="account-check-outline" color="#000" size={25} />
                                    <Text style={styles.menuItemText}>
                                        Hỗ trợ
                                    </Text>
                                </View>

                            </TouchableRipple>

                            <TouchableRipple onPress={() => { rePasswd() }}>
                                <View style={styles.menuItem}>
                                    <Icon name="lock" color="#000" size={25} />
                                    <Text style={styles.menuItemText}>
                                        Đổi mật khẩu
                                    </Text>
                                </View>

                            </TouchableRipple>
                            <TouchableRipple onPress={() => { singOut() }}>
                                <View style={styles.menuItem}>
                                    <Icon name="logout" color="#000" size={25} />
                                    <Text style={styles.menuItemText}>
                                        Đăng xuất
                                    </Text>
                                </View>

                            </TouchableRipple>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                :
                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 500 }}>
                    <Button
                        title="Login"
                        onPress={() => {
                            Login();
                        }}>

                    </Button>
                </View>
            }

        </>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFF",
        flex: 1
    },
    userInfoSectiom: {

        paddingHorizontal: 25,

        marginTop: 5
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10
    },
    menuItem: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontWeight: '600',
        lineHeight: 26,
        fontSize: 16
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    }

})
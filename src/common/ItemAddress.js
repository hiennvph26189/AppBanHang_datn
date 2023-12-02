import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ItemAddress = (props) => {
    const navigation = useNavigation();
    const item = props.item;

    const formatPhoneNumber = (phoneNumber) => {
        // Định dạng số điện thoại thành 'XXXX XXX XXX'
        return phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
    };

    return (
        <View style={{
            flex: 1, flexDirection: 'row',
            padding: 20,
            borderRadius: 20,
            justifyContent: 'space-between',
            marginVertical: 5,
            borderBottomWidth: 1,
            backgroundColor: '#e6e6e6'
        }}>
            <View
                style={{
                    flex: 1,
                }}
                key={props.key}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.hoTen + ' '}</Text>
                    <Text style={{ fontSize: 15 }}>|{formatPhoneNumber(' ' + item.soDienThoai)}</Text>
                </View>
                <Text style={{ fontSize: 15 }}>{item.diaChi}</Text>
                <View style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 4, // Giảm khoảng trắng thừa bằng cách thay đổi giá trị padding
                    width: 140,
                    borderColor: '#AA0000'
                }}>
                    <Text style={{
                        color: '#AA0000',
                        textAlign: 'center'
                    }}>{item.status}</Text>
                </View>
            </View>
            <TouchableOpacity >
                <Text style={{ color: '#AA0000' }}>Sửa</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ItemAddress;
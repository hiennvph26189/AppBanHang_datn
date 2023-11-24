import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
const Contact = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: '50%', padding: 10, }}>
        <MapView style={{ flex: 1, height: '50%' }}
          initialRegion={{
            latitude: 20.9999531,
            longitude: 105.8046858,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}>
          <Marker
            coordinate={{ latitude: 20.9999531, longitude: 105.8046858 }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </View>
      <ScrollView style={{marginBottom:50}}>

        <View style={{
          paddingHorizontal: 16,
          marginTop: 6
        }}>

          <View style={{
            flexDirection: 'row',
            marginVertical: 4,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Text style={{
              fontSize: 24,
              fontWeight: '600',
              letterSpacing: 0.5,
              marginVertical: 4,
              maxWidth: '84%'
            }}>Liên Hệ Với Chúng Tôi</Text>
            <View style={{ width: 30, height: 30, backgroundColor: "#4da6ff", borderRadius: 100 }}>
              <Image source={require('../images/link.png')} style={{ width: 15, height: 15, margin: 8 }}></Image>
            </View>
          </View>

          <Text style={{ fontSize: 12, fontWeight: '400', letterSpacing: 1, opacity: 0.5, lineHeight: 20, maxWidth: '85%', maxHeight: 44, marginBottom: 18 }}>
            Khi Bạn Gặp Bất Cứ Sự Cố gì hãy liên hệ với Chúng tôi Qua các phương thức bên dưới </Text>

          <View style={{
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 14,
            borderBottomWidth: 1,
            backgroundColor: '#e6e6e6'
          }}>
            <TouchableOpacity style={{
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center'
            }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 100, marginRight: 10, backgroundColor: '#D3D3D3' }}>
                <Image source={require('../images/address.png')} style={{ width: 24, height: 24 }}></Image>
              </View>
              <Text>số 81 - Ngõ 32 - Đỗ Đức Dục - Nam Từ Liêm - Hà Nội</Text>

            </TouchableOpacity>
            <Image source={require('../images/next.png')} style={{ width: 12, height: 12 }}></Image>
          </View>
          <View style={{
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 14,
            borderBottomWidth: 1,
            backgroundColor: '#e6e6e6'
          }}>
            <View style={{
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center'
            }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 100, marginRight: 10, backgroundColor: '#D3D3D3' }}>
                <Image source={require('../images/phone.png')} style={{ width: 24, height: 24 }}></Image>
              </View>
              <Text>0987654321</Text>

            </View>
            <Image source={require('../images/next.png')} style={{ width: 12, height: 12 }}></Image>
          </View>
          <View style={{
            padding: 10,
            borderRadius: 20,
            // flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 14,
            borderBottomWidth: 1,
            backgroundColor: '#e6e6e6'
          }}>
            <View style={{
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center'
            }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 100, marginRight: 10, backgroundColor: '#D3D3D3' }}>
                <Image source={require('../images/email.png')} style={{ width: 24, height: 24 }}></Image>
              </View>
              <Text>Gửi phản hồi đến chúng tôi</Text>
            </View>
            <CustomTextInput placeholder={'Ý kiến'}/>
            
          </View>

          <View style={{
            paddingHorizontal: 16,
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '500',
              marginBottom: 4
            }}>
              Cảm Ơn Bạn Đã Tin Tưởng Chúng Tôi
            </Text>
            <Text style={{alignSelf:'center'}}>
               Đội Ngũ Shop
            </Text>
          </View>
        </View>
      </ScrollView>

    </View>
  );
};
export default Contact;
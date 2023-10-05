/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import {Icon, Input, NativeBaseProvider, Stack, Button} from 'native-base';

export default function EditProfile() {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [show, setShow] = React.useState(false);
  const back = () => {
    navigation.navigate('Profile');
  };

  const options = {
    mediaType: 'photo',
    maxWidth: 800,
    maxHeight: 800,
    quality: 0.8,
  };

  const handleOpenCamera = async () => {
    try {
      const result = await launchCamera(options);
      if (!result.didCancel) {
        const uri = result.assets[0].uri;
        setSelectedImage(uri);
        console.log('Gambar dari kamera:', uri);
      } else {
        console.log('menolak open kamera');
      }
    } catch (error) {
      console.error('Error saat membuka kamera:', error);
    }
  };

  const handleOpenImageLibrary = async () => {
    try {
      const result = await launchImageLibrary(options);
      if (!result.didCancel) {
        const uri = result.assets[0].uri;
        setSelectedImage(uri);
        console.log('Image dari galeri:', result.uri);
      }
    } catch (error) {
      console.error('Error saat membuka galeri:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons name="chevron-back" style={styles.icon} onPress={back} />
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={{uri: selectedImage}}
          style={{
            width: 200,
            height: 200,
            objectFit: 'contain',
            borderWidth: 1,
            borderColor: 'brown',
          }}
          resizeMode="contain"
        />
        <View style={{flexDirection: 'row', marginVertical: 20}}>
          <TouchableOpacity
            onPress={handleOpenCamera}
            style={{marginRight: 10}}>
            <Feather name="camera" style={{fontSize: 25, color: 'brown'}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenImageLibrary}>
            <Feather name="folder" style={{fontSize: 25, color: 'gray'}} />
          </TouchableOpacity>
        </View>

        <NativeBaseProvider>
          <Stack space={4} w="100%" alignItems="center">
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="60"
              borderRadius="10"
              bgColor="#F5F5F5"
              InputLeftElement={
                <Icon as={<Feather name="user" />} size={5} ml="2" />
              }
              placeholder="Name"
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="60"
              borderRadius="10"
              bgColor="#F5F5F5"
              InputLeftElement={
                <Icon as={<Feather name="phone" />} size={5} ml="2" />
              }
              placeholder="Phone Number"
            />
          </Stack>
          <Button style={styles.submit}>Edit Profile</Button>
        </NativeBaseProvider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EFEFEF',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    position: 'absolute',
    left: 15,
  },
  title: {
    fontSize: 18,
    color: '#F1CD31',
    textAlign: 'center',
  },
  section: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
    alignItems: 'center',
  },
  submit: {
    marginTop: 15,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginBottom: 8,
    fontSize: 12,
  },
});

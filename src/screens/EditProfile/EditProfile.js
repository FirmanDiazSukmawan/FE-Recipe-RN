/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import {
  Icon,
  Input,
  NativeBaseProvider,
  Stack,
  Button,
  useToast,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersIdSelector} from '../../redux/reducer/users/getUserbyIdSlice';
import {updateUsers} from '../../redux/reducer/users/updateUser';

export default function EditProfile() {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
  const {users_id} = route.params;
  const dispatch = useDispatch();
  const user = useSelector(getUsersIdSelector);
  const toast = useToast();
  console.log(user);
  // console.log(users_id);
  const back = () => {
    navigation.navigate('Profile');
  };

  const [data, setData] = useState({
    username: '',
    phone_number: '',
    image: {
      name: selectedImage?.fileName,
      type: selectedImage?.type,
      uri: selectedImage?.uri,
    },
  });

  // console.log(data);

  useEffect(() => {
    setData({
      username: user?.data?.username,
      phone_number: user?.data?.phone_number,
      image: {
        name: selectedImage?.fileName,
        type: selectedImage?.type,
        uri: selectedImage?.uri,
      },
    });
  }, [user, selectedImage]);

  // console.log(selectedImage);

  const handleUsername = text => {
    setData({
      ...data,
      username: text,
    });
  };
  const handlePhoneNumber = text => {
    setData({
      ...data,
      phone_number: text,
    });
  };

  const handleSubmit = () => {
    dispatch(updateUsers({users_id, data, selectedImage}))
      .then(res => {
        toast.show({
          description: 'Edit Profile Succesfuly',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        console.log(res);
      })
      .catch(error => {
        Alert.alert(error.response.data.message);
      });
  };

  const options = {
    mediaType: 'photo',
    maxWidth: 800,
    maxHeight: 800,
    quality: 0.8,
    includeBase64: false,
    saveToPhotos: true,
  };

  const handleOpenCamera = async () => {
    try {
      const result = await launchCamera(options);
      if (!result.didCancel) {
        const uri = result.assets[0];
        setSelectedImage(uri);
        setImageSelected(true);
        console.log('Gambar dari kamera:', uri);
      } else {
        toast.show({
          description: 'you reject opening camera',
          status: 'error',
          duration: 3000,
          isClosable: true,
          type: 'danger',
        });
      }
    } catch (error) {
      toast.show({
        description: 'Error saat membuka kamera:',
        error,
        status: 'error',
        duration: 3000,
        isClosable: true,
        type: 'danger',
      });
    }
  };

  const RequestPermissionsImage = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'APP Camera Permissions',
          message: 'App Need Camera',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
          buttonNeutral: 'Ask Me Later',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('access successfully granted');
        handleOpenCamera();
      } else {
        console.log('access failure');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenImageLibrary = async () => {
    try {
      const result = await launchImageLibrary(options);
      // console.log(result.assets[0].uri);
      if (!result.didCancel) {
        const uri = result.assets[0];
        setSelectedImage(uri);
        setImageSelected(true);
        // console.log('Image dari galeri:', result);
      }
    } catch (error) {
      console.error('Error saat membuka galeri:', error);
    }
  };
  // console.log(selectedImage);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons name="chevron-back" style={styles.icon} onPress={back} />
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={{uri: selectedImage?.uri}}
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
            onPress={RequestPermissionsImage}
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
              value={data.username}
              onChangeText={handleUsername}
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
              value={data.phone_number}
              onChangeText={handlePhoneNumber}
            />
          </Stack>
          <Button
            style={styles.submit}
            onPress={handleSubmit}
            isDisabled={!imageSelected}>
            Edit Profile
          </Button>
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

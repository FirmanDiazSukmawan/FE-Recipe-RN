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
import Video from 'react-native-video';

export default function AddRecipe() {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
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

  const optionsVideo = {
    mediaType: 'video',
    videoQuality: 'high',
    durationLimit: 60,
  };

  const handleOpenCamVideo = async () => {
    try {
      const result = await launchCamera(optionsVideo);
      if (!result.didCancel) {
        const uri = result.assets[0].uri;
        setSelectedVideo(uri);
        console.log('Video dari kamera:', uri);
      } else {
        console.log('menolak open kamera');
      }
    } catch (error) {
      console.error('Error saat membuka kamera:', error);
    }
  };

  const handleOpenVideoLibrary = async () => {
    try {
      const result = await launchImageLibrary(optionsVideo);
      if (!result.didCancel) {
        const uri = result.assets[0].uri;
        setSelectedVideo(uri);
        console.log('Video dari galeri:', result.uri);
      }
    } catch (error) {
      console.error('Error saat membuka galeri:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Add your Recipe</Text>
      </View>
      <View style={styles.section}>
        <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 3}}>
          {' '}
          Add Image
        </Text>
        <Image
          source={{uri: selectedImage}}
          style={{
            width: '75%',
            height: 150,
            borderWidth: 1,
            borderColor: 'brown',
          }}
          resizeMode="stretch"
        />
        <View style={{flexDirection: 'row', marginVertical: 10}}>
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
                <Icon as={<Feather name="book-open" />} size={5} ml="2" />
              }
              placeholder="Tittle"
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
                <Icon as={<Feather name="list" />} size={5} ml="2" />
              }
              placeholder="Ingredients"
            />
          </Stack>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'gray',
                marginBottom: 3,
              }}>
              Add Video
            </Text>
            <Video
              source={{uri: selectedVideo}}
              style={{
                width: '100%',
                height: 150,
                borderWidth: 1,
                borderColor: 'brown',
              }}
              controls={true}
              resizeMode="strech"
              autoPlay={false}
            />
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <TouchableOpacity
                onPress={handleOpenCamVideo}
                style={{marginRight: 10}}>
                <Feather name="video" style={{fontSize: 25, color: 'brown'}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOpenVideoLibrary}>
                <Feather name="folder" style={{fontSize: 25, color: 'gray'}} />
              </TouchableOpacity>
            </View>
          </View>
          <Button style={styles.submit}>Add Recipe</Button>
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
  },
  title: {
    fontSize: 18,
    color: '#F1CD31',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
    alignItems: 'center',
  },
  submit: {
    marginTop: 15,
    backgroundColor: '#F1CD31',
    borderRadius: 10,
    marginBottom: 8,
    fontSize: 12,
  },
});

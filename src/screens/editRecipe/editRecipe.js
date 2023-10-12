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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
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
import Video from 'react-native-video';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createRecipe} from '../../redux/reducer/recipe/createRecipeSlice';
import {
  getRecipeId,
  getRecipeIdSelector,
} from '../../redux/reducer/recipe/getRecipeIdSlice';
import {updateRecipe} from '../../redux/reducer/recipe/editRecipeSlice';

export default function EditRecipe() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
  const [videoSelected, setVideoSelected] = useState(false);
  const toast = useToast();
  const {recipes_id} = route.params;
  const recipe = useSelector(getRecipeIdSelector);
  const recipes = recipe?.data?.[0];
  console.log(recipes);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name_recipes: '',
    image: {
      name: selectedImage?.fileName,
      type: selectedImage?.type,
      uri: selectedImage?.uri,
    },
    ingredients: '',
    video: {
      name: selectedVideo?.fileName,
      type: selectedVideo?.type,
      uri: selectedVideo?.uri,
    },
    name_video: '',
  });
  const name_recipes = text => {
    setData({
      ...data,
      name_recipes: text,
    });
  };

  const ingredients = text => {
    setData({
      ...data,
      ingredients: text,
    });
  };

  const nameVideo = text => {
    setData({
      ...data,
      name_video: text,
    });
  };

  useEffect(() => {
    setData({
      name_recipes: recipes?.name_recipes,
      image: {
        name: selectedImage?.fileName,
        type: selectedImage?.type,
        uri: selectedImage?.uri,
      },
      ingredients: recipes?.ingredients,
      video: {
        name: selectedVideo?.fileName,
        type: selectedVideo?.type,
        uri: selectedVideo?.uri,
      },
      name_video: recipes?.name_video,
    });
  }, [recipes, selectedImage, selectedVideo]);

  useEffect(() => {
    dispatch(getRecipeId(recipes_id));
  }, [dispatch, recipes_id]);

  const handelEditRecipe = async () => {
    try {
      dispatch(updateRecipe({recipes_id, data, selectedImage, selectedVideo}));
      setLoading(true);
      toast.show({
        description: 'Edit Recipe Successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  };

  const back = () => {
    navigation.navigate('Profile');
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
        console.log('menolak open kamera');
      }
    } catch (error) {
      console.error('Error saat membuka kamera:', error);
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

  const RequestPermissionsVideo = async () => {
    try {
      const cameraGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permissions',
          message: 'App Needs Camera Access',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
          buttonNeutral: 'Ask Me Later',
        },
      );

      const audioGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'App Audio Permissions',
          message: 'App Needs Audio Access',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
          buttonNeutral: 'Ask Me Later',
        },
      );

      if (
        cameraGranted === PermissionsAndroid.RESULTS.GRANTED &&
        audioGranted === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Access to camera and audio successfully granted');
        handleOpenCamVideo();
      } else {
        console.log('Access denied for camera and/or audio');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenImageLibrary = async () => {
    try {
      const result = await launchImageLibrary(options);
      if (!result.didCancel) {
        const uri = result.assets[0];
        setSelectedImage(uri);
        setImageSelected(true);
        console.log('Image dari galeri:', uri);
      }
    } catch (error) {
      console.error('Error saat membuka galeri:', error);
    }
  };

  const optionsVideo = {
    mediaType: 'video',
    includeBase64: false,
    saveToPhotos: true,
  };

  const handleOpenCamVideo = async () => {
    try {
      const result = await launchCamera(optionsVideo);
      console.log(result);
      if (!result.didCancel) {
        const uri = result.assets[0];
        console.log(uri);
        setSelectedVideo(uri);
        setVideoSelected(true);
        console.log('Video dari kamera:', uri);
      } else {
        console.log('user menolak open kamera');
      }
    } catch (error) {
      console.error('Error saat membuka kamera:', error);
    }
  };

  const handleOpenVideoLibrary = async () => {
    try {
      const result = await launchImageLibrary(optionsVideo);
      if (!result.didCancel) {
        const uri = result.assets[0];
        setSelectedVideo(uri);
        setVideoSelected(true);
        console.log('Video dari galeri:', uri);
      }
    } catch (error) {
      console.error('Error saat membuka galeri:', error);
    }
  };
  console.log(data);

  useEffect(() => {
    if (isFocused) {
      resetPage(); // Fungsi resetPage akan dijelaskan di bawah
    }
  }, [isFocused]);

  // Fungsi resetPage untuk mengatur ulang data dan mengganti tampilan halaman
  const resetPage = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
    setData({
      name_recipes: '',
      image: {
        name: null,
        type: null,
        uri: null,
      },
      ingredients: '',
      video: {
        name: null,
        type: null,
        uri: null,
      },
      name_video: '',
    });
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      {loading && (
        <Text style={{fontSize: 18, color: 'green', textAlign: 'center'}}>
          Loading...
        </Text>
      )}
      <View style={styles.top}>
        <Ionicons name="chevron-back" style={styles.icon} onPress={back} />
        <Text style={styles.title}>Edit Recipe</Text>
      </View>
      <View style={styles.section}>
        <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 3}}>
          {' '}
          Add Image
        </Text>
        <Image
          source={{uri: selectedImage?.uri}}
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
              h="45"
              borderRadius="10"
              bgColor="#F5F5F5"
              InputLeftElement={
                <Icon as={<Feather name="book-open" />} size={5} ml="2" />
              }
              placeholder="Tittle"
              value={data.name_recipes}
              onChangeText={name_recipes}
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="45"
              borderRadius="10"
              bgColor="#F5F5F5"
              InputLeftElement={
                <Icon as={<Feather name="list" />} size={5} ml="2" />
              }
              placeholder="Ingredients"
              value={data.ingredients}
              onChangeText={ingredients}
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="45"
              borderRadius="10"
              bgColor="#F5F5F5"
              InputLeftElement={
                <Icon as={<Feather name="list" />} size={5} ml="2" />
              }
              placeholder="nameVideo"
              value={data.name_video}
              onChangeText={nameVideo}
            />
          </Stack>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Video
              source={{uri: selectedVideo?.uri}}
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
                onPress={RequestPermissionsVideo}
                style={{marginRight: 10}}>
                <Feather name="video" style={{fontSize: 25, color: 'brown'}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOpenVideoLibrary}>
                <Feather name="folder" style={{fontSize: 25, color: 'gray'}} />
              </TouchableOpacity>
            </View>
          </View>
          <Button
            style={styles.submit}
            onPress={handelEditRecipe}
            isDisabled={!imageSelected || !videoSelected}>
            Add Recipe
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
  icon: {
    fontSize: 20,
    marginRight: 10,
    position: 'absolute',
    left: 15,
  },
});

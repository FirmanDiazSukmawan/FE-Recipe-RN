/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  Pressable,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getRecipeId,
  getRecipeIdSelector,
} from '../../redux/reducer/recipe/getRecipeIdSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLiked} from '../../redux/reducer/liked/createLikedSlice';
import {createSaved} from '../../redux/reducer/saved/createSavedSlice';
import {createComment} from '../../redux/reducer/comment/createCommentSlice';
import {
  getCommentRecipeId,
  getCommentRecipeIdSelector,
} from '../../redux/reducer/comment/getCommentRecipeIdSlice';
import {NativeBaseProvider, TextArea, useToast} from 'native-base';

export default function DetailRecipe() {
  const route = useRoute();
  const {recipes_id} = route.params;
  const dispatch = useDispatch();
  const recipe = useSelector(getRecipeIdSelector);
  const comment = useSelector(getCommentRecipeIdSelector);
  console.log(comment);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const toast = useToast();

  const handleLike = async () => {
    try {
      const users_id = await AsyncStorage.getItem('users_id');
      dispatch(createLiked({users_id, recipes_id}));
      toast.show({
        description: 'You like the recipe',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaved = async () => {
    try {
      const users_id = await AsyncStorage.getItem('users_id');
      dispatch(createSaved({users_id, recipes_id}));
      toast.show({
        description: 'You saved the recipe',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleComment = async () => {
    try {
      navigation.navigate('Comment', {recipes_id});
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(getRecipeId(recipes_id));
    setLoading(false);
  }, [dispatch, recipes_id]);

  useEffect(() => {
    dispatch(getCommentRecipeId(recipes_id));
    setLoading(false);
  }, [dispatch, recipes_id]);

  const onRefresh = async () => {
    setRefresh(true);
    try {
      await dispatch(getRecipeId(recipes_id));
      await dispatch(getCommentRecipeId(recipes_id));
      setRefresh(false);
    } catch (error) {
      console.error('Error Get recipe:', error);
    }
  };

  const FirstRoute = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        {recipe?.data?.map((item, index) => {
          const slicedIngredients = item.ingredients.slice('-');
          return (
            <View
              style={{
                width: 319,
              }}
              key={index}>
              <Text style={{textAlign: 'left', width: '100%'}}>
                - {slicedIngredients}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );

  const navigation = useNavigation();
  const detailVideo = () => {
    navigation.navigate('DetailVideo', {recipes_id});
  };
  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <View
          style={{
            width: 319,
            height: 80,
            backgroundColor: '#FAF7ED',
            borderTopRightRadius: 159.5,
            borderBottomRightRadius: 159.5,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {recipe?.data?.map((item, index) => (
            <View style={{flexDirection: 'row'}} key={index}>
              <Pressable
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  backgroundColor: '#EEC302',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => detailVideo(item.recipes_id)}>
                <Feather name="play" style={{fontSize: 18, color: '#F8F8F8'}} />
              </Pressable>
              <View style={{marginLeft: 30, justifyContent: 'center'}}>
                <Text style={{color: '#B6B6B6', fontSize: 16, fontWeight: 400}}>
                  Step 1
                </Text>
                <Text style={{color: '#666', fontSize: 12, fontWeight: 500}}>
                  {item.name_video}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View
          style={{
            width: 319,
            height: 80,
            backgroundColor: '#FAF7ED',
            borderTopRightRadius: 159.5,
            borderBottomRightRadius: 159.5,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: '#EEC302',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="play" style={{fontSize: 18, color: '#F8F8F8'}} />
            </View>
            <View style={{paddingLeft: 30, justifyContent: 'center'}}>
              <Text style={{color: '#B6B6B6', fontSize: 16, fontWeight: 400}}>
                Step 2
              </Text>
              <Text style={{color: '#666', fontSize: 12, fontWeight: 500}}>
                Prepare the bread, then spread ...
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 319,
            height: 80,
            backgroundColor: '#FAF7ED',
            borderTopRightRadius: 159.5,
            borderBottomRightRadius: 159.5,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: '#EEC302',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="play" style={{fontSize: 18, color: '#F8F8F8'}} />
            </View>
            <View style={{paddingLeft: 30, justifyContent: 'center'}}>
              <Text style={{color: '#B6B6B6', fontSize: 16, fontWeight: 400}}>
                Step 3
              </Text>
              <Text style={{color: '#666', fontSize: 12, fontWeight: 500}}>
                Roast beef at medium temperature
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 319,
            height: 80,
            marginTop: 20,
            backgroundColor: '#FAF7ED',
            borderTopRightRadius: 159.5,
            borderBottomRightRadius: 159.5,
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: '#EEC302',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="play" style={{fontSize: 18, color: '#F8F8F8'}} />
            </View>
            <View style={{paddingLeft: 30, justifyContent: 'center'}}>
              <Text style={{color: '#B6B6B6', fontSize: 16, fontWeight: 400}}>
                Step 4
              </Text>
              <Text style={{color: '#666', fontSize: 12, fontWeight: 500}}>
                spicy, salted
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            paddingTop: 15,
            width: '100%',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#EFC81A',
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
              width: 319,
              height: 50,
              justifyContent: 'center',
            }}
            onPress={() => handleComment(recipes_id)}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Post Comment
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 15}}>
          <Text style={{color: '#666', fontSize: 12}}> Comment :</Text>
        </View>
        <View>
          {loading ? (
            <Text>Loading....</Text>
          ) : (
            comment?.data?.map((item, index) => (
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                  paddingLeft: 10,
                }}
                key={index}>
                <View
                  style={{
                    paddingVertical: 10,
                    flexDirection: 'row',
                    backgroundColor: '#e1eded',
                    borderRadius: 13,
                    width: 320,
                    paddingLeft: 10,
                  }}>
                  <Image
                    source={{
                      uri: item.imageprofile,
                    }}
                    style={{width: 32, height: 32, borderRadius: 32}}
                  />
                  <View
                    style={{
                      paddingLeft: 10,
                      width: 280,
                      borderRadius: 10,
                    }}>
                    <Text style={{color: '#151a1a'}}>{item.creator}</Text>
                    <Text style={{color: '#596e6e'}}>{item.commen}</Text>
                  </View>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const layout = useWindowDimensions();
  // console.log(layout);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Ingredients'},
    {key: 'second', title: 'Video Step'},
  ]);

  const back = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        recipe?.data?.map((item, i) => (
          <View style={styles.top} key={i}>
            <View style={styles.bgcolor} />
            <Image
              source={{uri: item.image}}
              style={{
                width: '100%',
                height: 462,
                position: 'relative',
                objectFit: 'fill',
              }}
              resizeMode="contain"
            />
            <Ionicons
              onPress={back}
              name="arrow-back"
              style={{
                fontSize: 24,
                color: '#F5F5F5',
                position: 'absolute',
                left: 10,
                top: 10,
                zIndex: 2,
              }}
            />
            <View style={styles.textInside}>
              <View styles={styles.textLeft}>
                <Text style={styles.textDesc}>{item.name_recipes}</Text>
                <Text style={styles.textBy}>By Chef {item.creator}</Text>
              </View>
              <View style={styles.iconRight}>
                <TouchableOpacity style={styles.icon1} onPress={handleSaved}>
                  <Ionicons
                    style={{fontSize: 26, color: '#E9E9E8'}}
                    name="bookmark-outline"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon2} onPress={handleLike}>
                  <AntDesign
                    style={{fontSize: 26, color: '#EFC81A'}}
                    name="like2"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      )}
      <View
        style={{
          width: '100%',
          height: '47%',
          backgroundColor: '#FFF',
          marginTop: -60,
          borderRadius: 15,
          zIndex: 2,
        }}>
        <TabView
          animationEnabled={false}
          // keyboardDismissMode="none"
          swipeEnabled={false}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          style={{flex: 1}}
          renderTabBar={props => {
            return (
              <TabBar
                {...props}
                style={{backgroundColor: 'transparent'}}
                labelStyle={{color: '#666', fontSize: 16}}
                indicatorStyle={{backgroundColor: '#EEC302'}}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    width: '100%',
    height: 462,
    position: 'relative',
    borderRadius: 10,
  },
  textInside: {
    position: 'absolute',
    bottom: 70,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    alignItems: 'center',
    zIndex: 2,
  },
  textDesc: {
    width: 149,
    color: '#FBFBFB',
    fontSize: 32,
    fontWeight: '700',
  },
  textBy: {
    color: '#07858a',
    fontSize: 12,
    fontWeight: '400',
    paddingLeft: 2,
  },
  textLeft: {
    width: 149,
  },
  iconRight: {
    flexDirection: 'row',
  },
  icon1: {
    width: 36,
    height: 36,
    marginRight: 10,
    backgroundColor: '#EFC81A',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    width: 36,
    height: 36,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginTop: 15,
    backgroundColor: '#FAF7ED',
    width: 319,
    height: 150,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
    width: 319,
  },
  bgcolor: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(80, 84, 83, 0.3)',
  },
});

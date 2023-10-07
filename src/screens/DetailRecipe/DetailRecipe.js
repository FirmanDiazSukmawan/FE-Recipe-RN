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
  Alert,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import React, {useEffect, useState} from 'react';
import img3 from '../../assets/image3.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {dataDetail} from './dummy';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getRecipeId,
  getRecipeIdSelector,
} from '../../redux/reducer/recipe/getRecipeIdSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getUsersId,
  getUsersIdSelector,
} from '../../redux/reducer/users/getUserbyIdSlice';
import {getLikedUsersIdSelector} from '../../redux/reducer/liked/getLikedUsersIdSlice';
import {
  createLiked,
  createLikedSelector,
} from '../../redux/reducer/liked/createLikedSlice';

export default function DetailRecipe() {
  const route = useRoute();
  const {recipes_id} = route.params;
  const dispatch = useDispatch();
  const recipe = useSelector(getRecipeIdSelector);
  const [loading, setLoading] = useState(false);
  const users = useSelector(createLikedSelector);

  // console.log(users);

  const handleLike = async () => {
    try {
      const users_id = await AsyncStorage.getItem('users_id');
      dispatch(createLiked({users_id, recipes_id}));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(getRecipeId(recipes_id));
    setLoading(false);
  }, [dispatch, recipes_id]);

  const FirstRoute = () => (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <ScrollView>
        {recipe?.data?.map((item, index) => {
          const slicedIngredients = item.ingredients.slice('-');
          return (
            <View style={{width: 319}} key={index}>
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
    navigation.navigate('DetailVideo');
  };
  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: 319, marginBottom: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: '#EEC302',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={detailVideo}>
              <Feather name="play" style={{fontSize: 18, color: '#F8F8F8'}} />
            </Pressable>
            <View style={{marginLeft: 30, justifyContent: 'center'}}>
              <Text style={{color: '#666', fontSize: 16}}>Step 1</Text>
              <Text style={{color: '#B6B6B6', fontSize: 12}}>
                Boil eggs for 3 minutes
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: 319, marginBottom: 10}}>
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
            <View style={{marginLeft: 30, justifyContent: 'center'}}>
              <Text style={{color: '#666', fontSize: 16}}>Step 2</Text>
              <Text style={{color: '#B6B6B6', fontSize: 12}}>
                Boil eggs for 3 minutes
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: 319, marginBottom: 10}}>
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
            <View style={{marginLeft: 30, justifyContent: 'center'}}>
              <Text style={{color: '#666', fontSize: 16}}>Step 3</Text>
              <Text style={{color: '#B6B6B6', fontSize: 12}}>
                Boil eggs for 3 minutes
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: 319, marginBottom: 10}}>
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
            <View style={{marginLeft: 30, justifyContent: 'center'}}>
              <Text style={{color: '#666', fontSize: 16}}>Step 3</Text>
              <Text style={{color: '#B6B6B6', fontSize: 12}}>
                Boil eggs for 3 minutes
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: 319, marginBottom: 10}}>
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
            <View style={{marginLeft: 30, justifyContent: 'center'}}>
              <Text style={{color: '#666', fontSize: 16}}>Step 4</Text>
              <Text style={{color: '#B6B6B6', fontSize: 12}}>
                Boil eggs for 3 minutes
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: 319}}>
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
            <View style={{marginLeft: 30, justifyContent: 'center'}}>
              <Text style={{color: '#666', fontSize: 16}}>Step 5</Text>
              <Text style={{color: '#B6B6B6', fontSize: 12}}>
                Boil eggs for 3 minutes
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const layout = useWindowDimensions();

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
            <Image
              source={{uri: item.image}}
              style={{
                width: '100%',
                height: 462,
                position: 'relative',
                objectFit: 'cover',
              }}
              resizeMode="cover"
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
              }}
            />
            <View style={styles.textInside}>
              <View styles={styles.textLeft}>
                <Text style={styles.textDesc}>{item.name_recipes}</Text>
                <Text style={styles.textBy}>{item.creator}</Text>
              </View>
              <View style={styles.iconRight}>
                <View style={styles.icon1}>
                  <Ionicons
                    style={{fontSize: 36, color: '#E9E9E8'}}
                    name="bookmark-outline"
                  />
                </View>
                <TouchableOpacity style={styles.icon2} onPress={handleLike}>
                  <AntDesign
                    style={{fontSize: 36, color: '#EFC81A'}}
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
          height: '40%',
          backgroundColor: '#FFF',
          marginTop: -30,
          borderRadius: 15,
        }}>
        <TabView
          animationEnabled={false}
          swipeEnabled={false}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={props => {
            return (
              <TabBar
                {...props}
                style={{backgroundColor: 'transparent'}}
                labelStyle={{color: '#666', fontSize: 16}}
                indicatorStyle={{backgroundColor: 'blue'}}
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
    bottom: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    alignItems: 'center',
  },
  textDesc: {
    width: 149,
    color: 'white',
    fontSize: 32,
  },
  textBy: {
    color: 'brown',
    fontSize: 12,
  },
  textLeft: {
    width: 149,
  },
  iconRight: {
    flexDirection: 'row',
  },
  icon1: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: '#EFC81A',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewBase,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon, Input, NativeBaseProvider, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getRecipe,
  getRecipeSelector,
} from '../../redux/reducer/recipe/getRecipeSlice';
import {
  getRecipeLimit,
  getRecipeLimitSelector,
} from '../../redux/reducer/recipe/getRecipeLimitSlice';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getRecipes = useSelector(getRecipeSelector);
  const getRecipesLimit = useSelector(getRecipeLimitSelector);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log(getRecipeSelector)

  useEffect(() => {
    dispatch(getRecipe());
    setRefresh(false);
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRecipeLimit());
    setRefresh(false);
    setLoading(false);
  }, [dispatch]);

  const onRefresh = async () => {
    setRefresh(true);
    try {
      await dispatch(getRecipe());
      await dispatch(getRecipeLimit());
      setRefresh(false);
    } catch (error) {
      console.error('Error Get recipe:', error);
    }
  };

  console.log(getRecipesLimit.data);
  const detailRecipe = recipes_id => {
    navigation.navigate('DetailRecipe', {recipes_id});
  };
  const detailPopular = () => {
    navigation.navigate('DetailPopular');
  };
  return (
    <NativeBaseProvider>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <View style={styles.section}>
          <SafeAreaView style={styles.isi}>
            <VStack
              w="100%"
              space={5}
              alignItems="center"
              marginBottom={3}
              style={{paddingHorizontal: 30, paddingVertical: 10}}>
              <Input
                placeholder="Search Pasta, Bread, etc"
                variant="filled"
                width="100%"
                height="50"
                borderRadius="15"
                py="1"
                px="2"
                backgroundColor="#EFEFEF"
                InputLeftElement={
                  <Icon
                    ml="2"
                    size="4"
                    color="gray.400"
                    as={<Ionicons name="search" />}
                  />
                }
              />
            </VStack>

            <View styles={styles.content}>
              <Text style={styles.new}> New Recipes</Text>
              <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {loading ? (
                    <Text>Loading...</Text>
                  ) : (
                    getRecipes.data?.map((item, index) => (
                      <View style={styles.gambar} key={index}>
                        <Pressable
                          style={styles.gambar1}
                          onPress={() => detailRecipe(item.recipes_id)}>
                          <View
                            style={{
                              backgroundColor: 'rgba(80, 84, 83, 0.3)',
                              zIndex: 1,
                              width: '100%',
                              height: 160,
                              position: 'absolute',
                              borderRadius: 10,
                            }}
                          />
                          <Image
                            source={{uri: item.image}}
                            style={{
                              width: 130,
                              height: 160,
                              position: 'relative',
                              borderRadius: 15,
                            }}
                            resizeMode="stretch"
                          />

                          <Text style={styles.name}>{item.name_recipes}</Text>
                        </Pressable>
                      </View>
                    ))
                  )}
                </ScrollView>
              </View>
              <View style={styles.pop}>
                <Text style={styles.popular}> Popular Recipes</Text>
                <TouchableOpacity onPress={detailPopular}>
                  <Text style={styles.seeMore}>
                    See More
                    <Entypo name="chevron-right" />
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {loading ? (
                    <Text>Loading...</Text>
                  ) : (
                    getRecipesLimit?.data?.map((item, index) => (
                      <View style={styles.gambar2} key={index}>
                        <Pressable
                          style={styles.gambar2}
                          onPress={() => detailRecipe(item.recipes_id)}>
                          <Image
                            source={{
                              uri: item.image,
                            }}
                            style={{
                              width: 64,
                              height: 64,
                              borderRadius: 16,
                            }}
                          />

                          <View style={styles.text2}>
                            <Text
                              style={{
                                color: '#18172B',
                                fontSize: 16,
                                fontWeight: 'bold',
                              }}>
                              {item.name_recipes}
                            </Text>
                            {/* <View style={{flexDirection: 'row'}}> */}
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <View style={{paddingRight: 5}}>
                                <FontAwesomeIcon
                                  name="star"
                                  style={styles.icon}
                                />
                              </View>
                              <Text
                                style={{
                                  fontWeight: '500',
                                  color: '#18172B',
                                  fontSize: 12,
                                }}>
                                4.6
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: '#6E80B0',
                                fontSize: 12,
                                fontWeight: 400,
                              }}>
                              {item.creator}
                            </Text>
                            {/* </View> */}
                          </View>
                          <View style={{textAlign: 'right'}}>
                            <Text
                              style={{
                                textAlign: 'center',
                                color: '#07858a',
                                fontSize: 12,
                                fontWeight: 400,
                              }}>
                              {item.created_at}
                            </Text>
                          </View>
                        </Pressable>
                      </View>
                    ))
                  )}
                </ScrollView>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  gambar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  gambar1: {
    marginRight: 10,
    alignContent: 'center',
  },

  isi: {
    width: '100%',
  },
  new: {
    color: '#3F3A3A',
    fontSize: 18,
    fontFamily: 'Airbnb Cereal App',
    textAlign: 'left',
    marginBottom: 18,
    paddingLeft: 30,
    fontWeight: 'bold',
    backgroundColor: '#FFB200',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    width: 200,
    height: 26,
  },
  pop: {
    fontSize: 18,
    fontFamily: 'Airbnb Cereal App',
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popular: {
    color: '#18172B',
    fontSize: 18,
    fontFamily: 'Airbnb Cereal App',
    textAlign: 'left',
    backgroundColor: '#FFB200',
    fontWeight: 'bold',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    paddingLeft: 30,
    width: 200,
    height: 26,
  },
  seeMore: {
    fontSize: 13,
    fontFamily: 'Airbnb Cereal App',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  name: {
    width: 70,
    fontSize: 14,
    color: '#FBFBFB',
    position: 'absolute',
    bottom: 20,
    left: 12,
    fontWeight: '700',
    shadowColor: 'black',
    fontFamily: 'Airbnb Cereal App',
    zIndex: 2,
  },

  gambar2: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    height: 80,
    justifyContent: 'space-around',
    paddingLeft: 7,
    alignItems: 'center',
  },
  text2: {
    width: '50%',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 12,
    color: '#FFB200',
  },
});

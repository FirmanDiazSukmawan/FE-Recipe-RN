/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewBase,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon, Input, NativeBaseProvider, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
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
          <View style={styles.isi}>
            <VStack
              w="100%"
              space={5}
              alignItems="center"
              marginBottom={8}
              style={{paddingHorizontal: 30}}>
              <Input
                placeholder="Search Pasta, Bread, etc"
                variant="filled"
                width="100%"
                height="50"
                borderRadius="15"
                py="1"
                px="2"
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
              <Text style={styles.new}> New Recipe</Text>
              <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {loading ? (
                    <Text>Loading...</Text>
                  ) : (
                    getRecipes.data?.map((item, index) => (
                      <View style={styles.gambar} key={index}>
                        <Pressable
                          style={styles.gambar1}
                          onPress={detailPopular}>
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
              <Text style={styles.pop}> Popular Recipe</Text>
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
                                marginLeft: -23,
                              }}>
                              {item.name_recipes}
                            </Text>
                            <Text
                              style={{
                                marginLeft: -23,
                              }}>
                              {item.creator}
                            </Text>
                            <Text
                              style={{
                                marginLeft: -23,
                              }}>
                              <FontAwesomeIcon
                                name="star"
                                style={styles.icon}
                              />
                              4.6 .
                            </Text>
                          </View>
                          <View style={{textAlign: 'right'}}>
                            <Text style={{textAlign: 'center'}}>
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
          </View>
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
    paddingTop: 25,
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
  },
  pop: {
    color: '#18172B',
    fontSize: 18,
    fontFamily: 'Airbnb Cereal App',
    textAlign: 'left',
    marginTop: 25,
    marginBottom: 40,
    paddingLeft: 30,
  },
  name: {
    width: 70,
    fontSize: 14,
    color: '#FBFBFB',
    position: 'absolute',
    bottom: 13,
    left: 10,
    fontWeight: 'bold',
    shadowColor: 'black',
    fontFamily: 'Airbnb Cereal App',
  },

  gambar2: {
    flexDirection: 'row',
    marginBottom: 12,
    width: '100%',
    justifyContent: 'space-around',
    paddingLeft: 7,
  },
  text2: {
    width: 122,
  },
  icon: {
    fontSize: 12,
    color: '#FFB200',
  },
});

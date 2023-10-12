/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon, Input, NativeBaseProvider, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {API_RECIPE} from '@env';
import {useNavigation} from '@react-navigation/native';

function EmptyListComponent() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18}}>Not Found Data</Text>
    </View>
  );
}

export default function Search() {
  const numcolumns = 3;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  useEffect(
    () => async () => {
      try {
        const result = await axios.get(`${API_RECIPE}/recipe?search=${search}`);
        setRecipes(result.data.data);
        setRefreshing(false);
      } catch (err) {
        console.log(err);
      }
    },
    [search],
  );
  console.log(recipes);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const result = await axios.get(`${API_RECIPE}/recipe?search=${search}`);
      setRecipes(result.data.data);
      setRefreshing(false);
    } catch (err) {
      console.log(err);
    }
  };

  const DetailRecipe = recipes_id => {
    navigation.navigate('DetailRecipe', {recipes_id});
  };

  // console.log(recipes);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <VStack
          w="100%"
          space={5}
          alignItems="center"
          style={{paddingHorizontal: 30, paddingVertical: 10}}>
          <Input
            placeholder="Search Pasta, Bread, etc"
            variant="filled"
            backgroundColor="#EFEFEF"
            width="100%"
            height="50"
            borderRadius="15"
            py="1"
            px="2"
            onChangeText={setSearch}
            value={search}
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
        {/* <ScrollView> */}
        <View style={{height: '100%'}}>
          <FlatList
            // nestedScrollEnabled
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={recipes}
            numColumns={numcolumns}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  key={index}
                  onPress={() => DetailRecipe(item.recipes_id)}>
                  <View style={styles.bgcolor} />
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 10,
                      objectFit: 'fill',
                    }}
                  />
                  <View style={styles.itemText}>
                    <Text style={styles.name}>{item.name_recipes}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            ListEmptyComponent={EmptyListComponent}
          />
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 2,
    height: 130,
    width: 90,
    position: 'relative',
  },
  itemText: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    fontSize: 12,
    width: '65%',
    zIndex: 2,
  },
  bgcolor: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(80, 84, 83, 0.3)',
    borderRadius: 10,
  },
  name: {
    color: '#FBFBFB',
    fontWeight: '700',
    fontSize: 14,
  },
  creator: {
    color: '#39f7f4',
    fontSize: 10,
    fontWeight: '600',
  },
});

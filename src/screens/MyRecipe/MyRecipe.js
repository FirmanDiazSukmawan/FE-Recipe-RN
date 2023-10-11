/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getRecipeByUsersId,
  getRecipeByUsersIdSelector,
} from '../../redux/reducer/recipe/getRecipeUsersIdSlice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EditProfile from '../EditProfile/EditProfile';
import {deleteRecipe} from '../../redux/reducer/recipe/deleteRecipeSlice';

export default function MyRecipe() {
  const navigation = useNavigation();
  const route = useRoute();
  const {users_id} = route.params;
  const dispatch = useDispatch();
  const recipeUsers = useSelector(getRecipeByUsersIdSelector);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getRecipeByUsersId(users_id));
    setLoading(false);
    onRefresh();
  }, [dispatch, users_id]);

  const onRefresh = () => {
    setRefresh(true);
    if (dispatch(getRecipeByUsersId(users_id))) {
      setRefresh(false);
    }
  };
  const detailRecipe = recipes_id => {
    navigation.navigate('DetailRecipe', {recipes_id});
  };

  const EditRecipe = recipes_id => {
    navigation.navigate('EditRecipe', {recipes_id});
  };

  const handleDelete = recipes_id => {
    try {
      dispatch(deleteRecipe(recipes_id));
      Alert.alert('deleted successfully');
      onRefresh();
    } catch {
      Alert.alert('failed');
    }
  };

  const back = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons name="chevron-back" style={styles.icon} onPress={back} />
        <Text style={styles.title}>MyRecipe</Text>
      </View>
      <View style={styles.section}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }>
          {loading ? (
            <Text>loading...</Text>
          ) : (
            recipeUsers?.data?.map((item, index) => (
              <View style={styles.gambar2} key={index}>
                <Pressable
                  style={styles.gambar2}
                  key={item.recipes_id}
                  onPress={() => detailRecipe(item.recipes_id)}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{width: 80, height: 80, borderRadius: 16}}
                  />
                </Pressable>
                <View style={styles.text}>
                  <Text style={styles.text1}>{item.name_recipes}</Text>
                  <Text style={styles.text2}>{item.creator}</Text>
                  <Text style={styles.text2}>{item.created_at}</Text>
                </View>
                <View style={{flexDirection: 'row', textAlign: 'right'}}>
                  <TouchableOpacity
                    onPress={() => EditRecipe(item.recipes_id)}
                    style={{paddingRight: 5}}>
                    <FontAwesome style={styles.icon1} name="edit" />
                  </TouchableOpacity>
                  <Text>
                    <AntDesign
                      style={styles.icon2}
                      name="delete"
                      onPress={() => handleDelete(item.recipes_id)}
                    />
                  </Text>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  gambar2: {
    flexDirection: 'row',
    marginBottom: '2%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 96,
    paddingHorizontal: 20,
  },
  text: {
    width: '50%',
    paddingHorizontal: 10,
  },
  text1: {
    color: '#18172B',
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  text2: {
    color: '#6E80B0',
    fontSize: 12,
  },
  text3: {
    color: '#18172B',
    fontSize: 14,
  },
  icon1: {
    fontSize: 24,
    color: '#EFC81A',
  },
  icon2: {
    fontSize: 24,
    color: 'red',
  },
});

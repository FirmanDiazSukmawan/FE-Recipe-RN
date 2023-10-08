/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLoadingSelector,
  getRecipe,
  getRecipeSelector,
} from '../../redux/reducer/recipe/getRecipeSlice';
import {createLiked} from '../../redux/reducer/liked/createLikedSlice';
import {createSaved} from '../../redux/reducer/saved/createSavedSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailPopularMenu() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refresh, setRefresh] = React.useState(false);
  const recipe = useSelector(getRecipeSelector);
  const loading = useSelector(getLoadingSelector);
  console.log(recipe);

  useEffect(() => {
    try {
      dispatch(getRecipe());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const onRefresh = async () => {
    setRefresh(true);
    try {
      await dispatch(getRecipe());
      setRefresh(false);
    } catch (error) {
      console.error('Error Get recipe:', error);
    }
  };

  const handleLike = async recipes_id => {
    try {
      const users_id = await AsyncStorage.getItem('users_id');
      dispatch(createLiked({users_id, recipes_id}));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaved = async recipes_id => {
    try {
      const users_id = await AsyncStorage.getItem('users_id');
      dispatch(createSaved({users_id, recipes_id}));
    } catch (err) {
      console.log(err);
    }
  };

  const detailRecipe = recipes_id => {
    navigation.navigate('DetailRecipe', {recipes_id});
  };

  const back = () => {
    navigation.navigate('HomePage');
  };
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <View style={styles.top}>
          <Ionicons name="chevron-back" style={styles.icon} onPress={back} />
          <Text style={styles.title}>DetailPopularMenu</Text>
        </View>
        <View style={styles.section}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {loading ? (
              <Text> Loading....</Text>
            ) : (
              recipe?.data?.map((item, index) => (
                <View style={styles.gambar2} key={index}>
                  <TouchableOpacity
                    onPress={() => detailRecipe(item.recipes_id)}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={{width: 80, height: 80, borderRadius: 16}}
                    />
                  </TouchableOpacity>
                  <View style={styles.text}>
                    <Text style={styles.text1}>{item.name_recipes}</Text>
                    <Text style={styles.text2}>{item.creator}</Text>
                    <Text style={styles.text3}>{item.created_at}</Text>
                  </View>
                  <View style={styles.iconRight}>
                    <TouchableOpacity
                      style={styles.icon1}
                      onPress={() => handleSaved(item.recipes_id)}>
                      <Ionicons
                        style={{fontSize: 24, color: '#E9E9E8'}}
                        name="bookmark-outline"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.icon2}
                      onPress={() => handleLike(item.recipes_id)}>
                      <AntDesign
                        style={{color: '#EFC81A', fontSize: 24}}
                        name="like2"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      </ScrollView>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 96,
  },
  icon1: {
    width: 35,
    height: 35,
    backgroundColor: '#EFC81A',
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEC302',
    marginLeft: 5,
  },
  text: {
    width: 100,
    marginLeft: -50,
  },
  text1: {
    color: '#18172B',
    fontSize: 16,
    marginBottom: 2,
  },
  text2: {
    color: '#6E80B0',
    fontSize: 12,
  },
  text3: {
    color: '#18172B',
    fontSize: 14,
  },
  iconRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -25,
  },
});

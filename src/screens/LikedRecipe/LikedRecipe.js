/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
  RefreshControl,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLikedUsersId,
  getLikedUsersIdSelector,
  loadingLikedUsersIdSelector,
} from '../../redux/reducer/liked/getLikedUsersIdSlice';
import {deleteLiked} from '../../redux/reducer/liked/deleteLikedSlice';

export default function LikedRecipe() {
  const navigation = useNavigation();
  const route = useRoute();
  const {users_id} = route.params;
  const dispatch = useDispatch();
  const liked = useSelector(getLikedUsersIdSelector);
  const liked_id = liked?.data?.[0]?.liked_id;
  const loading = useSelector(loadingLikedUsersIdSelector);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getLikedUsersId(users_id));
    setRefresh(false);
  }, [dispatch, users_id]);

  const handleDelete = () => {
    try {
      dispatch(deleteLiked(liked_id));
      Alert.alert('deleted successfully');
      onRefresh();
    } catch {
      Alert.alert('failed');
    }
  };
  const onRefresh = async () => {
    setRefresh(true);
    try {
      await dispatch(getLikedUsersId(users_id));
      setRefresh(false);
    } catch (error) {
      console.error('Error Get recipe:', error);
    }
  };

  const detailRecipe = recipes_id => {
    navigation.navigate('DetailRecipe', {recipes_id});
  };

  // console.log(users_id);
  // console.log(liked_id);

  const back = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons name="chevron-back" style={styles.icon} onPress={back} />
        <Text style={styles.title}>Liked Recipe</Text>
      </View>
      <View style={styles.section}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            liked?.data?.map((item, index) => (
              <View style={styles.gambar2} key={index}>
                <Pressable onPress={() => detailRecipe(item.recipes_id)}>
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
                  <Text style={styles.text3}>{item.created_at}</Text>
                </View>
                <View style={{textAlign: 'right'}}>
                  <TouchableOpacity onPress={handleDelete} style={styles.icon2}>
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
    paddingTop: 20,
  },
  gambar2: {
    flexDirection: 'row',
    marginBottom: '2%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 96,
  },
  text: {
    width: '50%',
    marginLeft: -35,
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
  icon2: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEC302',
  },
});

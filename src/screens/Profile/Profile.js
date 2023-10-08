/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import img4 from '../../assets/image4.png';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUsersId,
  getUsersIdSelector,
} from '../../redux/reducer/users/getUserbyIdSlice';

export default function Profile() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const user = useSelector(getUsersIdSelector);
  const users = user?.data;
  useEffect(() => {
    AsyncStorage.getItem('users_id')
      .then(users_id => {
        // console.log(users_id);
        dispatch(getUsersId(users_id));
      })
      .catch(err => {
        console.log(err);
      });
  }, [dispatch]);
  // console.log(users);

  const MyRecipe = users_id => {
    navigation.navigate('MyRecipe', {users_id});
  };
  const SavedRecipe = users_id => {
    navigation.navigate('SavedRecipe', {users_id});
  };
  const LikedRecipe = users_id => {
    navigation.navigate('LikedRecipe', {users_id});
  };
  const EditProfile = users_id => {
    navigation.navigate('EditProfile', {users_id});
  };

  const logout = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('logout successfully');
      navigation.navigate('Login');
    } catch (err) {
      Alert.alert('gagal logout');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topProfile}>
          <Image
            source={{uri: users?.image}}
            style={{width: 84, height: 84, borderRadius: 42}}
          />
          <Text style={{fontSize: 16, color: '#fff', textAlign: 'center'}}>
            {users?.username}
          </Text>
        </View>
      </View>
      <View style={styles.botProfile}>
        <View
          style={{
            marginTop: 15,
          }}>
          <Pressable
            style={styles.objectBotProfile}
            onPress={() => EditProfile(users?.users_id)}>
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'center',
              }}>
              <Feather name="user" style={styles.icon1} />
              <Text style={styles.textObject}>Edit Profile</Text>
            </View>
            <Text>
              <Feather name="chevron-right" style={styles.icon2} />
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Pressable
            style={styles.objectBotProfile}
            onPress={() => MyRecipe(users?.users_id)}>
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'center',
              }}>
              <Feather name="award" style={styles.icon1} />
              <Text style={styles.textObject}>My Recipe</Text>
            </View>
            <Text>
              <Feather name="chevron-right" style={styles.icon2} />
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Pressable
            style={styles.objectBotProfile}
            onPress={() => SavedRecipe(users?.users_id)}>
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'center',
              }}>
              <Feather name="bookmark" style={styles.icon1} />
              <Text style={styles.textObject}>Saved Recipe</Text>
            </View>
            <Text>
              <Feather name="chevron-right" style={styles.icon2} />
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Pressable
            style={styles.objectBotProfile}
            onPress={() => LikedRecipe(users?.users_id)}>
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'center',
              }}>
              <AntDesign name="like2" style={styles.icon1} />
              <Text style={styles.textObject}>Liked Recipe</Text>
            </View>
            <Text>
              <Feather name="chevron-right" style={styles.icon2} />
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Pressable style={styles.objectBotProfile} onPress={logout}>
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'center',
              }}>
              <AntDesign name="poweroff" style={styles.icon1} />
              <Text style={styles.textObject}>Logout</Text>
            </View>
            <Text>
              <AntDesign name="logout" style={styles.icon2} />
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  top: {
    width: '100%',
    height: '40%',
    backgroundColor: '#EEC302',
  },
  topProfile: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botProfile: {
    width: '97%',
    height: '68%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: -35,
  },
  objectBotProfile: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 24,
  },
  icon1: {
    marginRight: 15,
    fontSize: 24,
    color: '#EEC302',
  },
  textObject: {
    color: 'rgba(0, 0, 0, 0.70)',
    fontSize: 14,
  },
  icon2: {
    fontSize: 18,
  },
});

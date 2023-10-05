/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import img4 from '../../assets/image4.png';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  const MyRecipe = () => {
    navigation.navigate('MyRecipe');
  };
  const SavedRecipe = () => {
    navigation.navigate('SavedRecipe');
  };
  const LikedRecipe = () => {
    navigation.navigate('LikedRecipe');
  };
  const EditProfile = () => {
    navigation.navigate('EditProfile');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topProfile}>
          <Image
            source={img4}
            style={{width: 84, height: 84, borderRadius: 42}}
          />
          <Text style={{fontSize: 16, color: '#fff', textAlign: 'center'}}>
            Mareta Lopeda
          </Text>
        </View>
      </View>
      <View style={styles.botProfile}>
        <View
          style={{
            marginTop: 15,
          }}>
          <Pressable style={styles.objectBotProfile} onPress={EditProfile}>
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
          <Pressable style={styles.objectBotProfile} onPress={MyRecipe}>
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
          <Pressable style={styles.objectBotProfile} onPress={SavedRecipe}>
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
          <Pressable style={styles.objectBotProfile} onPress={LikedRecipe}>
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

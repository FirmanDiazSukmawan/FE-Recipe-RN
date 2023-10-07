/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import img4 from '../../assets/image4.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function DetailVideo() {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('DetailRecipe');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          style={styles.video}
          controls={true}
          resizeMode="cover"
          autoPlay={false}
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
        <View style={styles.desc}>
          <Text style={styles.title}>
            Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then
            mix it
          </Text>
          <Text style={styles.createat}> 3 month ago</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.nextOne}>
          <Image
            source={img4}
            style={{
              width: 236,
              height: 120,
              borderRadius: 16,
              objectFit: 'cover',
              marginBottom: 15,
            }}
          />
          <Text style={styles.descNext}>
            Beef Steak with Curry Sauce - [Step 5] Saute condiments together
            until turn brown
          </Text>
          <Text style={styles.createNext}>HanaLohana - 3 month ago</Text>
        </View>

        <View style={styles.nextOne}>
          <Image
            source={img4}
            style={{
              width: 236,
              height: 120,
              borderRadius: 16,
              objectFit: 'cover',
              marginBottom: 15,
            }}
          />
          <Text style={styles.descNext}>
            Beef Steak with Curry Sauce - [Step 5] Saute condiments together
            until turn brown
          </Text>
          <Text style={styles.createNext}>HanaLohana - 3 month ago</Text>
        </View>
        <View style={styles.nextOne}>
          <Image
            source={img4}
            style={{
              width: 236,
              height: 120,
              borderRadius: 16,
              objectFit: 'cover',
              marginBottom: 15,
            }}
          />
          <Text style={styles.descNext}>
            Beef Steak with Curry Sauce - [Step 5] Saute condiments together
            until turn brown
          </Text>
          <Text style={styles.createNext}>HanaLohana - 3 month ago</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: 269,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginBottom: 20,
  },
  desc: {
    width: '95%',
    textAlign: 'center',
  },
  title: {
    color: '#000',
    fontSize: 18,
    marginBottom: 15,
  },
  createat: {
    color: 'rgba(170, 170, 170, 1)',
    fontSize: 12,
    textAlign: 'left',
    marginBottom: 15,
  },
  top: {
    alignItems: 'center',
  },
  nextOne: {
    width: 236,
    marginLeft: 15,
    marginBottom: 10,
  },
  descNext: {
    fontSize: 12,
    color: '#000000',
  },
  createNext: {
    fontSize: 8,
    color: 'rgba(170, 170, 170, 1)',
  },
});

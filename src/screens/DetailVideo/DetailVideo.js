/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import img4 from '../../assets/image4.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getRecipeIdSelector} from '../../redux/reducer/recipe/getRecipeIdSlice';

export default function DetailVideo() {
  const navigation = useNavigation();
  const route = useRoute();
  const recipe = useSelector(getRecipeIdSelector);
  console.log(recipe);
  const {recipes_id} = route.params;
  const back = () => {
    navigation.navigate('DetailRecipe', {recipes_id});
  };

  return (
    <View style={styles.container}>
      {recipe?.data?.map((item, index) => (
        <View style={styles.top} key={index}>
          <Video
            source={{
              uri: item.video,
            }}
            style={styles.video}
            controls={true}
            resizeMode="cover"
            autoPlay={false}
            paused={true}
            fullscreen={false}
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
            <Text style={styles.title}>{item.name_video}</Text>
            <Text style={styles.createat}> {item.created_at}</Text>
          </View>
        </View>
      ))}
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

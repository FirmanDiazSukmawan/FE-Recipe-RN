/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function MyRecipe() {
  const navigation = useNavigation();
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.gambar2}>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={{width: 80, height: 80, borderRadius: 16}}
            />
            <View style={styles.text}>
              <Text style={styles.text1}>Margeritha</Text>
              <Text style={styles.text2}>in Veg Pizza</Text>
              <Text style={styles.text3}>Spicy</Text>
            </View>
          </View>
          <View style={styles.gambar2}>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={{width: 80, height: 80, borderRadius: 16}}
            />
            <View style={styles.text}>
              <Text style={styles.text1}>Veg Loaded</Text>
              <Text style={styles.text2}>In Pizza Mania</Text>
              <Text style={styles.text3}>Spicy</Text>
            </View>
          </View>
          <View style={styles.gambar2}>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={{width: 80, height: 80, borderRadius: 16}}
            />
            <View style={styles.text}>
              <Text style={styles.text1}>Farm House</Text>
              <Text style={styles.text2}>In Pizza Mania</Text>
              <Text style={styles.text3}>Spicy</Text>
            </View>
          </View>
          <View style={styles.gambar2}>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={{width: 80, height: 80, borderRadius: 16}}
            />
            <View style={styles.text}>
              <Text style={styles.text1}>Fresh Veggie</Text>
              <Text style={styles.text2}>In Pizza Mania</Text>
              <Text style={styles.text3}>Spicy</Text>
            </View>
          </View>
          <View style={styles.gambar2}>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={{width: 80, height: 80, borderRadius: 16}}
            />
            <View style={styles.text}>
              <Text style={styles.text1}>Tomato</Text>
              <Text style={styles.text2}>In Pizza Mania</Text>
              <Text style={styles.text3}>Spicy</Text>
            </View>
          </View>
          <View style={styles.gambar2}>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={{width: 80, height: 80, borderRadius: 16}}
            />
            <View style={styles.text}>
              <Text style={styles.text1}>Veg Loaded</Text>
              <Text style={styles.text2}>In Pizza Mania</Text>
              <Text style={styles.text3}>Spicy</Text>
            </View>
          </View>
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
    paddingHorizontal: 30,
  },
  text: {
    width: '50%',
    paddingHorizontal: 10,
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
});

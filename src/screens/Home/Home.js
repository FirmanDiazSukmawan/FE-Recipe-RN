/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Icon, Input, NativeBaseProvider, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const detailRecipe = () => {
    navigation.navigate('DetailRecipe');
  };
  const detailPopular = () => {
    navigation.navigate('DetailPopular');
  };
  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={styles.isi}>
            <VStack w="100%" space={5} alignItems="center" marginBottom={8}>
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
              <View style={styles.gambar}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Pressable style={styles.gambar1} onPress={detailPopular}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={{
                        width: 130,
                        height: 160,
                        position: 'relative',
                        borderRadius: 15,
                      }}
                    />
                    <Text style={styles.name}>Banana Lemonilo</Text>
                  </Pressable>
                  <View style={styles.gambar1}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={{
                        width: 130,
                        height: 160,
                        position: 'relative',
                        borderRadius: 15,
                      }}
                    />
                    <Text style={styles.name}>Banana Lemonilo</Text>
                  </View>
                  <View style={styles.gambar1}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={{
                        width: 130,
                        height: 160,
                        position: 'relative',
                        borderRadius: 15,
                      }}
                    />
                    <Text style={styles.name}>Banana Lemonilo</Text>
                  </View>
                  <View style={styles.gambar1}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={{
                        width: 130,
                        height: 160,
                        position: 'relative',
                        borderRadius: 15,
                      }}
                    />
                    <Text style={styles.name}>Banana Lemonilo</Text>
                  </View>
                </ScrollView>
              </View>
              <Text style={styles.pop}> Popular Recipe</Text>
              <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Pressable style={styles.gambar2} onPress={detailRecipe}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={{width: 64, height: 64, borderRadius: 16}}
                    />
                    <View style={styles.text2}>
                      <Text> Banana Lemonilo</Text>
                      <Text>
                        {' '}
                        <FontAwesomeIcon name="star" style={styles.icon} />
                        4.6 . <Text>Pasta</Text>
                      </Text>
                    </View>
                  </Pressable>
                  <View style={styles.gambar2}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={{width: 64, height: 64, borderRadius: 16}}
                    />
                    <View style={styles.text2}>
                      <Text> Banana Lemonilo</Text>
                      <Text>
                        {' '}
                        <FontAwesomeIcon name="star" style={styles.icon} />
                        4.6 . <Text>Indonesian</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.gambar2}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={{width: 64, height: 64, borderRadius: 16}}
                    />
                    <View style={styles.text2}>
                      <Text> Banana Lemonilo</Text>
                      <Text>
                        {' '}
                        <FontAwesomeIcon name="star" style={styles.icon} />
                        4.6 . <Text>Korean</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.gambar2}>
                    <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={{width: 64, height: 64, borderRadius: 16}}
                    />
                    <View style={styles.text2}>
                      <Text> Banana Lemonilo</Text>
                      <Text>
                        {' '}
                        <FontAwesomeIcon name="star" style={styles.icon} />
                        4.6 . <Text>Seafood</Text>
                      </Text>
                    </View>
                  </View>
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
  },

  isi: {
    width: '80%',
  },
  new: {
    color: '#3F3A3A',
    fontSize: 18,
    fontFamily: 'Airbnb Cereal App',
    textAlign: 'left',
    marginBottom: 18,
  },
  pop: {
    color: '#18172B',
    fontSize: 18,
    fontFamily: 'Airbnb Cereal App',
    textAlign: 'left',
    marginTop: 25,
    marginBottom: 40,
  },
  name: {
    width: 61,
    fontSize: 14,
    color: '#FBFBFB',
    position: 'absolute',
    bottom: 0,
    left: 15,
  },

  gambar2: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text2: {
    width: 122,
  },
  icon: {
    fontSize: 12,
    color: '#FFB200',
  },
});

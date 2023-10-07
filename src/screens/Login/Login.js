/* eslint-disable prettier/prettier */
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_RECIPE} from '@env';

export default function Login() {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post(`${API_RECIPE}/users/login`, {
        email: email,
        password: password,
      });

      const token = res.data.token;
      const users_id = res.data.data.users_id.toString();

      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('users_id', users_id);
      navigation.navigate('HomePage');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          navigation.navigate('HomePage');
        }
      } catch {
        Alert.alert('No token u need login');
        navigation.navigate('Login');
      }
    };
    checkToken();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="user" style={styles.icon} />
      </View>
      <View style={styles.head}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.tlog}>Log in to your Exiting account</Text>
      </View>
      <NativeBaseProvider>
        <Stack space={4} w="100%" alignItems="center">
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            h="60"
            borderRadius="10"
            bgColor="#F5F5F5"
            InputLeftElement={
              <Icon as={<Feather name="user" />} size={5} ml="2" />
            }
            placeholder="email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            h="60"
            borderRadius="10"
            bgColor="#F5F5F5"
            type={show ? 'text' : 'password'}
            InputLeftElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon as={<Feather name="lock" />} size={5} ml="2" />
              </Pressable>
            }
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </Stack>
        <Text style={styles.fpw}>Forgot Password</Text>
        <Button style={styles.submit} onPress={login}>
          Submit
        </Button>
        <View style={styles.signup}>
          <Text style={styles.dont}> Don’t have an account?</Text>
          <Text
            style={styles.sign}
            onPress={() => navigation.navigate('Register')}>
            Sign Up
          </Text>
        </View>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  icon: {fontSize: 123, color: 'white'},

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 180,
    backgroundColor: '#C4C4C4',
    borderRadius: 500,
    marginTop: 80,
  },

  head: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  welcome: {
    fontSize: 18,
    lineHeight: 23.44,
    color: '#EFC81A',
    marginBottom: 10,
  },

  tlog: {fontSize: 12, lineHeight: 15.62, color: '#C4C4C4'},

  fpw: {textAlign: 'right', marginTop: 20, marginBottom: 20},

  submit: {backgroundColor: '#EFC81A', borderRadius: 10, marginBottom: 8},

  signup: {flexDirection: 'row', justifyContent: 'center'},

  dont: {color: '#999999', fontSize: 15.62},

  sign: {color: '#EFC81A', marginLeft: 5, fontSize: 15.62},
});

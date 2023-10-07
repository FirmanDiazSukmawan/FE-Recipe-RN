/* eslint-disable prettier/prettier */
import {Alert, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import {
  Input,
  Icon,
  Stack,
  Pressable,
  NativeBaseProvider,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_RECIPE} from '@env';

export default function Register() {
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const navigation = useNavigation();

  const register = async () => {
    try {
      const res = await axios.post(`${API_RECIPE}/users`, {
        username: username,
        email: email,
        phone_number: phone_number,
        password: password,
        confirmPassword: confirmPassword,
      });
      Alert.alert('register success');
      navigation.navigate('Login');
      console.log(res);
    } catch (err) {
      Alert.alert('register failed');
      console.log(err);
    }
  };

  const Login = () => {
    navigation.navigate('Login');
  };
  const back = () => {
    navigation.navigate('HomePage');
  };
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Ionicons style={styles.icon} name="arrow-back" onPress={back} />
        <View style={styles.isi}>
          <Text style={styles.lets}>Let’s Get Started !</Text>
          <Text style={styles.desc}>
            Create new account to access all feautures
          </Text>
          <Stack space={4} w="100%" alignItems="center">
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="60"
              bgColor="#ffff"
              borderRadius="10"
              InputLeftElement={
                <Icon as={<FeatherIcon name="user" />} size={5} ml="2" />
              }
              placeholder="Name"
              value={username}
              onChangeText={setUsername}
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="60"
              bgColor="#ffff"
              borderRadius="10"
              InputLeftElement={
                <Icon as={<FeatherIcon name="mail" />} size={5} ml="2" />
              }
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="60"
              bgColor="#ffff"
              borderRadius="10"
              InputLeftElement={
                <Icon as={<FeatherIcon name="phone" />} size={5} ml="2" />
              }
              placeholder="PhoneNumber"
              value={phone_number}
              onChangeText={setphone_number}
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="60"
              bgColor="#ffff"
              borderRadius="10"
              type={show ? 'text' : 'password'}
              InputLeftElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon as={<FeatherIcon name="lock" />} size={5} ml="2" />
                </Pressable>
              }
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="60"
              bgColor="#ffff"
              borderRadius="10"
              type={show ? 'text' : 'password'}
              InputLeftElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon as={<FeatherIcon name="lock" />} size={5} ml="2" />
                </Pressable>
              }
              placeholder="confirm pasword"
              value={confirmPassword}
              onChangeText={setconfirmPassword}
            />
            <Button
              w={{
                base: '75%',
                md: '25%',
              }}
              h="50"
              borderRadius="10"
              bgColor="#EFC81A"
              onPress={register}>
              <Text style={styles.create}>Create account</Text>
            </Button>
            <Text style={styles.already}>
              Already have account?{' '}
              <Text style={styles.log} onPress={Login}>
                {' '}
                Log in Here
              </Text>
            </Text>
          </Stack>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5'},
  icon: {fontSize: 24, marginLeft: 20, marginTop: 15, textAlign: 'left'},
  isi: {alignItems: 'center', justifyContent: 'center', marginTop: '15%'},
  lets: {
    fontSize: 24,
    lineHeight: 31.25,
    textAlign: 'center',
    color: '#EFC81A',
    marginBottom: 6,
  },
  desc: {
    fontSize: 12,
    lineHeight: 15.62,

    color: '#C4C4C4',
    marginBottom: 40,
  },
  create: {
    color: '#fff',
    fontSize: 16,
  },
  already: {
    color: '#999',
    fontSize: 12,
  },
  log: {color: '#EFC81A', fontSize: 12},
});

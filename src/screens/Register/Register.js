/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import React from 'react';
import {
  Input,
  Icon,
  Stack,
  Pressable,
  NativeBaseProvider,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export default function Register() {
  const [show, setShow] = React.useState(false);
  const navigation = useNavigation();
  const Login = () => {
    navigation.navigate('Login');
  };
  const back = () => {
    navigation.navigate('Home');
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
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              h="60"
              bgColor="#ffff"
              borderRadius="10"
              type={show ? 'text' : 'ConfirmPassword'}
              InputLeftElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon as={<FeatherIcon name="lock" />} size={5} ml="2" />
                </Pressable>
              }
              placeholder="ConfirmPassword"
            />
            <Button
              w={{
                base: '75%',
                md: '25%',
              }}
              h="50"
              borderRadius="10"
              bgColor="#EFC81A">
              <Text style={styles.create}>Create</Text>
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

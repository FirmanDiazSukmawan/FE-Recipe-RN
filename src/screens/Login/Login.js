/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
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

export default function Login() {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FeatherIcon name="user" style={styles.icon} />
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
            borderRadius="10"
            bgColor="#F5F5F5"
            type={show ? 'text' : 'password'}
            InputLeftElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon as={<FeatherIcon name="lock" />} size={5} ml="2" />
              </Pressable>
            }
            placeholder="Password"
          />
        </Stack>
        <Text style={styles.fpw}>Forgot Password</Text>
        <Button style={styles.submit}>Submit</Button>
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

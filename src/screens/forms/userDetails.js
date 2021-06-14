import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

export const UserDetails = ({onNext}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = () => {
    if (
      firstName !== '' &&
      lastName !== '' &&
      userName !== '' &&
      password !== '' &&
      confirm !== ''
    ) {
      AsyncStorage.setItem(
        'USER_DATA',
        JSON.stringify({
          firstName,
          lastName,
          userName,
          password,
          confirm,
        }),
      );
      onNext();
    } else {
      Alert.alert('Warning', 'Please fill all the details');
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('USER_DATA').then(value => {
      const data = JSON.parse(value);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setUserName(data.userName);
      setPassword(data.password);
      setConfirm(data.confirm);
    });
  }, []);

  return (
    <View>
      <TextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        value={firstName}
        onChangeText={value => {
          setFirstName(value);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        placeholderTextColor="gray"
        value={lastName}
        onChangeText={value => {
          setLastName(value);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Username"
        placeholderTextColor="gray"
        value={userName}
        onChangeText={value => {
          setUserName(value);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        value={password}
        secureTextEntry
        onChangeText={value => {
          setPassword(value);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="gray"
        value={confirm}
        secureTextEntry
        onChangeText={value => {
          setConfirm(value);
        }}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 10,
    borderWidth: 1,
    color: 'black',
    borderColor: 'gray',
    fontSize: 20,
    paddingHorizontal: 16,
  },
  submit: {
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

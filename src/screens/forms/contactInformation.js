import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export const ContactInformation = ({onPrevious}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        placeholderTextColor="gray"
        value={phone}
        onChangeText={value => {
          setPhone(value);
        }}
        style={styles.input}
      />
      <TouchableOpacity onPress={onPrevious} style={styles.submit}>
        <Text>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.submit}>
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

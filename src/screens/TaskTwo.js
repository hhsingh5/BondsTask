import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UserDetails} from './forms/userDetails';
import {ContactInformation} from './forms/contactInformation';

export const TaskTwo = () => {
  const [currentForm, setCurrentForm] = useState('USER_DETAIL');

  const switchForm = () => {
    setCurrentForm(value => (value === 'CONTACT' ? 'USER_DETAIL' : 'CONTACT'));
  };

  return (
    <View>
      <View style={styles.header}>
        {currentForm === 'USER_DETAIL' && (
          <Text style={styles.title}>User Details</Text>
        )}
        {currentForm === 'CONTACT' && (
          <Text style={styles.title}>Contact Information</Text>
        )}
      </View>
      {currentForm === 'USER_DETAIL' && <UserDetails onNext={switchForm} />}
      {currentForm === 'CONTACT' && (
        <ContactInformation onPrevious={switchForm} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#565656',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

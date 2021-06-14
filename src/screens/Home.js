import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Home = props => {
  const handleTaskOneNav = () => {
    props.navigation.navigate('TaskOne');
  };
  const handleTaskTwoNav = () => {
    props.navigation.navigate('TaskTwo');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleTaskOneNav} style={styles.button}>
        <Text>Task One</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTaskTwoNav} style={styles.button}>
        <Text>Task Two</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#afafaf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 42,
    width: '50%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    marginBottom: 20,
  },
});

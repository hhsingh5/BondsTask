import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {data} from '../utils/userData';
import {connect} from 'react-redux';
import {setAddress} from '../actions/customer';

const TaskOne = props => {
  const handleOnPress = value => {
    props.setAddress(value.adresses);
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        {data.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                handleOnPress(item);
              }}
              style={styles.info}>
              <View style={styles.row}>
                <Text style={styles.title}>id</Text>
                <Text>{item.id} </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>name</Text>
                <Text>{item.name} </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>age</Text>
                <Text>{item.age} </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>sex</Text>
                <Text>{item.sex} </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.container2}>
        <View style={styles.row}>
          <Text style={styles.title}>User Address</Text>
          <Text>{props?.customerAddress} </Text>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({customerAddress: state.customer.address});

export default connect(mapStateToProps, {setAddress})(TaskOne);

const styles = StyleSheet.create({
  container: {
    height: '70%',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  container2: {
    height: '30%',
    borderColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    marginVertical: 6,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  row: {flexDirection: 'row', width: '100%'},
  title: {width: 100},
});

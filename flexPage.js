import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';

export default class FlexPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redBox}></View>
        <View style={styles.yellowBox}>
          <View style={styles.subBlueBox}></View>
          <View style={styles.subDarkBlue}></View>
          <View style={styles.subBlueBox}></View>
        </View>
        <View style={styles.greenBox}>
          <View style={{width: 150}}>
            <Button title="Click me" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redBox: {
    flex: 1,
    backgroundColor: 'red',
  },
  yellowBox: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  subBlueBox: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  subDarkBlue: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  greenBox: {
    flex: 3,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

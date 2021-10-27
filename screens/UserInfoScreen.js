import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const UserInfoScreen = ({navigation}) => {
  const [firstName, onChangeFirstName] = React.useState();
  const [lastName, onChangeLastName] = React.useState();
  const [number, onChangeNumber] = React.useState();
  const [email, onChangeEmail] = React.useState();
  const theme = useTheme();
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Who should we deliver to?</Text>
            <Text style={styles.bodyText}>Fill in your details below:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeFirstName}
              value={firstName}
              placeholder="First Name *"
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeLastName}
              value={lastName}
              placeholder="Last Name *"
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Phone Number *"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email address *"
              keyboardType="default"
            />
            <TouchableOpacity
              style={styles.submit}
              onPress={() => navigation.navigate('UserDetails')}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    margin: 60,
    width: 400,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  titleText: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: 'bold',
    paddingBottom: 18,
    color: 'black',
  },
  bodyText: {
    fontSize: 18,
    lineHeight: 24,
    paddingBottom: 18,
    color: 'black',
  },
  subBodyText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  input: {
    height: 60,
    fontSize: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    backgroundColor: 'white',
  },
  submit: {
    width: '100%',
    backgroundColor: '#FF9432',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 0,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

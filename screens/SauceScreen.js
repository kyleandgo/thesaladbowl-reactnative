import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useTheme} from '@react-navigation/native';

const ProteinScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Make your salad bowl:</Text>
          <Text style={styles.bodyText}>Choose your Sauce (Pick 2 only)</Text>

          <View style={styles.item}>
            <CheckBox
              color="#FF9432"
              tintColors={{true: '#FF9432', false: 'black'}}
            />
            <Text style={styles.checkBoxTxt}>Wasabi shoyu</Text>
          </View>
          <View style={styles.item}>
            <CheckBox
              color="#FF9432"
              tintColors={{true: '#FF9432', false: 'black'}}
            />
            <Text style={styles.checkBoxTxt}>Classic sauce</Text>
          </View>
          <View style={styles.item}>
            <CheckBox
              color="#FF9432"
              tintColors={{true: '#FF9432', false: 'black'}}
            />
            <Text style={styles.checkBoxTxt}>Spicy mayo</Text>
          </View>
          <View style={styles.item}>
            <CheckBox
              color="#FF9432"
              tintColors={{true: '#FF9432', false: 'black'}}
            />
            <Text style={styles.checkBoxTxt}>Sesame sauce</Text>
          </View>
          <View style={styles.item}>
            <CheckBox
              color="#FF9432"
              tintColors={{true: '#FF9432', false: 'black'}}
            />
            <Text style={styles.checkBoxTxt}>Honey mustard</Text>
          </View>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => navigation.navigate('Greens')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProteinScreen;

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
  buttonText: {
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    height: 60,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxTxt: {
    marginLeft: 16,
    fontSize: 18,
    lineHeight: 28,
    color: 'black',
  },
  submit: {
    width: '100%',
    backgroundColor: '#FF9432',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 0,
  },
});

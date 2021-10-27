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
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const OrderScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Make your salad bowl:</Text>
            <Text style={styles.bodyText}>Choose your bowl</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Protein')}>
              <View style={{marginBottom: 24}}>
                <Image
                  style={{
                    width: '100%',
                    height: 250,
                    borderRadius: 20,
                  }}
                  resizeMode="cover"
                  source={require('../img/jumbo-bowl.jpg')}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 70,
                    width: 400,
                    backgroundColor: '#FFFFFF',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.subBodyText}>Jumbo Size - $11.90</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Protein')}>
              <View style={{marginBottom: 24}}>
                <Image
                  style={{
                    width: '100%',
                    height: 250,
                    borderRadius: 20,
                  }}
                  resizeMode="cover"
                  source={require('../img/medium-bowl.jpg')}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 70,
                    width: 400,
                    backgroundColor: '#FFFFFF',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.subBodyText}>Medium Size - $9.90</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Protein')}>
              <View style={{marginBottom: 24}}>
                <Image
                  style={{
                    width: '100%',
                    height: 250,
                    borderRadius: 20,
                  }}
                  resizeMode="cover"
                  source={require('../img/little-bowl.jpg')}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 70,
                    width: 400,
                    backgroundColor: '#FFFFFF',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.subBodyText}>Little Size - $7.90</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderScreen;

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
  primaryButton: {
    width: 120,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

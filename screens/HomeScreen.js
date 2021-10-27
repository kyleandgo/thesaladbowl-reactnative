import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View>
        <View style={styles.subContainer}>
          <ImageBackground
            source={require('../img/background-image.png')}
            style={styles.image}>
            <View style={styles.child}>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>
                  Make them feel your love today
                </Text>
                <Text style={styles.bodyText}>
                  Share the gift of healthy eating with your loved ones.
                  Starting at $7.90.
                </Text>
                <View style={styles.primaryButton}>
                  <Button
                    color="#FF9432"
                    title="Order Now"
                    onPress={() => navigation.navigate('Order')}
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    height: 1000,
  },
  textContainer: {
    margin: 60,
    height: 800,
    width: 400,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  titleText: {
    fontSize: 48,
    lineHeight: 56,
    fontWeight: 'bold',
    paddingBottom: 18,
    color: 'white',
  },
  bodyText: {
    fontSize: 22,
    lineHeight: 30,
    paddingBottom: 32,
    color: 'white',
  },
  primaryButton: {
    width: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

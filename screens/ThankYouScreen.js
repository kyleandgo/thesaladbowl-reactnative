import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
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
            <Text style={styles.titleText}>Thank you for your order.</Text>
            <Text style={styles.bodyText}>
              Your order was completed successfully. An email receipt including
              the details about your order has been sent to the email address
              provided.
            </Text>
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
});

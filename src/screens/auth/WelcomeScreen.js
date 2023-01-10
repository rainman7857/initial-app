import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

function WelcomeScreen() {
  const { t } = useTranslation('welcome-screen');
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default WelcomeScreen;

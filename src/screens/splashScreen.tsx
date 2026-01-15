import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');

export const SplashScreen = () => {
  const navigation = useNavigation<any>();
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => { 
    Animated.timing(progressAnim, {    
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate('OnBoardingScreen');
    });
  }, [navigation, progressAnim]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}> 
      <View style={styles.iconsContainer}> 
        <Image
          source={require('../assets/images/splashImage.jpg')}
          style={styles.gifIcon}
        />
      </View> 
      <View style={styles.mobileContainer}>
        <Image
          source={require('../assets/images/splashMobile.jpg')}
          style={styles.mobileIcon}
        />
      </View> 
      <Text style={styles.title}>Copy My Data</Text>
      <Text style={styles.subtitle}>Simple Mobile File Sharing</Text>
      <View style={styles.progressBarContainer}>
        <Animated.View 
          style={[
            styles.progressBar,
            { width: progressWidth }
          ]} 
        />
      </View> 
      <Text style={styles.footer}>A Red Sky Labs Software</Text>
      <Text style={styles.version}>App version: 5.1.1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  iconsContainer: {
    height: '100%',
    width: '100%', 
    justifyContent:'center',
    alignItems: 'center',
    flex:1, 
  },
  mobileContainer: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileIcon: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginBottom:8,
  },
  gifIcon: { 
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  }, 
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#4A90E2',
    marginBottom: 30,
  },
  progressBarContainer: {
    width: width * 0.50,
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 60,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 3,
  },
  footer: {
    fontSize: 14,
    color: '#BABAC0',
    marginBottom: 5,
  },
  version: {
    fontSize: 14,
    color: '#BABAC0',
  },
});
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient'; 
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const onboardingData = [
  {
    id: 1,
    video: require('../assets/videos/firstVideo.mp4'),
    title: 'Copy Data Easily\nBetween Phones',
    subtitle: 'A simple way to transfer data\nbetween devices',
  },
  {
    id: 2,
    video: require('../assets/videos/secondVideo.mp4'),
    title: 'Two Taps To\nTransfer Data',
    subtitle: 'Transfer data between devices\nwith a couple taps and unclog\nyour phone',
  },
];

export const OnBoardingScreen = () => {
  const navigation = useNavigation<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleContinue = () => {
    if (currentIndex < onboardingData.length - 1) { 
      Animated.timing(slideAnim, {
        toValue: -(currentIndex + 1) * width,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(currentIndex + 1);
      });
    } else { 
      navigation.navigate('SubscriptionScreen');
    }
  };

  return (
    <View style={styles.container}> 
      <Animated.View
        style={[
          styles.slidesContainer,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        {onboardingData.map((item) => (
          <View key={item.id} style={styles.slide}> 
            <View style={styles.videoContainer}>
              <Video
                source={item.video}
                style={styles.video}
                resizeMode="cover"
                repeat={true}
              /> 
            </View>  
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
              style={styles.gradient}
              pointerEvents="none"
            /> 
            <View style={styles.content}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View> 
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinue} 
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  slidesContainer: {
    flexDirection: 'row',
    width: width * 2, 
  },
  slide: {
    width: width,
    height: height,
    position: 'relative',
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  video: {
    width: '100%',
    height: '100%',
  },  
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.4, 
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
  },
  continueButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
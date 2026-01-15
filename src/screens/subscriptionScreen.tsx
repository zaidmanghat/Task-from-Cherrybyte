import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Video from "react-native-video";

const { width, height } = Dimensions.get("window");

export const SubscriptionScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  return (
    <View style={styles.container}> 
      <TouchableOpacity style={styles.closeButton}>
        <Icon name="x" size={24} color="#ffffff" />
      </TouchableOpacity>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={true}
      > 
        <View style={styles.videoContainer}>
          <Video
            source={require('../assets/videos/subscriptionVideo.mp4')}
            style={styles.video}
            resizeMode="cover"
            repeat={true} 
            playInBackground={false}
            playWhenInactive={false}
          />
        </View> 
        <View style={styles.contentContainer}> 
          <Text style={styles.headerTitle}>Quickly Transfer Whatever You Want</Text>
          <View style={styles.divider} />
          <View style={styles.featuresContainer}> 
            <View style={styles.featureItem}>
              <View style={styles.iconCircle}>
                <Icon name="users" size={28} color="#ffffff" />
              </View>
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>Unlimited Transfers</Text>
                <Text style={styles.featureDescription}>
                  Make Easy Transfers from Any iOS & Android Smartphones.
                </Text>
              </View>
            </View> 
            <View style={styles.featureItem}>
              <View style={styles.iconCircle}>
                <Icon name="volume-2" size={28} color="#ffffff" />
              </View>
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>Customizable Alerts</Text>
                <Text style={styles.featureDescription}>
                  Tailor alerts to your preferences and locations.
                </Text>
              </View>
            </View> 
            <View style={styles.featureItem}>
              <View style={styles.iconCircle}>
                <Icon name="user-x" size={28} color="#ffffff" />
              </View>
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>Delete Your Duplicates</Text>
                <Text style={styles.featureDescription}>
                  Delete any file you have duplicated, we will help you discover them.
                </Text>
              </View>
            </View> 
            <View style={styles.featureItem}>
              <View style={styles.iconCircle}>
                <Icon name="slash" size={28} color="#ffffff" />
              </View>
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>No Ads, No Interruptions</Text>
                <Text style={styles.featureDescription}>
                  Enjoy a completely immersive and relaxing environment
                </Text>
              </View>
            </View>
          </View> 
          <View style={styles.divider} /> 
          <Text style={styles.sectionTitle}>Plan Details</Text>
          <Text style={styles.sectionSubtitle}>
            A single payment option with the best premium experience.
          </Text>
          <View style={styles.plansContainer}> 
            <TouchableOpacity
              style={[
                styles.planCard,
                selectedPlan === "weekly" && styles.planCardSelected,
              ]}
              onPress={() => setSelectedPlan("weekly")}
            >
              <View style={styles.planHeader}>
                <Text style={styles.planName}>Weekly</Text>
                <View>
                  <Text style={styles.planPrice}>Rs 2,500</Text>
                  <Text style={styles.planPeriod}>Per week</Text>
                </View>
              </View>
              <Text style={styles.planBilling}>Rs 2,500, billed once a week</Text>
            </TouchableOpacity> 
            <TouchableOpacity
              style={[
                styles.planCard,
                selectedPlan === "monthly" && styles.planCardSelected,
              ]}
              onPress={() => setSelectedPlan("monthly")}
            >
              <View style={styles.badgeContainer}>
                <Text style={styles.badge}>3 day free trial</Text>
              </View>
              <View style={styles.planHeader}>
                <Text style={styles.planName}>Monthly</Text>
                <View>
                  <Text style={styles.planPrice}>Rs 162.50</Text>
                  <Text style={styles.planPeriod}>Per week</Text>
                </View>
              </View>
              <Text style={styles.planBilling}>Rs 650, billed once a month</Text>
            </TouchableOpacity> 
            <TouchableOpacity
              style={[
                styles.planCard,
                styles.planCardPopular,
                selectedPlan === "yearly" && styles.planCardSelected,
              ]}
              onPress={() => setSelectedPlan("yearly")}
            >
              <View style={styles.badgeContainer}>
                <View style={styles.badgePopularContainer}>
                  <Text style={styles.fireEmoji}>🔥</Text>
                  <Text style={styles.badgePopular}>Most popular</Text>
                </View>
              </View>
              <View style={styles.planHeader}>
                <Text style={styles.planName}>Yearly</Text>
                <View>
                  <Text style={styles.planPrice}>Rs 215.39</Text>
                  <Text style={styles.planPeriod}>Per week</Text>
                </View>
              </View>
              <Text style={styles.planBilling}>Rs 11,200, billed once a year</Text>
              <Text style={styles.planTrial}>1 week free trial</Text>
            </TouchableOpacity>
          </View> 
          <View style={styles.divider} /> 
          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Terms of Use</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Restore</Text>
            </TouchableOpacity>
          </View> 
          <Text style={styles.termsText}>
            By initiating your trial period, you agree to subscribe to our premium
            service, which will automatically renew after the trial period ends at
            the specified rate.
          </Text> 
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Start your free trial now</Text>
          </TouchableOpacity> 
          <View style={styles.bottomSpacer} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0e1a",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 100,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  videoContainer: {
    width: width,
    height: height * 0.5,
    backgroundColor: "#0a0e1a",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    backgroundColor: "#4a7ba7",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 36,
  },
  divider: {
    height: 1,
    backgroundColor: "#FFFFFF4D",
    marginVertical: 20,
  },
  featuresContainer: {
    marginBottom: 8,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF33",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: "#FFFFFFCC",
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#FFFFFFCC",
    marginBottom: 20,
    lineHeight: 20,
  },
  plansContainer: {
    marginBottom: 8,
  },
  planCard: {
    backgroundColor: "#FFFFFF26",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#FFFFFF4D",
    position: "relative",
  },
  planCardSelected: {
    borderColor: "#ffffff",
    backgroundColor: "#FFFFFF40",
  },
  planCardPopular: {
    backgroundColor: "#4A90E266",
    borderColor: "#4A90E299",
  },
  badgeContainer: {
    position: "absolute",
    top: -12,
    right: 20,
  },
  badge: {
    backgroundColor: "#ffffff",
    color: "#4a7ba7",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "600",
  },
  badgePopularContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  fireEmoji: {
    fontSize: 12,
    marginRight: 4,
  },
  badgePopular: {
    color: "#4a7ba7",
    fontSize: 12,
    fontWeight: "600",
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  planName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  planPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "right",
  },
  planPeriod: {
    fontSize: 14,
    color: "#FFFFFFCC",
    textAlign: "right",
  },
  planBilling: {
    fontSize: 14,
    color: "#FFFFFFCC",
  },
  planTrial: {
    fontSize: 14,
    color: "#FFFFFFCC",
    marginTop: 4,
  },
  footerLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  footerLink: {
    fontSize: 14,
    color: "#FFFFFFE6",
    textDecorationLine: "underline",
  },
  termsText: {
    fontSize: 12,
    color: "#FFFFFFB3",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  ctaButton: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 16,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4a7ba7",
  },
  bottomSpacer: {
    height: 40,
  },
});
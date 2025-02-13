import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { styles } from "@/styles/onboarding/onboard";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";

export default function OnBoardingScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image
            source={require("@/assets/images/react-logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Journaling With
          </Text>
        </View>
        <View>
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            JRN_APP
          </Text>
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            Capture your thoughts,express your feelings,
          </Text>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            and track your journey.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => router.push("/(routes)/welcome-intro")}
        >
          <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
            Getting Started
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

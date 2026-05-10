import { Platform, View, ScrollView, Text, TouchableOpacity, Linking } from "react-native";
import { WebView } from "react-native-webview";
import { ScreenContainer } from "@/components/screen-container";

/**
 * Home Screen - Displays the Anbudan Miththiran website content
 */
export default function HomeScreen() {
  const handleOpenWebsite = () => {
    Linking.openURL("https://www.anbumiththiran.in");
  };

  // On web, show a link to the website
  if (Platform.OS === "web") {
    return (
      <ScreenContainer className="p-4">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 items-center justify-center gap-4">
            <Text className="text-3xl font-bold text-foreground text-center">
              Anbudan Miththiran
            </Text>
            <Text className="text-base text-muted text-center">
              Tamil Literature & Thoughts
            </Text>
            <TouchableOpacity
              onPress={handleOpenWebsite}
              className="bg-primary px-6 py-3 rounded-full mt-4"
            >
              <Text className="text-background font-semibold">Visit Website</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScreenContainer>
    );
  }

  // On native platforms, use WebView
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://www.anbumiththiran.in" }}
        style={{ flex: 1 }}
        startInLoadingState={true}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

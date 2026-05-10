import { Platform, View, ScrollView, Text, TouchableOpacity, Linking, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { ScreenContainer } from "@/components/screen-container";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useState } from "react";
import { useColors } from "@/hooks/use-colors";

/**
 * Root Screen - Displays the Anbudan Miththiran website directly
 */
export default function RootScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const colors = useColors();

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

  // On native platforms, use WebView with loading animation
  return (
    <View style={{ flex: 1 }}>
      {isLoading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.background,
            zIndex: 1000,
          }}
        >
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      <WebView
        source={{ uri: "https://www.anbumiththiran.in" }}
        style={{ flex: 1 }}
        startInLoadingState={true}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadEnd={() => setIsLoading(false)}
        renderLoading={() => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.background,
            }}
          >
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
}

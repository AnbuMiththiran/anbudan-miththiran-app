import { View, ActivityIndicator, Animated, Easing } from "react-native";
import { useColors } from "@/hooks/use-colors";
import { useEffect, useRef } from "react";

export function LoadingSpinner() {
  const colors = useColors();
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </Animated.View>
    </View>
  );
}

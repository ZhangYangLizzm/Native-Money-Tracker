import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Tabs } from "expo-router";

import { View, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === "dark" ? "white" : "blue",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "black" : "white",
        },
        header: () => (
          <View
            className="bg-white dark:bg-black"
            style={{ paddingTop: insets.top }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View className="bg-blue-600 rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <FontAwesome size={24} name="plus" color="white" />
            </View>
          ),
          href: "/tracker",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

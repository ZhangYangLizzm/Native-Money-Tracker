import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        header: () => (
          <View className="bg-white" style={{ paddingTop: insets.top }}>
            <View className="h-8 flex justify-center items-center ">
              <Text className="font-bold text-base2">MoneyTracker</Text>
            </View>
          </View>
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

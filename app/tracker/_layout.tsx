import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const KeyBoard = () => {
  return (
    <View className="mb-6">
      <View className="flex-row">
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">1</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">2</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">3</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">4</Text>
        </View>
      </View>
      <View className="flex-row">
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">1</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">2</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">3</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">4</Text>
        </View>
      </View>
      <View className="flex-row">
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">1</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">2</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">3</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">4</Text>
        </View>
      </View>
      <View className="flex-row">
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">1</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">2</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">3</Text>
        </View>
        <View className="flex-1 p-2 border border-solid border-gray-200">
          <Text className="text-white">4</Text>
        </View>
      </View>
    </View>
  );
};

export default function TrackerLayout() {
  return (
    <SafeAreaView className="flex-1 dark:bg-black">
      <View>
        <Text className="text-white">Header</Text>
      </View>

      <View className="flex-1 ">
        <Text className="text-white">CONTENT</Text>
      </View>

      <KeyBoard />
    </SafeAreaView>
  );
}

import { View, Text } from "react-native";

export default function NewTracker() {
  return (
    <View className="flex-1">
      <View>
        <Text>Header</Text>
      </View>
      <View className="flex-1">
        <Text>content</Text>
      </View>
      <View>
        <Text>footer</Text>
      </View>
    </View>
  );
}

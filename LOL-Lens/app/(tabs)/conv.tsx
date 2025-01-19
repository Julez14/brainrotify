import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

export default function Index() {
  const tasks = useQuery(api.tasks.get);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#FFFFFF",
      }}
    >
      <Text style={{ color: "red" }}>hello</Text>
      {tasks?.map(({ _id, text }) => (
        <Text key={_id} style={{ color: "red" }}>
          {" "}
          {text}{" "}
        </Text>
      ))}
    </View>
  );
}

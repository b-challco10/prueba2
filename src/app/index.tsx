import { View } from "react-native";
import Saludo from "../components/Saludo";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Saludo nombre="Brayan" />
    </View>
  );
}

import { StyleSheet, Text, View } from "react-native";

type Props = { nombre: string };

export default function Saludo({ nombre }: Props) {
  return (
    <View style={styles.caja}>
      <Text style={styles.texto}>Hola, {nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: { padding: 16, backgroundColor: "#eee", borderRadius: 8 },
  texto: { fontSize: 18 },
}); // probando rama

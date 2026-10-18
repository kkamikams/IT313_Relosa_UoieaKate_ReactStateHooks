import { View, Text, StyleSheet } from "react-native";

export default function Stopwatch({ seconds, isRunning }) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <View style={styles.box}>
      <Text style={styles.time}>
        {mins}:{secs}
      </Text>
      <Text style={styles.status}>{isRunning ? "Running..." : "Paused"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { alignItems: "center", marginVertical: 20 },
  time: { fontSize: 48, fontWeight: "bold" },
  status: { fontSize: 18, color: "gray" },
});

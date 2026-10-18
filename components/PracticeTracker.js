import { View, Text, Button, StyleSheet } from "react-native";

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.box}>
      <Text style={styles.count}>Solved:{solved}</Text>
      <View style={styles.row}>
        <Button title="Solve + 1" onPress={onSolve} />
      </View>
      {solved >= 5 && <Text style={styles.great}>Great Job!</Text>}
    </View>
  );
}

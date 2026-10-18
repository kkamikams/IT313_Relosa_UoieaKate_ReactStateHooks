import { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import PracticeTracker from "../components/PracticeTracker";
import StopWatch from "../components/Stopwatch";
import useStopwatch from "../hooks/useStopwatch";

export default function LanScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

  const handleSolve = () => setSolved((s) => s + 1);
  const handleReset = () => setSolved(0);
  const handleStop = () => setIsRunning(false);

  return (
    <View style={Styles.container}>
      <Practice
        Tracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />
      <Stopwatch seconds={seconds} isRunning={isRunning} />
      <View style={styles.row}>
        <Button title="Start" onPress={handleStart} />
        <Button title="Stop" onPress={handleStop} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "center", gap: 12 },
});

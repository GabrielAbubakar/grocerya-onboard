import { StyleSheet, View } from "react-native";

interface ProgressIndicatorProps {
  steps: number;
  currentStep: number;
}

export function ProgressIndicator({
  steps,
  currentStep,
}: ProgressIndicatorProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: steps }).map((_, index) => (
        <View
          key={index}
          style={[styles.step, index + 1 === currentStep && styles.activeStep]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  step: {
    flex: 1,
    height: 3,
    borderRadius: 5,
    backgroundColor: "#f2f2f3",
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: "#0d0d0d",
  },
});

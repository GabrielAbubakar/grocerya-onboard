import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BigBoxIcon, CartIcon, CashRegisterIcon, TruckIcon } from "./icons";
import { ProgressIndicator } from "./ProgressIndicator";

const data = [
  {
    step: 1,
    header: "Welcome to Grocerya",
    description:
      "Get your grocery needs at your service within a minute. fast, efficient, and convenient.",
    icon: <CartIcon />,
  },
  {
    step: 2,
    header: "Get any packages delivered",
    description:
      "Get all your items conveniently, ensuring everything you need arrive without any hassle.",
    icon: <TruckIcon />,
  },
  {
    step: 3,
    header: "Protected package delivery.",
    description:
      "Your groceries are carefully packaged to ensure they arrive safely and in perfect condition.",
    icon: <BigBoxIcon />,
  },
  {
    step: 4,
    header: "Best price guaranteed",
    description:
      "Allowing you to stock up on your favorite items while staying within your budget.",
    icon: <CashRegisterIcon />,
  },
];

export function OnboardingLayout() {
  const steps = data.length;
  const [currentStep, setCurrentStep] = useState(1);
  const [activeData, setActiveData] = useState(data[0]);

  function handleNext() {
    if (currentStep < steps) {
      setCurrentStep(currentStep + 1);
      setActiveData(data[currentStep]);
    }
  }

  function handleSkip() {
    setCurrentStep(steps);
    setActiveData(data[steps - 1]);
  }

  return (
    <View style={styles.container}>
      <ProgressIndicator steps={steps} currentStep={currentStep} />

      <View style={styles.contentContainer}>
        {activeData.icon}
        <Text style={styles.header}>{activeData.header}</Text>
        <Text style={styles.description}>{activeData.description}</Text>
      </View>

      <View style={styles.ctaGroup}>
        {currentStep !== steps ? (
          <>
            <TouchableOpacity
              style={[styles.button, styles.skipButton]}
              onPress={handleSkip}
            >
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.nextButton]}
              onPress={handleNext}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={[styles.button, styles.nextButton]}>
            <Text style={styles.nextButtonText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#0d0d0d",
  },
  description: {
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    color: "#777777",
  },
  ctaGroup: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 30,
  },
  skipButton: {
    flex: 1,
    backgroundColor: "#f2f2f3",
  },
  skipButtonText: {
    textAlign: "center",
    color: "#777777",
    fontFamily: "Poppins-Medium",
  },
  nextButton: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  nextButtonText: {
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Poppins-Medium",
  },
});

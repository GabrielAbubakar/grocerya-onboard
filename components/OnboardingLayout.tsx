import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { BigBoxIcon, CartIcon, CashRegisterIcon, TruckIcon } from "./icons";
import { ProgressIndicator } from "./ProgressIndicator";
import { BaseButton, BaseText } from "./ui";

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
  const { width } = useWindowDimensions();
  const adjustedWidth = width - 40;
  const steps = data.length;
  const [currentStep, setCurrentStep] = useState(1);
  const flatListRef = useRef<FlatList>(null);

  function handleNext() {
    if (currentStep < steps) {
      flatListRef.current?.scrollToIndex({
        index: currentStep,
        animated: true,
      });
      setCurrentStep(currentStep + 1);
    }
  }

  function handleSkip() {
    flatListRef.current?.scrollToIndex({
      index: steps - 1,
      animated: true,
    });
    setCurrentStep(steps);
  }

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(scrollOffset / adjustedWidth);
    setCurrentStep(pageIndex + 1);
  };

  return (
    <View style={styles.container}>
      <ProgressIndicator steps={steps} currentStep={currentStep} />

      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        keyExtractor={(item) => item.step.toString()}
        getItemLayout={(_, index) => ({
          length: adjustedWidth,
          offset: adjustedWidth * index,
          index,
        })}
        renderItem={({ item }) => (
          <View style={[styles.contentContainer, { width: adjustedWidth }]}>
            {item.icon}
            <BaseText variant="bold" size="xl" textAlign="center">
              {item.header}
            </BaseText>
            <BaseText color="#777777" textAlign="center">
              {item.description}
            </BaseText>
          </View>
        )}
        style={{ flex: 1 }}
      />

      <View style={styles.ctaGroup}>
        {currentStep !== steps ? (
          <>
            <BaseButton
              variant="secondary"
              title="Skip"
              onPress={handleSkip}
              style={styles.button}
            />
            <BaseButton
              variant="primary"
              title="Next"
              onPress={handleNext}
              style={styles.button}
            />
          </>
        ) : (
          <BaseButton
            variant="primary"
            title="Get Started"
            onPress={() => router.push("/login")}
            style={styles.button}
          />
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
  ctaGroup: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  button: {
    flex: 1,
  },
});

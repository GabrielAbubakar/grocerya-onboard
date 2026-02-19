import { Colors, fontFamily, fontSize } from "@/constants";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export type BaseButtonVariant = "primary" | "secondary";

interface BaseButtonProps extends TouchableOpacityProps {
  variant?: BaseButtonVariant;
  title?: string;
  loading?: boolean;
}

export const BaseButton = ({
  variant = "primary",
  title,
  children,
  style,
  disabled,
  loading,
  ...props
}: BaseButtonProps) => {
  const isPrimary = variant === "primary";

  const buttonStyles = [
    styles.button,
    isPrimary ? styles.primaryButton : styles.secondaryButton,
    disabled && styles.disabledButton,
    style,
  ];

  const textStyles = [
    styles.text,
    isPrimary ? styles.primaryText : styles.secondaryText,
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={0.7}
      disabled={disabled || loading}
      {...props}
    >
      {title ? (
        <Text style={textStyles}>{loading ? "Loading..." : title}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 100, // Capsule shape as seen in onboarding
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  primaryButton: {
    backgroundColor: "#0d0d0d",
  },
  secondaryButton: {
    backgroundColor: "#f2f2f3",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
  },
  primaryText: {
    color: "#ffffff",
  },
  secondaryText: {
    color: Colors.light.text,
  },
  disabledText: {
    color: "#888888",
  },
});

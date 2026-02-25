import { fontFamily, fontSize } from "@/constants";
import { StyleSheet, Text, TextProps } from "react-native";

export type BaseTextVariant = "bold" | "medium" | "default" | "regular";
export type BaseTextSize = keyof typeof fontSize;

interface BaseTextProps extends TextProps {
  variant?: BaseTextVariant;
  size?: BaseTextSize;
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
}

export const BaseText = ({
  variant = "default",
  size = "md",
  color,
  textAlign,
  style,
  children,
  ...props
}: BaseTextProps) => {
  // Map "default" to "regular" if needed, though constants/typography.ts has both
  const font =
    fontFamily[variant as keyof typeof fontFamily] || fontFamily.default;

  const textStyles = [
    styles.text,
    {
      fontFamily: font,
      fontSize: fontSize[size],
    },
    color ? { color } : null,
    textAlign ? { textAlign } : null,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#0d0d0d", // Default primary text color
  },
});

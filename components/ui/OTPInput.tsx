import { Colors } from "@/constants";
import React, { useRef, useState } from "react";
import {
    NativeSyntheticEvent,
    StyleSheet,
    TextInput,
    TextInputKeyPressEventData,
    View,
} from "react-native";

interface OTPInputProps {
  length?: number;
  onCodeFilled?: (code: string) => void;
  onCodeChanged?: (code: string) => void;
}

export const OTPInput = ({
  length = 5,
  onCodeFilled,
  onCodeChanged,
}: OTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputs = useRef<TextInput[]>([]);

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    const fullCode = newOtp.join("");
    onCodeChanged?.(fullCode);

    if (text.length !== 0 && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    if (fullCode.length === length) {
      onCodeFilled?.(fullCode);
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <View
          key={index}
          style={[
            styles.inputWrapper,
            digit ? styles.activeInputWrapper : null,
          ]}
        >
          <TextInput
            ref={(ref) => {
              if (ref) inputs.current[index] = ref;
            }}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            autoFocus={index === 0}
            selectionColor={Colors.light.tint}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginVertical: 24,
  },
  inputWrapper: {
    flex: 1,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.light.backgroundSecondary,
    borderWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  activeInputWrapper: {
    borderColor: Colors.light.tint,
    backgroundColor: Colors.light.background,
  },
  input: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.text,
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
});

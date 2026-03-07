import { Colors } from "@/constants";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function TopBar({
  showBackButton = true,
  backPress,
}: {
  showBackButton?: boolean;
  backPress?: () => void;
}) {
  return (
    <View
      style={[
        styles.container,
        { justifyContent: showBackButton ? "space-between" : "flex-end" },
      ]}
    >
      {showBackButton && (
        <TouchableOpacity
          onPress={backPress}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <FontAwesome5
            name="chevron-left"
            size={20}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
      )}

      <View style={styles.questionMarkContainer}>
        <MaterialIcons
          name="question-mark"
          size={24}
          color={Colors.light.textSecondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 40,
  },
  questionMarkContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
  },
});

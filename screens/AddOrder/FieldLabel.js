import { View, Text, StyleSheet } from "react-native";

export default FieldLabel = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "15%",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
  },
});

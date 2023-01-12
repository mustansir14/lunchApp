import { Text, StyleSheet } from "react-native";

export default ErrorText = ({ text }) => {
  return <Text style={styles.container}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    color: "red",
  },
});

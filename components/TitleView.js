import { View, StyleSheet, Text } from "react-native";

export default TitleView = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "20%",
  },
  text: {
    fontSize: 30,
  },
});

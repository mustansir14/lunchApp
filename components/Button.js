import { Pressable, Text, StyleSheet } from "react-native";
import ColorConstants from "../constants/ColorConstants";

export default Button = ({ text, onPress, width, icon }) => {
  const otherStyles = {
    width,
  };
  return (
    <Pressable style={[styles.button, otherStyles]} onPress={onPress}>
      {icon ? icon : <Text style={styles.textStyle}>{text}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: ColorConstants.COLOR_DARK,
    elevation: 2,
    marginHorizontal: "1%",
    marginVertical: "5%",
    height: 35,
    justifyContent: "center",
    alignContent: "center",
  },
  textStyle: {
    color: ColorConstants.COLOR_TEXT_LIGHT,
    fontWeight: "bold",
    textAlign: "center",
  },
});

import { TextInput, StyleSheet } from "react-native";
import ColorConstants from "../constants/ColorConstants";

export default FormInput = ({
  onChange,
  value,
  placeholder,
  keyboardType,
  secureTextEntry,
  editable = true,
}) => {
  return (
    <TextInput
      style={[styles.input, { borderWidth: editable ? 1 : 0 }]}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      editable={editable}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: "5%",
    marginVertical: 10,
    padding: 10,
    minHeight: 40,
    borderRadius: 5,
    width: "100%",
    color: ColorConstants.COLOR_TEXT_DARK,
  },
});

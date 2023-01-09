import { TextInput, StyleSheet } from "react-native";

export default FormInput = ({
  onChange,
  value,
  placeholder,
  width,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={[styles.input]}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: "5%",
    marginVertical: 10,
    padding: 10,
    minHeight: 40,
    borderRadius: 5,
    width: "100%",
  },
});

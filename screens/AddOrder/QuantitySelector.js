import NumericInput from "react-native-numeric-input";
import { View, StyleSheet } from "react-native";
import ColorConstants from "../../constants/ColorConstants";

export default QuantitySelector = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <NumericInput
        value={value}
        onChange={onChange}
        minValue={1}
        maxValue={100}
        totalWidth={80}
        rounded={true}
        leftButtonBackgroundColor={ColorConstants.COLOR_DARK}
        rightButtonBackgroundColor={ColorConstants.COLOR_DARK}
        iconStyle={{ color: ColorConstants.COLOR_TEXT_LIGHT }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "10%",
  },
});

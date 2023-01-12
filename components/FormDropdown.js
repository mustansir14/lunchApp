import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import ColorConstants from "../constants/ColorConstants";

export default FormDropdown = ({ items, value, setValue, placeHolder }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
        mode={"dropdown"}
      >
        <Picker.Item
          value=""
          label={placeHolder}
          style={styles.itemContainer}
        />
        {items.map((item, index) => (
          <Picker.Item
            label={item.label}
            value={item.value}
            key={index}
            style={styles.itemContainer}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 10,
    minHeight: 40,
    borderRadius: 5,
    width: "100%",
  },
  itemContainer: {
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
  },
});

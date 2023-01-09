import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default FormDropdown = ({
  items,
  setItems,
  value,
  setValue,
  placeHolder,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={styles.dropDownContainerStyle}
      style={styles.container}
      placeholder={placeHolder}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dropDownContainerStyle: {
    backgroundColor: "white",
    zIndex: 10000,
    elevation: 1000,
  },
});

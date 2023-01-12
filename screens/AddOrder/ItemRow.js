import { View, StyleSheet } from "react-native";
import FormDropdown from "../../components/FormDropdown";
import { Controller } from "react-hook-form";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/AntDesign";
import ColorConstants from "../../constants/ColorConstants";
import QuantitySelector from "./QuantitySelector";

export default ItemRow = ({
  control,
  id,
  label,
  placeHolder,
  nameItem,
  nameQuantity,
  dropDownItems,
  onPressDelete,
}) => {
  return (
    <View style={styles.rowContainer} key={id}>
      <FieldLabel text={label} />
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <FormDropdown
                items={dropDownItems}
                placeHolder={placeHolder}
                value={value}
                setValue={onChange}
              />
            );
          }}
          name={nameItem}
        />
      </View>
      <View style={styles.quantityContainer}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <QuantitySelector value={value} onChange={onChange} />
          )}
          name={nameQuantity}
        />
        <Button
          icon={
            <Icon
              name={"delete"}
              size={12}
              color={ColorConstants.COLOR_TEXT_LIGHT}
            />
          }
          onPress={onPressDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    width: "15%",
    alignItems: "center",
    marginRight: "5%",
  },
  inputContainer: {
    width: "50%",
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButtonContainer: {
    marginLeft: 35,
  },
});

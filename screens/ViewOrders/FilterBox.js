import { View, StyleSheet, Text } from "react-native";
import FormDropdown from "../../components/FormDropdown";
import DataConstants from "../../constants/DataConstants";

export default FilterBox = ({
  foodFilter,
  setFoodFilter,
  drinkFilter,
  setDrinkFilter,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.rowChild1}>
          <Text>Filter by Food</Text>
        </View>
        <View style={styles.rowChild2}>
          <FormDropdown
            items={DataConstants.FOOD_TYPES}
            placeHolder={"Select food"}
            value={foodFilter}
            setValue={setFoodFilter}
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.rowChild1}>
          <Text>Filter by Drink</Text>
        </View>
        <View style={styles.rowChild2}>
          <FormDropdown
            items={DataConstants.DRINK_TYPES}
            placeHolder={"Select drink"}
            value={drinkFilter}
            setValue={setDrinkFilter}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowChild1: {
    width: "30%",
  },
  rowChild2: {
    width: "60%",
  },
});

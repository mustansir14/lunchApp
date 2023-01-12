import { View, Text, StyleSheet } from "react-native";
import ColorConstants from "../../constants/ColorConstants";
import DataConstants from "../../constants/DataConstants";

export default Order = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text>
            Ordered by {order.user?.name || "-"} at{" "}
            {order.orderDate.slice(0, 10)}
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Text style={[styles.billHeader, styles.text]}>Foods</Text>
            {order.foods.map((food, index) => (
              <Text key={index} style={styles.text}>
                {food.foodType}
              </Text>
            ))}
          </View>
          <View style={styles.columnContainer}>
            <Text style={[styles.billHeader, styles.text]}>Price</Text>
            {order.foods.map((food, index) => (
              <Text key={index} style={styles.text}>
                {
                  DataConstants.FOOD_PRICES.find(
                    (x) => x.type === food.foodType
                  ).price
                }
              </Text>
            ))}
          </View>
          <View style={styles.columnContainer}>
            <Text style={[styles.billHeader, styles.text]}>Quantity</Text>
            {order.foods.map((food, index) => (
              <Text key={index} style={styles.text}>
                {food.quantity}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Text style={[styles.billHeader, styles.text]}>Drinks</Text>
            {order.drinks.map((drink, index) => (
              <Text key={index} style={styles.text}>
                {drink.drinkType}
              </Text>
            ))}
          </View>
          <View style={styles.columnContainer}>
            <Text style={[styles.billHeader, styles.text]}>Price</Text>
            {order.drinks.map((drink, index) => (
              <Text key={index} style={styles.text}>
                {
                  DataConstants.DRINK_PRICES.find(
                    (x) => x.type === drink.drinkType
                  ).price
                }
              </Text>
            ))}
          </View>
          <View style={styles.columnContainer}>
            <Text style={[styles.billHeader, styles.text]}>Quantity</Text>
            {order.drinks.map((drink, index) => (
              <Text key={index} style={styles.text}>
                {drink.quantity}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.text}>Total Bill:</Text>
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.text}>{order.bill}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorConstants.COLOR_LIGHT,
    marginVertical: "2%",
    padding: "5%",
    borderRadius: 5,
    width: "100%",
  },
  innerContainer: {
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
    width: "100%",
    padding: 10,
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  columnContainer: {
    flexDirection: "column",
    width: "33%",
  },
  billHeader: {
    backgroundColor: ColorConstants.COLOR_DARK,
    color: ColorConstants.COLOR_TEXT_LIGHT,
    padding: 2,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
  },
});

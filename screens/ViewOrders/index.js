import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import AppRoutes from "../../constants/AppRoutes";
import ColorConstants from "../../constants/ColorConstants";
import ListOrdersBox from "./ListOrdersBox";
import { useSelector, useDispatch } from "react-redux";
import { loadOrders } from "../../store/actions/OrderActions";
import FilterBox from "./FilterBox";
import { logout } from "../../store/actions/UserActions";

export default ViewOrdersScreen = ({ navigation }) => {
  const [foodFilter, setFoodFilter] = useState("");
  const [drinkFilter, setDrinkFilter] = useState("");
  const [displayedOrders, setDisplayedOrders] = useState([]);

  const addOrderOnPress = () => {
    navigation.navigate(AppRoutes.AddOrder);
  };

  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  useEffect(() => {
    let tempOrders = [...orders];
    if (foodFilter) {
      tempOrders = tempOrders.filter((order) => {
        for (const food of order.foods) {
          if (food.foodType === foodFilter) return true;
        }
        return false;
      });
    }
    if (drinkFilter) {
      tempOrders = tempOrders.filter((order) => {
        for (const drink of order.drinks) {
          if (drink.drinkType === drinkFilter) return true;
        }
        return false;
      });
    }
    setDisplayedOrders(tempOrders.reverse());
  }, [foodFilter, drinkFilter, orders]);

  const logoutOnPress = async () => {
    await dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button text={"Add Order"} onPress={addOrderOnPress} width={"40%"} />
        <Button text={"Log out"} onPress={logoutOnPress} width={"40%"} />
      </View>
      <FilterBox
        foodFilter={foodFilter}
        setFoodFilter={setFoodFilter}
        drinkFilter={drinkFilter}
        setDrinkFilter={setDrinkFilter}
      />
      <ListOrdersBox orders={displayedOrders} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
    paddingHorizontal: "10%",
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});

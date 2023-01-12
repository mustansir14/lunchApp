import AddOrderForm from "./AddOrderForm";
import { addOrder } from "../../store/actions/OrderActions";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import ColorConstants from "../../constants/ColorConstants";
import { useState } from "react";
import ErrorText from "../../components/ErrorText";
import AppRoutes from "../../constants/AppRoutes";

export default function AddOrderScreen({ navigation }) {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const onSubmit = async (data) => {
    try {
      await dispatch(
        addOrder({
          ...data,
          user: loggedInUser,
          orderDate: data.orderDate.toLocaleDateString(),
        })
      );
      console.log("Success");
      setError("");
      navigation.navigate(AppRoutes.ViewOrders);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <View style={styles.container}>
      {error && <ErrorText text={error} />}
      <AddOrderForm onSubmit={onSubmit} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
    justifyContent: "flex-start",
  },
});

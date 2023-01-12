import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/UserActions";
import TitleView from "../../components/TitleView";
import ColorConstants from "../../constants/ColorConstants";
import LoginForm from "./LoginForm";
import { useState } from "react";
import ErrorText from "../../components/ErrorText";
import AppRoutes from "../../constants/AppRoutes";

export default LoginScreen = ({ navigation }) => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data));
      console.log("Success");
      setError("");
      navigation.navigate(AppRoutes.ViewOrders);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <View style={styles.container}>
      <TitleView text={"Log in to Folio3 Lunch"} />
      {error && <ErrorText text={error} />}
      <LoginForm navigation={navigation} onSubmit={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
    paddingHorizontal: "10%",
  },
});

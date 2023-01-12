import RegisterForm from "./RegisterForm";
import TitleView from "../../components/TitleView";
import { createUser } from "../../store/actions/UserActions";
import { useDispatch } from "react-redux";
import { View, StyleSheet } from "react-native";
import ColorConstants from "../../constants/ColorConstants";
import { useState } from "react";
import AppRoutes from "../../constants/AppRoutes";
import ErrorText from "../../components/ErrorText";

export default function RegisterScreen({ navigation }) {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      await dispatch(createUser(data));
      console.log("Success");
      navigation.navigate(AppRoutes.Login);
      setError("");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <View style={styles.container}>
      <TitleView text={"Sign up to Folio3 Lunch"} />
      {error && <ErrorText text={error} />}
      <RegisterForm onSubmit={onSubmit} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
});

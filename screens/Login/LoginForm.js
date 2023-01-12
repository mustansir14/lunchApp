import { View, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/Button";
import ErrorText from "../../components/ErrorText";
import FormInput from "../../components/FormInput";
import DataConstants from "../../constants/DataConstants";
import AppRoutes from "../../constants/AppRoutes";

export default LoginForm = ({ onSubmit, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <FormInput
              onChange={onChange}
              value={value}
              placeholder={"Email"}
            />
          )}
          name="email"
        />
        {errors.email && <ErrorText text={errors.email.type} />}
      </View>
      <View style={styles.fieldContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <FormInput
              onChange={onChange}
              value={value}
              placeholder={"Password"}
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {errors.password && <ErrorText text={errors.password.type} />}
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Submit" onPress={handleSubmit(onSubmit)} width={"30%"} />
        <Button
          text="Sign up"
          onPress={() => navigation.navigate(AppRoutes.Register)}
          width={"30%"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  fieldContainer: {
    width: "100%",
    marginVertical: "3%",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
  },
});

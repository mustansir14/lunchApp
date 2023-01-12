import { View, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/Button";
import ErrorText from "../../components/ErrorText";
import FormInput from "../../components/FormInput";
import FormDropdown from "../../components/FormDropdown";
import DataConstants from "../../constants/DataConstants";
import AppRoutes from "../../constants/AppRoutes";

export default RegisterForm = ({ onSubmit, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      employeeID: "",
      name: "",
      email: "",
      gender: "",
      phone: "",
      password: "",
      confirmPassword: "",
      division: "",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.employeeIDContainer}>
          <Controller
            control={control}
            rules={{
              maxLength: 4,
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder={"Emp ID"}
                keyboardType={"numeric"}
              />
            )}
            name="employeeID"
          />
          {errors.employeeID && <ErrorText text={errors.employeeID.type} />}
        </View>
        <View style={styles.nameContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder={"Name"}
              />
            )}
            name="name"
          />
          {errors.name && <ErrorText text={errors.name.type} />}
        </View>
      </View>
      <View style={styles.divisionContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange } }) => (
            <FormDropdown
              items={DataConstants.DIVISIONS}
              value={value}
              setValue={onChange}
              placeHolder="Select Division"
            />
          )}
          name="division"
        />
        {errors.division && <ErrorText text={errors.division.type} />}
      </View>
      <View style={styles.emailContainer}>
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
      <View style={styles.rowContainer}>
        <View style={styles.phoneContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder={"Phone"}
              />
            )}
            name="phone"
          />
          {errors.phone && <ErrorText text={errors.phone.type} />}
        </View>
        <View style={styles.genderContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormDropdown
                items={DataConstants.GENDERS}
                value={value}
                setValue={onChange}
                placeHolder={"Gender"}
              />
            )}
            name="gender"
          />
          {errors.gender && <ErrorText text={errors.gender.type} />}
        </View>
      </View>
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
      <Controller
        control={control}
        rules={{
          required: true,
          validate: (val) => val === watch("password"),
        }}
        render={({ field: { onChange, value } }) => (
          <FormInput
            onChange={onChange}
            value={value}
            placeholder={"Confirm Password"}
            secureTextEntry={true}
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && (
        <ErrorText text={errors.confirmPassword.type} />
      )}
      <View style={styles.buttonContainer}>
        <Button text="Submit" onPress={handleSubmit(onSubmit)} width={"30%"} />
        <Button
          text="Login"
          onPress={() => navigation.navigate(AppRoutes.Login)}
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
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  employeeIDContainer: {
    width: "30%",
  },
  nameContainer: {
    width: "65%",
  },
  phoneContainer: {
    width: "55%",
  },
  genderContainer: {
    width: "40%",
  },
  divisionContainer: {
    width: "100%",
  },
  emailContainer: {
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

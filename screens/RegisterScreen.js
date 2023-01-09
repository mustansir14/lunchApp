import { Text, View, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import FormInput from "../components/FormInput";
import FormDropdown from "../components/FormDropdown";

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
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
  const [genders, setGenders] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);
  const [divisions, setDivisions] = useState([
    { label: "App Dev", value: "App Dev" },
    { label: "Agtech", value: "Agtech" },
    { label: "Digital Health", value: "Digital Health" },
    { label: "Ecommerce", value: "Ecommerce" },
    { label: "Dynamics", value: "Dynamics" },
    { label: "HR", value: "HR" },
    { label: "Marketing", value: "Marketing" },
    { label: "Finance", value: "Finance" },
    { label: "NetSuite", value: "NetSuite" },
  ]);
  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.employeeIDContainer}>
          <Controller
            control={control}
            rules={{
              maxLength: 4,
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
          {errors.name && <Text>This is required.</Text>}
        </View>
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onChange } }) => (
          <FormDropdown
            items={divisions}
            setItems={setDivisions}
            value={value}
            setValue={onChange}
            placeHolder="Division"
          />
        )}
        name="division"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <FormInput onChange={onChange} value={value} placeholder={"Email"} />
        )}
        name="email"
      />
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
        </View>
        <View style={styles.genderContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormDropdown
                items={genders}
                setItems={setGenders}
                value={value}
                setValue={onChange}
                placeHolder={"Gender"}
              />
            )}
            name="gender"
          />
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
      <Controller
        control={control}
        rules={{
          required: true,
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

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  employeeIDContainer: {
    width: "30%",
  },
  nameContainer: {
    width: "65%",
  },
  phoneContainer: {
    width: "65%",
  },
  genderContainer: {
    width: "35%",
  },
});

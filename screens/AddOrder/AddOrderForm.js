import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Button from "../../components/Button";
import ErrorText from "../../components/ErrorText";
import FormInput from "../../components/FormInput";
import FieldLabel from "./FieldLabel";
import DataConstants from "../../constants/DataConstants";
import ItemRow from "./ItemRow";
import { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default AddOrderForm = ({ onSubmit, navigation }) => {
  const {
    control,
    handleSubmit,
    formState,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      orderDate: new Date(),
      foods: [
        {
          foodType: "",
          quantity: 1,
        },
      ],
      drinks: [
        {
          drinkType: "",
          quantity: 1,
        },
      ],
      bill: 0,
    },
  });

  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const {
    fields: foods,
    append: appendFood,
    remove: removeFood,
  } = useFieldArray({
    control,
    name: "foods",
  });

  const {
    fields: drinks,
    append: appendDrink,
    remove: removeDrink,
  } = useFieldArray({
    control,
    name: "drinks",
  });

  const onPressAddFood = () => {
    appendFood({
      foodType: "",
      quantity: 1,
    });
  };

  const onPressAddDrink = () => {
    appendDrink({
      drinkType: "",
      quantity: 1,
    });
  };

  const onPressFoodDelete = (index) => {
    if (watch("foods").length > 1) {
      removeFood(index);
    }
  };

  const onPressDrinkDelete = (index) => {
    removeDrink(index);
  };

  const calculateBill = () => {
    let bill = 0;
    for (const food of watch("foods")) {
      if (food.foodType) {
        bill +=
          DataConstants.FOOD_PRICES.find((x) => x.type === food.foodType)
            .price * food.quantity;
      }
    }
    for (const drink of watch("drinks")) {
      if (drink.drinkType) {
        bill +=
          DataConstants.DRINK_PRICES.find((x) => x.type === drink.drinkType)
            .price * drink.quantity;
      }
    }
    setValue("bill", bill);
  };

  useEffect(() => {
    calculateBill();
  }, [formState]);

  return (
    <View style={styles.container}>
      <View style={styles.addButtonsContainer}>
        <Button text={"Add Food"} onPress={onPressAddFood} />
        <Button text={"Add Drink"} onPress={onPressAddDrink} />
      </View>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <View style={styles.rowContainer}>
          <FieldLabel text={"Date"} />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => {
              return (
                <View style={styles.dateRowContainer}>
                  <View style={styles.inputContainer}>
                    <FormInput
                      value={value.toLocaleDateString()}
                      onChange={onChange}
                      editable={false}
                    />
                  </View>
                  <Button
                    text={"Change Date"}
                    onPress={() => setShowDateTimePicker(true)}
                  />
                  {showDateTimePicker && (
                    <DateTimePicker
                      value={value}
                      onChange={(event, date) => {
                        setShowDateTimePicker(false);
                        onChange(date);
                      }}
                    />
                  )}
                </View>
              );
            }}
            name="orderDate"
          />
          {errors.orderDate && <ErrorText text={errors.orderDate.type} />}
        </View>
        {foods.map((food, index) => (
          <ItemRow
            control={control}
            id={food.id}
            key={food.id}
            dropDownItems={DataConstants.FOOD_TYPES}
            label={`Food ${index + 1}`}
            nameItem={`foods.${index}.foodType`}
            nameQuantity={`foods.${index}.quantity`}
            placeHolder={"Select Food"}
            onPressDelete={() => onPressFoodDelete(index)}
          />
        ))}
        {drinks.map((drink, index) => (
          <ItemRow
            control={control}
            dropDownItems={DataConstants.DRINK_TYPES}
            id={drink.id}
            key={drink.id}
            label={`Drink ${index + 1}`}
            nameItem={`drinks.${index}.drinkType`}
            nameQuantity={`drinks.${index}.quantity`}
            placeHolder={"Select Drink"}
            onPressDelete={() => onPressDrinkDelete(index)}
          />
        ))}
        <View style={styles.rowContainer}>
          <FieldLabel text={"Bill (Rs)"} />
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <FormInput
                    value={value.toString()}
                    onChange={onChange}
                    editable={false}
                  />
                );
              }}
              name="bill"
            />

            {errors.orderDate && <ErrorText text={errors.orderDate.type} />}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Place Order"
            onPress={handleSubmit(onSubmit)}
            width={"50%"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "space-between",
    margin: "5%",
    marginBottom: "15%",
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    width: "50%",
  },
  addButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  dateRowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "15%",
  },
});

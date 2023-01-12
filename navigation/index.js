import RegisterScreen from "../screens/Register";
import LoginScreen from "../screens/Login";
import ViewOrdersScreen from "../screens/ViewOrders";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppRoutes from "../constants/AppRoutes";
import { useSelector, useDispatch } from "react-redux";
import { userAutoLoggedIn } from "../store/actions/UserActions";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import ColorConstants from "../constants/ColorConstants";
import AddOrderScreen from "../screens/AddOrder";

const Stack = createNativeStackNavigator();

export default MainNavigation = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkUser() {
      try {
        await dispatch(userAutoLoggedIn());
      } catch (error) {
        console.log(error);
      }
    }
    checkUser();
  }, []);

  return (
    <NavigationContainer>
      {loggedInUser ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
          }}
        >
          <Stack.Screen
            name={AppRoutes.ViewOrders}
            component={ViewOrdersScreen}
          />
          <Stack.Screen name={AppRoutes.AddOrder} component={AddOrderScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={AppRoutes.Register} component={RegisterScreen} />
          <Stack.Screen name={AppRoutes.Login} component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: ColorConstants.COLOR_DARK,
  },
  headerTitle: {
    color: ColorConstants.COLOR_TEXT_LIGHT,
  },
});

import { FlatList, StyleSheet } from "react-native";
import Order from "./Order";

export default ListOrdersBox = ({ orders }) => {
  const renderItem = ({ item }) => {
    return <Order order={item} />;
  };
  return (
    <FlatList style={styles.container} data={orders} renderItem={renderItem} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

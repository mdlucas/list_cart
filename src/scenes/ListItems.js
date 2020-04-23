import * as React from 'react';
import {SafeAreaView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import products from '../mock/products.json';
import Item from '../components/item';
import {addNewItem, removeItem} from '../store/ducks/cart';

const mapDispatch = {addNewItem, removeItem};

const ListItem = ({itemsCart, addNewItem, removeItem, navigation}) => {
  const getQuantity = id => (itemsCart[id] ? itemsCart[id].quantity : 0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={26} color="#DC143C" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => `${item.id}-item`}
        renderItem={({item}) => (
          <Item
            {...item}
            quantity={getQuantity(item.id)}
            add={() => addNewItem(item)}
            remove={() => removeItem(item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
      marginRight: 15
  }
});

export default connect(
  state => ({itemsCart: state.itemsCart}),
  mapDispatch,
)(ListItem);

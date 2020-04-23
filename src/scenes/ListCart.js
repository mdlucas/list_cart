import * as React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import products from '../mock/products.json';
import Item from '../components/item';
import {addNewItem, removeItem} from '../store/ducks/cart';

const mapDispatch = {addNewItem, removeItem};

const ListItem = ({itemsCart, addNewItem, removeItem}) => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={itemsCart}
      keyExtractor={item => `${item.id}-item`}
      renderItem={({item}) => (
        <Item
          {...item}
          add={() => addNewItem(item)}
          remove={() => removeItem(item)}
        />
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(
  state => ({itemsCart: Object.values(state.itemsCart)}),
  mapDispatch,
)(ListItem);

import * as React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  item: {
    padding: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
  },
  itemBody: {
    flex: 1,
    paddingLeft: 12,
  },
  itemContentRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  quantity: {
    color: 'white',
    fontSize: 14,
  },
  rounded: {
    marginHorizontal: 10,
    backgroundColor: '#DC143C',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

const Item = ({name, price, quantity, add, remove, image}) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.itemBody}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>R$ {price}</Text>
      </View>
      <View style={styles.itemContentRight}>
        {quantity > 0 && (
          <TouchableOpacity onPress={remove}>
            <Icon name="minus" size={22} color="black" />
          </TouchableOpacity>
        )}
        <View style={styles.rounded}>
          <Text style={styles.quantity}>{quantity}</Text>
        </View>

        <TouchableOpacity onPress={add}>
          <Icon name="plus" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;

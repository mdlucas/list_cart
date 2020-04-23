import 'react-native';
import reducer, {
  initialState,
  addNewItem,
  removeItem,
  selectItems,
} from '../src/store/ducks/cart';
import products from '../src/mock/products.json';

// Note: test renderer must be required after react-native.

describe('cart slice', () => {
  describe('reducer, actions', () => {
    it('teste reducer', () => {
      // Arrange
      const nextState = initialState;

      // Act
      const result = reducer(undefined, {});

      // Assert
      expect(result).toEqual(nextState);
    });

    it('adicionar e remover novo item', () => {
      const mockAdd = {[products[0].id]: {...products[0], quantity: 2}};
      const mockRemove = {[products[0].id]: {...products[0], quantity: 1}};
      
      let nextState = reducer(initialState, addNewItem(products[0]));
      nextState = reducer(nextState, addNewItem(products[0]));
      expect(selectItems(nextState)).toEqual(mockAdd);
      nextState = reducer(nextState, removeItem(products[0]));
      expect(selectItems(nextState)).toEqual(mockRemove);
      nextState = reducer(nextState, removeItem(products[0]));
      expect(selectItems(nextState)).toEqual({});
    });
  });
});

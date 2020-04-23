import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListItem from './scenes/ListItems';
import ListCart from './scenes/ListCart';
import store from './store/createStore';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ListItem}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Cart"
            component={ListCart}
            options={{title: 'Carrinho', headerBackTitle: 'Voltar'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

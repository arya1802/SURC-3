// src/views/Home.js
import React from 'react';
import { View, StyleSheet, ScrollView,Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import Product from '../components/Product';

const BASE_URL = 'https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist';

const products = [
  {
    name: 'Nike Shoes',
    price: 449.99,
    img: `${BASE_URL}/1.png`
  },
  {
    name: 'Shoes 2',
    price: 389.99,
    img: `${BASE_URL}/2.png`
  },
  {
    name: 'Shoes 3',
    price: 249.99,
    img: `${BASE_URL}/3.png`
  },
  {
    name: 'Shoes 4',
    price: 185.99,
    img: `${BASE_URL}/4.png`
  },
];

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          flexGrow: 0,
          width: "100%",
          height: "100%",
        }}>
        {
          products.map((product, index) => {
            return(
              <View style={styles.row} key={index}>
                  <View style={styles.col}>
                    <Product/>
                  </View>
              </View>
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
},
col: {
    flex: 1,
},
});

export default withNavigation(HomeScreen);
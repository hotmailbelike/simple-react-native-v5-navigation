import React from 'react';
import {View, Text} from 'native-base';

const Home2 = (props) => {
  const {text, text2} = props.route.params;
  return (
    <View>
      <Text>{text}</Text>
      <Text>{text2}</Text>
    </View>
  );
};

export default Home2;

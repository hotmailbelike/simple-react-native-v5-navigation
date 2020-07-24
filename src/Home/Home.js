import React from 'react';
import {View, Text, Button} from 'native-base';

import {navigateTo} from '../utils/util-functions'; //props,screenName,paramsObj

const Home = (props) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() =>
          navigateTo(props, 'Home2', {
            text: 'From Navigation Params',
            text2: 'Again from Nav Params',
          })
        }>
        <Text>Home2</Text>
      </Button>
    </View>
  );
};

export default Home;

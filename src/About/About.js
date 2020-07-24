import React from 'react';
import {View, Text, Button} from 'native-base';

import {navigateTo} from '../utils/util-functions'; //props,screenName,paramsObj

const About = (props) => {
  return (
    <View>
      <Text>About</Text>
      <Button
        onPress={() => {
          navigateTo(props, 'About2');
        }}>
        <Text>About2</Text>
      </Button>
    </View>
  );
};

export default About;

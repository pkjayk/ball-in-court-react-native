import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

class Label extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class Labels extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Label name='Blah' />
        <Label name='Blah Blah' />
        <Label name='Blah Blah Blah' />
      </View>
    );
  }
}

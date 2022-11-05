import * as React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import Wallet from './Wallet';
import AlarmBack from './AlarmBack';
import AlarmContainer from './AlarmContainer';

const Home = () => {

  return (
    <>
        <Wallet />
        <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'flex-end', marginBottom: 150}}>
            <AlarmContainer alarm={"07: 30"}/>
            <AlarmContainer alarm={"07: 30"}/>
            <AlarmContainer alarm={"07: 30"}/>
        </ScrollView>
    </>
  );
}

export default Home;
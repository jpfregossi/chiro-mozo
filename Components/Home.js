import * as React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import Wallet from './Wallet';
import WalletBack from './WalletBack';
import WalletContainer from './WalletContainer';

const Home = () => {

  return (
    <>
        <Wallet />
        <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'flex-end', marginBottom: 150}}>
            <WalletContainer alarm={"07: 30"}/>
            <WalletContainer alarm={"07: 30"}/>
            <WalletContainer alarm={"07: 30"}/>
        </ScrollView>
    </>
  );
}

export default Home;
import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Button, StyleSheet, View, Switch, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import Wallet from './Wallet';
import AlarmContainer from './AlarmContainer';
import BotonContainer from './BotonContainer';
import TestComponent from './TestComponent';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, selectAllUsers } from '../store/users';

import FeedbackLogo from '../assets/comentarios.png';
import HomeLogo from '../assets/home.png';
import ProfileLogo from '../assets/perfil.png';
import NavButtonBack from './NavButtonBack';

const Home = ({ navigation }) => {
  const [emitOn, setEmitOn] = useState(false);
  const { loading } = useSelector((state) => state.users);
  const user = useSelector(selectAllUsers)[0];

  const { width, height } = useWindowDimensions();

  /*if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }*/

  return (
    <>
      <View style={styles.wallet}>
        <Wallet user={user} />
      </View>
      <View style={styles.resto}>
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', marginBottom: 200 }}>
          <View style={{ width: 400, height: 900 }}>
            <Switch style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }, { rotate: '90deg' }] }}
              value={emitOn} onValueChange={() => setEmitOn(!emitOn)} />
          </View>
          {user && user.feedback.map((feed) => {
            return (
              <AlarmContainer feed={feed} />
            )
          })}
          <Button
            title="Perfil"
            onPress={() =>
              navigation.navigate('TestComponent2')
            }
          />
        </ScrollView>
      </View>
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={() => console.log("Clickeó botón Comments!")}
          accessibilityLabel="depositar"
        >
          <View style={styles.buttonContainer}>
            <NavButtonBack />
            <Image
              style={styles.buttonLogo}
              source={FeedbackLogo} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Clickeó botón Home!")}
          accessibilityLabel="depositar"
        >
          <View style={styles.buttonContainer}>
            <NavButtonBack pressed={true}/>
            <Image
              style={styles.buttonLogo}
              source={HomeLogo} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Clickeó botón Profile!")}
          accessibilityLabel="depositar"
        >
          <View style={styles.buttonContainer}>
            <NavButtonBack />
            <Image
              style={styles.buttonLogo}
              source={ProfileLogo} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  wallet: {
    height: 170,
  },
  resto: {
    height: 750,
  },
  navButton: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Ubuntu',
    marginTop: -6,
    marginLeft: 6,
    lineHeight: 29,
    color: 'white',
    width: 140,
    borderRadius: 5,
    height: 30,
    textAlign: 'center',
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    height: 112,
    width: '95%',
    marginHorizontal: '2.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 112,
    height: 112,
    borderRadius: 15,
  },
  buttonLogo: {
    height: 26,
    width: 26,
    margin: 43,
  }
});
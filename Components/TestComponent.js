import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setMessage } from '../store/message';

const TestComponent = () => {
    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.message);
  
    const handlePress = () => {
      dispatch(setMessage('Message from Component'));
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
        <Button title={'Set Message'} onPress={handlePress} />
      </View>
    );
  };

  /*
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const bodyParameters = {
    key: "value"
  };

  Axios.post(
    'http://localhost:8000/api/v1/get_token_payloads',
    bodyParameters,
    config
  ).then(console.log).catch(console.log);
  */
  
  export default TestComponent;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    text: {
      fontSize: 18
    }
  });
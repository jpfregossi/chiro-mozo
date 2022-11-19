import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Button,
    Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectAllUsers, logOut } from '../store/users';

const TestComponent2 = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.users);
    const users = useSelector(selectAllUsers);
    console.log("\n\nUsers TestComponents: ", users);

    /*useEffect(() => {
        dispatch(fetchUsers(users[0].accessToken));
    }, []);*/

    if (loading) {
        return <ActivityIndicator size="large" style={styles.loader} />;
    }

    return (
        <View>
            <Button title={'Reload'} onPress={() => dispatch(fetchUsers(users[0].accessToken))} />
            {users.map((user) => {
                return (
                    <View style={styles.container} key={user.id}>
                        <View>
                            <View style={styles.dataContainer}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: user.profilePic,
                                      }}
                                />
                            </View>
                            <View style={styles.dataContainer}>
                                <Text>
                                    {user.username}
                                </Text>
                            </View>
                        </View>
                    </View>
                );
            })}
            <Button title={'Log Off'} onPress={() => dispatch(logOut())} />
        </View>
         
    );
};

export default TestComponent2;

const styles = StyleSheet.create({
    loader: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    dataContainer: {
        flexDirection: 'row'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    }
});

import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../store';
import { fetchUsers, loginUser } from '../store/users';

// Logo....
import Logo from '../assets/chat.png';
import Home from './Home';
import TestComponent2 from './TestComponent2';
import TokenStore from '../store/tokenStore';
import Depositar from './WalletCard/Depositar';

const BGColor = "#FC6868";

const Stack = createNativeStackNavigator();

export default function SplashScreen() {
    const dispatch = useDispatch();
    const [ hasToken, setHasToken ] = useState(false); 
    const { loading, authenticated } = useSelector((state) => state.users);
    const user = useSelector((state) => state.users.currentUser);
    console.log("\n: ", user);
    console.log("\nLoading: ", loading);
    console.log("\nAuth: ", authenticated);

    /*useEffect(() => {
        async function fetchData() {
            try {
                const userToken = await TokenStore.load();
                if (userToken != null) {
                    console.log("\Token Retrieved: ", userToken.token);
                    setHasToken(true);
                    dispatch(fetchUsers(userToken.token));

                    const dataInterval = setInterval(() => 
                        dispatch(fetchUsers(userToken.token))
                        , 60 * 1000);

                    return () => clearInterval(dataInterval);
                }
            } catch (e) {
            }
        }
        fetchData();
    }, []);*/
    useEffect(() => {
        async function fetchData() {
            try {
                const userToken = await TokenStore.load();
                if (userToken != undefined && userToken != null && userToken.token) {
                    console.log("Token Retrieved: ", userToken.token);
                    dispatch(fetchUsers(userToken.token));
                }
                setHasToken(true);
            } catch (e) {
            }
        }
        fetchData();
    }, []);

    // SafeArea Value...
    const edges = useSafeAreaInsets();

    // Animation Values....
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down Both logo and Title...
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    // Offset Animation....
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    // Animating COntent...
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    // Animation Done....
    useEffect(() => {
        // Starting Animation after 500ms....
        setTimeout(() => {

            // Parallel Animation...
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        // For same Height for non safe Area Devices...
                        toValue: -Dimensions.get('window').height + (edges.top),
                        delay: 1300,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        // Scaling to 0.35
                        toValue: 1.6,
                        delay: 700,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        // Moving to Right Most... (Dimensions.get("window").width / 2)
                        toValue: {
                            x: 0,
                            y: -(Dimensions.get("window").height / 2) - 75
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        delay: 500,
                        useNativeDriver: true
                    }
                )
            ])
                .start();

        }, 500);

    }, [])

    const [username, onChangeUsername] = React.useState("Caro94");
    const [password, onChangePassword] = React.useState("1234567890");

    /*if (loading && !authenticated && hasToken) {
        return <ActivityIndicator size="large" style={styles.loader} />;
    }
    else */
    console.log("!authenticated: " + !authenticated + " hasToken: " + hasToken + " !loading: " + !loading);
    if (!authenticated && hasToken && !loading) {
        return (
            <View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: BGColor
            }}>
                <View style={styles.login}>
                    <Text style={styles.title}>Logueate!</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeUsername}
                        placeholder="nombre de usuario"
                        value={username}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="contraseña"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => dispatch(loginUser({
                            username: username,
                            password: password,
                        }))}
                        accessibilityLabel="ingresar"
                    >
                        <Text style={styles.text}>Ingresa!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.register}>
                    <TouchableOpacity
                        style={styles.button}
                        accessibilityLabel="registrarse"
                    >
                        <Text style={styles.text}>Registrate!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    // Going to Move Up like Nav Bar...
    return (

        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#E6EAF3',
        }}>
            <Animated.View style={{
                flex: 1,
                backgroundColor: BGColor,
                zIndex: 1,
                transform: [
                    { translateY: startAnimation }
                ]
            }}>

                <Animated.View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Animated.Image source={Logo} style={{
                        width: 200,
                        height: 200,
                        y: 0,
                        marginTop: (Dimensions.get("window").height + 150),
                        transform: [
                            { translateY: moveLogo.y },
                            { scale: scaleLogo },
                        ]
                    }}></Animated.Image>

                </Animated.View>

            </Animated.View>

            <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
                transform: [
                    { translateY: contentTransition }
                ]
            }}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="TestComponent2" component={TestComponent2} />
                    <Stack.Screen name="Depositar" component={Depositar} />
                </Stack.Navigator>

            </Animated.View>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    button: {
        height: 40,
        marginRight: 12,
        marginLeft: 12,
        marginTop: 40,
        marginBottom: 40,
        borderColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#3D26C2',
    },
    text: {
        color: 'white',
    },
    login: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        height: '70%',
    },
    register: {
        flexDirection: 'column',
        width: '100%',
        height: '30%',
        justifyContent: 'center',
    }
});
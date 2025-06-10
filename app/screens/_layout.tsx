import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { Animated, FlatList, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';

import Explore from './explore';
import Home from './index';

type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screens = [
  { name: 'Home', title: 'Home' },
  { name: 'Explore', title: 'Explore' },
];

const FloatingMenuButton = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    if (isMenuVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setIsMenuVisible(false);
      });
    } else {
      setIsMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleScreenPress = (screenName: string) => {
    navigation.navigate(screenName);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsMenuVisible(false);
    });
  };

  const renderMenuItem = ({ item }: any) => (
    <TouchableOpacity
      style={{
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        backgroundColor: '#000000',
      }}
      onPress={() => handleScreenPress(item.name)}
    >
      <Text style={{
        fontFamily: 'Arial',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
      }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const menuHeight = screens.length * 50;
  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [menuHeight, 0],
  });

  const buttonTranslateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -menuHeight],
  });

  return (
    <>
      {isMenuVisible && (
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
            paddingHorizontal: 100,
            backgroundColor: '#000000',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderWidth: 2,
            borderColor: '#ffffff',
            borderBottomWidth: 0,
            transform: [{ translateY }],
            zIndex: 999,
          }}
        >
          <FlatList
            data={screens}
            keyExtractor={(item) => item.name}
            renderItem={renderMenuItem}
            scrollEnabled={false}
          />
        </Animated.View>
      )}

      {/* Floating Menu Button */}
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          transform: [{ translateY: buttonTranslateY }],
          zIndex: 1000,
        }}
      >
                 <TouchableOpacity
           style={{
             paddingHorizontal: 100,
             paddingVertical: 3,
             borderRadius: 10,
             backgroundColor: '#000000',
             justifyContent: 'center',
             alignItems: 'center',
             borderWidth: 2,
             borderColor: '#ffffff',
           }}
           activeOpacity={1}
           onPress={toggleMenu}
         >
          <Text style={{
            color: '#ffffff',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
            Menu
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};
  
export const Navigation = () => {

  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'card',
        }}
      >
        <Stack.Screen name="Home">
          {({ navigation }) => (
            <View style={{ flex: 1 }}>
              <Home />
              <FloatingMenuButton navigation={navigation} />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Explore">
          {({ navigation }) => (
            <View style={{ flex: 1 }}>
              <Explore />
              <FloatingMenuButton navigation={navigation} />
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator >

  );
}
export default Navigation;

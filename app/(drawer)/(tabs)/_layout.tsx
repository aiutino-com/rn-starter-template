import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
export default function TabLayout() {
  const colorScheme = useColorScheme();
const navigation = useNavigation();
    const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ marginLeft: 16, marginRight: 16 }}>
              <Ionicons name="menu" size={28} color={colors.text} />
          </TouchableOpacity>
        ),
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    <Tabs.Screen
        name="profile"
        options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.circle.fill" color={color} />,
        }}
    />
    </Tabs>
  );
}

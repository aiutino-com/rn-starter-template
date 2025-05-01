import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
    return (
        <Drawer screenOptions={{ headerShown: true }}>
            <Drawer.Screen
                name="(tabs)"
                options={{
                        title: "Dashboard",
                        headerShown: false,
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="grid" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="settings"
                options={{
                    title: "Settings",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings" color={color} size={size} />
                    ),
                }}
            />
        </Drawer>
    );
}

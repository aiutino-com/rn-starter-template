import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from '@/hooks/useTranslation';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
    const { t } = useTranslation();

    return (
        <ThemedView style={styles.container}>
            <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                style={styles.avatar}
            />
            <ThemedText type="title">{t('profile.name')}</ThemedText>
            <ThemedText type="default">{t('profile.email')}</ThemedText>

            <TouchableOpacity style={styles.button}>
                <ThemedText type="link">{t('profile.edit')}</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 32,
        gap: 12,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
    },
    button: {
        marginTop: 16,
    },
});

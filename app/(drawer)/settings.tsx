import { useColorScheme } from 'react-native';
import { View, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKeys } from '@/locales/translationKeys';

export default function SettingsScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const { t } = useTranslation<TranslationKeys>();

    return (
        <ParallaxScrollView
            headerBackgroundColor={
            { light: '#f2f2f2', dark: '#1a1a1a' }}
            headerHeight={0}
        >
            <ThemedView style={styles.container}>
                <ThemedText type="title">{t('settings.title')}</ThemedText>

                <View style={styles.section}>
                    <ThemedText type="subtitle">{t('settings.current_theme')}</ThemedText>
                    <ThemedText>{colorScheme === 'dark' ? t('settings.dark_mode') : t('settings.light_mode')}</ThemedText>
                </View>

                {/* Divider visivo */}
                <View style={styles.divider} />

                {/* Altri Settings se vuoi */}
                <View style={styles.section}>
                    <ThemedText type="subtitle">{t('settings.account')}</ThemedText>
                    <ThemedText>{t('settings.email')}</ThemedText>
                </View>

            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 20,
    },
    section: {
        gap: 8,
        marginTop: 10,
    },
    divider: {
        height: 1,
        backgroundColor: 'gray',
        opacity: 0.2,
        marginVertical: 20,
    },
});

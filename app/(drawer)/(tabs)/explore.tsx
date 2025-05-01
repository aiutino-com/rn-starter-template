import { StyleSheet, Image, Platform, ImageStyle, TextStyle } from 'react-native';
import { useTranslation } from '@/hooks/useTranslation';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {TranslationKeys} from "@/locales/translationKeys";

export default function TabTwoScreen() {
    const { t } = useTranslation<TranslationKeys>();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="chevron.left.forwardslash.chevron.right"
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">{t('template.explore_title')}</ThemedText>
            </ThemedView>

            <ThemedText>{t('template.description')}</ThemedText>

            <Collapsible title={t('template.file_routing.title')}>
                <ThemedText>
                    {t('template.file_routing.text_1')}{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> &{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
                </ThemedText>
                <ThemedText>{t('template.file_routing.text_2')}</ThemedText>
                <ExternalLink href="https://docs.expo.dev/router/introduction">
                    <ThemedText type="link">{t('template.file_routing.link')}</ThemedText>
                </ExternalLink>
            </Collapsible>

            <Collapsible title={t('template.platforms.title')}>
                <ThemedText>{t('template.platforms.text')}</ThemedText>
            </Collapsible>

            <Collapsible title={t('template.images.title')}>
                <ThemedText>{t('template.images.text')}</ThemedText>
                <Image
                    source={require('@/assets/images/react-logo.png')}
                    style={{ alignSelf: 'center' } as ImageStyle}
                />
                <ExternalLink href="https://reactnative.dev/docs/images">
                    <ThemedText type="link">{t('template.images.link')}</ThemedText>
                </ExternalLink>
            </Collapsible>

            <Collapsible title={t('template.fonts.title')}>
                <ThemedText>{t('template.fonts.text')}</ThemedText>
                <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
                    <ThemedText type="link">{t('template.fonts.link')}</ThemedText>
                </ExternalLink>
            </Collapsible>

            <Collapsible title={t('template.theme.title')}>
                <ThemedText>{t('template.theme.text')}</ThemedText>
                <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                    <ThemedText type="link">{t('template.theme.link')}</ThemedText>
                </ExternalLink>
            </Collapsible>

            <Collapsible title={t('template.animations.title')}>
                <ThemedText>{t('template.animations.text')}</ThemedText>
            </Collapsible>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});

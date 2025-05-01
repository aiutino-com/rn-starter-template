import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useTranslation} from "@/hooks/useTranslation";
import {TranslationKeys} from "@/locales/translationKeys";

export default function HomeScreen() {
    const { t } = useTranslation<TranslationKeys>();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('home.title')}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home.text1')}</ThemedText>
        <ThemedText>
            {t('common.edit')} <ThemedText type="defaultSemiBold">app/(drawer)/(tabs)/index.tsx</ThemedText> {t('home.text1')}.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
            {t('home.text3')}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home.text4')}</ThemedText>
        <ThemedText>
            {t('home.text5')}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home.text6')}</ThemedText>
        <ThemedText>
            {t('home.text7')} run{' '}
          <ThemedText type="defaultSemiBold">{t('common.npm_run')} {t('common.reset_project')}</ThemedText> {t('home.text8')} fresh{' '}
          <ThemedText type="defaultSemiBold">{t('common.app')}</ThemedText> {t('home.text9')} current{' '}
          <ThemedText type="defaultSemiBold">{t('common.app')}</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">{t('common.app_example')}</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

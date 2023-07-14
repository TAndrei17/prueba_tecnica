/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-use-before-define */
import { useState, useEffect } from 'react';
import {
  View, Button, Alert, StyleSheet,
} from 'react-native';
import { Audio } from 'expo-av';
import { useTranslation } from 'react-i18next';

const AudioBlock = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'audioBlock' });
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { audioUrl } = props;

  const playSound = async () => {
    try {
      // eslint-disable-next-line no-shadow
      const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
      setSound(sound);
      setIsPlaying(true);
      await sound.playAsync();
    } catch (error) {
      Alert.alert(t('descarga_no'), error.message);
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      if (sound) {
        Alert.alert(t('descarga_si'));
        sound.unloadAsync();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sound]);

  const button = (
    <View style={styles.container}>
      <Button color={'#009999'} title={t('play')} onPress={playSound} disabled={isPlaying} />
      <Button color={'#009999'} title={t('stop')} onPress={stopSound} disabled={!isPlaying} />
    </View>
  );

  return button;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    paddingTop: 5,
  },
});

export default AudioBlock;

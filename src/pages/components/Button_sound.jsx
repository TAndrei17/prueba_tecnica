/* import { useState } from 'react';
import {
  View, Button, Alert,
} from 'react-native';
import Sound from 'react-native-sound';
import i18next from '../../../i18next.js';

// рушит сборку, нужно искать причину
const ButtonAudio = (props) => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const { audioUrl } = props;

  const playAudio = () => {
    const audio = new Sound(audioUrl, null, (error) => {
      if (error) {
        Alert.alert(i18next.t('audioButton.descarga_no'), error.message);
      } else {
        audio.play((success) => {
          if (success) {
            Alert.alert(i18next.t('audioButton.final'));
          } else {
            Alert.alert(i18next.t('audioButton.descarga_no'), error.message);
          }
        });
      }
    });
  };

  const handlePlayButtonPress = () => {
    setAudioPlaying(true);
    playAudio();
  };

  const titleAudio =
    audioPlaying ? i18next.t('audioButton.descarga') : i18next.t('audioButton.reproducir');

  const button = (
    <View>
      <Button
        title={titleAudio}
        onPress={handlePlayButtonPress}
        disabled={audioPlaying}
      />
    </View>
  );

  return button;
};

export default ButtonAudio; */

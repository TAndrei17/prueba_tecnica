import React, { useState, useContext } from 'react';
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native';

import StatusContext from '../../context/index.js';
import i18next from '../../../i18next.js';

import ListPodcasts from './Podcasts_list.jsx';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '75%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#BF3030',
  },
});

const AppBody = () => {
  const { statusState } = useContext(StatusContext);
  const [text, setText] = useState('');

  statusState.search = text;
  if (text.length === 0) {
    statusState.filterChannels = 'inactive';
  }

  const searchPodcasts = (str) => {
    statusState.filterChannels = 'active';
    setText(str);
  };

  const cleanSearch = () => {
    statusState.filterChannels = 'inactive';
    setText('');
  };

  const item = (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(str) => searchPodcasts(str)}
          value={text}
          placeholder={i18next.t('pageOne.placeholder')}
        />
        <Button
          // eslint-disable-next-line react/jsx-curly-brace-presence
          color={'#BF3030'}
          title={i18next.t('pageOne.borrar')}
          onPress={cleanSearch}
        />
      </View>
      <ListPodcasts />
    </View>
  );

  return item;
};

export default AppBody;

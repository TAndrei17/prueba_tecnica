/* eslint-disable no-use-before-define */
import React, { useState, useContext } from 'react';
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native';

import StatusContext from '../../context/index.js';
import i18next from '../../../i18next.js';

import FillState from '../../api/send_podcasts_state.js';
import ListPodcasts from './Podcasts_list.jsx';

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
          color={'#009999'}
          title={i18next.t('pageOne.borrarButton')}
          onPress={cleanSearch}
        />
      </View>
      <FillState>
        <ListPodcasts />
      </FillState>
    </View>
  );

  return item;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '75%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#009999',
  },
});

export default AppBody;

import React, { useRef, forwardRef } from 'react';
import { Image, StyleSheet, Text, View, TextInput, ScrollView, Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import faker from 'faker';
import { Video } from 'expo-av';

import { useCombinedRefs } from '../../utils/use-combined-refs';

export const SimpleContent = forwardRef((_, ref) => {
  const modalRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalRef);

  const renderContent = () => [
    <View style={s.content__header} key="0">
      <Text style={s.content__heading}>Article title</Text>
      <Text style={s.content__subheading}>November 11st 2018</Text>
    </View>,

    <View style={s.content__inside} key="1">
      <Text style={s.content__paragraph}>{faker.lorem.paragraphs(4)}</Text>
      <Text style={[s.content__subheading, { marginTop: 30 }]}>Horizontal ScrollView</Text>

      <ScrollView style={s.content__scrollview} horizontal>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <View key={i} style={s.content__block} />
          ))}
      </ScrollView>

      <Text style={s.content__paragraph}>{faker.lorem.paragraphs(5)}</Text>

      <TextInput
        style={s.content__input}
        placeholder="Type your username"
        clearButtonMode="while-editing"
      />
    </View>,
  ];

  return (
    <Modalize
      ref={combinedRef}
      // scrollViewProps={{
      //   showsVerticalScrollIndicator: false,
      //   stickyHeaderIndices: [0],
      // }}
    >
      {/* {renderContent()} */}
      <Video
        source={{
          uri:
            'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8',
        }}
        useNativeControls
        key={'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8'}
        style={{
          height: undefined,
          width: '100%',
          backgroundColor: 'black',
          aspectRatio: 3 / 2,
          zIndex: 2,
        }}
        useTextureView={false}
      />

      {/* <Image
        resizeMode="cover"
        style={{ height: Dimensions.get('window') }}
        source={{
          uri:
            'https://d1rwbc680ljllj.cloudfront.net/api/serve/5e70b3f3283c152ae40cb648/thumb',
        }}
      />

      <Image
        resizeMode="contain"
        style={{ height: Dimensions.get('window') }}
        source={{
          uri:
            'https://d1rwbc680ljllj.cloudfront.net/api/serve/5e70b3f3283c152ae40cb648/thumb',
        }}
      /> */}
    </Modalize>
  );
});

const s = StyleSheet.create({
  content__header: {
    padding: 15,
    paddingBottom: 0,

    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  content__heading: {
    marginBottom: 2,

    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },

  content__subheading: {
    marginBottom: 20,

    fontSize: 16,
    color: '#ccc',
  },

  content__inside: {
    padding: 15,
  },

  content__paragraph: {
    fontSize: 15,
    fontWeight: '200',
    lineHeight: 22,
    color: '#666',
  },

  content__scrollview: {
    marginVertical: 20,
  },

  content__block: {
    width: 200,
    height: 80,

    marginRight: 20,

    backgroundColor: '#ccc',
  },

  content__input: {
    paddingVertical: 15,
    marginBottom: 10,

    width: '100%',

    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#cdcdcd',
    borderRadius: 6,
  },
});

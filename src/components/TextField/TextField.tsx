import React, {FC, ReactNode} from 'react';
import {Controller, FieldError, useFormContext} from 'react-hook-form';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
// import {Text} from 'react-native-svg';

type TextInputProps = {
  placeholder?: string;
  type?: 'text';
  name: string;
  defaultValue?: string;
  error?: FieldError;
  item: ReactNode;
};

export const TextField: FC<TextInputProps> = ({placeholder, name, item}) => {
  const {control} = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        maxLength: 100,
      }}
      render={({field: {onChange}}) => (
        <View
          style={[
            styles.inputContainer,
            Platform.OS === 'ios' ? styles.inputIos : styles.inputAndroid,
          ]}>
          {item}
          <TextInput
            style={styles.inputText}
            placeholderTextColor={'#ADA4A5'}
            placeholder={placeholder}
            onChangeText={onChange}
          />
          {/* <Text>{error && error.message}</Text> */}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#F7F8F8',
    borderRadius: 14,
    flexDirection: 'row',
    marginBottom: 15,
  },
  inputImg: {
    marginRight: 15,
  },
  inputText: {
    fontSize: 12,
  },
  inputAndroid: {
    paddingHorizontal: 15,
  },
  inputIos: {
    padding: 15,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginHorizontal: 5,
    marginBottom: 10,
  },
});

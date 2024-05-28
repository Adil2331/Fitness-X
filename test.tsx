import {
  Box,
  IBoxProps,
  IInputProps,
  Input as NativeBaseInput,
} from 'native-base';
import {forwardRef, useEffect, useRef, useState} from 'react';
import {FieldError} from 'react-hook-form';
import Config from 'react-native-config';
import {
  AutocompleteRequestType,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import MaskInputUnstyled from 'react-native-mask-input';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import styled, {useTheme} from 'styled-components';

import {TextSMRegular} from '@components/theme/Text';

export interface InputProps extends IInputProps {
  label?: string;
  wrapperProps?: IBoxProps;
  inputType?: 'phone' | 'address';
  error?: FieldError;
  queryType?: AutocompleteRequestType;
  setLocation?: (loc: {lat: number; lng: number} | undefined) => void;
  addressAutoFocus?: boolean;
}

const MaskInput = styled(MaskInputUnstyled)`
  font-size: 16px;
  font-family: 'Outfit-Regular';
  color: ${({theme}) => theme.colors.base.white};
  height: 56px;
  padding: 0 16px;
`;

const Label = styled(Animated.Text)`
  position: absolute;
  font-family: 'Outfit-Regular';
  color: ${({theme}) => theme.colors.gray30};
  left: 16px;
  z-index: 111;
`;

const InputComponent = forwardRef<typeof NativeBaseInput, InputProps>(
  function InputComponent(
    {
      queryType = '(cities)',
      setLocation,
      addressAutoFocus = true,
      inputType,
      label,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) {
    const {colors} = useTheme();

    const [geoInputValue, setGeoInputValue] = useState(rest.value);
    const isFieldRendered = useRef(false);

    useEffect(() => {
      // Hack for Google autocomplete
      if (inputType === 'address') {
        isFieldRendered.current = true;
      }
    }, [inputType]);
    switch (inputType) {
      case 'phone':
        return (
          <MaskInput
            autoFocus
            value={rest.value}
            onChangeText={rest.onChangeText}
            keyboardType={'phone-pad'}
            placeholder={'(000) 000-0000'}
            placeholderTextColor={colors.gray30}
            onFocus={onFocus}
            onBlur={onBlur}
            mask={[
              '(',
              /\d/,
              /\d/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
        );
      case 'address':
        return (
          <GooglePlacesAutocomplete
            placeholder=""
            fetchDetails
            onPress={(data, details) => {
              setLocation?.(details?.geometry.location);
              rest.onChangeText?.(data.description);
              setGeoInputValue(data.description);
            }}
            textInputProps={{
              autoFocus: addressAutoFocus,
              placeholderTextColor: colors.gray30,
              clearButtonMode: 'never',
              selectionColor: 'white',
              onFocus,
              onBlur: e => {
                onBlur?.(e);
                setTimeout(() => {
                  setGeoInputValue(rest.value || '');
                });
              },
              value: geoInputValue,
              onChangeText: text => {
                if (isFieldRendered.current) {
                  setGeoInputValue(text);
                  if (text === '') {
                    rest.onChangeText?.('');
                    setLocation?.(undefined);
                  }
                }
              },
            }}
            styles={{
              container: {
                flex: 0,
              },
              row: {
                backgroundColor: colors.gray90,
              },
              description: {
                color: colors.base.white,
                fontFamily: 'Outfit-Regular',
                fontSize: 16,
                lineHeight: 24,
              },
              separator: {
                display: 'none',
              },
              textInput: {
                backgroundColor: 'transparent',
                color: colors.base.white,
                fontFamily: 'Outfit-Regular',
                fontSize: 16,
                paddingTop: !!label ? 24 : 8,
                paddingHorizontal: 16,
                marginBottom: 0,
                marginTop: 0,
                height: 56,
              },
              listView: {
                position: 'absolute',
                zIndex: 1,
                top: 60,
                borderWidth: 1,
                borderColor: colors.gray70,
                backgroundColor: colors.gray90,
                borderRadius: 8,
                maxHeight: 164,
              },
            }}
            enablePoweredByContainer={false}
            query={{
              key: Config.GOOGLE_PLACES_KEY,
              language: 'en',
              type: queryType,
            }}
          />
        );
      default:
        return (
          <NativeBaseInput
            ref={ref!}
            variant="unstyled"
            px={4}
            pt={!!label ? 6 : 4}
            fontFamily={'Outfit-Regular'}
            height={'56px'}
            fontSize={16}
            borderRadius={8}
            color={'base.white'}
            onFocus={onFocus}
            onBlur={onBlur}
            pr={!!rest.maxLength ? 65 : undefined}
            _focus={{
              selectionColor: 'gray10',
            }}
            {...rest}
          />
        );
    }
  },
);

const Input = forwardRef<typeof NativeBaseInput, InputProps>(function Input(
  props,
  ref,
) {
  const {label, wrapperProps, error, maxLength, value} = props;
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = error ? 'error50' : isFocused ? 'primary50' : 'gray70';

  const isLabelFloated = isFocused || !!value;
  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(isLabelFloated ? 12 : 16, {duration: 200}),
      top: withTiming(isLabelFloated ? 8 : 17, {duration: 200}),
    };
  }, [isLabelFloated]);

  return (
    <>
      <Box
        borderWidth={1}
        borderColor={borderColor}
        borderRadius={8}
        alignSelf={'stretch'}
        justifyContent={'center'}
        bg={isFocused ? 'gray80' : 'gray90'}
        {...wrapperProps}>
        {label && (
          <Label
            // @ts-ignore pointerEvents="none"
            pointerEvents="none"
            style={[animatedLabelStyle]}>
            {label}
          </Label>
        )}
        <InputComponent
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
        />
        {maxLength && (
          <TextSMRegular
            position={'absolute'}
            bottom={4}
            right={4}
            color={'gray30'}>
            {value?.length || 0}/{maxLength}
          </TextSMRegular>
        )}
      </Box>
      {error && (
        <TextSMRegular color={'error50'} mt={1.5} zIndex={-1}>
          {error.message}
        </TextSMRegular>
      )}
    </>
  );
});

export default Input;

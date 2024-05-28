import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PublicStackScreenProps} from '../../navigation/Public';
// import * as yup from 'yup';

// assets
import FirstName from '../../assets/icons/FirstName';
import Email from '../../assets/icons/Email';
import Password from '../../assets/icons/Password';
import GoogleIcon from '../../assets/icons/Google-icon';
import FacebookIcon from '../../assets/icons/Facebook-icon';

// components
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {BtnLayout} from '../../components/BtnLayout/BtnLayout';
import {TextField} from '../../components/TextField/TextField';

// const schema = yup.object().shape({
//   firstName: yup
// name: yup
//   .string()
//   .matches(
//     /^[А-Яа-я]+$/,
//     'Имя должно содержать только буквы кириллицы и без пробелов',
//   )
//   .required('Имя является обязательным полем'),
// description: yup
//   .string()
//   .min(10, 'Описание должно содержать минимум 10 символов')
//   .required('Описание является обязательным полем'),
// image: yup.string().required('Выберите изображение'),
// });

export const Register = () => {
  const {navigate} = useNavigation<PublicStackScreenProps['navigation']>();
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  // const {
  //   control,
  //   formState: {errors},
  // } = useForm({});

  return (
    <SafeAreaLayout style={styles.container} bottom top>
      <Text style={styles.text}>Hey there,</Text>
      <Text style={styles.title}>Create an Account</Text>
      <View>
        <FormProvider {...methods}>
          <TextField
            placeholder="First name"
            name={'firstName'}
            item={<FirstName style={styles.inputImg} />}
          />
          <TextField
            placeholder="Last name"
            name={'lastName'}
            item={<FirstName style={styles.inputImg} />}
          />
          <TextField
            placeholder="Email"
            name={'email'}
            item={<Email style={styles.inputImg} />}
          />
          <TextField
            placeholder="Password"
            name={'password'}
            item={<Password style={styles.inputImg} />}
          />
          {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
        </FormProvider>
        {/* <View>
          <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View
              style={[
                styles.inputContainer,
                Platform.OS === 'ios' ? styles.inputIos : styles.inputAndroid,
              ]}>
              <FirstName style={styles.inputImg} />
              <TextInput
                style={styles.inputText}
                placeholderTextColor={'#ADA4A5'}
                placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View
              style={[
                styles.inputContainer,
                Platform.OS === 'ios' ? styles.inputIos : styles.inputAndroid,
              ]}>
              <FirstName style={styles.inputImg} />
              <TextInput
                style={styles.inputText}
                placeholderTextColor={'#ADA4A5'}
                placeholder="Last name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="lastName"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View
              style={[
                styles.inputContainer,
                Platform.OS === 'ios' ? styles.inputIos : styles.inputAndroid,
              ]}>
              <Email style={styles.inputImg} />
              <TextInput
                style={styles.inputText}
                placeholderTextColor={'#ADA4A5'}
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View
              style={[
                styles.inputContainer,
                Platform.OS === 'ios' ? styles.inputIos : styles.inputAndroid,
              ]}>
              <Password style={styles.inputImg} />
              <TextInput
                style={styles.inputText}
                placeholderTextColor={'#ADA4A5'}
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="password"
        />
        </View> */}
      </View>
      <View style={styles.bottomContainer}>
        <BtnLayout onPress={() => navigate('Goal')} text="Register" />
        <View style={styles.orItemContainer}>
          <View style={styles.lineItem} />
          <Text>Or</Text>
          <View style={styles.lineItem} />
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialItems}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialItems}>
            <FacebookIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.lastLink}>
          <Text>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  text: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 30,
  },
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
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  orItemContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineItem: {
    flex: 1,
    height: 2,
    backgroundColor: '#DDDADA',
    marginHorizontal: 10,
  },
  socialContainer: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialItems: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#DDDADA',
    borderRadius: 14,
    marginHorizontal: 15,
  },
  lastLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    color: '#C58BF2',
  },
  inputAndroid: {
    paddingHorizontal: 15,
  },
  inputIos: {
    padding: 15,
  },
});

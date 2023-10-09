import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaLayout} from '../../components/SafeAreaLayout';
import FirstName from '../../assets/svg/FirstName';
import Email from '../../assets/svg/Email';
import Password from '../../assets/svg/Password';
import {BtnLayout} from '../../components/BtnLayout';
import {useNavigation} from '@react-navigation/native';
import {PublicStackScreenProps} from '../../navigation/Public';
import GoogleIcon from '../../assets/svg/Google-icon';
import FacebookIcon from '../../assets/svg/Facebook-icon';

export const Regiter = () => {
  const {navigate} = useNavigation<PublicStackScreenProps['navigation']>();
  const {
    control,
    // handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  //   const onSubmit = data => console.log(data);

  return (
    <SafeAreaLayout style={styles.container} bottom top>
      <Text style={styles.text}>Hey there,</Text>
      <Text style={styles.title}>Create an Account</Text>
      <View>
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
        {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
      </View>
      <View style={styles.bottomContainer}>
        <BtnLayout onPress={() => navigate('Goal')} text="Register" />
        <View style={styles.orItemContainer}>
          <View style={styles.lineItem}></View>
          <Text>Or</Text>
          <View style={styles.lineItem}></View>
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
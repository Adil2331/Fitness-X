import React from 'react';
import {SafeAreaLayout} from '../../components/SafeAreaLayout';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BtnLayout} from '../../components/BtnLayout';
import GoogleIcon from '../../assets/svg/Google-icon';
import FacebookIcon from '../../assets/svg/Facebook-icon';
import {Controller, useForm} from 'react-hook-form';
import Password from '../../assets/svg/Password';
import Email from '../../assets/svg/Email';
import {useNavigation} from '@react-navigation/native';
import {PublicStackScreenProps} from '../../navigation/Public';

export const Login = () => {
  const {navigate} = useNavigation<PublicStackScreenProps['navigation']>();
  const {
    control,
    // handleSubmit,
    // formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <View>
        <Text style={styles.text}>Hey there,</Text>
        <Text style={styles.title}>Welcome Back</Text>
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.inputContainer}>
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
            <View style={styles.inputContainer}>
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
        <TouchableOpacity>
          <Text style={styles.textForgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <BtnLayout onPress={() => navigate('GoToHome')} text="Login" />
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
          <Text>Don’t have an account yet?</Text>
          <TouchableOpacity onPress={() => navigate('Register')}>
            <Text style={styles.linkText}> Register</Text>
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
    backgroundColor: '#F7F8F8',
    padding: 15,
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
  textForgot: {
    textAlign: 'center',
    color: '#ADA4A5',
    fontSize: 12,
    textDecorationLine: 'underline',
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
});

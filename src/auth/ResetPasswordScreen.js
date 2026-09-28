import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {LOGO} from '../assets';

const {width} = Dimensions.get('window');

const IMAGES = {
  back:
    'https://img.icons8.com/ios-filled/100/111827/back.png',

  shieldTop:
    'https://img.icons8.com/ios-filled/100/9a5700/shield.png',

  recovery:
    'https://img.icons8.com/ios-filled/100/ffffff/lock.png',

  eye:
    'https://img.icons8.com/ios/100/6e453f/visible--v1.png',

  eyeOff:
    'https://img.icons8.com/ios/100/6e453f/hide.png',

  checkGreen:
    'https://img.icons8.com/ios-filled/100/00852d/checked--v1.png',

  emptyCircle:
    'https://img.icons8.com/ios/100/a67b75/circled.png',

  checkWhite:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  arrow:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  guarantee:
    'https://img.icons8.com/ios-filled/100/9a5700/security-checked.png',

  support:
    'https://img.icons8.com/ios-filled/100/d40716/headset.png',
};

const ResetPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const [logoutOthers, setLogoutOthers] = useState(true);

  const passwordRules = useMemo(() => {
    return {
      minLength: password.length >= 8,
      upperNumber:
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password),
      special:
        /[@#$!%^&*(),.?":{}|<>]/.test(password),
    };
  }, [password]);

  const allPasswordRulesPassed =
    passwordRules.minLength &&
    passwordRules.upperNumber &&
    passwordRules.special;

  const passwordsMatch =
    password.length > 0 &&
    password === confirmPassword;

  const canSubmit =
    allPasswordRulesPassed &&
    passwordsMatch;

  const handleBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleUpdatePassword = () => {
    if (!canSubmit) {
      return;
    }

    Alert.alert(
      'Password updated',
      'Your new password is ready. Please log in to continue feasting.',
      [
        {
          text: 'Go to Login',
          onPress: () => navigation?.popToTop(),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}>

          {/* HEADER */}
          <View
            style={styles.header}>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleBack}
              style={styles.headerButton}>

              <Image
                source={{uri: IMAGES.back}}
                style={styles.backIcon}
                resizeMode="contain"
              />

            </TouchableOpacity>

          </View>

          {/* LOGO */}
          <View
            style={styles.logoSection}>

            <View style={styles.logoCircle}>

              <Image
                source={LOGO}
                style={styles.logo}
                resizeMode="contain"
              />

            </View>

          </View>

          {/* TITLE */}
          <View
            style={styles.titleSection}>

            <Text style={styles.title}>
              Create New Password 
            </Text>

          </View>

          {/* FORM */}
          <View
            style={styles.formSection}>

            {/* NEW PASSWORD */}
            <View style={styles.labelRow}>
              <Text style={styles.label}>
                New Password
              </Text>
            </View>

            <View style={styles.inputWrapper}>

              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!passwordVisible}
                placeholder="Enter new password"
                placeholderTextColor="#A67D78"
                style={styles.input}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  setPasswordVisible(prev => !prev)
                }>

                <Image
                  source={{
                    uri: passwordVisible
                      ? IMAGES.eye
                      : IMAGES.eyeOff,
                  }}
                  style={styles.eyeIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>

            </View>

            {/* CONFIRM PASSWORD */}
            <Text style={styles.confirmLabel}>
              Confirm New Password
            </Text>

            <View
              style={[
                styles.inputWrapper,
                confirmPassword.length > 0 &&
                  passwordsMatch &&
                  styles.inputWrapperValid,
              ]}>

              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!confirmVisible}
                placeholder="Re-enter new password"
                placeholderTextColor="#A67D78"
                style={styles.input}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  setConfirmVisible(prev => !prev)
                }>

                <Image
                  source={{
                    uri: confirmVisible
                      ? IMAGES.eye
                      : IMAGES.eyeOff,
                  }}
                  style={styles.eyeIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>

            </View>

            {confirmPassword.length > 0 && !passwordsMatch && (
              <Text style={styles.errorText}>
                Passwords do not match.
              </Text>
            )}

          </View>

          {/* CTA */}
          <View
            style={styles.buttonWrapper}>

            <TouchableOpacity
              activeOpacity={0.88}
              disabled={!canSubmit}
              onPress={handleUpdatePassword}
              style={[
                styles.updateButton,
                !canSubmit && styles.updateButtonDisabled,
              ]}>

              <Text style={styles.updateButtonText}>
                Update Password
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingBottom: 55,
  },

  /* HEADER */

  header: {
    height: 88,

    borderBottomWidth: 1,
    borderBottomColor: '#F1E4E2',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 25,
  },

  headerButton: {
    width: 45,
    height: 45,

    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backIcon: {
    width: 27,
    height: 27,
  },

  stepBadge: {
    minHeight: 38,

    borderRadius: 22,

    backgroundColor: '#F1F2FF',

    borderWidth: 1,
    borderColor: '#DED8E0',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 17,
  },

  stepDot: {
    width: 11,
    height: 11,

    borderRadius: 6,

    backgroundColor: '#E72A2A',

    marginRight: 9,
  },

  stepText: {
    color: '#5A3531',

    fontSize: width < 380 ? 12 : 14,
    fontWeight: '600',
  },

  shieldButton: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },

  shieldTopIcon: {
    width: 25,
    height: 25,
  },

  /* LOGO */

  logoSection: {
    alignItems: 'center',

    marginTop: 38,

    position: 'relative',
  },

  logoCircle: {
    width: 152,
    height: 152,

    borderRadius: 76,

    borderWidth: 5,
    borderColor: '#E74624',

    overflow: 'hidden',

    padding: 8,

    backgroundColor: '#FFFFFF',

    shadowColor: '#C86F43',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.16,
    shadowRadius: 10,

    elevation: 5,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  recoveryBadge: {
    position: 'absolute',

    right: width / 2 - 105,
    bottom: -7,

    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: '#CD0014',

    borderWidth: 3,
    borderColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  recoveryIcon: {
    width: 24,
    height: 24,
  },

  /* TITLE */

  titleSection: {
    alignItems: 'center',

    marginTop: 30,

    paddingHorizontal: 25,
  },

  title: {
    color: '#0D1728',

    fontSize: width < 380 ? 30 : 34,
    fontWeight: '900',

    textAlign: 'center',
  },

  subtitle: {
    color: '#71453F',

    fontSize: width < 380 ? 16 : 18,

    lineHeight: 27,

    textAlign: 'center',

    marginTop: 17,
  },

  /* FORM */

  formSection: {
    paddingHorizontal: 25,

    marginTop: 40,
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 10,
  },

  label: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '600',
  },

  strengthLabel: {
    color: '#935400',

    fontSize: 13,
    fontWeight: '800',
  },

  strengthLabelGood: {
    color: '#00812D',
  },

  inputWrapper: {
    minHeight: 62,

    borderRadius: 18,

    borderWidth: 1.5,
    borderColor: '#E8B6B0',

    backgroundColor: '#FAF9FF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 24,
  },

  inputWrapperValid: {
    borderColor: '#A9D3B7',
  },

  input: {
    flex: 1,

    color: '#111827',

    fontSize: 17,

    paddingVertical: 0,
  },

  eyeIcon: {
    width: 27,
    height: 27,

    marginLeft: 12,
  },

  /* STRENGTH */

  strengthBar: {
    flexDirection: 'row',

    gap: 9,

    marginTop: 24,
    marginBottom: 23,
  },

  strengthSegment: {
    flex: 1,

    height: 5,

    borderRadius: 5,

    backgroundColor: '#DDE7E8',
  },

  strengthSegmentOrange: {
    backgroundColor: '#FF9F00',
  },

  strengthSegmentRed: {
    backgroundColor: '#E92423',
  },

  strengthSegmentGreen: {
    backgroundColor: '#0B9B49',
  },

  /* RULES */

  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 14,
  },

  ruleIcon: {
    width: 21,
    height: 21,

    marginRight: 14,
  },

  ruleText: {
    color: '#744840',

    fontSize: width < 380 ? 14 : 16,
  },

  ruleTextPassed: {
    color: '#08772C',
  },

  confirmLabel: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '600',

    marginTop: 42,
    marginBottom: 12,
  },

  errorText: {
    color: '#D30916',

    fontSize: 13,

    marginTop: 8,
    marginLeft: 5,
  },

  /* SESSION CARD */

  sessionCard: {
    marginHorizontal: 25,
    marginTop: 39,

    minHeight: 132,

    borderRadius: 20,

    backgroundColor: '#F0F3FF',

    borderWidth: 1,
    borderColor: '#E7D9D8',

    padding: 22,

    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  checkbox: {
    width: 31,
    height: 31,

    borderRadius: 6,

    borderWidth: 1.5,
    borderColor: '#E82322',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 18,
    marginTop: 4,
  },

  checkboxActive: {
    backgroundColor: '#E82322',
  },

  checkboxIcon: {
    width: 19,
    height: 19,
  },

  sessionTextArea: {
    flex: 1,
  },

  sessionTitle: {
    color: '#111827',

    fontSize: width < 380 ? 16 : 18,
    fontWeight: '700',

    lineHeight: 23,
  },

  sessionSubtitle: {
    color: '#71453F',

    fontSize: width < 380 ? 14 : 16,

    lineHeight: 23,

    marginTop: 5,
  },

  /* CTA */

  buttonWrapper: {
    marginHorizontal: 25,

    marginTop: 50,
  },

  updateButton: {
    minHeight: 64,

    borderRadius: 32,

    backgroundColor: '#E92423',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 20,

    shadowColor: '#E92423',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.23,
    shadowRadius: 15,

    elevation: 7,
  },

  updateButtonDisabled: {
    opacity: 0.55,
  },

  updateButtonText: {
    color: '#FFFFFF',

    fontSize: width < 380 ? 17 : 20,
    fontWeight: '900',

    textAlign: 'center',
  },

  arrowIcon: {
    width: 25,
    height: 25,

    marginLeft: 14,
  },

  /* GUARANTEE */

  guaranteeCard: {
    marginHorizontal: 25,
    marginTop: 38,

    minHeight: 182,

    borderRadius: 20,

    backgroundColor: '#F1F3FF',

    borderWidth: 1,
    borderColor: '#E4D9D8',

    padding: 26,

    flexDirection: 'row',
    alignItems: 'flex-start',

    overflow: 'hidden',
  },

  guaranteeIconCircle: {
    width: 53,
    height: 53,

    borderRadius: 27,

    backgroundColor: '#FFA20A',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 16,
  },

  guaranteeIcon: {
    width: 27,
    height: 27,
  },

  guaranteeTextArea: {
    flex: 1,
    zIndex: 2,
  },

  guaranteeTitle: {
    color: '#9A5700',

    fontSize: width < 380 ? 19 : 22,
    fontWeight: '800',
  },

  guaranteeText: {
    color: '#71453F',

    fontSize: width < 380 ? 14 : 16,

    lineHeight: 25,

    marginTop: 10,
  },

  guaranteeDecoration: {
    position: 'absolute',

    width: 130,
    height: 130,

    borderRadius: 65,

    backgroundColor: '#F7EDE2',

    right: -50,
    bottom: -40,
  },

  /* SUPPORT */

  supportSection: {
    alignItems: 'center',

    marginTop: 50,
  },

  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  supportIcon: {
    width: 23,
    height: 23,

    marginRight: 9,
  },

  supportText: {
    color: '#D20A16',

    fontSize: width < 380 ? 15 : 17,
    fontWeight: '600',
  },
});
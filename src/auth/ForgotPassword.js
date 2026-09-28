import React, { useState } from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';

import { LOGO } from '../assets';

const { width } = Dimensions.get('window');

const IMAGES = {
  back: 'https://img.icons8.com/ios-filled/100/111827/back.png',

  menu: 'https://img.icons8.com/ios-filled/100/ff9800/restaurant-menu.png',

  security: 'https://img.icons8.com/ios-filled/100/c90013/shield.png',

  help: 'https://img.icons8.com/ios-filled/100/7a4300/help.png',

  fire: 'https://img.icons8.com/ios-filled/100/c90013/fire-element.png',

  recovery: 'https://img.icons8.com/ios-filled/100/ffffff/lock.png',

  mobile: 'https://img.icons8.com/ios-filled/100/ffffff/iphone.png',

  email: 'https://img.icons8.com/ios-filled/100/6e453f/new-post.png',

  india: 'https://img.icons8.com/color/100/india.png',

  dropdown: 'https://img.icons8.com/ios-filled/100/6e453f/expand-arrow.png',

  verified: 'https://img.icons8.com/ios-filled/100/00802b/verified-account.png',

  protection: 'https://img.icons8.com/ios-filled/100/9a5700/handshake.png',

  arrow: 'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  whatsapp: 'https://img.icons8.com/color/100/whatsapp--v1.png',

  external: 'https://img.icons8.com/ios-filled/100/ffffff/external-link.png',
};

const ForgotPassword = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [mobile, setMobile] = useState('98765 43210');
  const [email, setEmail] = useState('');

  const handleBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleSendCode = () => {
    if (activeTab === 'mobile') {
      if (mobile.replace(/[^0-9]/g, '').length !== 10) {
        Alert.alert(
          'Invalid number',
          'Please enter a valid 10-digit mobile number.',
        );
        return;
      }

      navigation?.navigate('OTP', {
        mobile: `+91 ${mobile.trim()}`,
        flow: 'reset',
      });
    } else {
      if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
        Alert.alert('Invalid email', 'Please enter a valid email address.');
        return;
      }

      navigation?.navigate('OTP', {
        mobile: email.trim(),
        flow: 'reset',
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FAF9FF" barStyle="dark-content" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >

          {/* LOGO */}
          <View style={styles.logoSection}>
            <View style={styles.logoCircle}>
              <Image source={LOGO} style={styles.logo} resizeMode="contain" />
            </View>

          </View>

          {/* TABS */}
          <View style={styles.tabsWrapper}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={[
                styles.tabButton,
                activeTab === 'mobile' && styles.tabActive,
              ]}
              onPress={() => setActiveTab('mobile')}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'mobile' && styles.tabTextActive,
                ]}
              >
                Mobile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              style={[
                styles.tabButton,
                activeTab === 'email' && styles.tabActive,
              ]}
              onPress={() => setActiveTab('email')}
            >

              <Text
                style={[
                  styles.tabText,
                  activeTab === 'email' && styles.tabTextActive,
                ]}
              >
                Email Address
              </Text>
            </TouchableOpacity>
          </View>

          {/* FORM */}
          <View style={styles.formSection}>
            {activeTab === 'mobile' ? (
              <>
                <View style={styles.labelRow}>
                  <Text style={styles.label}>
                    Registered Mobile Number
                    <Text style={styles.required}> *</Text>
                  </Text>
                </View>

                <View style={styles.mobileInputWrapper}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.countryBox}
                  >
                    <Image
                      source={{ uri: IMAGES.india }}
                      style={styles.flag}
                      resizeMode="contain"
                    />

                    <Text style={styles.countryCode}>+91</Text>

                    <Image
                      source={{ uri: IMAGES.dropdown }}
                      style={styles.dropdown}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <TextInput
                    value={mobile}
                    onChangeText={setMobile}
                    keyboardType="phone-pad"
                    placeholder="98765 43210"
                    placeholderTextColor="#CBB2AE"
                    style={styles.mobileInput}
                  />

                  <Text style={styles.smsText}>sms</Text>
                </View>

                <Text style={styles.helperText}>
                  We will send a 6-digit tasty verification code to this number.
                </Text>
              </>
            ) : (
              <>
                <View style={styles.labelRow}>
                  <Text style={styles.label}>
                    Registered Email Address
                    <Text style={styles.required}> *</Text>
                  </Text>

                </View>

                <View style={styles.emailInputWrapper}>
                  <Image
                    source={{ uri: IMAGES.email }}
                    style={styles.emailIcon}
                    resizeMode="contain"
                  />

                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="your@email.com"
                    placeholderTextColor="#CBB2AE"
                    style={styles.emailInput}
                  />
                </View>

                <Text style={styles.helperText}>
                  We will send a secure verification link to your registered
                  email.
                </Text>
              </>
            )}
          </View>

          {/* CTA */}
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              activeOpacity={0.88}
              style={styles.sendButton}
              onPress={handleSendCode}
            >
              <Text style={styles.sendButtonText}>Send Verification Code</Text>

              <Image
                source={{ uri: IMAGES.arrow }}
                style={styles.arrowIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* BACK LOGIN */}
          <View style={styles.loginRow}>
            <Text style={styles.rememberText}>Remembered your password?</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation?.navigate('Login')}
            >
              <Text style={styles.loginLink}>Back to Login</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#FAF9FF',
  },

  scrollContent: {
    paddingBottom: 50,
  },

  /* HEADER */

  header: {
    minHeight: 100,

    borderBottomWidth: 1,
    borderBottomColor: '#F0D6C8',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 18,
  },

  headerItem: {
    width: 46,
    height: 46,

    justifyContent: 'center',
  },

  headerIcon: {
    width: 25,
    height: 25,
  },

  headerMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 5,
  },

  smallHeaderIcon: {
    width: 21,
    height: 21,

    marginRight: 5,
  },

  menuText: {
    color: '#FF9700',

    fontSize: width < 380 ? 12 : 14,
  },

  securityItem: {
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 'auto',
  },

  securityText: {
    color: '#C90013',

    fontSize: width < 380 ? 12 : 14,
    fontWeight: '800',

    lineHeight: 18,

    marginRight: 12,
  },

  helpButton: {
    minHeight: 53,

    borderRadius: 30,

    backgroundColor: '#FFF0E5',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 17,
  },

  helpText: {
    color: '#7A4300',

    fontSize: 14,
    fontWeight: '700',
  },

  /* LOGO */

  logoSection: {
    alignItems: 'center',

    marginTop: 30,
  },

  logoCircle: {
    width: 170,
    height: 170,

    borderRadius: 85,

    backgroundColor: '#FFFFFF',

    borderWidth: 2,
    borderColor: '#FFD27A',

    overflow: 'hidden',

    padding: 10,

    shadowColor: '#E9A84D',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.16,
    shadowRadius: 13,

    elevation: 6,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  recoveryIconCircle: {
    position: 'absolute',

    right: width / 2 - 112,
    bottom: -7,

    width: 46,
    height: 46,

    borderRadius: 23,

    backgroundColor: '#CC0013',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  recoveryIcon: {
    width: 23,
    height: 23,
  },

  /* TITLE */

  titleSection: {
    alignItems: 'center',

    paddingHorizontal: 24,

    marginTop: 26,
  },

  recoveryBadge: {
    minHeight: 42,

    borderRadius: 22,

    backgroundColor: '#FFD0CB',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,

    marginBottom: 17,
  },

  recoveryBadgeIcon: {
    width: 20,
    height: 20,

    marginRight: 8,
  },

  recoveryBadgeText: {
    color: '#A20B12',

    fontSize: 16,
    fontWeight: '800',
  },

  title: {
    color: '#101827',

    fontSize: width < 380 ? 31 : 38,
    fontWeight: '900',

    textAlign: 'center',
  },

  subtitle: {
    color: '#714842',

    fontSize: width < 380 ? 15 : 18,
    lineHeight: width < 380 ? 24 : 29,

    textAlign: 'center',

    marginTop: 18,
  },

  /* TABS */

  tabsWrapper: {
    marginHorizontal: 29,
    marginTop: 34,

    minHeight: 72,

    borderRadius: 50,

    borderWidth: 1.5,
    borderColor: '#F6D29D',

    backgroundColor: '#F0F3FF',

    flexDirection: 'row',

    padding: 7,
  },

  tabButton: {
    flex: 1,

    borderRadius: 43,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 8,
  },

  tabActive: {
    backgroundColor: '#CC0013',

    shadowColor: '#CC0013',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10,

    elevation: 5,
  },

  tabIcon: {
    width: 23,
    height: 23,

    marginRight: 8,
  },

  tabText: {
    color: '#6D433D',

    fontSize: width < 380 ? 14 : 16,
    fontWeight: '600',

    textAlign: 'center',
  },

  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '800',
  },

  /* FORM */

  formSection: {
    paddingHorizontal: 29,

    marginTop: 39,
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 11,
  },

  label: {
    color: '#111827',

    fontSize: width < 380 ? 16 : 18,
    fontWeight: '700',
  },

  required: {
    color: '#C90013',
  },

  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  verifiedIcon: {
    width: 20,
    height: 20,

    marginRight: 5,
  },

  verifiedText: {
    color: '#007B27',

    fontSize: width < 380 ? 13 : 15,
    fontWeight: '700',
  },

  mobileInputWrapper: {
    minHeight: 66,

    borderRadius: 19,

    backgroundColor: '#FFFFFF',

    borderWidth: 1.5,
    borderColor: '#EECAC4',

    flexDirection: 'row',
    alignItems: 'center',

    overflow: 'hidden',
  },

  countryBox: {
    width: 118,

    alignSelf: 'stretch',

    backgroundColor: '#F8F8FF',

    borderRightWidth: 1,
    borderRightColor: '#DDD8E0',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,
  },

  flag: {
    width: 29,
    height: 29,

    marginRight: 8,
  },

  countryCode: {
    color: '#111827',

    fontSize: 20,
    fontWeight: '800',
  },

  dropdown: {
    width: 15,
    height: 15,

    marginLeft: 'auto',
  },

  mobileInput: {
    flex: 1,

    color: '#111827',

    fontSize: width < 380 ? 18 : 20,

    paddingHorizontal: 16,
  },

  smsText: {
    color: '#FF9800',

    fontSize: 16,
    fontWeight: '800',

    marginRight: 18,
  },

  emailInputWrapper: {
    minHeight: 82,

    borderRadius: 18,

    backgroundColor: '#FFFFFF',

    borderWidth: 1.5,
    borderColor: '#EECAC4',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,
  },

  emailIcon: {
    width: 24,
    height: 24,

    marginRight: 13,
  },

  emailInput: {
    flex: 1,

    color: '#111827',

    fontSize: 18,
  },

  helperText: {
    color: '#99736D',

    fontSize: width < 380 ? 13 : 15,

    lineHeight: 21,

    marginTop: 11,
    marginLeft: 7,
  },

  /* PROTECTION */

  protectionCard: {
    minHeight: 150,

    marginHorizontal: 29,
    marginTop: 35,

    borderRadius: 21,

    borderWidth: 1.5,
    borderColor: '#FFD17A',

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',

    padding: 28,
  },

  protectionIconCircle: {
    width: 66,
    height: 66,

    borderRadius: 33,

    backgroundColor: '#FFF0DA',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 22,
  },

  protectionIcon: {
    width: 34,
    height: 34,
  },

  protectionContent: {
    flex: 1,
  },

  protectionTitle: {
    color: '#111827',

    fontSize: width < 380 ? 17 : 19,
    fontWeight: '800',
  },

  protectionDescription: {
    color: '#714842',

    fontSize: width < 380 ? 14 : 16,

    lineHeight: 24,

    marginTop: 7,
  },

  highlightText: {
    color: '#9A5700',
    fontWeight: '800',
  },

  /* BUTTON */

  buttonWrapper: {
    marginHorizontal: 29,

    marginTop: 43,
  },

  sendButton: {
    minHeight: 64,

    borderRadius: 32,

    backgroundColor: '#EA2623',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#EA2623',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.25,
    shadowRadius: 18,

    elevation: 8,
  },

  sendButtonText: {
    color: '#FFFFFF',

    fontSize: width < 380 ? 19 : 22,
    fontWeight: '900',
  },

  arrowIcon: {
    width: 27,
    height: 27,

    marginLeft: 15,
  },

  /* LOGIN */

  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 46,
  },

  rememberText: {
    color: '#714842',

    fontSize: width < 380 ? 15 : 17,
  },

  loginLink: {
    color: '#C90013',

    fontSize: width < 380 ? 15 : 17,
    fontWeight: '800',

    textDecorationLine: 'underline',

    marginLeft: 7,
  },

  /* HELP */

  helpCard: {
    minHeight: 91,

    marginHorizontal: 29,
    marginTop: 40,

    borderRadius: 20,

    borderWidth: 1.5,
    borderColor: '#A7CFB4',

    backgroundColor: '#F4FBF6',

    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  helpLeft: {
    flexDirection: 'row',
    alignItems: 'center',

    flex: 1,
  },

  whatsappCircle: {
    width: 56,
    height: 56,

    borderRadius: 28,

    backgroundColor: '#007B2D',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 12,
  },

  whatsappIcon: {
    width: 35,
    height: 35,
  },

  helpTitle: {
    color: '#111827',

    fontSize: 15,
    fontWeight: '800',
  },

  helpSubtitle: {
    color: '#714842',

    fontSize: 13,

    marginTop: 3,
  },

  chatButton: {
    minHeight: 48,

    borderRadius: 25,

    backgroundColor: '#007B2D',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 19,
  },

  chatText: {
    color: '#FFFFFF',

    fontSize: 15,
    fontWeight: '800',
  },

  externalIcon: {
    width: 17,
    height: 17,

    marginLeft: 7,
  },
});

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
import { resetTo } from '../navigation/NavigationService';

const { width } = Dimensions.get('window');

/* ============================================================
   ONLINE DUMMY IMAGE ICONS
   ============================================================ */

const IMAGES = {
  back: 'https://img.icons8.com/ios-filled/100/111827/back.png',

  help: 'https://img.icons8.com/ios-filled/100/111827/help.png',

  fire: 'https://img.icons8.com/ios-filled/100/7a4515/fire-element.png',

  star: 'https://img.icons8.com/ios-filled/100/ffffff/star.png',

  party: 'https://img.icons8.com/ios-filled/100/8a4b00/confetti.png',

  phone: 'https://img.icons8.com/ios-filled/100/e50914/iphone.png',

  email: 'https://img.icons8.com/ios-filled/100/63332f/new-post.png',

  india: 'https://img.icons8.com/color/100/india.png',

  dropdown: 'https://img.icons8.com/ios-filled/100/63332f/expand-arrow.png',

  verified: 'https://img.icons8.com/ios-filled/100/00852d/verified-account.png',

  arrow: 'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  google: 'https://img.icons8.com/color/100/google-logo.png',

  apple: 'https://img.icons8.com/ios-filled/100/111827/mac-os.png',

  compass: 'https://img.icons8.com/ios-filled/100/9a5700/compass.png',

  delivery: 'https://img.icons8.com/ios-filled/100/009b4d/high-voltage.png',

  halal: 'https://img.icons8.com/ios-filled/100/9a5700/food.png',

  cash: 'https://img.icons8.com/ios-filled/100/e50914/price-tag.png',

  lock: 'https://img.icons8.com/ios-filled/100/63332f/lock--v1.png',

  eye: 'https://img.icons8.com/ios-filled/100/63332f/visible.png',

  eyeOff: 'https://img.icons8.com/ios-filled/100/63332f/hide.png',
};

/* ============================================================
   LOGIN SCREEN
   ============================================================ */

const Login = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('phone');

  const [mobile, setMobile] = useState('98765 43210');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);

  /* ============================================================
     ACTIONS
     ============================================================ */

  const handleBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleOTP = () => {
    const digits = mobile.replace(/[^0-9]/g, '');

    if (digits.length !== 10) {
      Alert.alert(
        'Invalid number',
        'Please enter a valid 10-digit mobile number.',
      );
      return;
    }

    navigation?.navigate('OTP', {
      mobile: `+91 ${mobile.trim()}`,
      flow: 'login',
    });
  };

  const handleEmailLogin = () => {
    if (!/^\S+@\S+\.\S+$/.test(email.trim()) || !password) {
      Alert.alert('Missing details', 'Please enter your email and password.');
      return;
    }

    resetTo('Main');
  };

  const handleGuest = () => {
    resetTo('Main');
  };

  /* ============================================================
     UI
     ============================================================ */

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FAF9FF" barStyle="dark-content" />

      {/* Top gradient-like strip */}
      <View style={styles.topStrip}>
        <View style={styles.topStripRed} />
        <View style={styles.topStripOrange} />
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          {/* ======================================================
              HEADER
          ====================================================== */}

          <View style={styles.header}>
           
          </View>

          {/* ======================================================
              LOGO
          ====================================================== */}

          <View style={styles.logoSection}>
            <View style={styles.logoOuterCircle}>
              <View style={styles.logoInnerCircle}>
                <Image source={LOGO} style={styles.logo} resizeMode="contain" />
              </View>
            </View>

            <View style={styles.tasteBadge}>
              <Image
                source={{ uri: IMAGES.star }}
                style={styles.tasteStar}
                resizeMode="contain"
              />

              <Text style={styles.tasteText}>CRAZY TASTE</Text>
            </View>
          </View>

          {/* ======================================================
              TITLE
          ====================================================== */}

          <View style={styles.titleSection}>
            <Text style={styles.welcomeTitle}>
              Welcome back to <Text style={styles.redText}>Patel's!</Text>
            </Text>

            <Text style={styles.subtitle}>
              Aromatic spices & sizzling street delicacies await you.
            </Text>
          </View>

          {/* ======================================================
              FEAST BONUS
          ====================================================== */}

          {/* <View style={styles.bonusCard}>
            <View style={styles.bonusIconBox}>
              <Image
                source={{ uri: IMAGES.party }}
                style={styles.bonusIcon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.bonusContent}>
              <Text style={styles.bonusTitle}>
                FEAST BONUS <Text style={styles.bullet}>●</Text>{' '}
                <Text style={styles.bonusRed}>150 Spice Points</Text>
              </Text>

              <Text style={styles.bonusDescription}>
                Log in to claim points &{' '}
                <Text style={styles.bonusRed}>Free Mango Kulfi</Text> on your
                first order!
              </Text>
            </View>

            <View style={styles.bonusDecoration} />
          </View> */}

          {/* ======================================================
              LOGIN FORM CARD
          ====================================================== */}

          <View style={styles.loginCard}>
            {/* TAB SWITCHER */}

            <View style={styles.tabContainer}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[
                  styles.tabButton,
                  activeTab === 'phone' && styles.tabActive,
                ]}
                onPress={() => setActiveTab('phone')}
              >
                <Image
                  source={{ uri: IMAGES.phone }}
                  style={styles.tabIcon}
                  resizeMode="contain"
                />

                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'phone' && styles.tabTextActive,
                  ]}
                >
                  Phone Number
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
                <Image
                  source={{ uri: IMAGES.email }}
                  style={styles.tabIcon}
                  resizeMode="contain"
                />

                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'email' && styles.tabTextActive,
                  ]}
                >
                  Email
                </Text>
              </TouchableOpacity>
            </View>

            {/* ===================================================
                PHONE LOGIN
            =================================================== */}

            {activeTab === 'phone' ? (
              <>
                <Text style={styles.fieldLabel}>
                  Mobile Number <Text style={styles.required}>*</Text>
                </Text>

                <View style={styles.phoneInputWrapper}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.countrySelector}
                  >
                    <Image
                      source={{ uri: IMAGES.india }}
                      style={styles.flagIcon}
                      resizeMode="contain"
                    />

                    <Text style={styles.countryCode}>+91</Text>

                    <Image
                      source={{ uri: IMAGES.dropdown }}
                      style={styles.dropdownIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <TextInput
                    value={mobile}
                    onChangeText={setMobile}
                    keyboardType="phone-pad"
                    maxLength={12}
                    placeholder="98765 43210"
                    placeholderTextColor="#E4B5AF"
                    style={styles.phoneInput}
                  />
                </View>

                <View style={styles.phoneInfoRow}>
                  <Text style={styles.codeText}>
                    We'll send a 4-digit feast code
                  </Text>

                  <View style={styles.verifiedRow}>
                    <Image
                      source={{ uri: IMAGES.verified }}
                      style={styles.verifiedIcon}
                      resizeMode="contain"
                    />

                    <Text style={styles.verifiedText}>Verified SMS</Text>
                  </View>
                </View>

                <View>
                  <TouchableOpacity
                    activeOpacity={0.88}
                    style={styles.primaryButton}
                    onPress={handleOTP}
                  >
                    <Text style={styles.primaryButtonText}>
                      Send OTP to Feasting
                    </Text>

                    <Image
                      source={{ uri: IMAGES.arrow }}
                      style={styles.buttonArrow}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              /* ===================================================
                 EMAIL LOGIN
              =================================================== */

              <>
                <Text style={styles.fieldLabel}>
                  Email Address <Text style={styles.required}>*</Text>
                </Text>

                <View style={styles.normalInputWrapper}>
                  <Image
                    source={{ uri: IMAGES.email }}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />

                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="you@example.com"
                    placeholderTextColor="#CDA8A4"
                    style={styles.normalInput}
                  />
                </View>

                <Text style={[styles.fieldLabel, styles.passwordLabel]}>
                  Password <Text style={styles.required}>*</Text>
                </Text>

                <View style={styles.normalInputWrapper}>
                  <Image
                    source={{ uri: IMAGES.lock }}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />

                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!passwordVisible}
                    placeholder="Enter your password"
                    placeholderTextColor="#CDA8A4"
                    style={styles.normalInput}
                  />

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setPasswordVisible(prev => !prev)}
                  >
                    <Image
                      source={{
                        uri: passwordVisible ? IMAGES.eye : IMAGES.eyeOff,
                      }}
                      style={styles.eyeIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation?.navigate('ForgotPassword')}
                >
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                <View>
                  <TouchableOpacity
                    activeOpacity={0.88}
                    style={styles.primaryButton}
                    onPress={handleEmailLogin}
                  >
                    <Text style={styles.primaryButtonText}>
                      Login to Feasting
                    </Text>

                    <Image
                      source={{ uri: IMAGES.arrow }}
                      style={styles.buttonArrow}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}

            {/* ===================================================
                OR
            =================================================== */}

            <View style={styles.orRow}>
              <View style={styles.orLine} />

              <Text style={styles.sparkle}>✦</Text>

              <Text style={styles.orText}>OR FEASTING WITH</Text>

              <Text style={styles.sparkle}>✦</Text>

              <View style={styles.orLine} />
            </View>

            {/* SOCIAL */}

            <View style={styles.socialRow}>
              <TouchableOpacity
                activeOpacity={0.82}
                style={styles.socialButton}
              >
                <Image
                  source={{ uri: IMAGES.google }}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />

                <Text style={styles.socialText}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.82}
                style={styles.socialButton}
              >
                <Image
                  source={{ uri: IMAGES.apple }}
                  style={styles.appleIcon}
                  resizeMode="contain"
                />

                <Text style={styles.socialText}>Apple</Text>
              </TouchableOpacity>
            </View>

            {/* GUEST */}

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.guestButton}
              onPress={handleGuest}
            >
              <Image
                source={{ uri: IMAGES.compass }}
                style={styles.guestIcon}
                resizeMode="contain"
              />

              <Text style={styles.guestText}>Continue as Guest Explorer</Text>
            </TouchableOpacity>
          </View>

          {/* ======================================================
              BENEFITS
          ====================================================== */}

          {/* <View style={styles.benefitsRow}>
            <Benefit
              icon={IMAGES.delivery}
              background="#E2F5EF"
              title={'Instant 30-Min\nDelivery'}
            />

            <Benefit
              icon={IMAGES.halal}
              background="#FFF4E6"
              title={'100% Halal & Pure Veg'}
            />

            <Benefit
              icon={IMAGES.cash}
              background="#FBE7EC"
              title={'Earn Spice Cash'}
            />
          </View> */}

          {/* ======================================================
              REGISTER
          ====================================================== */}

          <View style={styles.footerSection}>
            <View style={styles.registerRow}>
              <Text style={styles.newText}>New to Patel's?</Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation?.navigate('Register')}
              >
                <Text style={styles.createText}>Create an Account ↗</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.termsText}>
              By continuing, you agree to our{' '}
              <Text style={styles.termsLink}>Terms of Feast</Text> &{' '}
              <Text style={styles.termsLink}>Spice{'\n'}Privacy Policy</Text>.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

/* ============================================================
   BENEFIT ITEM
   ============================================================ */

const Benefit = ({ icon, title, background }) => {
  return (
    <View style={styles.benefitItem}>
      <View style={[styles.benefitIconCircle, { backgroundColor: background }]}>
        <Image
          source={{ uri: icon }}
          style={styles.benefitIcon}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.benefitText}>{title}</Text>
    </View>
  );
};

export default Login;

/* ============================================================
   STYLES
   ============================================================ */

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#FAF9FF',
  },

  topStrip: {
    height: 10,
    flexDirection: 'row',
  },

  topStripRed: {
    flex: 1,
    backgroundColor: '#D5091D',
  },

  topStripOrange: {
    width: '25%',
    backgroundColor: '#FFA20A',
  },

  scrollContent: {
    paddingHorizontal: 27,
    paddingBottom: 45,
  },

  /* ============================================================
     HEADER
     ============================================================ */

  header: {
    height: 84,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  roundButtonSpacer: {
    width: 52,
    height: 52,
  },

  roundButton: {
    width: 52,
    height: 52,

    borderRadius: 26,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#F2D6D1',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 7,

    elevation: 4,
  },

  headerIcon: {
    width: 22,
    height: 22,
  },

  festiveBadge: {
    minHeight: 39,

    borderRadius: 23,

    backgroundColor: '#FFF0E8',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 22,
  },

  festiveIcon: {
    width: 18,
    height: 18,

    marginRight: 10,
  },

  festiveText: {
    color: '#392520',

    fontSize: 14,
    fontWeight: '800',
  },

  /* ============================================================
     LOGO
     ============================================================ */

  logoSection: {
    alignItems: 'center',

    marginTop: 5,
  },

  logoOuterCircle: {
    width: 165,
    height: 165,

    borderRadius: 83,

    backgroundColor: '#FFFFFF',

    borderWidth: 4,
    borderColor: '#FFD17A',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#E88944',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,

    elevation: 9,
  },

  logoInnerCircle: {
    width: 146,
    height: 146,

    borderRadius: 73,

    overflow: 'hidden',

    backgroundColor: '#FFFFFF',

    padding: 8,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  tasteBadge: {
    shadowColor: '#CE0014',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,

    minHeight: 34,

    borderRadius: 18,

    backgroundColor: '#CE0014',

    paddingHorizontal: 13,

    flexDirection: 'row',
    alignItems: 'center',

    marginTop: -14,

    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  tasteStar: {
    width: 14,
    height: 14,

    marginRight: 5,
  },

  tasteText: {
    color: '#FFFFFF',

    fontSize: 12,
    fontWeight: '900',
  },

  /* ============================================================
     TITLE
     ============================================================ */

  titleSection: {
    alignItems: 'center',

    marginTop: 20,
  },

  welcomeTitle: {
    color: '#111827',

    fontSize: width < 380 ? 28 : 31,
    fontWeight: '900',

    textAlign: 'center',
  },

  redText: {
    color: '#E52A27',
  },

  subtitle: {
    color: '#693D39',

    fontSize: width < 380 ? 15 : 17,

    lineHeight: 24,

    marginTop: 16,

    textAlign: 'center',
  },

  /* ============================================================
     BONUS
     ============================================================ */

  bonusCard: {
    minHeight: 120,

    marginTop: 28,

    borderRadius: 21,

    borderWidth: 1.5,
    borderColor: '#FFAD2D',

    backgroundColor: '#FFF9F4',

    padding: 20,

    flexDirection: 'row',
    alignItems: 'center',

    overflow: 'hidden',
  },

  bonusIconBox: {
    width: 73,
    height: 73,

    borderRadius: 14,

    backgroundColor: '#FFA20A',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 20,
  },

  bonusIcon: {
    width: 38,
    height: 38,
  },

  bonusContent: {
    flex: 1,
    zIndex: 2,
  },

  bonusTitle: {
    color: '#8B4F0A',

    fontSize: 15,
    fontWeight: '900',
  },

  bullet: {
    color: '#8B4F0A',
  },

  bonusRed: {
    color: '#DF121D',
  },

  bonusDescription: {
    color: '#171717',

    fontSize: width < 380 ? 14 : 16,

    lineHeight: 23,

    marginTop: 5,
  },

  bonusDecoration: {
    position: 'absolute',

    width: 100,
    height: 100,

    borderRadius: 50,

    backgroundColor: '#FFEBD3',

    right: -48,
    bottom: -32,
  },

  /* ============================================================
     CARD
     ============================================================ */

  loginCard: {
    marginTop: 28,

    backgroundColor: '#FFFFFF',

    borderRadius: 22,

    padding: 27,

    borderWidth: 1,
    borderColor: '#F2DDD9',

    shadowColor: '#A26054',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 5,
  },

  /* ============================================================
     TABS
     ============================================================ */

  tabContainer: {
    height: 62,

    borderRadius: 12,

    backgroundColor: '#F0F2FF',

    flexDirection: 'row',

    padding: 5,

    marginBottom: 28,
  },

  tabButton: {
    flex: 1,

    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 6,
  },

  tabActive: {
    backgroundColor: '#FFFFFF',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.07,
    shadowRadius: 4,

    elevation: 2,
  },

  tabIcon: {
    width: 20,
    height: 20,

    marginRight: 9,
  },

  tabText: {
    color: '#59352F',

    fontSize: width < 380 ? 12 : 14,
    fontWeight: '700',
  },

  tabTextActive: {
    color: '#E50914',
  },

  fastBadge: {
    backgroundColor: '#FDE9EA',

    paddingHorizontal: 9,
    paddingVertical: 5,

    borderRadius: 12,

    marginLeft: 8,
  },

  fastText: {
    color: '#D80C16',

    fontSize: 10,
    fontWeight: '800',
  },

  /* ============================================================
     INPUTS
     ============================================================ */

  fieldLabel: {
    color: '#111827',

    fontSize: 16,
    fontWeight: '700',

    marginBottom: 12,
  },

  required: {
    color: '#E50914',
  },

  phoneInputWrapper: {
    minHeight: 62,

    borderRadius: 13,

    borderWidth: 1.5,
    borderColor: '#ECC7C2',

    flexDirection: 'row',

    overflow: 'hidden',
  },

  countrySelector: {
    width: 120,

    backgroundColor: '#FAF9FF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,

    borderRightWidth: 1,
    borderRightColor: '#DDD3D2',
  },

  flagIcon: {
    width: 27,
    height: 27,

    marginRight: 8,
  },

  countryCode: {
    color: '#111827',

    fontSize: 18,
    fontWeight: '700',
  },

  dropdownIcon: {
    width: 12,
    height: 12,

    marginLeft: 10,
  },

  phoneInput: {
    flex: 1,

    color: '#111827',

    fontSize: width < 380 ? 19 : 22,

    paddingHorizontal: 22,
  },

  phoneInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 11,
    marginHorizontal: 6,
  },

  codeText: {
    color: '#714640',

    fontSize: width < 380 ? 12 : 14,
  },

  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  verifiedIcon: {
    width: 18,
    height: 18,

    marginRight: 5,
  },

  verifiedText: {
    color: '#08782A',

    fontSize: width < 380 ? 11 : 13,

    fontWeight: '700',
  },

  normalInputWrapper: {
    minHeight: 62,

    borderRadius: 13,

    borderWidth: 1.5,
    borderColor: '#ECC7C2',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 17,
  },

  inputIcon: {
    width: 22,
    height: 22,

    marginRight: 13,
  },

  normalInput: {
    flex: 1,

    color: '#111827',

    fontSize: 16,
  },

  passwordLabel: {
    marginTop: 20,
  },

  eyeIcon: {
    width: 23,
    height: 23,
  },

  forgotText: {
    color: '#DA101A',

    fontSize: 13,
    fontWeight: '700',

    textAlign: 'right',

    marginTop: 11,
  },

  /* ============================================================
     PRIMARY BUTTON
     ============================================================ */

  primaryButton: {
    minHeight: 62,

    borderRadius: 31,

    backgroundColor: '#E82422',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 28,

    shadowColor: '#E82422',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,

    elevation: 7,
  },

  primaryButtonText: {
    color: '#FFFFFF',

    fontSize: width < 380 ? 18 : 20,
    fontWeight: '900',
  },

  buttonArrow: {
    width: 24,
    height: 24,

    marginLeft: 14,
  },

  /* ============================================================
     OR
     ============================================================ */

  orRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 30,
  },

  orLine: {
    flex: 1,

    height: 1,

    backgroundColor: '#E9D1CD',
  },

  orText: {
    color: '#5A3731',

    fontSize: width < 380 ? 11 : 13,
    fontWeight: '800',

    marginHorizontal: 7,
  },

  sparkle: {
    color: '#FFA20A',

    fontSize: 15,
  },

  /* ============================================================
     SOCIAL
     ============================================================ */

  socialRow: {
    flexDirection: 'row',

    gap: 16,
  },

  socialButton: {
    flex: 1,

    minHeight: 62,

    borderRadius: 13,

    borderWidth: 1.5,
    borderColor: '#E9D4CF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialIcon: {
    width: 27,
    height: 27,

    marginRight: 12,
  },

  appleIcon: {
    width: 27,
    height: 27,

    marginRight: 12,
  },

  socialText: {
    color: '#111827',

    fontSize: 16,
    fontWeight: '700',
  },

  /* ============================================================
     GUEST
     ============================================================ */

  guestButton: {
    minHeight: 66,

    borderRadius: 13,

    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#F59A00',

    marginTop: 17,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFF9F1',
  },

  guestIcon: {
    width: 23,
    height: 23,

    marginRight: 12,
  },

  guestText: {
    color: '#985800',

    fontSize: width < 380 ? 14 : 16,
    fontWeight: '800',
  },

  /* ============================================================
     BENEFITS
     ============================================================ */

  benefitsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 28,
    marginHorizontal: 7,
  },

  benefitItem: {
    flex: 1,

    alignItems: 'center',

    paddingHorizontal: 5,
  },

  benefitIconCircle: {
    width: 46,
    height: 46,

    borderRadius: 23,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 9,
  },

  benefitIcon: {
    width: 24,
    height: 24,
  },

  benefitText: {
    color: '#62362F',

    fontSize: width < 380 ? 11 : 13,
    fontWeight: '700',

    lineHeight: 19,

    textAlign: 'center',
  },

  /* ============================================================
     FOOTER
     ============================================================ */

  footerSection: {
    alignItems: 'center',

    paddingTop: 38,
  },

  registerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  newText: {
    color: '#754941',

    fontSize: width < 380 ? 15 : 17,
  },

  createText: {
    color: '#E50914',

    fontSize: width < 380 ? 15 : 17,
    fontWeight: '800',

    marginLeft: 6,
  },

  termsText: {
    color: '#A87870',

    fontSize: width < 380 ? 13 : 15,

    lineHeight: 22,

    textAlign: 'center',

    marginTop: 26,
  },

  termsLink: {
    textDecorationLine: 'underline',
  },
});

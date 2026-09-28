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

/* =========================================================
   ONLINE DUMMY PNG ICONS
   No vector icon library is used.
   ========================================================= */

const IMAGES = {
  back: 'https://img.icons8.com/ios-filled/100/111827/back.png',

  star: 'https://img.icons8.com/ios-filled/100/8a5200/star.png',

  gift: 'https://img.icons8.com/ios-filled/100/d40818/gift.png',

  user: 'https://img.icons8.com/ios-filled/100/9b6c67/user.png',

  india: 'https://img.icons8.com/color/100/india.png',

  dropdown: 'https://img.icons8.com/ios-filled/100/805d58/expand-arrow.png',

  verified: 'https://img.icons8.com/ios-filled/100/00802b/verified-account.png',

  email: 'https://img.icons8.com/ios/100/9b6c67/new-post--v1.png',

  food: 'https://img.icons8.com/ios-filled/100/8a5200/cutlery.png',

  veg: 'https://img.icons8.com/ios-filled/100/00802b/vegetarian-food-symbol.png',

  onion: 'https://img.icons8.com/color/100/onion.png',

  no: 'https://img.icons8.com/ios-filled/100/e50914/no-entry.png',

  leaf: 'https://img.icons8.com/ios-filled/100/55a100/leaf.png',

  tandoori: 'https://img.icons8.com/color/100/grill.png',

  selected: 'https://img.icons8.com/ios-filled/100/00802b/checked--v1.png',

  unselected: 'https://img.icons8.com/ios/100/e8b8b1/circled.png',

  birthday: 'https://img.icons8.com/ios-filled/100/ff9d00/birthday.png',

  calendar: 'https://img.icons8.com/ios-filled/100/111111/calendar.png',

  checkWhite: 'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  arrow: 'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  whatsapp: 'https://img.icons8.com/ios-filled/100/805d58/chat-message.png',
};

/* =========================================================
   REGISTER SCREEN
   ========================================================= */

const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const [diet, setDiet] = useState('veg');
  const [termsAccepted, setTermsAccepted] = useState(true);

  /* =========================================================
     ACTIONS
     ========================================================= */

  const handleBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleSkip = () => {
    resetTo('Main');
  };

  const handleCreateAccount = () => {
    const digits = mobile.replace(/[^0-9]/g, '');

    if (!fullName.trim()) {
      Alert.alert('Missing name', 'Please enter your full name.');
      return;
    }

    if (digits.length !== 10) {
      Alert.alert(
        'Invalid number',
        'Please enter a valid 10-digit mobile number.',
      );
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    navigation?.navigate('OTP', {
      mobile: `+91 ${mobile.trim()}`,
      flow: 'register',
    });
  };

  const handleLogin = () => {
    navigation?.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          {/* =====================================================
              HEADER
          ===================================================== */}

          <View style={styles.header}>
            <TouchableOpacity
              onPress={handleBack}
              activeOpacity={0.7}
              style={styles.backButton}
            >
              <Image
                source={{ uri: IMAGES.back }}
                style={styles.backIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            {/* <View style={styles.progressDots}>
              <View style={[styles.progressDot, styles.redDot]} />
              <View style={[styles.progressDot, styles.orangeDot]} />
              <View style={[styles.progressDot, styles.greyDot]} />
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={handleSkip}>
              <Text style={styles.skipText}>Skip to Browse</Text>
            </TouchableOpacity> */}
          </View>

          {/* =====================================================
              VIP HERO CARD
          ===================================================== */}

            <View style={styles.heroTop}>
              <View style={styles.logoCircle}>
                <Image source={LOGO} style={styles.logo} resizeMode="contain" />
              </View>
            </View>

          {/* =====================================================
              BASIC FORM
          ===================================================== */}

          <View style={styles.formSection}>
            {/* FULL NAME */}

            <Text style={styles.label}>
              Full Name
              <Text style={styles.required}> *</Text>
            </Text>

            <View style={styles.inputBox}>
              <Image
                source={{ uri: IMAGES.user }}
                style={styles.inputIcon}
                resizeMode="contain"
              />

              <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder="e.g. Aarav Patel"
                placeholderTextColor="#EDBDB8"
                style={styles.input}
              />
            </View>

            {/* MOBILE */}

            <View style={styles.labelRow}>
              <Text style={styles.label}>
                Mobile Number
                <Text style={styles.required}> *</Text>
              </Text>

              <View style={styles.verifiedRow}>
                <Image
                  source={{ uri: IMAGES.verified }}
                  style={styles.verifiedIcon}
                  resizeMode="contain"
                />

                <Text style={styles.verifiedText}>OTP Verified</Text>
              </View>
            </View>

            <View style={styles.mobileRow}>
              <TouchableOpacity activeOpacity={0.8} style={styles.countryBox}>
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

              <View style={styles.mobileInputBox}>
                <TextInput
                  value={mobile}
                  onChangeText={setMobile}
                  keyboardType="phone-pad"
                  placeholder="98765 43210"
                  placeholderTextColor="#EDBDB8"
                  style={styles.mobileInput}
                />

                <Image
                  source={{ uri: IMAGES.selected }}
                  style={styles.mobileVerifiedIcon}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* EMAIL */}

            <Text style={styles.label}>
              Email Address
              <Text style={styles.required}> *</Text>
            </Text>

            <View style={styles.inputBox}>
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
                placeholder="aarav.feast@example.com"
                placeholderTextColor="#EDBDB8"
                style={styles.input}
              />
            </View>
          </View>

          {/* =====================================================
              TERMS
          ===================================================== */}
{/* 
          <View style={styles.termsRow}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.checkbox,
                termsAccepted && styles.checkboxSelected,
              ]}
              onPress={() => setTermsAccepted(prev => !prev)}
            >
              {termsAccepted && (
                <Image
                  source={{ uri: IMAGES.checkWhite }}
                  style={styles.checkIcon}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>

            <Text style={styles.termsText}>
              I agree to Patel's{' '}
              <Text style={styles.termsLink}>Terms of Service</Text> &{' '}
              <Text style={styles.termsLink}>Privacy Policy</Text>, plus festive
              updates via WhatsApp.
            </Text>

            <Image
              source={{ uri: IMAGES.whatsapp }}
              style={styles.whatsappIcon}
              resizeMode="contain"
            />
          </View> */}

          {/* =====================================================
              CREATE ACCOUNT CTA
          ===================================================== */}

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              activeOpacity={0.88}
              style={[
                styles.createButton,
                !termsAccepted && styles.createButtonDisabled,
              ]}
              disabled={!termsAccepted}
              onPress={handleCreateAccount}
            >
              <Text style={styles.createButtonText}>
                Create Account
              </Text>

            </TouchableOpacity>
          </View>

          {/* =====================================================
              LOGIN
          ===================================================== */}

          <View style={styles.footer}>
            <View style={styles.footerDivider} />

            <View style={styles.loginRow}>
              <Text style={styles.loginText}>Already have an account?</Text>

              <TouchableOpacity activeOpacity={0.7} onPress={handleLogin}>
                <Text style={styles.loginLink}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

/* =========================================================
   DIET CARD
   ========================================================= */

const DietCard = ({ selected, onPress, title, subtitle, icons }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <View style={styles.dietCardWrapper}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handlePress}
        style={[styles.dietCard, selected && styles.dietCardSelected]}
      >
        <View style={styles.dietCardTop}>
          <View style={styles.dietIconsRow}>
            {icons.map((icon, index) => (
              <Image
                key={index}
                source={{ uri: icon }}
                style={styles.dietCardIcon}
                resizeMode="contain"
              />
            ))}
          </View>

          <Image
            source={{
              uri: selected ? IMAGES.selected : IMAGES.unselected,
            }}
            style={styles.radioIcon}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.dietCardTitle}>{title}</Text>

        <Text style={styles.dietCardSubtitle}>{subtitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

/* =========================================================
   STYLES
   ========================================================= */

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 40,
  },

  /* HEADER */

  header: {
    height: 95,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 50,
    height: 50,

    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backIcon: {
    width: 26,
    height: 26,
  },

  progressDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  progressDot: {
    width: 10,
    height: 10,

    borderRadius: 5,

    marginHorizontal: 4,
  },

  redDot: {
    backgroundColor: '#D40916',
  },

  orangeDot: {
    backgroundColor: '#FF9700',
  },

  greyDot: {
    backgroundColor: '#E7C1BD',
  },

  skipText: {
    color: '#8A4D05',

    fontSize: width < 380 ? 15 : 17,
    fontWeight: '600',
  },

  /* HERO */

  heroCard: {
    minHeight: 280,

    borderRadius: 22,

    backgroundColor: '#F0F3FF',

    borderWidth: 1,
    borderColor: '#E8DADB',

    paddingHorizontal: 27,
    paddingTop: 27,
    paddingBottom: 21,

    overflow: 'hidden',

    shadowColor: '#B38B8B',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,

    elevation: 5,
  },

  heroTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoCircle: {
    width: 96,
    height: 96,

    borderRadius: 48,

    backgroundColor: '#FFFFFF',

    borderWidth: 3,
    borderColor: '#FFD181',

    overflow: 'hidden',

    padding: 5,

    marginRight: 16,

    shadowColor: '#E88944',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 5,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  heroTextArea: {
    flex: 1,
  },

  vipBadge: {
    alignSelf: 'flex-start',

    minHeight: 30,

    borderRadius: 18,

    backgroundColor: '#F7E4C8',

    paddingHorizontal: 13,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 8,
  },

  vipIcon: {
    width: 17,
    height: 17,

    marginRight: 6,
  },

  vipText: {
    color: '#70400A',

    fontSize: 13,
    fontWeight: '800',
  },

  heroTitle: {
    color: '#0E1A33',

    fontSize: width < 380 ? 27 : 30,

    lineHeight: width < 380 ? 32 : 36,

    fontWeight: '900',
  },

  heroSubtitle: {
    color: '#714642',

    fontSize: width < 380 ? 14 : 16,

    lineHeight: 22,

    marginTop: 8,
  },

  heroDivider: {
    height: 1,

    backgroundColor: '#E6E3EB',

    marginTop: 18,
    marginBottom: 13,
  },

  bonusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bonusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  giftIcon: {
    width: 25,
    height: 25,

    marginRight: 10,
  },

  bonusLabel: {
    color: '#D30A17',

    fontSize: 14,
    fontWeight: '900',
  },

  bonusPoints: {
    color: '#603D38',

    fontSize: width < 380 ? 12 : 14,
  },

  heroPattern: {
    position: 'absolute',

    width: 115,

    right: -8,
    bottom: -5,

    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  patternDot: {
    width: 3,
    height: 3,

    borderRadius: 2,

    backgroundColor: '#FFB53B',

    margin: 5,
  },

  /* FORM */

  formSection: {
    marginTop: 38,
  },

  label: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '600',

    marginBottom: 9,
  },

  required: {
    color: '#D50916',
  },

  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 27,
  },

  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 9,
  },

  verifiedIcon: {
    width: 19,
    height: 19,

    marginRight: 5,
  },

  verifiedText: {
    color: '#00802B',

    fontSize: 14,
    fontWeight: '700',
  },

  inputBox: {
    minHeight: 60,

    borderRadius: 13,

    borderWidth: 1.5,
    borderColor: '#EDC9C4',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 22,

    marginBottom: 27,

    backgroundColor: '#FFFFFF',
  },

  inputIcon: {
    width: 25,
    height: 25,

    marginRight: 18,
  },

  input: {
    flex: 1,

    color: '#111827',

    fontSize: 18,
  },

  mobileRow: {
    flexDirection: 'row',

    gap: 12,

    marginBottom: 27,
  },

  countryBox: {
    width: 118,
    minHeight: 60,

    borderRadius: 13,

    borderWidth: 1.5,
    borderColor: '#EDC9C4',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,

    backgroundColor: '#FFFFFF',
  },

  flag: {
    width: 27,
    height: 27,

    marginRight: 8,
  },

  countryCode: {
    color: '#111827',

    fontSize: 19,
    fontWeight: '700',
  },

  dropdown: {
    width: 13,
    height: 13,

    marginLeft: 'auto',
  },

  mobileInputBox: {
    flex: 1,

    minHeight: 60,

    borderRadius: 13,

    borderWidth: 1.5,
    borderColor: '#EDC9C4',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,

    backgroundColor: '#FFFFFF',
  },

  mobileInput: {
    flex: 1,

    color: '#111827',

    fontSize: 19,
  },

  mobileVerifiedIcon: {
    width: 26,
    height: 26,
  },

  /* DIET */

  dietSection: {
    marginTop: 3,
  },

  dietHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 14,
  },

  dietTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  foodIcon: {
    width: 22,
    height: 22,

    marginRight: 11,
  },

  dietTitle: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '600',
  },

  dietHint: {
    color: '#714642',

    fontSize: 14,
  },

  dietGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',
  },

  dietCardWrapper: {
    width: '49%',

    marginBottom: 13,
  },

  dietCard: {
    minHeight: 118,

    borderRadius: 13,

    borderWidth: 1.5,
    borderColor: '#EFCFCB',

    padding: 15,

    backgroundColor: '#FFFFFF',
  },

  dietCardSelected: {
    borderWidth: 2.5,
    borderColor: '#007C2C',

    backgroundColor: '#E7F5EC',
  },

  dietCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    minHeight: 27,
  },

  dietIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dietCardIcon: {
    width: 24,
    height: 24,

    marginRight: 3,
  },

  radioIcon: {
    width: 23,
    height: 23,
  },

  dietCardTitle: {
    color: '#111827',

    fontSize: width < 380 ? 15 : 17,

    fontWeight: '700',

    marginTop: 9,
  },

  dietCardSubtitle: {
    color: '#714642',

    fontSize: width < 380 ? 12 : 14,

    marginTop: 3,
  },

  /* DOB */

  dobSection: {
    marginTop: 20,
  },

  dobLabel: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '600',

    marginBottom: 9,
  },

  optionalText: {
    color: '#A1827C',
    fontWeight: '400',
  },

  dobBox: {
    minHeight: 66,

    borderRadius: 13,

    borderWidth: 1.5,
    borderColor: '#EDC9C4',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,

    backgroundColor: '#FFFFFF',
  },

  birthdayIcon: {
    width: 26,
    height: 26,

    marginRight: 16,
  },

  dobInput: {
    flex: 1,

    color: '#111827',

    fontSize: 18,
  },

  calendarIcon: {
    width: 22,
    height: 22,
  },

  birthdayBonusRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10,
  },

  smallGiftIcon: {
    width: 18,
    height: 18,

    marginRight: 7,
  },

  birthdayBonusText: {
    color: '#935400',

    fontSize: width < 380 ? 12 : 14,
    fontWeight: '600',
  },

  /* TERMS */

  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    marginTop: 39,
  },

  checkbox: {
    width: 25,
    height: 25,

    borderRadius: 6,

    borderWidth: 1.5,
    borderColor: '#D30A17',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 14,
  },

  checkboxSelected: {
    backgroundColor: '#C90013',
  },

  checkIcon: {
    width: 16,
    height: 16,
  },

  termsText: {
    flex: 1,

    color: '#76514B',

    fontSize: width < 380 ? 13 : 15,

    lineHeight: 21,
  },

  termsLink: {
    color: '#C90013',
    textDecorationLine: 'underline',
  },

  whatsappIcon: {
    width: 21,
    height: 21,

    marginTop: 18,
  },

  /* CTA */

  buttonWrapper: {
    marginTop: 42,
  },

  createButton: {
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
    shadowRadius: 16,

    elevation: 8,
  },

  createButtonDisabled: {
    opacity: 0.5,
  },

  createButtonText: {
    color: '#FFFFFF',

    fontSize: width < 380 ? 17 : 19,
    fontWeight: '900',
  },

  buttonGift: {
    width: 24,
    height: 24,

    marginLeft: 9,
  },

  buttonArrow: {
    width: 24,
    height: 24,

    marginLeft: 15,
  },

  /* FOOTER */

  footer: {
    marginTop: 40,
  },

  footerDivider: {
    height: 1,

    backgroundColor: '#F0E1DE',

    marginBottom: 20,
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    color: '#76514B',

    fontSize: width < 380 ? 15 : 17,
  },

  loginLink: {
    color: '#C90013',

    fontSize: width < 380 ? 16 : 18,
    fontWeight: '800',

    marginLeft: 8,
  },
});

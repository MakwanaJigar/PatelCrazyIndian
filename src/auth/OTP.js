import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {resetTo} from '../navigation/NavigationService';

const {width} = Dimensions.get('window');

// OTP boxes scale with the screen so all 4 always fit.
const OTP_GAP = 14;
const OTP_BOX = Math.min(72, (width - 58 - OTP_GAP * 3) / 4);

const IMAGES = {
  back:
    'https://img.icons8.com/ios-filled/100/111827/back.png',

  help:
    'https://img.icons8.com/ios-filled/100/6b3b35/help.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',

  safe:
    'https://img.icons8.com/ios-filled/100/ff9b00/fire-element.png',

  party:
    'https://img.icons8.com/ios-filled/100/9a5700/confetti.png',

  mobile:
    'https://img.icons8.com/ios-filled/100/111827/iphone.png',

  edit:
    'https://img.icons8.com/ios-filled/100/e50914/edit.png',

  timer:
    'https://img.icons8.com/ios-filled/100/9a5700/clock.png',

  whatsapp:
    'https://img.icons8.com/color/100/whatsapp--v1.png',

  chat:
    'https://img.icons8.com/ios-filled/100/00852d/chat-message.png',

  security:
    'https://img.icons8.com/ios-filled/100/111827/security-checked.png',

  arrow:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  delete:
    'https://img.icons8.com/ios-filled/100/111827/clear-symbol.png',
};

const KEYS = [
  {number: '1', letters: ''},
  {number: '2', letters: 'ABC'},
  {number: '3', letters: 'DEF'},
  {number: '4', letters: 'GHI'},
  {number: '5', letters: 'JKL'},
  {number: '6', letters: 'MNO'},
  {number: '7', letters: 'PQRS'},
  {number: '8', letters: 'TUV'},
  {number: '9', letters: 'WXYZ'},
];

const Otp = ({navigation, route}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [seconds, setSeconds] = useState(40);

  const mobile =
    route?.params?.mobile || '+91 98765 43210';

  // 'login' | 'register' | 'reset'
  const flow = route?.params?.flow || 'login';

  const inputRefs = useRef([]);

  useEffect(() => {
    if (seconds <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleOtpChange = (text, index) => {
    const digit = text.replace(/[^0-9]/g, '').slice(-1);

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (
      e.nativeEvent.key === 'Backspace' &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleCustomKey = number => {
    const emptyIndex = otp.findIndex(item => item === '');

    if (emptyIndex === -1) {
      return;
    }

    const newOtp = [...otp];
    newOtp[emptyIndex] = number;

    setOtp(newOtp);

    if (emptyIndex < 3) {
      inputRefs.current[emptyIndex + 1]?.focus();
    }
  };

  const handleDelete = () => {
    const lastFilledIndex = [...otp]
      .map((value, index) => ({value, index}))
      .reverse()
      .find(item => item.value !== '')?.index;

    if (
      lastFilledIndex === undefined ||
      lastFilledIndex === null
    ) {
      return;
    }

    const newOtp = [...otp];
    newOtp[lastFilledIndex] = '';

    setOtp(newOtp);

    inputRefs.current[lastFilledIndex]?.focus();
  };

  const handleResend = () => {
    if (seconds > 0) {
      return;
    }

    setOtp(['', '', '', '']);
    setSeconds(40);

    inputRefs.current[0]?.focus();
  };

  const isComplete = otp.every(digit => digit !== '');

  const handleVerify = () => {
    const code = otp.join('');

    if (code.length !== 4) {
      Alert.alert('Incomplete code', 'Please enter the 4-digit code.');
      return;
    }

    if (flow === 'reset') {
      navigation?.replace('ResetPassword', {mobile});
    } else {
      resetTo('Main');
    }
  };

  const handleBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    }
  };

  const formatSeconds = value => {
    return `00:${String(value).padStart(2, '0')}s`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#FFF9FB"
        barStyle="dark-content"
      />

      <View style={styles.root}>

        <View pointerEvents="none" style={styles.patternLayer}>
          {Array.from({length: 95}).map((_, index) => (
            <View
              key={index}
              style={[
                styles.patternDot,
                {
                  left: `${(index * 17) % 100}%`,
                  top: `${(index * 13) % 100}%`,
                },
              ]}
            />
          ))}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}>

          {/* HEADER */}
          <View
            style={styles.header}>

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={handleBack}
              style={styles.headerCircle}>

              <Image
                source={{uri: IMAGES.back}}
                style={styles.headerIcon}
                resizeMode="contain"
              />

            </TouchableOpacity>

          </View>

          {/* TITLE */}
          <View
            style={styles.titleSection}>

            <Text style={styles.subtitle}>
              Enter the 4-digit code sent to
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleBack}
              style={styles.numberPill}>

              <Text style={styles.numberText}>
                {mobile}
              </Text>
            </TouchableOpacity>

          </View>

          {/* OTP INPUTS */}
          <View
            style={styles.otpRow}>

            {otp.map((digit, index) => {
              const isActive =
                digit === '' &&
                otp.findIndex(item => item === '') === index;

              return (
                <View
                  key={index}
                  style={[
                    styles.otpBox,
                    isActive && styles.otpBoxActive,
                  ]}>

                  <TextInput
                    ref={ref => {
                      inputRefs.current[index] = ref;
                    }}
                    value={digit}
                    onChangeText={text =>
                      handleOtpChange(text, index)
                    }
                    onKeyPress={e =>
                      handleKeyPress(e, index)
                    }
                    keyboardType="number-pad"
                    maxLength={1}
                    showSoftInputOnFocus={false}
                    caretHidden
                    style={styles.otpInput}
                  />

                  {isActive && !digit && (
                    <View style={styles.fakeCursor} />
                  )}

                  {!digit && !isActive && index === 3 && (
                    <View style={styles.emptyDot} />
                  )}

                </View>
              );
            })}

          </View>

          {/* RESEND */}
          <View
            style={styles.metaSection}>

            <View style={styles.resendRow}>

              <Text style={styles.didntText}>
                Didn't receive code?
              </Text>

              <TouchableOpacity
                activeOpacity={seconds === 0 ? 0.7 : 1}
                onPress={handleResend}
                style={styles.resendButton}>

                <Image
                  source={{uri: IMAGES.timer}}
                  style={styles.timerIcon}
                  resizeMode="contain"
                />

                <Text style={styles.resendText}>
                  {seconds > 0
                    ? `Resend in ${formatSeconds(seconds)}`
                    : 'Resend Code'}
                </Text>

              </TouchableOpacity>

            </View>

            {/* <TouchableOpacity
              activeOpacity={0.75}
              style={styles.whatsappRow}>

              <Image
                source={{uri: IMAGES.chat}}
                style={styles.chatIcon}
                resizeMode="contain"
              />

              <Text style={styles.whatsappText}>
                Receive OTP via WhatsApp
              </Text>

              <Image
                source={{uri: IMAGES.whatsapp}}
                style={styles.whatsappIcon}
                resizeMode="contain"
              />

            </TouchableOpacity> */}

          </View>

          {/* VERIFY BUTTON */}
          <View
            style={styles.verifyButtonWrapper}>

            <TouchableOpacity
              activeOpacity={0.88}
              disabled={!isComplete}
              style={[
                styles.verifyButton,
                !isComplete && styles.verifyButtonDisabled,
              ]}
              onPress={handleVerify}>

              <Text style={styles.verifyText}>
                {flow === 'reset'
                  ? 'Verify & Reset Password'
                  : 'Verify & Enter Feast'}
              </Text>

              <Image
                source={{uri: IMAGES.arrow}}
                style={styles.verifyArrow}
                resizeMode="contain"
              />

            </TouchableOpacity>

          </View>

          {/* CUSTOM KEYPAD */}
          <View
            style={styles.keypadContainer}>

            <View style={styles.keypadHandle} />

            <View style={styles.keyGrid}>

              {KEYS.map(key => (
                <TouchableOpacity
                  key={key.number}
                  activeOpacity={0.75}
                  style={styles.keyButton}
                  onPress={() =>
                    handleCustomKey(key.number)
                  }>

                  <Text style={styles.keyNumber}>
                    {key.number}
                  </Text>

                  {!!key.letters && (
                    <Text style={styles.keyLetters}>
                      {key.letters}
                    </Text>
                  )}

                </TouchableOpacity>
              ))}

              <View style={styles.keyBlank}>
                <View style={styles.smallKeyDot} />
              </View>

              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.keyButton}
                onPress={() => handleCustomKey('0')}>

                <Text style={styles.keyNumber}>
                  0
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.keyButton}
                onPress={handleDelete}>

                <Image
                  source={{uri: IMAGES.delete}}
                  style={styles.deleteIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF9FB',
  },

  root: {
    flex: 1,
    backgroundColor: '#FFF9FB',
  },

  patternLayer: {
    ...StyleSheet.absoluteFillObject,
  },

  patternDot: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#F4D9D5',
    opacity: 0.42,
  },

  scrollContent: {
    paddingBottom: 0,
  },

  /* HEADER */

  header: {
    height: 84,

    paddingHorizontal: 24,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerCircle: {
    width: 52,
    height: 52,

    borderRadius: 26,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#8A6A67',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  headerIcon: {
    width: 22,
    height: 22,
  },

  headerTitle: {
    color: '#0D1728',

    fontSize: 22,
    fontWeight: '900',
  },

  /* HERO */

  heroSection: {
    alignItems: 'center',

    marginTop: 25,

    position: 'relative',
  },

  heroOuter: {
    width: 145,
    height: 145,

    borderRadius: 73,

    backgroundColor: '#FFE1C4',

    justifyContent: 'center',
    alignItems: 'center',
  },

  heroMiddle: {
    width: 118,
    height: 118,

    borderRadius: 32,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#E9A540',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 11,

    elevation: 6,
  },

  heroInner: {
    width: 86,
    height: 86,

    borderRadius: 19,

    backgroundColor: '#D50717',

    justifyContent: 'center',
    alignItems: 'center',
  },

  heroShield: {
    width: 41,
    height: 41,
  },

  safeBadge: {
    position: 'absolute',

    top: 5,
    right: width / 2 - 90,

    minHeight: 41,

    borderRadius: 22,

    backgroundColor: '#FFA20B',

    paddingHorizontal: 15,

    flexDirection: 'row',
    alignItems: 'center',
  },

  safeIcon: {
    width: 18,
    height: 18,

    marginRight: 5,
  },

  safeText: {
    color: '#4F2B00',

    fontSize: 15,
    fontWeight: '800',
  },

  /* GATE */

  gateBadge: {
    alignSelf: 'center',

    marginTop: 12,

    minHeight: 39,

    borderRadius: 22,

    backgroundColor: '#FFF0DF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 19,
  },

  gateIcon: {
    width: 19,
    height: 19,

    marginRight: 8,
  },

  gateText: {
    color: '#6B3C14',

    fontSize: 18,
    fontWeight: '700',
  },

  /* TITLE */

  titleSection: {
    alignItems: 'center',

    paddingHorizontal: 24,

    marginTop: 28,
  },

  mainTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    flexWrap: 'wrap',
  },

  mainTitle: {
    color: '#0D1728',

    fontSize: width < 380 ? 24 : 28,
    fontWeight: '900',

    textAlign: 'center',
  },

  mobileTitleIcon: {
    width: 27,
    height: 27,

    marginLeft: 11,
  },

  subtitle: {
    color: '#714842',

    fontSize: 17,

    marginTop: 14,
  },

  numberPill: {
    minHeight: 51,

    borderRadius: 27,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#EEDDD8',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,

    marginTop: 15,

    shadowColor: '#9F7B75',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.09,
    shadowRadius: 7,

    elevation: 3,
  },

  numberText: {
    color: '#111827',

    fontSize: 18,
    fontWeight: '600',
  },

  editIcon: {
    width: 21,
    height: 21,

    marginLeft: 15,
  },

  /* OTP */

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'center',

    marginTop: 32,

    gap: OTP_GAP,
  },

  otpBox: {
    width: OTP_BOX,
    height: OTP_BOX * 1.18,

    borderRadius: 18,

    backgroundColor: '#FFFFFF',

    borderWidth: 3,
    borderColor: '#EDD8D5',

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
  },

  otpBoxActive: {
    borderColor: '#F01E1A',

    shadowColor: '#F01E1A',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 9,

    elevation: 5,
  },

  otpInput: {
    width: '100%',
    height: '100%',

    color: '#0D1728',

    fontSize: OTP_BOX * 0.5,
    fontWeight: '900',

    textAlign: 'center',

    padding: 0,
  },

  fakeCursor: {
    position: 'absolute',

    width: 2,
    height: OTP_BOX * 0.45,

    backgroundColor: '#E50914',
  },

  emptyDot: {
    width: 18,
    height: 18,

    borderRadius: 9,

    backgroundColor: '#F2D6D2',
  },

  /* META */

  metaSection: {
    alignItems: 'center',

    marginTop: 30,
  },

  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    flexWrap: 'wrap',
  },

  didntText: {
    color: '#744840',

    fontSize: 17,
  },

  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 10,
  },

  timerIcon: {
    width: 20,
    height: 20,

    marginRight: 6,
  },

  resendText: {
    color: '#985800',

    fontSize: 17,
    fontWeight: '800',
  },

  whatsappRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 28,
  },

  chatIcon: {
    width: 27,
    height: 27,

    marginRight: 9,
  },

  whatsappText: {
    color: '#007C2D',

    fontSize: 17,
    fontWeight: '700',
  },

  whatsappIcon: {
    width: 24,
    height: 24,

    marginLeft: 5,
  },

  /* SECURITY */

  securityCard: {
    minHeight: 91,

    marginHorizontal: 29,
    marginTop: 32,

    borderRadius: 20,

    backgroundColor: '#F3F5FF',

    borderWidth: 1,
    borderColor: '#E7DBDB',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 22,

    shadowColor: '#A98983',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,

    elevation: 2,
  },

  securityIconBox: {
    width: 58,
    height: 58,

    borderRadius: 14,

    backgroundColor: '#FFE0B7',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 17,
  },

  securityIcon: {
    width: 29,
    height: 29,
  },

  securityText: {
    flex: 1,

    color: '#6A433E',

    fontSize: 16,
    lineHeight: 23,
  },

  securityHighlight: {
    color: '#D60715',
    fontWeight: '900',
  },

  /* VERIFY */

  verifyButtonWrapper: {
    marginHorizontal: 29,

    marginTop: 31,
  },

  verifyButton: {
    minHeight: 64,

    borderRadius: 32,

    backgroundColor: '#E92320',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#E92320',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 17,

    elevation: 8,
  },

  verifyButtonDisabled: {
    opacity: 0.5,
  },

  verifyText: {
    color: '#FFFFFF',

    fontSize: width < 380 ? 17 : 19,
    fontWeight: '900',
  },

  verifyArrow: {
    width: 26,
    height: 26,

    marginLeft: 16,
  },

  /* KEYPAD */

  keypadContainer: {
    marginTop: 25,

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,

    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 14,

    borderTopWidth: 1,
    borderColor: '#F0E6E4',
  },

  keypadHandle: {
    width: 71,
    height: 8,

    borderRadius: 4,

    backgroundColor: '#F0DAD6',

    alignSelf: 'center',

    marginBottom: 22,
  },

  keyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',
  },

  keyButton: {
    width: '31%',
    height: 62,

    borderRadius: 17,

    backgroundColor: '#FAF9FF',

    borderWidth: 1,
    borderColor: '#EFE4E4',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 15,
  },

  keyBlank: {
    width: '31%',
    height: 62,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 15,
  },

  keyNumber: {
    color: '#0D1728',

    fontSize: 28,
    fontWeight: '600',
  },

  keyLetters: {
    color: '#9C8885',

    fontSize: 12,
    fontWeight: '700',

    marginTop: 1,
  },

  deleteIcon: {
    width: 31,
    height: 31,
  },

  smallKeyDot: {
    width: 10,
    height: 10,

    borderRadius: 5,

    backgroundColor: '#F0DAD6',
  },

});
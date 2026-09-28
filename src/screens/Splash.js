import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {LOGO} from '../assets';

const {width, height} = Dimensions.get('window');

// How long the splash stays before moving to Login automatically.
const SPLASH_DURATION = 4500;

const IMAGES = {
  celebration:
    'https://img.icons8.com/ios-filled/100/f5a000/confetti.png',

  fire:
    'https://img.icons8.com/ios-filled/100/ffffff/fire-element.png',

  star:
    'https://img.icons8.com/ios-filled/100/f5a000/star.png',

  veg:
    'https://img.icons8.com/ios-filled/100/087b2d/vegetarian-food-symbol.png',

  dining:
    'https://img.icons8.com/ios-filled/100/d40016/restaurant.png',

  arrow:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  hand:
    'https://img.icons8.com/ios-filled/100/a36a23/handshake.png',
};

const Splash = ({navigation}) => {
  const topOpacity = useRef(new Animated.Value(0)).current;
  const topY = useRef(new Animated.Value(-25)).current;

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.75)).current;

  const magicOpacity = useRef(new Animated.Value(0)).current;
  const magicScale = useRef(new Animated.Value(0.75)).current;

  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleY = useRef(new Animated.Value(25)).current;

  const featureOpacity = useRef(new Animated.Value(0)).current;
  const featureY = useRef(new Animated.Value(25)).current;

  const chipsOpacity = useRef(new Animated.Value(0)).current;
  const chipsY = useRef(new Animated.Value(25)).current;

  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonY = useRef(new Animated.Value(35)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;

  const loginOpacity = useRef(new Animated.Value(0)).current;
  const footerOpacity = useRef(new Animated.Value(0)).current;

  const openDotScale = useRef(new Animated.Value(1)).current;
  const logoFloat = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;

  const hasNavigated = useRef(false);

  useEffect(() => {
    startIntroAnimation();

    Animated.timing(progress, {
      toValue: 1,
      duration: SPLASH_DURATION,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      goToLogin();
    }, SPLASH_DURATION);

    return () => clearTimeout(timer);
  }, []);

  // Splash is never shown again, so replace it with the Auth stack (Login).
  const goToLogin = () => {
    if (hasNavigated.current) {
      return;
    }

    hasNavigated.current = true;
    navigation?.replace('Auth');
  };

  const startIntroAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(topOpacity, {
          toValue: 1,
          duration: 450,
          useNativeDriver: true,
        }),
        Animated.timing(topY, {
          toValue: 0,
          duration: 450,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 550,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 6,
          tension: 55,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(magicOpacity, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.spring(magicScale, {
          toValue: 1,
          friction: 5,
          tension: 65,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 450,
          useNativeDriver: true,
        }),
        Animated.timing(titleY, {
          toValue: 0,
          duration: 450,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(featureOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(featureY, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(chipsOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(chipsY, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(buttonY, {
          toValue: 0,
          friction: 7,
          tension: 55,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(loginOpacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),

      Animated.timing(footerOpacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start(() => {
      startIdleAnimations();
    });
  };

  const startIdleAnimations = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(buttonScale, {
          toValue: 1.018,
          duration: 1100,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(buttonScale, {
          toValue: 1,
          duration: 1100,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(openDotScale, {
          toValue: 1.25,
          duration: 850,
          useNativeDriver: true,
        }),
        Animated.timing(openDotScale, {
          toValue: 1,
          duration: 850,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(logoFloat, {
          toValue: -5,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(logoFloat, {
          toValue: 0,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const handleStart = () => {
    goToLogin();
  };

  const handleLogin = () => {
    goToLogin();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#FFF6EF"
        barStyle="dark-content"
      />

      <View style={styles.container}>

        {/* Decorative Pattern */}
        <View pointerEvents="none" style={styles.patternLayer}>
          {Array.from({length: 120}).map((_, index) => (
            <View
              key={index}
              style={[
                styles.patternDot,
                {
                  left: `${(index * 17) % 100}%`,
                  top: `${(index * 11) % 100}%`,
                },
              ]}
            />
          ))}
        </View>

        {/* Top Pills */}
        <Animated.View
          style={[
            styles.topRow,
            {
              opacity: topOpacity,
              transform: [{translateY: topY}],
            },
          ]}>

          <View style={styles.yearPill}>
            <Image
              source={{uri: IMAGES.celebration}}
              style={styles.smallIcon}
              resizeMode="contain"
            />

            <Text style={styles.yearText}>
              EST. 2012
            </Text>
          </View>

          <View style={styles.openPill}>

            <Animated.View
              style={[
                styles.greenDot,
                {
                  transform: [{scale: openDotScale}],
                },
              ]}
            />

            <Text style={styles.openText}>
              Kitchen Open Now
            </Text>
          </View>

        </Animated.View>

        {/* Logo */}
        <Animated.View
          style={[
            styles.logoArea,
            {
              opacity: logoOpacity,
              transform: [
                {scale: logoScale},
                {translateY: logoFloat},
              ],
            },
          ]}>

          <View style={styles.logoCircle}>
            <Image
              source={LOGO}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Animated.View
            style={[
              styles.magicBadge,
              {
                opacity: magicOpacity,
                transform: [{scale: magicScale}],
              },
            ]}>

            <Image
              source={{uri: IMAGES.fire}}
              style={styles.magicIcon}
              resizeMode="contain"
            />

            <Text style={styles.magicText}>
              Desi Street Magic
            </Text>

          </Animated.View>

        </Animated.View>

        {/* Heading */}
        <Animated.View
          style={[
            styles.headingArea,
            {
              opacity: titleOpacity,
              transform: [{translateY: titleY}],
            },
          ]}>

          <Text style={styles.title}>
            Patel's Crazy Indian
          </Text>

          <Text style={styles.subtitle}>
            Authentic Flavors, Royal Feasts & Crazy Good{'\n'}Treats!
          </Text>

        </Animated.View>

        {/* Feature Pill */}
        <Animated.View
          style={[
            styles.featurePill,
            {
              opacity: featureOpacity,
              transform: [{translateY: featureY}],
            },
          ]}>

          <Image
            source={{uri: IMAGES.star}}
            style={styles.featureStar}
            resizeMode="contain"
          />

          <Text style={styles.featureText}>
            100% Desi Flavors • Fresh Daily • Royal Hospitality
          </Text>

        </Animated.View>

        {/* Chips */}
        <Animated.View
          style={[
            styles.chipsRow,
            {
              opacity: chipsOpacity,
              transform: [{translateY: chipsY}],
            },
          ]}>

          <View style={styles.vegChip}>
            <Image
              source={{uri: IMAGES.veg}}
              style={styles.chipIcon}
              resizeMode="contain"
            />

            <Text style={styles.vegText}>
              Pure Veg & Swaminarayan
            </Text>
          </View>

          <View style={styles.signatureChip}>
            <Image
              source={{uri: IMAGES.dining}}
              style={styles.chipIcon}
              resizeMode="contain"
            />

            <Text style={styles.signatureText}>
              Signature Chaat & Thali
            </Text>
          </View>

        </Animated.View>

        {/* Spacer */}
        <View style={styles.flexSpacer} />

        {/* CTA */}
        <Animated.View
          style={[
            {
              opacity: buttonOpacity,
              transform: [
                {translateY: buttonY},
                {scale: buttonScale},
              ],
            },
          ]}>

          <TouchableOpacity
            activeOpacity={0.88}
            style={styles.startButton}
            onPress={handleStart}>

            <Text style={styles.startText}>
              Start Feasting
            </Text>

            <Image
              source={{uri: IMAGES.arrow}}
              style={styles.arrowIcon}
              resizeMode="contain"
            />

          </TouchableOpacity>

        </Animated.View>

        {/* Login */}
        <Animated.View
          style={[
            styles.loginRow,
            {
              opacity: loginOpacity,
            },
          ]}>

          <Text style={styles.loginText}>
            Already a Patel's Club Member?
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleLogin}>

            <Text style={styles.loginLink}>
              Log In
            </Text>

          </TouchableOpacity>

        </Animated.View>

        {/* Loading Progress */}
        <View style={styles.progressTrack}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>

        {/* Footer */}
        <Animated.View
          style={[
            styles.footer,
            {
              opacity: footerOpacity,
            },
          ]}>

          <Image
            source={{uri: IMAGES.hand}}
            style={styles.footerIcon}
            resizeMode="contain"
          />

          <Text style={styles.footerText}>
            TASTE THE TRADITION • ATITHI DEVO BHAVA
          </Text>

        </Animated.View>

      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF6EF',
  },

  container: {
    flex: 1,
    backgroundColor: '#FFF6EF',
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 20,
    overflow: 'hidden',
  },

  patternLayer: {
    ...StyleSheet.absoluteFillObject,
  },

  patternDot: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#F5B8A7',
    opacity: 0.42,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  yearPill: {
    minHeight: 46,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F7CE8D',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  smallIcon: {
    width: 18,
    height: 18,
    marginRight: 9,
  },

  yearText: {
    color: '#6A411D',
    fontSize: 16,
    fontWeight: '800',
  },

  openPill: {
    minHeight: 43,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 17,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  greenDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#007C2C',
    marginRight: 8,
  },

  openText: {
    color: '#05752D',
    fontSize: 15,
    fontWeight: '800',
  },

  logoArea: {
    alignItems: 'center',
    marginTop: height < 700 ? 80 : 125,
  },

  logoCircle: {
    width: width * 0.59,
    height: width * 0.59,
    maxWidth: 300,
    maxHeight: 300,
    borderRadius: 999,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 7,
    borderColor: '#FFFFFF',

    shadowColor: '#D78B63',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 20,
    elevation: 10,

    overflow: 'hidden',
  },

  logo: {
    width: '90%',
    height: '90%',
  },

  progressTrack: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#F7DCD2',
    marginTop: 26,
    marginHorizontal: 60,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 2,
    backgroundColor: '#CD0013',
  },

  magicBadge: {
    marginTop: -23,
    minHeight: 44,
    borderRadius: 24,
    paddingHorizontal: 20,

    backgroundColor: '#CC0013',

    borderWidth: 3,
    borderColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#B40010',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.22,
    shadowRadius: 8,
    elevation: 5,
  },

  magicIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },

  magicText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  headingArea: {
    alignItems: 'center',
    marginTop: 23,
  },

  title: {
    color: '#172035',
    fontSize: width < 370 ? 27 : 32,
    fontWeight: '900',
    textAlign: 'center',
  },

  subtitle: {
    color: '#6C4541',
    fontSize: width < 370 ? 15 : 18,
    lineHeight: width < 370 ? 22 : 27,
    textAlign: 'center',
    marginTop: 12,
  },

  featurePill: {
    minHeight: 59,
    borderRadius: 31,
    backgroundColor: '#FFFFFF',
    marginTop: 25,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 18,

    borderWidth: 1,
    borderColor: '#F4CC72',

    shadowColor: '#C88F62',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.09,
    shadowRadius: 8,
    elevation: 3,
  },

  featureStar: {
    width: 21,
    height: 21,
    marginRight: 11,
  },

  featureText: {
    color: '#172035',
    fontSize: width < 370 ? 12 : 14,
    fontWeight: '800',
    textAlign: 'center',
  },

  chipsRow: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 10,
  },

  vegChip: {
    flex: 1,
    minHeight: 48,
    borderRadius: 12,

    backgroundColor: '#EDF7F1',

    borderWidth: 1,
    borderColor: '#A7CFB8',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 9,
  },

  signatureChip: {
    flex: 1,
    minHeight: 48,
    borderRadius: 12,

    backgroundColor: '#FFF4F6',

    borderWidth: 1,
    borderColor: '#E9C3CB',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 9,
  },

  chipIcon: {
    width: 20,
    height: 20,
    marginRight: 7,
  },

  vegText: {
    flex: 1,
    color: '#08752B',
    fontSize: width < 370 ? 10.5 : 12.5,
    fontWeight: '800',
    textAlign: 'center',
  },

  signatureText: {
    flex: 1,
    color: '#C60016',
    fontSize: width < 370 ? 10.5 : 12.5,
    fontWeight: '800',
    textAlign: 'center',
  },

  flexSpacer: {
    flex: 1,
    minHeight: 35,
  },

  startButton: {
    minHeight: 70,
    borderRadius: 38,
    backgroundColor: '#CD0013',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#C30015',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 14,
    elevation: 8,
  },

  startText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    marginRight: 13,
  },

  arrowIcon: {
    width: 23,
    height: 23,
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },

  loginText: {
    color: '#70403B',
    fontSize: width < 370 ? 13 : 15,
  },

  loginLink: {
    color: '#C60016',
    fontSize: width < 370 ? 13 : 15,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  footerIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  footerText: {
    color: '#8D6A65',
    fontSize: width < 370 ? 10 : 12,
    fontWeight: '800',
    letterSpacing: 1.1,
  },
});
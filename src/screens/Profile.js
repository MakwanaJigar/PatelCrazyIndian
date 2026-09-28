import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { resetTo } from '../navigation/NavigationService';

const { width } = Dimensions.get('window');

const IMAGES = {
  back: 'https://img.icons8.com/ios-filled/100/111827/back.png',

  share: 'https://img.icons8.com/ios-filled/100/ff9d00/share.png',

  tune: 'https://img.icons8.com/ios-filled/100/6b4c46/settings-sliders.png',

  avatar:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85',

  crown: 'https://img.icons8.com/ios-filled/100/ffffff/crown.png',

  orders: 'https://img.icons8.com/ios-filled/100/d60918/receipt.png',

  address: 'https://img.icons8.com/ios-filled/100/8a5700/home-address.png',

  payment:
    'https://img.icons8.com/ios-filled/100/00852d/bank-card-back-side.png',

  support: 'https://img.icons8.com/ios-filled/100/1e6bd6/headset.png',

  veg: 'https://img.icons8.com/ios-filled/100/00852d/vegetarian-food-symbol.png',

  spice: 'https://img.icons8.com/color/100/chili-pepper.png',

  cake: 'https://img.icons8.com/ios-filled/100/ffffff/birthday-cake.png',

  favorite: 'https://img.icons8.com/ios-filled/100/d60918/like.png',

  reservation: 'https://img.icons8.com/ios-filled/100/8a5700/table.png',

  gift: 'https://img.icons8.com/ios-filled/100/5278d8/gift-card.png',

  notification:
    'https://img.icons8.com/ios-filled/100/5278d8/appointment-reminders.png',

  language: 'https://img.icons8.com/ios-filled/100/5278d8/language.png',

  arrow: 'https://img.icons8.com/ios-filled/100/6e514b/forward.png',

  logout: 'https://img.icons8.com/ios-filled/100/d60918/logout-rounded.png',

  feast: 'https://img.icons8.com/ios-filled/100/6b4c46/store.png',

  menu: 'https://img.icons8.com/ios-filled/100/6b4c46/restaurant-menu.png',

  booking: 'https://img.icons8.com/ios-filled/100/6b4c46/table.png',

  profile: 'https://img.icons8.com/ios-filled/100/ffffff/user.png',
};

const Profile = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert('Log out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Log Out', style: 'destructive', onPress: () => resetTo('Auth') },
    ]);
  };

  return (
    // Bottom edge is handled by the tab bar.
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View style={styles.root}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation?.goBack()}
            style={styles.headerButton}
          >
            <Image
              source={{ uri: IMAGES.back }}
              style={styles.headerIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* PROFILE CARD */}
          <View style={styles.profileCard}>
            <View style={styles.profileTop}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={{ uri: IMAGES.avatar }}
                  style={styles.avatar}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Rahul Patel</Text>

                <Text style={styles.contactText}>
                  Mail : rahul.patel@example.com
                </Text>
                <Text style={styles.contactText}>
                  Phone : +1 234 567 8901
                </Text>
              </View>
            </View>

            <View style={styles.profileDivider} />

            <View style={styles.profileBottom}>

              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.editProfileText}>Edit Info</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* QUICK ACTIONS */}
          <View style={styles.quickSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>

              <Text style={styles.sectionHint}>Tap to manage</Text>
            </View>

            <View style={styles.quickRow}>
              <QuickAction
                icon={IMAGES.orders}
                label="My Orders"
                badge="2 Active"
              />

              <QuickAction
                icon={IMAGES.address}
                label={'Addresses\n(Home, Off)'}
              />

              <QuickAction
                icon={IMAGES.payment}
                label={'Payments\nUPI / Cards'}
              />

              <QuickAction
                icon={IMAGES.support}
                label={'24×7 Help\nWhatsApp'}
                green
              />
            </View>
          </View>

          {/* FEAST HUB & SETTINGS */}
          <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Feast Hub & Settings</Text>

            <View style={styles.settingsCard}>
              <SettingRow
                icon={IMAGES.favorite}
                title="Favorites & Saved Feasts"
                subtitle="6 Dishes (Butter Paneer, Samosa Chaat)"
              />

              <SettingRow
                icon={IMAGES.reservation}
                title="Dining Reservations"
                subtitle="Tonight, 8:00 PM • Table for 4 (Patel Hall)"
                badge="1 Upcoming"
              />

              <SettingRow
                icon={IMAGES.gift}
                title="Festive Gift Cards & Vouchers"
                subtitle="Have a festive coupon? Redeem here"
              />

              <SettingRow
                icon={IMAGES.notification}
                title="Notification Preferences"
                subtitle="Push, SMS & WhatsApp Feast alerts"
              />

              <SettingRow
                icon={IMAGES.language}
                title="Language / ભાષા / भाषा"
                subtitle="English (Active)"
                last
                language
              />
            </View>
          </View>

          {/* LOGOUT */}
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleLogout}
              style={styles.logoutButton}
            >
              <Image
                source={{ uri: IMAGES.logout }}
                style={styles.logoutIcon}
                resizeMode="contain"
              />

              <Text style={styles.logoutText}>
                Log Out from Patel's Crazy Indian
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 90 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

/* ============================================================
   QUICK ACTION
   ============================================================ */

const QuickAction = ({ icon, label, badge, green, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={onPress}
      style={styles.quickCard}
    >
      {badge && (
        <View style={styles.quickBadge}>
          <Text style={styles.quickBadgeText}>{badge}</Text>
        </View>
      )}

      <View style={styles.quickIconCircle}>
        <Image
          source={{ uri: icon }}
          style={styles.quickIcon}
          resizeMode="contain"
        />
      </View>

      <Text style={[styles.quickLabel, green && styles.quickLabelGreen]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

/* ============================================================
   SETTING ROW
   ============================================================ */

const SettingRow = ({ icon, title, subtitle, badge, last, language }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      style={[styles.settingRow, last && styles.settingRowLast]}
    >
      <View style={styles.settingIconBox}>
        <Image
          source={{ uri: icon }}
          style={styles.settingIcon}
          resizeMode="contain"
        />
      </View>

      <View style={styles.settingContent}>
        <View style={styles.settingTitleRow}>
          <Text style={styles.settingTitle}>{title}</Text>

          {badge && (
            <View style={styles.upcomingBadge}>
              <Text style={styles.upcomingText}>{badge}</Text>
            </View>
          )}
        </View>

        <Text style={styles.settingSub}>{subtitle}</Text>
      </View>

      {language ? (
        <View style={styles.languagePill}>
          <Text style={styles.languageActive}>EN</Text>

          <Text style={styles.languageOther}>| ગુજરાતી | हिन्दी</Text>
        </View>
      ) : (
        <Image
          source={{ uri: IMAGES.arrow }}
          style={styles.settingArrow}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  root: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  /* HEADER */

  header: {
    minHeight: 70,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,
    borderBottomColor: '#ECE5E4',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,
  },

  headerButton: {
    width: 44,
    height: 44,

    justifyContent: 'center',
  },

  headerIcon: {
    width: 24,
    height: 24,
  },

  headerTitle: {
    flex: 1,

    color: '#C90013',

    fontSize: 21,
    fontWeight: '900',
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 15,
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  actionIcon: {
    width: 20,
    height: 20,
  },

  actionText: {
    color: '#6B4B46',

    fontSize: 14,

    marginLeft: 5,
  },

  /* PROFILE CARD */

  profileCard: {
    marginTop: 18,

    borderRadius: 16,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0E0DC',

    padding: 18,

    overflow: 'hidden',

    shadowColor: '#8A6A64',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,

    elevation: 3,
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  avatarWrapper: {
    width: 90,
    height: 90,

    borderRadius: 45,

    position: 'relative',

    marginRight: 15,
  },

  avatar: {
    width: '100%',
    height: '100%',

    borderRadius: 45,

    borderWidth: 3,
    borderColor: '#E74828',
  },

  avatarBadge: {
    position: 'absolute',

    left: -17,
    bottom: 10,

    backgroundColor: '#C90013',

    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,

    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  avatarBadgeText: {
    color: '#FFFFFF',

    fontSize: 9,
    fontWeight: '800',
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    color: '#111827',

    fontSize: 23,
    fontWeight: '900',
  },

  vipPill: {
    alignSelf: 'flex-start',

    backgroundColor: '#FFE4C2',

    borderRadius: 14,

    paddingHorizontal: 10,
    paddingVertical: 5,

    marginTop: 8,
  },

  vipPillText: {
    color: '#7E4B00',

    fontSize: 10,
    fontWeight: '700',
  },

  contactText: {
    color: '#7B615B',

    fontSize: 12,

    marginTop: 6,
  },

  profilePattern: {
    position: 'absolute',

    width: 105,

    right: -10,
    top: -5,

    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  patternDot: {
    width: 3,
    height: 3,

    borderRadius: 2,

    backgroundColor: '#FFBF52',

    margin: 5,
  },

  profileDivider: {
    height: 1,

    backgroundColor: '#F0E8E6',

    marginVertical: 15,
  },

  profileBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  memberText: {
    color: '#935800',

    fontSize: 13,
    fontWeight: '700',
  },

  editProfileText: {
    color: '#C90013',

    fontSize: 12,
    fontWeight: '700',
  },

  /* CLUB CARD */

  clubCard: {
    marginTop: 28,

    borderRadius: 17,

    padding: 20,

    backgroundColor: '#DA101B',

    overflow: 'hidden',

    shadowColor: '#D2121D',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,

    elevation: 6,
  },

  clubHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  clubSmallTitle: {
    color: '#FFDAD3',

    fontSize: 11,
    fontWeight: '800',

    letterSpacing: 0.4,
  },

  goldBadge: {
    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: 'rgba(255,255,255,0.15)',

    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',

    alignItems: 'center',
    justifyContent: 'center',
  },

  goldBadgeText: {
    color: '#FFFFFF',

    fontSize: 11,
    fontWeight: '800',

    textAlign: 'center',
  },

  clubTier: {
    color: '#FFFFFF',

    fontSize: 28,
    lineHeight: 31,
    fontWeight: '900',

    marginTop: 4,

    marginLeft: width * 0.42,
  },

  pointsCard: {
    marginTop: 19,

    borderRadius: 13,

    backgroundColor: 'rgba(128,0,0,0.28)',

    padding: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  pointsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  pointsNumber: {
    color: '#FFFFFF',

    fontSize: 35,
    fontWeight: '900',
  },

  pointsLabel: {
    color: '#FFE9E1',

    fontSize: 12,
    fontWeight: '700',

    marginLeft: 8,
    marginBottom: 6,
  },

  pointsSub: {
    color: '#FFE7E0',

    fontSize: 10,
    fontWeight: '600',

    marginTop: 4,
  },

  redeemButton: {
    minWidth: 130,

    minHeight: 56,

    borderRadius: 28,

    backgroundColor: '#FFA20A',

    justifyContent: 'center',
    alignItems: 'center',
  },

  redeemText: {
    color: '#3F2400',

    fontSize: 15,
    fontWeight: '800',

    textAlign: 'center',
  },

  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 16,
  },

  progressText: {
    color: '#FFFFFF',

    fontSize: 10,
    fontWeight: '700',
  },

  progressPercent: {
    color: '#FFFFFF',

    fontSize: 11,
    fontWeight: '800',
  },

  progressTrack: {
    height: 7,

    borderRadius: 4,

    backgroundColor: 'rgba(81,35,0,0.55)',

    marginTop: 8,

    overflow: 'hidden',
  },

  progressFill: {
    width: '84%',
    height: '100%',

    backgroundColor: '#FFD17E',

    borderRadius: 4,
  },

  /* QUICK */

  quickSection: {
    marginTop: 29,
  },

  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 12,
  },

  sectionTitle: {
    color: '#111827',

    fontSize: 21,
    fontWeight: '900',
  },

  sectionHint: {
    color: '#7D615B',

    fontSize: 11,
    fontWeight: '600',
  },

  quickRow: {
    flexDirection: 'row',

    gap: 9,
  },

  quickCard: {
    flex: 1,

    minHeight: 122,

    borderRadius: 13,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0E0DC',

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },

  quickBadge: {
    position: 'absolute',

    top: -7,

    backgroundColor: '#C90013',

    borderRadius: 10,

    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  quickBadgeText: {
    color: '#FFFFFF',

    fontSize: 8,
    fontWeight: '800',
  },

  quickIconCircle: {
    width: 53,
    height: 53,

    borderRadius: 27,

    backgroundColor: '#F7F0EA',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 9,
  },

  quickIcon: {
    width: 27,
    height: 27,
  },

  quickLabel: {
    color: '#263044',

    fontSize: 11,

    textAlign: 'center',

    lineHeight: 15,
  },

  quickLabelGreen: {
    color: '#00852D',

    fontWeight: '700',
  },

  /* PASSPORT */

  passportCard: {
    marginTop: 28,

    borderRadius: 16,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0E0DC',

    padding: 19,
  },

  passportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  passportTitle: {
    color: '#111827',

    fontSize: 20,
    fontWeight: '900',
  },

  passportSub: {
    color: '#775C56',

    fontSize: 11,
    fontWeight: '600',

    marginTop: 3,
  },

  editPreferences: {
    color: '#C90013',

    fontSize: 11,
    fontWeight: '700',
  },

  passportDivider: {
    height: 1,

    backgroundColor: '#EEE7E5',

    marginVertical: 15,
  },

  preferencesRow: {
    flexDirection: 'row',

    gap: 10,
  },

  preferenceGreen: {
    minHeight: 33,

    borderRadius: 18,

    borderWidth: 1,
    borderColor: '#9FD0AF',

    backgroundColor: '#E1F4E8',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
  },

  preferenceIcon: {
    width: 18,
    height: 18,

    marginRight: 7,
  },

  preferenceGreenText: {
    color: '#087A2D',

    fontSize: 11,
    fontWeight: '700',
  },

  preferenceYellow: {
    flex: 1,

    minHeight: 33,

    borderRadius: 18,

    borderWidth: 1,
    borderColor: '#E2C18A',

    backgroundColor: '#FFF2DF',

    justifyContent: 'center',

    paddingHorizontal: 12,
  },

  preferenceYellowText: {
    color: '#6C452F',

    fontSize: 10,
    fontWeight: '600',

    textAlign: 'center',
  },

  spiceChip: {
    alignSelf: 'flex-start',

    minHeight: 31,

    borderRadius: 16,

    borderWidth: 1,
    borderColor: '#E3BAB6',

    backgroundColor: '#FFF0F0',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,

    marginTop: 11,
  },

  spiceChipText: {
    color: '#6E433E',

    fontSize: 10,

    marginRight: 7,
  },

  spiceIcon: {
    width: 13,
    height: 13,

    marginLeft: 1,
  },

  birthdayCard: {
    minHeight: 73,

    borderRadius: 11,

    backgroundColor: '#EEF1FF',

    borderWidth: 1,
    borderColor: '#DFC3D1',

    marginTop: 18,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
  },

  cakeCircle: {
    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: '#E92322',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 11,
  },

  cakeIcon: {
    width: 25,
    height: 25,
  },

  birthdayTextArea: {
    flex: 1,
  },

  birthdayTitle: {
    color: '#111827',

    fontSize: 13,
    fontWeight: '700',
  },

  birthdaySub: {
    color: '#7D615C',

    fontSize: 11,

    marginTop: 3,
  },

  celebrationText: {
    color: '#FF9D00',

    fontSize: 17,
  },

  /* SETTINGS */

  settingsSection: {
    marginTop: 29,
  },

  settingsCard: {
    marginTop: 13,

    borderRadius: 16,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0E0DC',

    overflow: 'hidden',
  },

  settingRow: {
    minHeight: 80,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,

    borderBottomWidth: 1,
    borderBottomColor: '#F0E8E6',
  },

  settingRowLast: {
    borderBottomWidth: 0,
  },

  settingIconBox: {
    width: 46,
    height: 46,

    borderRadius: 12,

    backgroundColor: '#EEF2FF',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 13,
  },

  settingIcon: {
    width: 24,
    height: 24,
  },

  settingContent: {
    flex: 1,
  },

  settingTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',

    flexWrap: 'wrap',
  },

  settingTitle: {
    color: '#111827',

    fontSize: 15,
    fontWeight: '800',

    marginRight: 7,
  },

  settingSub: {
    color: '#71534D',

    fontSize: 10,
    fontWeight: '600',

    marginTop: 3,
  },

  upcomingBadge: {
    backgroundColor: '#D6F5DF',

    borderRadius: 9,

    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  upcomingText: {
    color: '#087D2E',

    fontSize: 8,
    fontWeight: '800',
  },

  settingArrow: {
    width: 18,
    height: 18,
  },

  languagePill: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#EEF1FF',

    borderRadius: 14,

    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  languageActive: {
    color: '#D00A17',

    fontSize: 10,
    fontWeight: '800',

    marginRight: 5,
  },

  languageOther: {
    color: '#253044',

    fontSize: 9,
  },

  /* LOGOUT */

  logoutButton: {
    minHeight: 62,

    borderRadius: 14,

    borderWidth: 1,
    borderColor: '#E8AAAA',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 34,

    backgroundColor: '#FFFFFF',
  },

  logoutIcon: {
    width: 23,
    height: 23,

    marginRight: 10,
  },

  logoutText: {
    color: '#C90013',

    fontSize: 16,
    fontWeight: '700',
  },

  /* BOTTOM NAV */

  bottomNav: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 0,

    height: 72,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#F0E0DC',

    flexDirection: 'row',
  },

  navItem: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  navIconCircle: {
    width: 42,
    height: 42,

    borderRadius: 21,

    alignItems: 'center',
    justifyContent: 'center',
  },

  navIconCircleActive: {
    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: '#E92323',
  },

  navIcon: {
    width: 21,
    height: 21,
  },

  navIconActive: {
    width: 25,
    height: 25,
  },

  navLabel: {
    color: '#634640',

    fontSize: 9,

    marginTop: 2,
  },

  navLabelActive: {
    color: '#E92323',

    fontWeight: '700',
  },
});

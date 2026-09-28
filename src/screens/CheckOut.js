import React, {useState} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

/* ============================================================
   ONLINE DUMMY IMAGES
   No vector icon library is used.
   ============================================================ */

const IMAGES = {
  back:
    'https://img.icons8.com/ios-filled/100/111827/back.png',

  shield:
    'https://img.icons8.com/ios-filled/100/00852d/shield.png',

  lightning:
    'https://img.icons8.com/ios-filled/100/ffffff/high-voltage.png',

  takeaway:
    'https://img.icons8.com/ios-filled/100/7f6660/take-away-food.png',

  location:
    'https://img.icons8.com/ios-filled/100/8a6c67/home.png',

  edit:
    'https://img.icons8.com/ios-filled/100/e50914/edit.png',

  delivery:
    'https://img.icons8.com/ios-filled/100/9a5700/scooter.png',

  arrowDown:
    'https://img.icons8.com/ios-filled/100/e50914/expand-arrow.png',

  tip:
    'https://img.icons8.com/ios-filled/100/9a5700/delivery.png',

  checkWhite:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  spice:
    'https://img.icons8.com/ios-filled/100/9a5700/price-tag.png',

  lock:
    'https://img.icons8.com/ios-filled/100/8a6c67/lock.png',

  upi:
    'https://img.icons8.com/ios-filled/100/d00916/money-transfer.png',

  card:
    'https://img.icons8.com/ios-filled/100/7c615d/bank-card-back-side.png',

  wallet:
    'https://img.icons8.com/ios-filled/100/111827/contactless-payment.png',

  cash:
    'https://img.icons8.com/ios-filled/100/9a5700/cash-in-hand.png',

  checkGreen:
    'https://img.icons8.com/ios-filled/100/00852d/checked--v1.png',

  add:
    'https://img.icons8.com/ios-filled/100/e50914/plus-math.png',

  guarantee:
    'https://img.icons8.com/ios-filled/100/9a5700/security-checked.png',

  payLock:
    'https://img.icons8.com/ios-filled/100/ffffff/lock.png',

  arrow:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  dish1:
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=85',

  dish2:
    'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=400&q=85',

  dish3:
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=85',
};

/* ============================================================
   CHECKOUT SCREEN
   ============================================================ */

const Checkout = ({navigation}) => {
  const [deliveryMode, setDeliveryMode] = useState('delivery');

  const [selectedTip, setSelectedTip] = useState(3);

  const [redeemPoints, setRedeemPoints] = useState(true);

  const [paymentMethod, setPaymentMethod] = useState('upi');

  const [upiVerified, setUpiVerified] = useState(true);

  /* ============================================================
     ACTIONS
     ============================================================ */

  const handlePay = () => {
    Alert.alert(
      'Order placed! 🎉',
      'Your feast is being prepared with royal spices.',
      [
        {
          text: 'Back to Menu',
          onPress: () => navigation.navigate('Main', {screen: 'Home'}),
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

      <View style={styles.root}>

        {/* ======================================================
            HEADER
        ====================================================== */}

        <View
          style={styles.header}>

          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigation?.goBack()}
            style={styles.backButton}>

            <Image
              source={{uri: IMAGES.back}}
              style={styles.backIcon}
              resizeMode="contain"
            />

          </TouchableOpacity>

          <View style={styles.headerTitleArea}>
            <Text style={styles.headerTitle}>
              Checkout & Payment
            </Text>

            <Text style={styles.headerSub}>
              Patel's Crazy Indian
            </Text>
          </View>

          <View style={styles.safeBadge}>
            <Image
              source={{uri: IMAGES.shield}}
              style={styles.safeIcon}
              resizeMode="contain"
            />

            <Text style={styles.safeText}>
              100%{'\n'}Safe
            </Text>
          </View>

        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>

          {/* ====================================================
              DELIVERY MODE
          ==================================================== */}

          <View
            style={styles.deliverySwitcher}>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setDeliveryMode('delivery')}
              style={[
                styles.deliveryOption,
                deliveryMode === 'delivery' &&
                  styles.deliveryOptionActive,
              ]}>

              <Image
                source={{uri: IMAGES.lightning}}
                style={styles.deliveryModeIcon}
                resizeMode="contain"
              />

              <Text
                style={[
                  styles.deliveryOptionText,
                  deliveryMode === 'delivery' &&
                    styles.deliveryOptionTextActive,
                ]}>
                25-Min Hot Delivery
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setDeliveryMode('takeaway')}
              style={[
                styles.deliveryOption,
                deliveryMode === 'takeaway' &&
                  styles.takeawayOptionActive,
              ]}>

              <Image
                source={{uri: IMAGES.takeaway}}
                style={styles.deliveryModeIconDark}
                resizeMode="contain"
              />

              <Text style={styles.takeawayOptionText}>
                Takeaway Pick-up
              </Text>

            </TouchableOpacity>

          </View>

          {/* ====================================================
              ADDRESS
          ==================================================== */}

          <View
            style={styles.card}>

            <View style={styles.addressTop}>

              <View style={styles.avatarCircle}>
                <Text style={styles.avatarText}>
                  •
                </Text>
              </View>

              <View style={styles.addressContent}>
                <View style={styles.addressTitleRow}>

                  <Text style={styles.addressTitle}>
                    Home - Rahul Patel
                  </Text>

                  <View style={styles.primaryBadge}>
                    <Text style={styles.primaryText}>
                      Primary
                    </Text>
                  </View>

                </View>

                <Text style={styles.addressText}>
                  Flat 402, Royal Palms Residency,{'\n'}
                  Downtown Plaza
                </Text>

              </View>

              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.changeAddressText}>
                  Change
                </Text>
              </TouchableOpacity>

            </View>

            <View style={styles.instructionBar}>

              <Image
                source={{uri: IMAGES.location}}
                style={styles.locationIcon}
                resizeMode="contain"
              />

              <Text style={styles.instructionText}>
                "Leave at door & ring bell"
              </Text>

              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  source={{uri: IMAGES.edit}}
                  style={styles.editIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

            </View>

            <View style={styles.deliveryInfoBox}>

              <Image
                source={{uri: IMAGES.delivery}}
                style={styles.deliveryInfoIcon}
                resizeMode="contain"
              />

              <View style={styles.deliveryInfoTextArea}>
                <Text style={styles.deliveryInfoTitle}>
                  Express Delivery: Arriving in 22–28 mins
                </Text>

                <Text style={styles.deliveryInfoSub}>
                  Fresh piping hot from Bay Area Bistro kitchen
                </Text>
              </View>

            </View>

          </View>

          {/* ====================================================
              FEAST ITEMS
          ==================================================== */}

          <View
            style={styles.feastCard}>

            <View style={styles.feastImages}>
              <Image
                source={{uri: IMAGES.dish1}}
                style={[styles.feastImage, {zIndex: 3}]}
              />

              <Image
                source={{uri: IMAGES.dish2}}
                style={[
                  styles.feastImage,
                  styles.feastImageOverlap1,
                ]}
              />

              <Image
                source={{uri: IMAGES.dish3}}
                style={[
                  styles.feastImage,
                  styles.feastImageOverlap2,
                ]}
              />
            </View>

            <View style={styles.feastContent}>
              <Text style={styles.feastTitle}>
                3 Items in Feast
              </Text>

              <Text style={styles.feastSub}>
                Bay Area Bistro • $28.62
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.viewRow}>

              <Text style={styles.viewText}>
                View
              </Text>

              <Image
                source={{uri: IMAGES.arrowDown}}
                style={styles.downIcon}
                resizeMode="contain"
              />

            </TouchableOpacity>

          </View>

          {/* ====================================================
              RIDER TIP
          ==================================================== */}

          <View
            style={styles.card}>

            <View style={styles.tipHeader}>

              <View style={styles.tipTitleRow}>
                <Image
                  source={{uri: IMAGES.tip}}
                  style={styles.tipIcon}
                  resizeMode="contain"
                />

                <Text style={styles.tipTitle}>
                  Support Patel's Delivery{'\n'}Partner
                </Text>
              </View>

              <View style={styles.riderBadge}>
                <Text style={styles.riderBadgeText}>
                  100% to{'\n'}Rider
                </Text>
              </View>

            </View>

            <Text style={styles.tipDescription}>
              Celebrate the festive spirit with a kind gesture for our
              hard-working delivery heroes.
            </Text>

            <View style={styles.tipOptions}>

              <TipButton
                value={2}
                selected={selectedTip === 2}
                onPress={() => setSelectedTip(2)}
              />

              <TipButton
                value={3}
                popular
                selected={selectedTip === 3}
                onPress={() => setSelectedTip(3)}
              />

              <TipButton
                value={5}
                selected={selectedTip === 5}
                onPress={() => setSelectedTip(5)}
              />

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.tipButton,
                  selectedTip === 'custom' &&
                    styles.tipButtonSelected,
                ]}
                onPress={() => setSelectedTip('custom')}>

                <Text style={styles.tipButtonText}>
                  Custom
                </Text>

              </TouchableOpacity>

            </View>

          </View>

          {/* ====================================================
              SPICE POINTS
          ==================================================== */}

          <View
            style={styles.spiceCard}>

            <View style={styles.spiceTopRow}>

              <View>
                <Text style={styles.spiceTitle}>
                  Patel's Spice Club
                </Text>

                <Text style={styles.spiceBalance}>
                  Balance: 420 Spice Points
                </Text>
              </View>

              <View style={styles.rewardBadge}>
                <Text style={styles.rewardText}>
                  Reward Tier
                </Text>
              </View>

            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() =>
                setRedeemPoints(prev => !prev)
              }
              style={styles.redeemRow}>

              <View
                style={[
                  styles.checkBox,
                  redeemPoints && styles.checkBoxActive,
                ]}>

                {redeemPoints && (
                  <Image
                    source={{uri: IMAGES.checkWhite}}
                    style={styles.checkIcon}
                    resizeMode="contain"
                  />
                )}

              </View>

              <Text style={styles.redeemText}>
                Redeem 200 Spice Points to save
                {'\n'}
                <Text style={styles.redeemAmount}>
                  $2.00
                </Text>
              </Text>

              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>
                  -$2.00
                </Text>
              </View>

            </TouchableOpacity>

          </View>

          {/* ====================================================
              PAYMENT METHOD HEADING
          ==================================================== */}

          <View
            style={styles.paymentSection}>

            <View style={styles.paymentHeadingRow}>

              <Text style={styles.paymentHeading}>
                Select Payment Method
              </Text>

              <View style={styles.sslRow}>
                <Image
                  source={{uri: IMAGES.lock}}
                  style={styles.sslIcon}
                  resizeMode="contain"
                />

                <Text style={styles.sslText}>
                  256-bit SSL
                </Text>
              </View>

            </View>

            {/* ==================================================
                UPI
            ================================================== */}

            <PaymentCard
              selected={paymentMethod === 'upi'}
              onPress={() => setPaymentMethod('upi')}
              icon={IMAGES.upi}
              title="UPI & Instant Pay"
              subtitle="Pay via Google Pay, PhonePe, Paytm, or BHIM"
              recommended>

              <View style={styles.upiAppsRow}>

                <View style={styles.upiMiniBadge}>
                  <Text style={styles.upiMiniText}>
                    GPay
                  </Text>
                </View>

                <View style={styles.upiMiniBadge}>
                  <Text style={styles.upiMiniText}>
                    PhonePe
                  </Text>
                </View>

                <View style={styles.upiMiniBadge}>
                  <Text style={styles.upiMiniText}>
                    Paytm
                  </Text>
                </View>

                <View style={styles.upiMiniBadge}>
                  <Text style={styles.upiMiniText}>
                    +UPI{'\n'}ID
                  </Text>
                </View>

              </View>

              <View style={styles.upiVerifyRow}>

                <View style={styles.upiInputFake}>
                  <Text style={styles.upiId}>
                    rahulpatel@oksbi
                  </Text>

                  {upiVerified && (
                    <Image
                      source={{uri: IMAGES.checkGreen}}
                      style={styles.upiCheck}
                      resizeMode="contain"
                    />
                  )}
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setUpiVerified(true)}
                  style={styles.verifyButton}>

                  <Text style={styles.verifyText}>
                    Verify
                  </Text>

                </TouchableOpacity>

              </View>

            </PaymentCard>

            {/* ==================================================
                CARD
            ================================================== */}

            <PaymentCard
              selected={paymentMethod === 'card'}
              onPress={() => setPaymentMethod('card')}
              icon={IMAGES.card}
              title="Credit & Debit Cards">

              <View style={styles.savedCard}>

                <View style={styles.visaBadge}>
                  <Text style={styles.visaText}>
                    VISA
                  </Text>
                </View>

                <View style={styles.savedCardContent}>
                  <Text style={styles.savedCardTitle}>
                    HDFC Regalia •••• 4821
                  </Text>

                  <Text style={styles.savedCardSub}>
                    Expires 08/27
                  </Text>
                </View>

                <View style={styles.cvvBox}>
                  <Text style={styles.cvvText}>
                    CVV
                  </Text>
                </View>

              </View>

              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.addCardRow}>

                <Image
                  source={{uri: IMAGES.add}}
                  style={styles.addCardIcon}
                  resizeMode="contain"
                />

                <Text style={styles.addCardText}>
                  Add New Card
                </Text>

              </TouchableOpacity>

            </PaymentCard>

            {/* WALLET */}

            <PaymentCard
              selected={paymentMethod === 'wallet'}
              onPress={() => setPaymentMethod('wallet')}
              icon={IMAGES.wallet}
              title="Apple Pay / Google Wallet"
              subtitle="Instant one-touch biometric authorization"
            />

            {/* CASH */}

            <PaymentCard
              selected={paymentMethod === 'cash'}
              onPress={() => setPaymentMethod('cash')}
              icon={IMAGES.cash}
              title="Pay on Delivery (Cash or QR)"
              subtitle="Scan QR code or pay cash directly to rider on arrival"
            />

          </View>

          {/* ====================================================
              BILL SUMMARY
          ==================================================== */}

          <View
            style={styles.billCard}>

            <Text style={styles.billTitle}>
              Bill Summary
            </Text>

            <View style={styles.billDivider} />

            <BillRow
              label="Item Total (3 items)"
              value="$24.50"
            />

            <BillRow
              label="Delivery Fee (Express 25-min)"
              value="$1.99"
            />

            <BillRow
              label="Rider Support Tip"
              value={`$${selectedTip === 'custom' ? '3.00' : selectedTip.toFixed(2)}`}
            />

            <BillRow
              label="Taxes & Restaurant Packaging"
              value="$2.13"
            />

            <BillRow
              label="Spice Points Redeemed (200 Pts)"
              value={redeemPoints ? '-$2.00' : '$0.00'}
              green
            />

            <View style={styles.billDividerLarge} />

            <View style={styles.totalRow}>

              <View style={styles.totalLeft}>
                <Text style={styles.totalLabel}>
                  To Pay
                </Text>

                <View style={styles.savedBadge}>
                  <Text style={styles.savedBadgeText}>
                    You saved $2.00
                  </Text>
                </View>
              </View>

              <Text style={styles.totalAmount}>
                $26.62
              </Text>

            </View>

          </View>

          {/* ====================================================
              GUARANTEE
          ==================================================== */}

          <View
            style={styles.guaranteeCard}>

            <View style={styles.guaranteeIconCircle}>
              <Image
                source={{uri: IMAGES.guarantee}}
                style={styles.guaranteeIcon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.guaranteeTextArea}>
              <Text style={styles.guaranteeTitle}>
                Patel's Festive Quality Guarantee
              </Text>

              <Text style={styles.guaranteeSub}>
                Secure checkout • Fresh preparation • Trusted delivery
              </Text>
            </View>

          </View>

          <View style={{height: 115}} />

        </ScrollView>

        {/* ======================================================
            FIXED PAYMENT BAR
        ====================================================== */}

        <View
          style={styles.bottomBar}>

          <View style={styles.bottomPriceArea}>
            <Text style={styles.bottomSmallText}>
              Total:
            </Text>

            <Text style={styles.bottomPrice}>
              $26.62
            </Text>

            <Text style={styles.bottomBreakup}>
              View Detailed Bill ›
            </Text>
          </View>

          <View
            style={styles.payButtonWrapper}>

            <TouchableOpacity
              activeOpacity={0.88}
              style={styles.payButton}
              onPress={handlePay}>

              <Image
                source={{uri: IMAGES.payLock}}
                style={styles.payLock}
                resizeMode="contain"
              />

              <Text style={styles.payText}>
                Pay $26.62 & Place{'\n'}Feast
              </Text>

              <Image
                source={{uri: IMAGES.arrow}}
                style={styles.payArrow}
                resizeMode="contain"
              />

            </TouchableOpacity>

          </View>

        </View>

      </View>
    </SafeAreaView>
  );
};

/* ============================================================
   TIP BUTTON
   ============================================================ */

const TipButton = ({
  value,
  selected,
  popular,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={onPress}
      style={[
        styles.tipButton,
        selected && styles.tipButtonSelected,
      ]}>

      {popular && (
        <View style={styles.popularBadge}>
          <Text style={styles.popularText}>
            Popular
          </Text>
        </View>
      )}

      <Text
        style={[
          styles.tipButtonText,
          selected && styles.tipButtonTextSelected,
        ]}>
        ${value}
      </Text>

    </TouchableOpacity>
  );
};

/* ============================================================
   PAYMENT CARD
   ============================================================ */

const PaymentCard = ({
  selected,
  onPress,
  icon,
  title,
  subtitle,
  recommended,
  children,
}) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <View>

      <TouchableOpacity
        activeOpacity={0.95}
        onPress={handlePress}
        style={[
          styles.paymentCard,
          selected && styles.paymentCardSelected,
        ]}>

        {recommended && (
          <View style={styles.recommendedBadge}>
            <Text style={styles.recommendedText}>
              RECOMMENDED
            </Text>
          </View>
        )}

        <View style={styles.paymentTopRow}>

          <View
            style={[
              styles.radio,
              selected && styles.radioSelected,
            ]}>

            {selected && (
              <View style={styles.radioInner} />
            )}

          </View>

          <View style={styles.paymentTitleArea}>
            <Text style={styles.paymentTitle}>
              {title}
            </Text>

            {!!subtitle && (
              <Text style={styles.paymentSubtitle}>
                {subtitle}
              </Text>
            )}
          </View>

          <Image
            source={{uri: icon}}
            style={styles.paymentIcon}
            resizeMode="contain"
          />

        </View>

        {selected && children && (
          <View style={styles.paymentChildren}>
            {children}
          </View>
        )}

      </TouchableOpacity>

    </View>
  );
};

/* ============================================================
   BILL ROW
   ============================================================ */

const BillRow = ({
  label,
  value,
  green,
}) => {
  return (
    <View style={styles.billRow}>

      <Text
        style={[
          styles.billLabel,
          green && styles.billGreen,
        ]}>
        {label}
      </Text>

      <Text
        style={[
          styles.billValue,
          green && styles.billGreen,
        ]}>
        {value}
      </Text>

    </View>
  );
};

export default Checkout;

/* ============================================================
   STYLES
   ============================================================ */

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
    paddingHorizontal: 18,
    paddingBottom: 25,
  },

  /* HEADER */

  header: {
    minHeight: 67,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,
    borderBottomColor: '#EAE4E3',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 18,
  },

  backButton: {
    width: 42,
    height: 45,

    justifyContent: 'center',
  },

  backIcon: {
    width: 22,
    height: 22,
  },

  headerTitleArea: {
    flex: 1,
  },

  headerTitle: {
    color: '#111827',

    fontSize: 20,
    fontWeight: '900',
  },

  headerSub: {
    color: '#D30918',

    fontSize: 11,
    fontWeight: '700',

    marginTop: 2,
  },

  safeBadge: {
    minWidth: 105,
    minHeight: 39,

    borderRadius: 22,

    backgroundColor: '#F0F3FF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  safeIcon: {
    width: 20,
    height: 20,

    marginRight: 6,
  },

  safeText: {
    color: '#078031',

    fontSize: 11,
    fontWeight: '700',

    lineHeight: 13,
  },

  /* DELIVERY SWITCHER */

  deliverySwitcher: {
    minHeight: 54,

    borderRadius: 28,

    backgroundColor: '#F4F3FB',

    borderWidth: 1,
    borderColor: '#EADDDC',

    flexDirection: 'row',

    padding: 5,

    marginTop: 14,
  },

  deliveryOption: {
    flex: 1,

    borderRadius: 23,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 8,
  },

  deliveryOptionActive: {
    backgroundColor: '#CE0016',

    shadowColor: '#CE0016',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,

    elevation: 4,
  },

  takeawayOptionActive: {
    backgroundColor: '#FFFFFF',
  },

  deliveryModeIcon: {
    width: 17,
    height: 17,

    marginRight: 7,
  },

  deliveryModeIconDark: {
    width: 17,
    height: 17,

    marginRight: 7,
  },

  deliveryOptionText: {
    color: '#654743',

    fontSize: width < 380 ? 12 : 14,
    fontWeight: '700',
  },

  deliveryOptionTextActive: {
    color: '#FFFFFF',
  },

  takeawayOptionText: {
    color: '#6D4B46',

    fontSize: width < 380 ? 12 : 14,
    fontWeight: '700',
  },

  /* COMMON CARD */

  card: {
    marginTop: 18,

    backgroundColor: '#FFFFFF',

    borderRadius: 17,

    borderWidth: 1,
    borderColor: '#F0E1DE',

    padding: 18,

    shadowColor: '#8B6A65',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 2,
  },

  /* ADDRESS */

  addressTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  avatarCircle: {
    width: 43,
    height: 43,

    borderRadius: 22,

    backgroundColor: '#FFD9D4',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  avatarText: {
    color: '#C90013',
    fontSize: 18,
  },

  addressContent: {
    flex: 1,
  },

  addressTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',

    flexWrap: 'wrap',
  },

  addressTitle: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '800',

    marginRight: 8,
  },

  primaryBadge: {
    backgroundColor: '#FFF1D8',

    paddingHorizontal: 8,
    paddingVertical: 4,

    borderRadius: 10,
  },

  primaryText: {
    color: '#966000',

    fontSize: 9,
    fontWeight: '800',
  },

  addressText: {
    color: '#836863',

    fontSize: 13,

    lineHeight: 19,

    marginTop: 5,
  },

  changeAddressText: {
    color: '#D20A17',

    fontSize: 12,
    fontWeight: '800',
  },

  instructionBar: {
    minHeight: 46,

    borderRadius: 9,

    backgroundColor: '#EEF1FF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 13,

    marginTop: 15,
  },

  locationIcon: {
    width: 17,
    height: 17,

    marginRight: 10,
  },

  instructionText: {
    flex: 1,

    color: '#755C57',

    fontSize: 12,
    fontStyle: 'italic',
  },

  editIcon: {
    width: 18,
    height: 18,
  },

  deliveryInfoBox: {
    minHeight: 60,

    borderRadius: 10,

    backgroundColor: '#FFF0DA',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,

    marginTop: 14,
  },

  deliveryInfoIcon: {
    width: 22,
    height: 22,

    marginRight: 10,
  },

  deliveryInfoTextArea: {
    flex: 1,
  },

  deliveryInfoTitle: {
    color: '#9A5B00',

    fontSize: 12,
    fontWeight: '800',
  },

  deliveryInfoSub: {
    color: '#9C6E38',

    fontSize: 10,

    marginTop: 3,
  },

  /* FEAST */

  feastCard: {
    minHeight: 86,

    marginTop: 18,

    borderRadius: 16,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0E1DE',

    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
  },

  feastImages: {
    width: 94,

    flexDirection: 'row',

    position: 'relative',
  },

  feastImage: {
    width: 45,
    height: 45,

    borderRadius: 23,

    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  feastImageOverlap1: {
    position: 'absolute',
    left: 28,

    zIndex: 2,
  },

  feastImageOverlap2: {
    position: 'absolute',
    left: 55,

    zIndex: 1,
  },

  feastContent: {
    flex: 1,
  },

  feastTitle: {
    color: '#111827',

    fontSize: 16,
    fontWeight: '800',
  },

  feastSub: {
    color: '#876C66',

    fontSize: 12,

    marginTop: 3,
  },

  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewText: {
    color: '#D20A17',

    fontSize: 12,
    fontWeight: '800',
  },

  downIcon: {
    width: 13,
    height: 13,

    marginLeft: 7,
  },

  /* TIP */

  tipHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  tipTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    flex: 1,
  },

  tipIcon: {
    width: 25,
    height: 25,

    marginRight: 10,
  },

  tipTitle: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '800',

    lineHeight: 21,
  },

  riderBadge: {
    backgroundColor: '#74F492',

    borderRadius: 19,

    paddingHorizontal: 13,
    paddingVertical: 8,
  },

  riderBadgeText: {
    color: '#08782B',

    fontSize: 10,
    fontWeight: '800',

    textAlign: 'center',
  },

  tipDescription: {
    color: '#8B6F69',

    fontSize: 12,

    lineHeight: 18,

    marginTop: 16,
  },

  tipOptions: {
    flexDirection: 'row',

    gap: 8,

    marginTop: 16,
  },

  tipButton: {
    flex: 1,

    height: 44,

    borderRadius: 10,

    borderWidth: 1.5,
    borderColor: '#EDC8C3',

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    backgroundColor: '#FFFFFF',
  },

  tipButtonSelected: {
    borderColor: '#FF9D00',

    borderWidth: 2,

    backgroundColor: '#FFF0D8',
  },

  tipButtonText: {
    color: '#111827',

    fontSize: 14,
    fontWeight: '700',
  },

  tipButtonTextSelected: {
    color: '#925700',
  },

  popularBadge: {
    position: 'absolute',

    top: -12,

    backgroundColor: '#9A6500',

    borderRadius: 8,

    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  popularText: {
    color: '#FFFFFF',

    fontSize: 7,
    fontWeight: '800',
  },

  /* SPICE CLUB */

  spiceCard: {
    marginTop: 18,

    borderRadius: 16,

    backgroundColor: '#FFFDF8',

    borderWidth: 1.5,
    borderColor: '#FFCB6E',

    padding: 18,
  },

  spiceTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  spiceTitle: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '800',
  },

  spiceBalance: {
    color: '#9B5D00',

    fontSize: 11,
    fontWeight: '700',

    marginTop: 4,
  },

  rewardBadge: {
    backgroundColor: '#FFE4E5',

    paddingHorizontal: 9,
    paddingVertical: 5,

    borderRadius: 11,
  },

  rewardText: {
    color: '#C90013',

    fontSize: 9,
    fontWeight: '700',
  },

  redeemRow: {
    minHeight: 64,

    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0E2DE',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 13,

    marginTop: 14,
  },

  checkBox: {
    width: 20,
    height: 20,

    borderRadius: 5,

    borderWidth: 1,
    borderColor: '#D20A17',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  checkBoxActive: {
    backgroundColor: '#C90013',
  },

  checkIcon: {
    width: 13,
    height: 13,
  },

  redeemText: {
    flex: 1,

    color: '#4F3935',

    fontSize: 12,

    lineHeight: 16,
  },

  redeemAmount: {
    color: '#111827',
    fontWeight: '800',
  },

  discountBadge: {
    backgroundColor: '#D7F9E0',

    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: 7,
  },

  discountText: {
    color: '#078232',

    fontSize: 11,
    fontWeight: '800',
  },

  /* PAYMENT */

  paymentSection: {
    marginTop: 18,
  },

  paymentHeadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 12,
  },

  paymentHeading: {
    color: '#111827',

    fontSize: 22,
    fontWeight: '900',
  },

  sslRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sslIcon: {
    width: 14,
    height: 14,

    marginRight: 5,
  },

  sslText: {
    color: '#745C56',

    fontSize: 10,
    fontWeight: '700',
  },

  paymentCard: {
    minHeight: 84,

    borderRadius: 15,

    borderWidth: 1,
    borderColor: '#EFDFDC',

    backgroundColor: '#FFFFFF',

    padding: 17,

    marginBottom: 14,

    position: 'relative',
  },

  paymentCardSelected: {
    borderWidth: 2,
    borderColor: '#CE0017',
  },

  recommendedBadge: {
    position: 'absolute',

    right: 12,
    top: -11,

    backgroundColor: '#C90013',

    borderRadius: 10,

    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  recommendedText: {
    color: '#FFFFFF',

    fontSize: 9,
    fontWeight: '900',
  },

  paymentTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  radio: {
    width: 20,
    height: 20,

    borderRadius: 10,

    borderWidth: 1.5,
    borderColor: '#BEA29C',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 13,
    marginTop: 3,
  },

  radioSelected: {
    borderColor: '#C90013',
    borderWidth: 2,
  },

  radioInner: {
    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor: '#C90013',
  },

  paymentTitleArea: {
    flex: 1,
  },

  paymentTitle: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '800',
  },

  paymentSubtitle: {
    color: '#856E68',

    fontSize: 12,

    marginTop: 4,
  },

  paymentIcon: {
    width: 25,
    height: 25,
  },

  paymentChildren: {
    marginLeft: 33,

    marginTop: 13,
  },

  upiAppsRow: {
    flexDirection: 'row',

    gap: 7,
  },

  upiMiniBadge: {
    minWidth: 50,
    minHeight: 29,

    borderRadius: 5,

    backgroundColor: '#EFF1FA',

    borderWidth: 1,
    borderColor: '#DBDDE8',

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 7,
  },

  upiMiniText: {
    color: '#253044',

    fontSize: 9,
    fontWeight: '700',

    textAlign: 'center',
  },

  upiVerifyRow: {
    flexDirection: 'row',

    gap: 9,

    marginTop: 12,
  },

  upiInputFake: {
    flex: 1,

    minHeight: 42,

    borderRadius: 9,

    borderWidth: 1,
    borderColor: '#EAC5C0',

    backgroundColor: '#F1F3FF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
  },

  upiId: {
    flex: 1,

    color: '#66524E',

    fontSize: 11,
  },

  upiCheck: {
    width: 20,
    height: 20,
  },

  verifyButton: {
    minWidth: 69,

    borderRadius: 9,

    backgroundColor: '#C90013',

    justifyContent: 'center',
    alignItems: 'center',
  },

  verifyText: {
    color: '#FFFFFF',

    fontSize: 11,
    fontWeight: '800',
  },

  /* SAVED CARD */

  savedCard: {
    minHeight: 58,

    borderRadius: 9,

    backgroundColor: '#EEF1FF',

    borderWidth: 1,
    borderColor: '#E2DADA',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,

    marginTop: 2,
  },

  visaBadge: {
    backgroundColor: '#DCE7FF',

    paddingHorizontal: 7,
    paddingVertical: 5,

    borderRadius: 4,

    marginRight: 9,
  },

  visaText: {
    color: '#263B60',

    fontSize: 9,
    fontWeight: '800',
  },

  savedCardContent: {
    flex: 1,
  },

  savedCardTitle: {
    color: '#303745',

    fontSize: 12,
    fontWeight: '700',
  },

  savedCardSub: {
    color: '#7D716F',

    fontSize: 9,

    marginTop: 3,
  },

  cvvBox: {
    minWidth: 57,

    minHeight: 34,

    borderRadius: 6,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#E8BEB8',

    alignItems: 'center',
    justifyContent: 'center',
  },

  cvvText: {
    color: '#675550',

    fontSize: 11,
  },

  addCardRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 13,
  },

  addCardIcon: {
    width: 20,
    height: 20,

    marginRight: 7,
  },

  addCardText: {
    color: '#D00A17',

    fontSize: 12,
    fontWeight: '800',
  },

  /* BILL */

  billCard: {
    marginTop: 2,

    borderRadius: 15,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#EFDFDC',

    padding: 18,
  },

  billTitle: {
    color: '#111827',

    fontSize: 17,
    fontWeight: '800',
  },

  billDivider: {
    height: 1,

    backgroundColor: '#EEE6E4',

    marginVertical: 13,
  },

  billDividerLarge: {
    height: 1,

    backgroundColor: '#EEE6E4',

    marginTop: 8,
    marginBottom: 12,
  },

  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 12,
  },

  billLabel: {
    color: '#7E6963',

    fontSize: 12,
  },

  billValue: {
    color: '#30343E',

    fontSize: 12,
    fontWeight: '600',
  },

  billGreen: {
    color: '#078331',
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  totalLabel: {
    color: '#111827',

    fontSize: 20,
    fontWeight: '900',
  },

  savedBadge: {
    backgroundColor: '#CFFBD9',

    borderRadius: 6,

    paddingHorizontal: 8,
    paddingVertical: 5,

    marginLeft: 10,
  },

  savedBadgeText: {
    color: '#06802F',

    fontSize: 9,
    fontWeight: '800',
  },

  totalAmount: {
    color: '#C90013',

    fontSize: 24,
    fontWeight: '900',
  },

  /* GUARANTEE */

  guaranteeCard: {
    minHeight: 84,

    borderRadius: 16,

    backgroundColor: '#EEF1FF',

    borderWidth: 1,
    borderColor: '#F2CF9A',

    flexDirection: 'row',
    alignItems: 'center',

    padding: 16,

    marginTop: 18,
  },

  guaranteeIconCircle: {
    width: 44,
    height: 44,

    borderRadius: 22,

    backgroundColor: '#FFA20A',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 12,
  },

  guaranteeIcon: {
    width: 23,
    height: 23,
  },

  guaranteeTextArea: {
    flex: 1,
  },

  guaranteeTitle: {
    color: '#2D3342',

    fontSize: 13,
    fontWeight: '800',
  },

  guaranteeSub: {
    color: '#816B65',

    fontSize: 9,

    marginTop: 4,
  },

  /* BOTTOM PAYMENT BAR */

  bottomBar: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 0,

    minHeight: 86,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#E9DFDD',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 18,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 12,
  },

  bottomPriceArea: {
    width: 116,
  },

  bottomSmallText: {
    color: '#765E58',

    fontSize: 10,
    fontWeight: '600',
  },

  bottomPrice: {
    color: '#C90013',

    fontSize: 23,
    fontWeight: '900',

    marginTop: 1,
  },

  bottomBreakup: {
    color: '#9B5D00',

    fontSize: 9,
    fontWeight: '700',

    marginTop: 3,
  },

  payButtonWrapper: {
    flex: 1,
  },

  payButton: {
    minHeight: 62,

    borderRadius: 32,

    backgroundColor: '#C90013',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 15,

    shadowColor: '#C90013',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.24,
    shadowRadius: 13,

    elevation: 7,
  },

  payLock: {
    width: 19,
    height: 19,

    marginRight: 10,
  },

  payText: {
    color: '#FFFFFF',

    fontSize: width < 380 ? 13 : 15,
    fontWeight: '900',

    textAlign: 'center',

    lineHeight: 18,
  },

  payArrow: {
    width: 21,
    height: 21,

    marginLeft: 10,
  },
});
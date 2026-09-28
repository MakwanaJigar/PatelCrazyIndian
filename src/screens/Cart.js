import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

/* ============================================================
   ONLINE DUMMY IMAGES
   ============================================================ */

const IMAGES = {
  back:
    'https://img.icons8.com/ios-filled/100/111827/back.png',

  tray:
    'https://img.icons8.com/ios-filled/100/8a5700/shopping-basket.png',

  delete:
    'https://img.icons8.com/ios-filled/100/6d453f/trash.png',

  veg:
    'https://img.icons8.com/ios-filled/100/00852d/vegetarian-food-symbol.png',

  chef:
    'https://img.icons8.com/ios-filled/100/ffffff/chef-hat.png',

  customize:
    'https://img.icons8.com/ios-filled/100/e50914/settings.png',

  fire:
    'https://img.icons8.com/ios-filled/100/e50914/fire-element.png',

  leaf:
    'https://img.icons8.com/ios-filled/100/00852d/leaf.png',

  check:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  checkGreen:
    'https://img.icons8.com/ios-filled/100/00852d/checkmark.png',

  plus:
    'https://img.icons8.com/ios-filled/100/ffffff/plus-math.png',

  minus:
    'https://img.icons8.com/ios-filled/100/ffffff/minus.png',

  save:
    'https://img.icons8.com/ios-filled/100/ffffff/checked--v1.png',

  sparkle:
    'https://img.icons8.com/ios-filled/100/ff9c00/confetti.png',

  note:
    'https://img.icons8.com/ios-filled/100/8a5700/note.png',

  mic:
    'https://img.icons8.com/ios-filled/100/856d68/microphone.png',

  eco:
    'https://img.icons8.com/ios-filled/100/00852d/leaf.png',

  coupon:
    'https://img.icons8.com/ios-filled/100/8a5700/price-tag.png',

  security:
    'https://img.icons8.com/ios-filled/100/00852d/security-checked.png',

  arrow:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  platter:
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',

  golgappa:
    'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=500&q=85',

  paneer:
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=85',

  gulab:
    'https://images.unsplash.com/photo-1666190094763-6e4f3eb1c8b4?auto=format&fit=crop&w=500&q=85',

  chai:
    'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=500&q=85',

  papad:
    'https://images.unsplash.com/photo-1600628421055-4d30de868b8f?auto=format&fit=crop&w=500&q=85',
};

/* ============================================================
   CART SCREEN
   ============================================================ */

const Cart = ({navigation}) => {
  const [mainQty, setMainQty] = useState(2);

  const [heatLevel, setHeatLevel] = useState('crazy');
  const [prepStyle, setPrepStyle] = useState('traditional');

  const [addons, setAddons] = useState({
    chutney: true,
    naan: true,
    lassi: false,
  });

  const [trayQty, setTrayQty] = useState({
    golgappa: 1,
    paneer: 1,
    gulab: 1,
  });

  const [noCutlery, setNoCutlery] = useState(true);

  const [instructions, setInstructions] = useState('');

  /* ============================================================
     ACTIONS
     ============================================================ */

  const toggleAddon = key => {
    setAddons(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const updateTrayQty = (key, amount) => {
    setTrayQty(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + amount),
    }));
  };

  const handleCheckout = () => {
    navigation.navigate('CheckOut');
  };

  return (
    // Bottom edge is handled by the tab bar.
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
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
            activeOpacity={0.7}
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
              Your Feast Tray &
            </Text>

            <Text style={styles.headerTitle}>
              Customizer
            </Text>

            <Text style={styles.headerSub}>
              Patel's Crazy Indian • Table #4 or Takeout
            </Text>
          </View>

          <View style={styles.headerRight}>

            <View style={styles.itemBadge}>
              <Image
                source={{uri: IMAGES.tray}}
                style={styles.itemBadgeIcon}
                resizeMode="contain"
              />

              <View>
                <Text style={styles.itemBadgeNumber}>
                  3
                </Text>

                <Text style={styles.itemBadgeText}>
                  Items
                </Text>
              </View>
            </View>

            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={{uri: IMAGES.delete}}
                style={styles.deleteIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

          </View>

        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>

          {/* ====================================================
              MAIN PLATTER
          ==================================================== */}

          <View
            style={styles.mainCard}>

            <View style={styles.mainTop}>

              <View style={styles.mainTypeRow}>

                <Image
                  source={{uri: IMAGES.veg}}
                  style={styles.vegIcon}
                  resizeMode="contain"
                />

                <View style={styles.specialBadge}>
                  <Image
                    source={{uri: IMAGES.chef}}
                    style={styles.specialIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.specialText}>
                    Chef's Crazy Special
                  </Text>
                </View>

              </View>

              <View style={styles.mainPriceArea}>
                <Text style={styles.mainPrice}>
                  $14.99
                </Text>

                <Text style={styles.oldPrice}>
                  $18.50
                </Text>
              </View>

            </View>

            <Text style={styles.mainTitle}>
              Crazy Fire Golgappa Platter
            </Text>

            <Text style={styles.mainTitle}>
              & Royal Dum Biryani
            </Text>

            <View style={styles.platterImageWrapper}>

              <Image
                source={{uri: IMAGES.platter}}
                style={styles.platterImage}
                resizeMode="cover"
              />

              <View style={styles.servingBadge}>
                <Text style={styles.servingText}>
                  Regular (2-3 Servings)
                </Text>
              </View>

              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>
                  ★ 4.9 (1.2k+ foodies)
                </Text>
              </View>

            </View>

            {/* CUSTOMIZE */}

            <View>

              <View style={styles.customHeader}>

                <View style={styles.customTitleRow}>
                  <Image
                    source={{uri: IMAGES.customize}}
                    style={styles.customIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.customTitle}>
                    Customise Your Flavors
                  </Text>
                </View>

                <View style={styles.requiredBadge}>
                  <Text style={styles.requiredText}>
                    Required
                  </Text>
                </View>

              </View>

              {/* HEAT LEVEL */}

              <Text style={styles.smallLabel}>
                Select Heat Level:{' '}
                <Text style={styles.redText}>
                  {heatLevel === 'mild'
                    ? 'Mild'
                    : heatLevel === 'desi'
                    ? 'Desi Hot'
                    : 'Crazy Volcano (Level 3)'}
                </Text>
              </Text>

              <View style={styles.heatRow}>

                <HeatOption
                  title="Mild"
                  fireCount={1}
                  selected={heatLevel === 'mild'}
                  onPress={() => setHeatLevel('mild')}
                />

                <HeatOption
                  title="Desi Hot"
                  fireCount={2}
                  selected={heatLevel === 'desi'}
                  onPress={() => setHeatLevel('desi')}
                />

                <HeatOption
                  title="Crazy Volcano"
                  fireCount={3}
                  selected={heatLevel === 'crazy'}
                  onPress={() => setHeatLevel('crazy')}
                />

              </View>

              {/* PREPARATION */}

              <Text style={styles.sectionMiniTitle}>
                Preparation Style
              </Text>

              <View style={styles.prepRow}>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.prepOption,
                    prepStyle === 'traditional' &&
                      styles.prepOptionSelected,
                  ]}
                  onPress={() =>
                    setPrepStyle('traditional')
                  }>

                  <View style={styles.redDot} />

                  <Text style={styles.prepText}>
                    Traditional Desi
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.prepOption,
                    prepStyle === 'jain' &&
                      styles.prepOptionSelected,
                  ]}
                  onPress={() => setPrepStyle('jain')}>

                  <Image
                    source={{uri: IMAGES.leaf}}
                    style={styles.prepIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.prepText}>
                    Jain (No{'\n'}Onion/Garlic)
                  </Text>

                </TouchableOpacity>

              </View>

              {/* ADD ONS */}

              <Text style={styles.sectionMiniTitle}>
                Festive Add-on Pairings
              </Text>

              <AddonRow
                selected={addons.chutney}
                label="Extra Mint Chutney & Crispy Boondi"
                price="+ $1.50"
                onPress={() => toggleAddon('chutney')}
              />

              <AddonRow
                selected={addons.naan}
                label="Crispy Butter Garlic Naan (1pc)"
                price="+ $2.99"
                onPress={() => toggleAddon('naan')}
              />

              <AddonRow
                selected={addons.lassi}
                label="Kesar Mango Lassi Shot"
                price="+ $3.25"
                onPress={() => toggleAddon('lassi')}
              />

              {/* QUANTITY */}

              <View style={styles.mainQtyRow}>

                <View style={styles.qtySelector}>

                  <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() =>
                      setMainQty(prev =>
                        Math.max(1, prev - 1),
                      )
                    }>

                    <Text style={styles.qtyControl}>
                      −
                    </Text>

                  </TouchableOpacity>

                  <Text style={styles.qtyNumber}>
                    {mainQty}
                  </Text>

                  <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() =>
                      setMainQty(prev => prev + 1)
                    }>

                    <Text style={styles.qtyControl}>
                      +
                    </Text>

                  </TouchableOpacity>

                </View>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.saveButton}>

                  <Image
                    source={{uri: IMAGES.save}}
                    style={styles.saveIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.saveText}>
                    Save Customization ($19.48)
                  </Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

          {/* ====================================================
              ITEMS IN TRAY
          ==================================================== */}

          <View
            style={styles.traySection}>

            <View style={styles.sectionHeadingRow}>

              <View style={styles.sectionHeadingLeft}>
                <Image
                  source={{uri: IMAGES.tray}}
                  style={styles.sectionHeadingIcon}
                  resizeMode="contain"
                />

                <Text style={styles.sectionHeading}>
                  Items in Feast Tray
                </Text>
              </View>

              <Text style={styles.autoText}>
                Auto-saved
              </Text>

            </View>

            <TrayItem
              image={IMAGES.golgappa}
              title="Crazy Fire Golgappa Platter"
              subtitle="Note: Extra spicy pani & hing water"
              price="$8.99"
              qty={trayQty.golgappa}
              onMinus={() =>
                updateTrayQty('golgappa', -1)
              }
              onPlus={() =>
                updateTrayQty('golgappa', 1)
              }
            />

            <TrayItem
              image={IMAGES.paneer}
              title="Smoky Butter Paneer"
              subtitle="Jain prep (No garlic/onion) • Mild"
              price="$14.99"
              qty={trayQty.paneer}
              onMinus={() =>
                updateTrayQty('paneer', -1)
              }
              onPlus={() =>
                updateTrayQty('paneer', 1)
              }
            />

            <TrayItem
              image={IMAGES.gulab}
              title="Gulab Jamun Sizzler w/ Rabdi"
              subtitle="Warm sizzle • Serves 1–2"
              price="$6.99"
              qty={trayQty.gulab}
              onMinus={() =>
                updateTrayQty('gulab', -1)
              }
              onPlus={() =>
                updateTrayQty('gulab', 1)
              }
            />

          </View>

          {/* ====================================================
              PAIRED BITES
          ==================================================== */}

          <View
            style={styles.pairingSection}>

            <View style={styles.pairingHeader}>
              <View>
                <Text style={styles.sectionHeading}>
                  Frequently Paired Bites
                </Text>

                <Text style={styles.pairingSub}>
                  Complete your celebratory feast
                </Text>
              </View>

              <Image
                source={{uri: IMAGES.sparkle}}
                style={styles.sparkleIcon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.pairingRow}>

              <PairingCard
                image={IMAGES.chai}
                title="Masala Chai Flask"
                price="$3.99"
              />

              <PairingCard
                image={IMAGES.papad}
                title="Roasted Papad"
                price="$2.49"
              />

            </View>

          </View>

          {/* ====================================================
              INSTRUCTIONS
          ==================================================== */}

          <View
            style={styles.instructionsCard}>

            <View style={styles.noteTitleRow}>
              <Image
                source={{uri: IMAGES.note}}
                style={styles.noteIcon}
                resizeMode="contain"
              />

              <Text style={styles.noteTitle}>
                Cooking Instructions for Chef Patel
              </Text>
            </View>

            <View style={styles.noteInputWrapper}>

              <TextInput
                value={instructions}
                onChangeText={setInstructions}
                placeholder="e.g. less oil, extra crispy puris, celebratory note..."
                placeholderTextColor="#B5A5A1"
                style={styles.noteInput}
              />

              <Image
                source={{uri: IMAGES.mic}}
                style={styles.micIcon}
                resizeMode="contain"
              />

            </View>

            <View style={styles.cutleryDivider} />

            <View style={styles.cutleryRow}>

              <Image
                source={{uri: IMAGES.eco}}
                style={styles.ecoIcon}
                resizeMode="contain"
              />

              <View style={styles.cutleryContent}>
                <Text style={styles.cutleryTitle}>
                  Don't send plastic cutlery
                </Text>

                <Text style={styles.cutlerySub}>
                  Eco-friendly Festive Feast pledge 🌱
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  setNoCutlery(prev => !prev)
                }
                style={[
                  styles.checkBox,
                  noCutlery && styles.checkBoxActive,
                ]}>

                {noCutlery && (
                  <Image
                    source={{uri: IMAGES.check}}
                    style={styles.checkIcon}
                    resizeMode="contain"
                  />
                )}

              </TouchableOpacity>

            </View>

          </View>

          {/* ====================================================
              COUPON
          ==================================================== */}

          <View
            style={styles.couponCard}>

            <View style={styles.couponIconCircle}>
              <Image
                source={{uri: IMAGES.coupon}}
                style={styles.couponIcon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.couponContent}>

              <View style={styles.couponTitleRow}>
                <Text style={styles.couponTitle}>
                  CRAZYFEAST
                </Text>

                <View style={styles.appliedBadge}>
                  <Text style={styles.appliedText}>
                    APPLIED
                  </Text>
                </View>
              </View>

              <Text style={styles.couponSub}>
                Saved $5.20 with Festive Treat 20% OFF!
              </Text>

            </View>

            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.changeText}>
                Change
              </Text>
            </TouchableOpacity>

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
              label="Item Total"
              value="$30.97"
            />

            <BillRow
              label="% Festive Discount"
              value="-$5.20"
              green
            />

            <BillRow
              label="Delivery Fee (Instant 25m) ⚡"
              value="FREE"
              green
            />

            <BillRow
              label="Taxes & Restaurant Packaging"
              value="$2.85"
            />

            <View style={styles.billDividerLarge} />

            <View style={styles.totalRow}>

              <View>
                <Text style={styles.toPayLabel}>
                  To Pay
                </Text>

                <Text style={styles.savingsText}>
                  Total Savings: $5.20
                </Text>
              </View>

              <Text style={styles.totalAmount}>
                $28.62
              </Text>

            </View>

          </View>

          {/* CERTIFIED */}
          <View style={styles.certifiedRow}>

            <Image
              source={{uri: IMAGES.security}}
              style={styles.certifiedIcon}
              resizeMode="contain"
            />

            <Text style={styles.certifiedText}>
              100% Contactless & Kitchen Fresh Standards Certified
              {'\n'}
              Orders once placed are prepared fresh with royal spices.
            </Text>

          </View>

          <View style={{height: 115}} />

        </ScrollView>

        {/* ======================================================
            FIXED CHECKOUT BAR
        ====================================================== */}

        <View
          style={styles.checkoutBar}>

          <View style={styles.checkoutPriceArea}>

            <View style={styles.checkoutPriceRow}>
              <Text style={styles.checkoutPrice}>
                $28.62
              </Text>

              <Text style={styles.checkoutOldPrice}>
                $33.82
              </Text>
            </View>

            <Text style={styles.breakupText}>
              Detailed Breakup ^
            </Text>

          </View>

          <View
            style={styles.checkoutButtonWrapper}>

            <TouchableOpacity
              activeOpacity={0.87}
              onPress={handleCheckout}
              style={styles.checkoutButton}>

              <Text style={styles.checkoutButtonText}>
                Proceed to Checkout
              </Text>

              <Image
                source={{uri: IMAGES.arrow}}
                style={styles.checkoutArrow}
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
   HEAT OPTION
   ============================================================ */

const HeatOption = ({
  title,
  fireCount,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={onPress}
      style={[
        styles.heatOption,
        selected && styles.heatOptionSelected,
      ]}>

      <Text style={styles.heatTitle}>
        {title}
      </Text>

      <View style={styles.fireRow}>
        {Array.from({length: fireCount}).map((_, index) => (
          <Image
            key={index}
            source={{uri: IMAGES.fire}}
            style={styles.fireIcon}
            resizeMode="contain"
          />
        ))}
      </View>

      {selected && (
        <View style={styles.selectedCheck}>
          <Image
            source={{uri: IMAGES.check}}
            style={styles.selectedCheckIcon}
            resizeMode="contain"
          />
        </View>
      )}

    </TouchableOpacity>
  );
};

/* ============================================================
   ADDON ROW
   ============================================================ */

const AddonRow = ({
  selected,
  label,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.addonRow}>

      <View
        style={[
          styles.addonCheck,
          selected && styles.addonCheckSelected,
        ]}>

        {selected && (
          <Image
            source={{uri: IMAGES.check}}
            style={styles.addonCheckIcon}
            resizeMode="contain"
          />
        )}

      </View>

      <Text style={styles.addonLabel}>
        {label}
      </Text>

      <Text style={styles.addonPrice}>
        {price}
      </Text>

    </TouchableOpacity>
  );
};

/* ============================================================
   TRAY ITEM
   ============================================================ */

const TrayItem = ({
  image,
  title,
  subtitle,
  price,
  qty,
  onMinus,
  onPlus,
}) => {
  const press = action => {
    action();
  };

  return (
    <View
      style={styles.trayItem}>

      <Image
        source={{uri: image}}
        style={styles.trayItemImage}
        resizeMode="cover"
      />

      <View style={styles.trayItemContent}>

        <View style={styles.trayTitleRow}>
          <Image
            source={{uri: IMAGES.veg}}
            style={styles.smallVegIcon}
            resizeMode="contain"
          />

          <Text
            style={styles.trayItemTitle}
            numberOfLines={2}>
            {title}
          </Text>
        </View>

        <Text
          style={styles.trayItemSub}
          numberOfLines={2}>
          {subtitle}
        </Text>

        <Text style={styles.trayItemPrice}>
          {price}
        </Text>

      </View>

      <View style={styles.smallQty}>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => press(onMinus)}>

          <Text style={styles.smallQtyControl}>
            −
          </Text>

        </TouchableOpacity>

        <Text style={styles.smallQtyNumber}>
          {qty}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => press(onPlus)}>

          <Text style={styles.smallQtyControl}>
            +
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
};

/* ============================================================
   PAIRING CARD
   ============================================================ */

const PairingCard = ({
  image,
  title,
  price,
}) => {
  return (
    <View style={styles.pairingCard}>

      <Image
        source={{uri: image}}
        style={styles.pairingImage}
        resizeMode="cover"
      />

      <View style={styles.pairingContent}>
        <Text
          style={styles.pairingTitle}
          numberOfLines={1}>
          {title}
        </Text>

        <Text style={styles.pairingPrice}>
          {price}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.pairingAdd}>

          <Text style={styles.pairingAddText}>
            + Add
          </Text>

        </TouchableOpacity>

      </View>

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

export default Cart;

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
    paddingHorizontal: 12,
    paddingBottom: 25,
  },

  /* HEADER */

  header: {
    minHeight: 63,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,
    borderBottomColor: '#E8E2E1',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
  },

  backButton: {
    width: 30,
    height: 45,

    justifyContent: 'center',
  },

  backIcon: {
    width: 20,
    height: 20,
  },

  headerTitleArea: {
    flex: 1,
  },

  headerTitle: {
    color: '#C90013',

    fontSize: 13,
    fontWeight: '800',

    lineHeight: 15,
  },

  headerSub: {
    color: '#111827',

    fontSize: 7,

    marginTop: 2,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 13,
  },

  itemBadge: {
    minWidth: 58,
    minHeight: 36,

    borderRadius: 20,

    backgroundColor: '#FFF0DC',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 9,
  },

  itemBadgeIcon: {
    width: 14,
    height: 14,

    marginRight: 6,
  },

  itemBadgeNumber: {
    color: '#111827',

    fontSize: 9,
    fontWeight: '700',
  },

  itemBadgeText: {
    color: '#6D514B',

    fontSize: 7,
  },

  deleteIcon: {
    width: 18,
    height: 18,
  },

  /* MAIN CARD */

  mainCard: {
    marginTop: 9,

    borderRadius: 13,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0E1DE',

    padding: 13,

    shadowColor: '#8F6F68',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,

    elevation: 3,
  },

  mainTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  mainTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vegIcon: {
    width: 14,
    height: 14,

    marginRight: 7,
  },

  specialBadge: {
    minHeight: 20,

    borderRadius: 10,

    backgroundColor: '#C90013',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 8,
  },

  specialIcon: {
    width: 11,
    height: 11,

    marginRight: 4,
  },

  specialText: {
    color: '#FFFFFF',

    fontSize: 7,
    fontWeight: '800',
  },

  mainPriceArea: {
    alignItems: 'flex-end',
  },

  mainPrice: {
    color: '#C90013',

    fontSize: 14,
    fontWeight: '900',
  },

  oldPrice: {
    color: '#735651',

    fontSize: 7,

    textDecorationLine: 'line-through',

    marginTop: 3,
  },

  mainTitle: {
    color: '#111827',

    fontSize: 14,
    fontWeight: '700',

    lineHeight: 18,
  },

  platterImageWrapper: {
    height: 140,

    borderRadius: 8,

    overflow: 'hidden',

    marginTop: 12,

    position: 'relative',
  },

  platterImage: {
    width: '100%',
    height: '100%',
  },

  servingBadge: {
    position: 'absolute',

    right: 5,
    top: 5,

    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  servingText: {
    color: '#C90013',

    fontSize: 6.5,
  },

  ratingBadge: {
    position: 'absolute',

    left: 6,
    bottom: 6,

    borderRadius: 9,

    backgroundColor: 'rgba(16,24,39,0.85)',

    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  ratingText: {
    color: '#FFFFFF',

    fontSize: 7,
  },

  /* CUSTOM */

  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 14,
    marginBottom: 12,
  },

  customTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  customIcon: {
    width: 16,
    height: 16,

    marginRight: 7,
  },

  customTitle: {
    color: '#111827',

    fontSize: 12,
    fontWeight: '700',
  },

  requiredBadge: {
    backgroundColor: '#FFE6E3',

    borderRadius: 8,

    paddingHorizontal: 7,
    paddingVertical: 3,
  },

  requiredText: {
    color: '#C90013',

    fontSize: 6.5,
  },

  smallLabel: {
    color: '#624540',

    fontSize: 8.5,

    marginBottom: 8,
  },

  redText: {
    color: '#C90013',
  },

  /* HEAT */

  heatRow: {
    flexDirection: 'row',

    gap: 8,
  },

  heatOption: {
    flex: 1,

    minHeight: 54,

    borderRadius: 7,

    borderWidth: 1,
    borderColor: '#E9D6D3',

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },

  heatOptionSelected: {
    borderWidth: 1.5,
    borderColor: '#E50914',

    backgroundColor: '#FFF6F5',
  },

  heatTitle: {
    color: '#4D332F',

    fontSize: 7.5,

    marginBottom: 5,
  },

  fireRow: {
    flexDirection: 'row',
  },

  fireIcon: {
    width: 13,
    height: 13,

    marginHorizontal: 1,
  },

  selectedCheck: {
    position: 'absolute',

    right: -5,
    top: -5,

    width: 15,
    height: 15,

    borderRadius: 8,

    backgroundColor: '#C90013',

    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedCheckIcon: {
    width: 9,
    height: 9,
  },

  sectionMiniTitle: {
    color: '#624540',

    fontSize: 8,

    marginTop: 13,
    marginBottom: 7,
  },

  /* PREP */

  prepRow: {
    flexDirection: 'row',

    backgroundColor: '#EEF2FF',

    borderRadius: 7,

    padding: 4,
  },

  prepOption: {
    flex: 1,

    minHeight: 40,

    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 6,
  },

  prepOptionSelected: {
    backgroundColor: '#FFFFFF',
  },

  redDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: '#C90013',

    marginRight: 5,
  },

  prepIcon: {
    width: 12,
    height: 12,

    marginRight: 5,
  },

  prepText: {
    color: '#47342F',

    fontSize: 7,

    textAlign: 'center',
  },

  /* ADDONS */

  addonRow: {
    minHeight: 39,

    borderRadius: 7,

    borderWidth: 1,
    borderColor: '#F0DED9',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 9,

    marginBottom: 6,
  },

  addonCheck: {
    width: 14,
    height: 14,

    borderRadius: 3,

    borderWidth: 1,
    borderColor: '#E2BCB7',

    marginRight: 8,

    alignItems: 'center',
    justifyContent: 'center',
  },

  addonCheckSelected: {
    backgroundColor: '#C90013',
    borderColor: '#C90013',
  },

  addonCheckIcon: {
    width: 9,
    height: 9,
  },

  addonLabel: {
    flex: 1,

    color: '#6C504A',

    fontSize: 7.5,
  },

  addonPrice: {
    color: '#C90013',

    fontSize: 7,
    fontWeight: '700',
  },

  /* MAIN QTY */

  mainQtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 10,
  },

  qtySelector: {
    width: 88,
    height: 32,

    borderRadius: 16,

    borderWidth: 1,
    borderColor: '#E82423',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  qtyControl: {
    color: '#C90013',

    fontSize: 14,
  },

  qtyNumber: {
    color: '#111827',

    fontSize: 10,
    fontWeight: '700',
  },

  saveButton: {
    minHeight: 33,

    borderRadius: 17,

    backgroundColor: '#C90013',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 13,
  },

  saveIcon: {
    width: 13,
    height: 13,

    marginRight: 5,
  },

  saveText: {
    color: '#FFFFFF',

    fontSize: 7.5,
    fontWeight: '700',
  },

  /* TRAY */

  traySection: {
    marginTop: 18,
  },

  sectionHeadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 10,

    paddingHorizontal: 2,
  },

  sectionHeadingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sectionHeadingIcon: {
    width: 18,
    height: 18,

    marginRight: 7,
  },

  sectionHeading: {
    color: '#111827',

    fontSize: 14,
    fontWeight: '800',
  },

  autoText: {
    color: '#90756F',

    fontSize: 7,
  },

  trayItem: {
    minHeight: 108,

    borderRadius: 12,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0E0DC',

    marginBottom: 10,

    padding: 10,

    flexDirection: 'row',
    alignItems: 'center',
  },

  trayItemImage: {
    width: 67,
    height: 67,

    borderRadius: 7,

    marginRight: 10,
  },

  trayItemContent: {
    flex: 1,
  },

  trayTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  smallVegIcon: {
    width: 12,
    height: 12,

    marginRight: 5,
    marginTop: 2,
  },

  trayItemTitle: {
    flex: 1,

    color: '#111827',

    fontSize: 11,
    fontWeight: '700',

    lineHeight: 14,
  },

  trayItemSub: {
    color: '#836A64',

    fontSize: 7.5,

    lineHeight: 11,

    marginTop: 3,
  },

  trayItemPrice: {
    color: '#C90013',

    fontSize: 9,
    fontWeight: '700',

    marginTop: 4,
  },

  smallQty: {
    minWidth: 63,
    height: 28,

    borderRadius: 14,

    borderWidth: 1,
    borderColor: '#DED7E3',

    backgroundColor: '#F8F8FF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  smallQtyControl: {
    color: '#345071',

    fontSize: 11,
  },

  smallQtyNumber: {
    color: '#111827',

    fontSize: 8,
  },

  /* PAIRING */

  pairingSection: {
    marginTop: 7,
  },

  pairingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 9,
  },

  pairingSub: {
    color: '#826B65',

    fontSize: 7,

    marginTop: 2,
  },

  sparkleIcon: {
    width: 21,
    height: 21,
  },

  pairingRow: {
    flexDirection: 'row',

    gap: 8,
  },

  pairingCard: {
    flex: 1,

    minHeight: 72,

    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0DFDB',

    padding: 7,

    flexDirection: 'row',
  },

  pairingImage: {
    width: 52,
    height: 52,

    borderRadius: 6,

    marginRight: 8,
  },

  pairingContent: {
    flex: 1,
  },

  pairingTitle: {
    color: '#111827',

    fontSize: 7.5,
  },

  pairingPrice: {
    color: '#C90013',

    fontSize: 7,
    fontWeight: '700',

    marginTop: 2,
  },

  pairingAdd: {
    alignSelf: 'flex-start',

    borderWidth: 1,
    borderColor: '#E92323',

    borderRadius: 8,

    paddingHorizontal: 7,
    paddingVertical: 2,

    marginTop: 4,
  },

  pairingAddText: {
    color: '#C90013',

    fontSize: 6.5,
  },

  /* INSTRUCTIONS */

  instructionsCard: {
    marginTop: 16,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#F0E0DC',

    backgroundColor: '#FFFFFF',

    padding: 11,
  },

  noteTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 7,
  },

  noteIcon: {
    width: 13,
    height: 13,

    marginRight: 6,
  },

  noteTitle: {
    color: '#111827',

    fontSize: 8,
    fontWeight: '600',
  },

  noteInputWrapper: {
    minHeight: 37,

    borderRadius: 7,

    backgroundColor: '#F8F8FF',

    borderWidth: 1,
    borderColor: '#EDE5E3',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 9,
  },

  noteInput: {
    flex: 1,

    color: '#111827',

    fontSize: 7.5,

    paddingVertical: 0,
  },

  micIcon: {
    width: 14,
    height: 14,
  },

  cutleryDivider: {
    height: 1,

    backgroundColor: '#F1E8E6',

    marginVertical: 9,
  },

  cutleryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ecoIcon: {
    width: 17,
    height: 17,

    marginRight: 8,
  },

  cutleryContent: {
    flex: 1,
  },

  cutleryTitle: {
    color: '#111827',

    fontSize: 8.5,
    fontWeight: '600',
  },

  cutlerySub: {
    color: '#806B65',

    fontSize: 7,

    marginTop: 2,
  },

  checkBox: {
    width: 18,
    height: 18,

    borderRadius: 4,

    borderWidth: 1,
    borderColor: '#0B8232',

    alignItems: 'center',
    justifyContent: 'center',
  },

  checkBoxActive: {
    backgroundColor: '#07842F',
  },

  checkIcon: {
    width: 12,
    height: 12,
  },

  /* COUPON */

  couponCard: {
    minHeight: 66,

    marginTop: 15,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#FFB54C',

    backgroundColor: '#FFF2DD',

    paddingHorizontal: 10,

    flexDirection: 'row',
    alignItems: 'center',
  },

  couponIconCircle: {
    width: 37,
    height: 37,

    borderRadius: 19,

    backgroundColor: '#FFA20A',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,
  },

  couponIcon: {
    width: 19,
    height: 19,
  },

  couponContent: {
    flex: 1,
  },

  couponTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  couponTitle: {
    color: '#111827',

    fontSize: 8,
    fontWeight: '800',
  },

  appliedBadge: {
    backgroundColor: '#0D8B36',

    paddingHorizontal: 5,
    paddingVertical: 2,

    borderRadius: 3,

    marginLeft: 5,
  },

  appliedText: {
    color: '#FFFFFF',

    fontSize: 5,
    fontWeight: '800',
  },

  couponSub: {
    color: '#805F57',

    fontSize: 7,

    marginTop: 3,
  },

  changeText: {
    color: '#C90013',

    fontSize: 7,
    fontWeight: '600',
  },

  /* BILL */

  billCard: {
    marginTop: 16,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#F0E0DC',

    backgroundColor: '#FFFFFF',

    padding: 13,
  },

  billTitle: {
    color: '#111827',

    fontSize: 10,
    fontWeight: '700',
  },

  billDivider: {
    height: 1,

    backgroundColor: '#EFE7E5',

    marginVertical: 9,
  },

  billDividerLarge: {
    height: 1,

    backgroundColor: '#EFE7E5',

    marginTop: 10,
    marginBottom: 11,
  },

  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 7,
  },

  billLabel: {
    color: '#7D6964',

    fontSize: 7.5,
  },

  billValue: {
    color: '#111827',

    fontSize: 7.5,
  },

  billGreen: {
    color: '#08772E',
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  toPayLabel: {
    color: '#111827',

    fontSize: 10,
    fontWeight: '800',
  },

  savingsText: {
    color: '#07802E',

    fontSize: 6.5,

    marginTop: 3,
  },

  totalAmount: {
    color: '#C90013',

    fontSize: 16,
    fontWeight: '900',
  },

  /* CERT */

  certifiedRow: {
    flexDirection: 'row',
    justifyContent: 'center',

    marginTop: 20,
  },

  certifiedIcon: {
    width: 11,
    height: 11,

    marginRight: 5,
    marginTop: 1,
  },

  certifiedText: {
    color: '#8A7772',

    fontSize: 6.5,
    lineHeight: 11,

    textAlign: 'center',
  },

  /* CHECKOUT */

  checkoutBar: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 0,

    minHeight: 72,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#EDE2DF',

    paddingHorizontal: 12,

    flexDirection: 'row',
    alignItems: 'center',
  },

  checkoutPriceArea: {
    width: 97,
  },

  checkoutPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkoutPrice: {
    color: '#111827',

    fontSize: 13,
    fontWeight: '900',
  },

  checkoutOldPrice: {
    color: '#7D6964',

    fontSize: 6,

    textDecorationLine: 'line-through',

    marginLeft: 5,
  },

  breakupText: {
    color: '#C90013',

    fontSize: 6,

    fontWeight: '700',

    marginTop: 3,
  },

  checkoutButtonWrapper: {
    flex: 1,
  },

  checkoutButton: {
    minHeight: 48,

    borderRadius: 25,

    backgroundColor: '#C90013',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#C90013',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9,

    elevation: 5,
  },

  checkoutButtonText: {
    color: '#FFFFFF',

    fontSize: 11,
    fontWeight: '800',
  },

  checkoutArrow: {
    width: 17,
    height: 17,

    marginLeft: 8,
  },
});
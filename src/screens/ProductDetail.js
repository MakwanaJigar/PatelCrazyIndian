import React, {useState} from 'react';
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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

/* ============================================================
   ONLINE DUMMY IMAGES
   ============================================================ */

const IMAGES = {
  hero:
    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1200&q=90',

  logo:
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=250&q=80',

  back:
    'https://img.icons8.com/ios-filled/100/111827/back.png',

  heart:
    'https://img.icons8.com/ios-filled/100/c90013/like.png',

  cart:
    'https://img.icons8.com/ios-filled/100/6b4a45/shopping-bag.png',

  star:
    'https://img.icons8.com/ios-filled/100/8c5b00/star.png',

  chef:
    'https://img.icons8.com/ios-filled/100/ffffff/chef-hat.png',

  veg:
    'https://img.icons8.com/ios-filled/100/00852d/vegetarian-food-symbol.png',

  clock:
    'https://img.icons8.com/ios-filled/100/ffffff/clock.png',

  people:
    'https://img.icons8.com/ios-filled/100/ffffff/conference-call.png',

  fire:
    'https://img.icons8.com/ios-filled/100/d50a17/fire-element.png',

  leaf:
    'https://img.icons8.com/ios-filled/100/00852d/leaf.png',

  spice:
    'https://img.icons8.com/color/100/chili-pepper.png',

  bowl:
    'https://img.icons8.com/ios-filled/100/9b6200/soup-plate.png',

  temple:
    'https://img.icons8.com/ios-filled/100/6c504b/temple.png',

  portion:
    'https://img.icons8.com/ios-filled/100/9a5700/food-bar.png',

  check:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  checkRed:
    'https://img.icons8.com/ios-filled/100/d00a17/checked--v1.png',

  instruction:
    'https://img.icons8.com/ios-filled/100/9a5700/edit.png',

  arrow:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  burger:
    'https://img.icons8.com/ios-filled/100/ffffff/hamburger.png',

  pairing1:
    'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=500&q=85',

  pairing2:
    'https://images.unsplash.com/photo-1666190094763-6e4f3eb1c8b4?auto=format&fit=crop&w=500&q=85',

  pairing3:
    'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=500&q=85',

  reviewer:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
};

/* ============================================================
   PRODUCT DETAIL SCREEN
   ============================================================ */

const ProductDetail = ({navigation}) => {
  const [favorite, setFavorite] = useState(false);

  const [spiceLevel, setSpiceLevel] = useState('medium');

  const [dietStyle, setDietStyle] = useState('veg');

  const [portion, setPortion] = useState('standard');

  const [accompaniments, setAccompaniments] = useState({
    salan: true,
    raita: true,
    cucumber: false,
  });

  const [instructions, setInstructions] = useState('');

  const [quantity, setQuantity] = useState(1);

  const toggleAccompaniment = key => {
    setAccompaniments(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.root}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>

          {/* ====================================================
              HERO
          ==================================================== */}

          <View
            style={styles.hero}>

            <Image
              source={{uri: IMAGES.hero}}
              style={styles.heroImage}
              resizeMode="cover"
            />

            <View style={styles.heroOverlay} />

            {/* TOP BAR */}
            <View style={styles.heroTopBar}>

              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => navigation?.goBack()}
                style={styles.roundButton}>

                <Image
                  source={{uri: IMAGES.back}}
                  style={styles.topIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>

              <View style={styles.brandPill}>

                <Image
                  source={{uri: IMAGES.logo}}
                  style={styles.brandLogo}
                  resizeMode="cover"
                />

                <Text style={styles.brandText}>
                  Patel's{'\n'}Feast
                </Text>

              </View>

              <View style={styles.topActions}>

                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={() => setFavorite(prev => !prev)}
                  style={styles.roundButton}>

                  <Image
                    source={{uri: IMAGES.heart}}
                    style={[
                      styles.topIcon,
                      !favorite && styles.favoriteInactive,
                    ]}
                    resizeMode="contain"
                  />

                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.75}
                  style={styles.roundButton}>

                  <Image
                    source={{uri: IMAGES.cart}}
                    style={styles.topIcon}
                    resizeMode="contain"
                  />

                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>
                      2
                    </Text>
                  </View>

                </TouchableOpacity>

              </View>

            </View>

            {/* BADGES */}
            <View style={styles.heroBadges}>

              <View style={styles.bestSellerBadge}>
                <Image
                  source={{uri: IMAGES.star}}
                  style={styles.badgeIcon}
                  resizeMode="contain"
                />

                <Text style={styles.bestSellerText}>
                  Bestseller 4.9 (1.2k+)
                </Text>
              </View>

              <View style={styles.chefBadge}>
                <Image
                  source={{uri: IMAGES.chef}}
                  style={styles.badgeIcon}
                  resizeMode="contain"
                />

                <Text style={styles.chefBadgeText}>
                  Chef Patel's Crazy Special
                </Text>
              </View>

            </View>

            {/* HERO BOTTOM */}
            <View style={styles.heroBottom}>

              <View style={styles.heroBottomPill}>
                <Image
                  source={{uri: IMAGES.veg}}
                  style={styles.heroBottomVeg}
                  resizeMode="contain"
                />

                <Text style={styles.heroBottomText}>
                  Pure Veg
                </Text>
              </View>

              <View style={styles.heroBottomDark}>
                <Image
                  source={{uri: IMAGES.clock}}
                  style={styles.heroBottomIcon}
                  resizeMode="contain"
                />

                <Text style={styles.heroBottomDarkText}>
                  20–25 mins
                </Text>
              </View>

              <View style={styles.heroBottomDark}>
                <Image
                  source={{uri: IMAGES.people}}
                  style={styles.heroBottomIcon}
                  resizeMode="contain"
                />

                <Text style={styles.heroBottomDarkText}>
                  Serves 2–3
                </Text>
              </View>

            </View>

          </View>

          {/* ====================================================
              PRODUCT INFO
          ==================================================== */}

          <View
            style={styles.infoSection}>

            <Text style={styles.productTitle}>
              Royal Shahi Dum Biryani
            </Text>

            <Text style={styles.cookedText}>
              ♨ Cooked in Authentic Earthen Clay Handi
            </Text>

            <View style={styles.priceRow}>

              <Text style={styles.price}>
                $18.99
              </Text>

              <Text style={styles.oldPrice}>
                $22.50
              </Text>

              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>
                  SAVE $3.50 (15% OFF)
                </Text>
              </View>

            </View>

            <Text style={styles.description}>
              Aromatic long-grain basmati layered with tender saffron
              paneer, golden slow-cooked onions, toasted cashews, fresh
              garden mint, and secret 18-spice crazy masala sealed with
              dough in a rustic clay pot.
            </Text>

            <View style={styles.metaRow}>
              <Text style={styles.metaText}>
                ⚡ 540 kcal / serving
              </Text>

              <View style={styles.handmadeRow}>
                <Image
                  source={{uri: IMAGES.leaf}}
                  style={styles.smallLeaf}
                  resizeMode="contain"
                />

                <Text style={styles.metaText}>
                  100% Handcrafted
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

          </View>

          {/* ====================================================
              SPICE INTENSITY
          ==================================================== */}

          <View
            style={styles.optionCard}>

            <View style={styles.optionHeader}>

              <View style={styles.optionHeaderLeft}>
                <Image
                  source={{uri: IMAGES.fire}}
                  style={styles.optionHeaderIcon}
                  resizeMode="contain"
                />

                <Text style={styles.optionHeaderTitle}>
                  Select Spice Intensity
                </Text>
              </View>

              <View style={styles.requiredBadge}>
                <Text style={styles.requiredText}>
                  REQUIRED
                </Text>
              </View>

            </View>

            <SpiceOption
              title="Mild & Fragrant"
              subtitle="Gentle saffron, green cardamom & rose water"
              fireCount={1}
              active={spiceLevel === 'mild'}
              onPress={() => setSpiceLevel('mild')}
            />

            <SpiceOption
              title="Desi Medium"
              subtitle="Classic Mumbai street heat with fresh slit chilies"
              fireCount={2}
              popular
              active={spiceLevel === 'medium'}
              onPress={() => setSpiceLevel('medium')}
            />

            <SpiceOption
              title="Crazy Patel Hot 🔥"
              subtitle="Guntur chili & ghost pepper tadka"
              fireCount={3}
              active={spiceLevel === 'hot'}
              onPress={() => setSpiceLevel('hot')}
            />

            <View style={styles.innerDivider} />

            {/* DIET */}
            <View style={styles.dietHeader}>
              <Text style={styles.dietTitle}>
                Dietary Prep Style
              </Text>

              <Text style={styles.dietHint}>
                Select 1
              </Text>
            </View>

            <View style={styles.dietRow}>

              <DietOption
                icon={IMAGES.leaf}
                title="Standard Veg"
                active={dietStyle === 'veg'}
                onPress={() => setDietStyle('veg')}
              />

              <DietOption
                icon={IMAGES.bowl}
                title="Jain Friendly"
                active={dietStyle === 'jain'}
                onPress={() => setDietStyle('jain')}
              />

              <DietOption
                icon={IMAGES.temple}
                title="Swaminarayan"
                active={dietStyle === 'swami'}
                onPress={() => setDietStyle('swami')}
              />

            </View>

          </View>

          {/* ====================================================
              PORTION
          ==================================================== */}

          <View
            style={styles.section}>

            <Text style={styles.sectionTitle}>
              Handi Size & Portions
            </Text>

            <View style={styles.portionRow}>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => setPortion('standard')}
                style={[
                  styles.portionCard,
                  portion === 'standard' &&
                    styles.portionCardActive,
                ]}>

                <View style={styles.portionTop}>
                  <Text style={styles.portionTitle}>
                    Standard Handi
                  </Text>

                  <Radio active={portion === 'standard'} />
                </View>

                <Text style={styles.portionSub}>
                  750g • 2 People
                </Text>

                <Text style={styles.portionIncluded}>
                  Included
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => setPortion('party')}
                style={[
                  styles.portionCard,
                  portion === 'party' &&
                    styles.portionCardActive,
                ]}>

                <View style={styles.portionTop}>
                  <Text style={styles.portionTitle}>
                    Party Handi
                  </Text>

                  <Radio active={portion === 'party'} />
                </View>

                <Text style={styles.portionSub}>
                  1200g • 3–4 People
                </Text>

                <Text style={styles.portionExtra}>
                  +$7.00
                </Text>

              </TouchableOpacity>

            </View>

            {/* ACCOMPANIMENTS */}
            <View style={styles.accompanimentCard}>

              <View style={styles.accompanimentHeader}>

                <View style={styles.optionHeaderLeft}>
                  <Image
                    source={{uri: IMAGES.portion}}
                    style={styles.optionHeaderIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.accompanimentTitle}>
                    Complimentary Accompaniments
                  </Text>
                </View>

                <View style={styles.freeBadge}>
                  <Text style={styles.freeText}>
                    FREE
                  </Text>
                </View>

              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  toggleAccompaniment('salan')
                }
                style={styles.fullAccompaniment}>

                <Image
                  source={{
                    uri: accompaniments.salan
                      ? IMAGES.checkRed
                      : IMAGES.portion,
                  }}
                  style={styles.accompanimentRadio}
                  resizeMode="contain"
                />

                <Text style={styles.accompanimentText}>
                  Hyderabadi Mirchi Ka Salan Gravy (100ml)
                </Text>

                <Text style={styles.includedText}>
                  Included
                </Text>

              </TouchableOpacity>

              <View style={styles.accompanimentRow}>

                <AccompanimentOption
                  label="Burani Garlic Raita"
                  active={accompaniments.raita}
                  onPress={() =>
                    toggleAccompaniment('raita')
                  }
                />

                <AccompanimentOption
                  label="Mint Cucumber Raita"
                  active={accompaniments.cucumber}
                  onPress={() =>
                    toggleAccompaniment('cucumber')
                  }
                />

              </View>

            </View>

          </View>

          {/* ====================================================
              PAIRINGS
          ==================================================== */}

          <View
            style={styles.section}>

            <View style={styles.pairingHeader}>
              <View>
                <Text style={styles.sectionTitle}>
                  Patel's Festive Pairings
                </Text>

                <Text style={styles.pairingSub}>
                  Frequently feast-ordered together
                </Text>
              </View>

              <Text style={styles.extraJoy}>
                Extra Joy
              </Text>
            </View>

            <PairingCard
              image={IMAGES.pairing1}
              title="Smoky Butter Naan (2 pcs)"
              description="Tandoor blistered with pure desi ghee"
              price="+$4.50"
            />

            <PairingCard
              image={IMAGES.pairing2}
              title="Rose Gulab Jamun (2 pcs)"
              description="Cardamom syrup & pistachio crumble"
              price="+$5.99"
            />

            <PairingCard
              image={IMAGES.pairing3}
              title="Kesar Mango Lassi Flask"
              description="Alphonso mango pulp & thick yogurt (300ml)"
              price="+$4.20"
            />

          </View>

          {/* ====================================================
              COOKING INSTRUCTIONS
          ==================================================== */}

          <View
            style={styles.section}>

            <View style={styles.instructionHeader}>

              <View style={styles.optionHeaderLeft}>
                <Image
                  source={{uri: IMAGES.instruction}}
                  style={styles.optionHeaderIcon}
                  resizeMode="contain"
                />

                <Text style={styles.instructionTitle}>
                  Special Cooking Instructions
                </Text>
              </View>

              <Text style={styles.optionalText}>
                Optional
              </Text>

            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.instructionChips}>

              <InstructionChip text="+ Extra raita" />
              <InstructionChip text="+ Separate gravy" />
              <InstructionChip text="+ Less ghee" />
              <InstructionChip text="+ Extra spicy" />

            </ScrollView>

            <View style={styles.instructionInputWrapper}>

              <TextInput
                value={instructions}
                onChangeText={setInstructions}
                placeholder="e.g. Please send extra lime wedges and napkins..."
                placeholderTextColor="#9D8A85"
                style={styles.instructionInput}
              />

            </View>

          </View>

          {/* ====================================================
              REVIEWS
          ==================================================== */}

          <View
            style={styles.section}>

            <View style={styles.reviewHeader}>

              <View style={styles.reviewTitleRow}>
                <Text style={styles.sectionTitle}>
                  Feast Reviews
                </Text>

                <Text style={styles.reviewStar}>
                  ★
                </Text>

                <Text style={styles.reviewRating}>
                  4.9
                </Text>
              </View>

              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.reviewSeeAll}>
                  See all 1,248
                </Text>
              </TouchableOpacity>

            </View>

            <View style={styles.reviewCard}>

              <Image
                source={{uri: IMAGES.reviewer}}
                style={styles.reviewerImage}
                resizeMode="cover"
              />

              <View style={styles.reviewContent}>
                <Text style={styles.reviewerName}>
                  Aarav K.
                </Text>

                <Text style={styles.reviewStars}>
                  ★★★★★
                </Text>

                <Text style={styles.reviewText}>
                  Rich, smoky and perfectly spiced. The handi presentation
                  made it feel like a proper festive feast.
                </Text>
              </View>

            </View>

          </View>

          <View style={{height: 120}} />

        </ScrollView>

        {/* ======================================================
            BOTTOM CART BAR
        ====================================================== */}

        <View
          style={styles.bottomBar}>

          <View style={styles.quantityPill}>

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() =>
                setQuantity(prev =>
                  Math.max(1, prev - 1),
                )
              }>

              <Text style={styles.qtyControl}>
                −
              </Text>

            </TouchableOpacity>

            <Text style={styles.qtyNumber}>
              {quantity}
            </Text>

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() =>
                setQuantity(prev => prev + 1)
              }>

              <Text style={styles.qtyControl}>
                +
              </Text>

            </TouchableOpacity>

          </View>

          <View
            style={styles.addButtonWrapper}>

            <TouchableOpacity
              activeOpacity={0.88}
              onPress={() => navigation.navigate('Main', {screen: 'Cart'})}
              style={styles.addButton}>

              <Image
                source={{uri: IMAGES.burger}}
                style={styles.addButtonIcon}
                resizeMode="contain"
              />

              <Text style={styles.addButtonText}>
                ADD TO{'\n'}FEAST
              </Text>

              <Text style={styles.addButtonPrice}>
                $18.99
              </Text>

              <Image
                source={{uri: IMAGES.arrow}}
                style={styles.addArrow}
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
   SPICE OPTION
   ============================================================ */

const SpiceOption = ({
  title,
  subtitle,
  fireCount,
  active,
  popular,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.spiceOption,
        active && styles.spiceOptionActive,
      ]}>

      <Radio active={active} />

      <View style={styles.spiceOptionContent}>

        <View style={styles.spiceTitleRow}>
          <Text style={styles.spiceTitle}>
            {title}
          </Text>

          {popular && (
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>
                POPULAR
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.spiceSubtitle}>
          {subtitle}
        </Text>

      </View>

      <View style={styles.fireRow}>
        {[1, 2, 3].map(item => (
          <Image
            key={item}
            source={{uri: IMAGES.fire}}
            style={[
              styles.fireIcon,
              item > fireCount && styles.fireInactive,
            ]}
            resizeMode="contain"
          />
        ))}
      </View>

    </TouchableOpacity>
  );
};

/* ============================================================
   DIET OPTION
   ============================================================ */

const DietOption = ({
  icon,
  title,
  active,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.dietOption,
        active && styles.dietOptionActive,
      ]}>

      <Image
        source={{uri: icon}}
        style={styles.dietIcon}
        resizeMode="contain"
      />

      <Text style={styles.dietOptionText}>
        {title}
      </Text>

    </TouchableOpacity>
  );
};

/* ============================================================
   RADIO
   ============================================================ */

const Radio = ({active}) => {
  return (
    <View
      style={[
        styles.radioOuter,
        active && styles.radioOuterActive,
      ]}>

      {active && (
        <View style={styles.radioInner} />
      )}

    </View>
  );
};

/* ============================================================
   ACCOMPANIMENT
   ============================================================ */

const AccompanimentOption = ({
  label,
  active,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.accompanimentOption,
        active && styles.accompanimentOptionActive,
      ]}>

      <Radio active={active} />

      <Text style={styles.accompanimentOptionText}>
        {label}
      </Text>

    </TouchableOpacity>
  );
};

/* ============================================================
   PAIRING CARD
   ============================================================ */

const PairingCard = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <View
      style={styles.pairingCard}>

      <Image
        source={{uri: image}}
        style={styles.pairingImage}
        resizeMode="cover"
      />

      <View style={styles.pairingContent}>

        <Text style={styles.pairingTitle}>
          {title}
        </Text>

        <Text style={styles.pairingDescription}>
          {description}
        </Text>

        <Text style={styles.pairingPrice}>
          {price}
        </Text>

      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.pairingAddButton}>

        <Text style={styles.pairingAddPlus}>
          +
        </Text>

        <Text style={styles.pairingAddText}>
          Add
        </Text>

      </TouchableOpacity>

    </View>
  );
};

/* ============================================================
   INSTRUCTION CHIP
   ============================================================ */

const InstructionChip = ({text}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.instructionChip}>

      <Text style={styles.instructionChipText}>
        {text}
      </Text>

    </TouchableOpacity>
  );
};

export default ProductDetail;

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
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingBottom: 20,
  },

  /* HERO */

  hero: {
    height: 292,

    position: 'relative',

    overflow: 'hidden',
  },

  heroImage: {
    width: '100%',
    height: '100%',
  },

  heroOverlay: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'rgba(0,0,0,0.10)',
  },

  heroTopBar: {
    position: 'absolute',

    top: 15,
    left: 16,
    right: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  roundButton: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,

    elevation: 4,
  },

  topIcon: {
    width: 22,
    height: 22,
  },

  favoriteInactive: {
    opacity: 0.65,
  },

  brandPill: {
    minWidth: 132,
    minHeight: 39,

    borderRadius: 21,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 9,
  },

  brandLogo: {
    width: 28,
    height: 28,

    borderRadius: 14,

    marginRight: 7,
  },

  brandText: {
    color: '#D10A16',

    fontSize: 10,
    fontWeight: '900',

    lineHeight: 11,
  },

  topActions: {
    flexDirection: 'row',

    gap: 9,
  },

  cartBadge: {
    position: 'absolute',

    right: -3,
    top: -5,

    width: 20,
    height: 20,

    borderRadius: 10,

    backgroundColor: '#C90013',

    alignItems: 'center',
    justifyContent: 'center',
  },

  cartBadgeText: {
    color: '#FFFFFF',

    fontSize: 9,
    fontWeight: '900',
  },

  heroBadges: {
    position: 'absolute',

    top: 62,
    left: 16,
    right: 16,

    flexDirection: 'row',

    gap: 7,
  },

  bestSellerBadge: {
    minHeight: 27,

    borderRadius: 14,

    backgroundColor: '#F6B515',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
  },

  chefBadge: {
    minHeight: 27,

    borderRadius: 14,

    backgroundColor: '#DF2732',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
  },

  badgeIcon: {
    width: 13,
    height: 13,

    marginRight: 5,
  },

  bestSellerText: {
    color: '#5A3B00',

    fontSize: 8.5,
    fontWeight: '800',
  },

  chefBadgeText: {
    color: '#FFFFFF',

    fontSize: 8,
    fontWeight: '800',
  },

  heroBottom: {
    position: 'absolute',

    left: 16,
    right: 16,
    bottom: 15,

    flexDirection: 'row',

    gap: 10,
  },

  heroBottomPill: {
    minHeight: 26,

    borderRadius: 14,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 9,
  },

  heroBottomVeg: {
    width: 15,
    height: 15,

    marginRight: 5,
  },

  heroBottomText: {
    color: '#273346',

    fontSize: 10,
    fontWeight: '700',
  },

  heroBottomDark: {
    minHeight: 26,

    borderRadius: 14,

    backgroundColor: 'rgba(10,10,10,0.78)',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
  },

  heroBottomIcon: {
    width: 13,
    height: 13,

    marginRight: 5,
  },

  heroBottomDarkText: {
    color: '#FFFFFF',

    fontSize: 9,
    fontWeight: '700',
  },

  /* INFO */

  infoSection: {
    paddingHorizontal: 17,
    paddingTop: 17,
  },

  productTitle: {
    color: '#132036',

    fontSize: 23,
    fontWeight: '900',
  },

  cookedText: {
    color: '#A76C16',

    fontSize: 10.5,
    fontWeight: '700',

    marginTop: 4,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10,
  },

  price: {
    color: '#C90013',

    fontSize: 21,
    fontWeight: '900',

    marginRight: 13,
  },

  oldPrice: {
    color: '#9A8380',

    fontSize: 12,

    textDecorationLine: 'line-through',

    marginRight: 10,
  },

  discountBadge: {
    backgroundColor: '#FDE5E7',

    borderRadius: 8,

    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  discountText: {
    color: '#C90A16',

    fontSize: 8,
    fontWeight: '800',
  },

  description: {
    color: '#866965',

    fontSize: 13,

    lineHeight: 23,

    marginTop: 14,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 18,

    marginTop: 10,
  },

  metaText: {
    color: '#8A6D68',

    fontSize: 10,
  },

  handmadeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallLeaf: {
    width: 13,
    height: 13,

    marginRight: 4,
  },

  divider: {
    height: 1,

    backgroundColor: '#EFE6E4',

    marginTop: 16,
  },

  /* OPTION CARD */

  optionCard: {
    marginHorizontal: 17,
    marginTop: 24,

    borderRadius: 13,

    backgroundColor: '#F2F4FF',

    borderWidth: 1,
    borderColor: '#E4E1E7',

    padding: 16,
  },

  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 13,
  },

  optionHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionHeaderIcon: {
    width: 18,
    height: 18,

    marginRight: 8,
  },

  optionHeaderTitle: {
    color: '#263044',

    fontSize: 15,
    fontWeight: '800',
  },

  requiredBadge: {
    backgroundColor: '#F9DDE3',

    borderRadius: 8,

    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  requiredText: {
    color: '#C90013',

    fontSize: 7.5,
    fontWeight: '800',
  },

  /* SPICE OPTION */

  spiceOption: {
    minHeight: 81,

    borderRadius: 8,

    borderWidth: 1,
    borderColor: '#EEDDD9',

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 13,

    marginBottom: 10,
  },

  spiceOptionActive: {
    borderColor: '#E20C18',
    borderWidth: 2,
  },

  spiceOptionContent: {
    flex: 1,

    marginLeft: 10,
  },

  spiceTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  spiceTitle: {
    color: '#293345',

    fontSize: 13,
    fontWeight: '800',
  },

  spiceSubtitle: {
    color: '#967A75',

    fontSize: 10,

    lineHeight: 14,

    marginTop: 3,
  },

  popularBadge: {
    backgroundColor: '#F9DFC2',

    borderRadius: 5,

    paddingHorizontal: 6,
    paddingVertical: 2,

    marginLeft: 8,
  },

  popularText: {
    color: '#7D4A00',

    fontSize: 6.5,
    fontWeight: '800',
  },

  fireRow: {
    flexDirection: 'row',

    marginLeft: 5,
  },

  fireIcon: {
    width: 18,
    height: 18,

    marginLeft: 3,
  },

  fireInactive: {
    opacity: 0.23,
  },

  radioOuter: {
    width: 18,
    height: 18,

    borderRadius: 9,

    borderWidth: 1.5,
    borderColor: '#9DA6B4',

    alignItems: 'center',
    justifyContent: 'center',
  },

  radioOuterActive: {
    borderColor: '#CF0014',
    borderWidth: 2,
  },

  radioInner: {
    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: '#CF0014',
  },

  innerDivider: {
    height: 1,

    backgroundColor: '#E4E4EA',

    marginVertical: 5,
  },

  /* DIET */

  dietHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 8,
    marginBottom: 10,
  },

  dietTitle: {
    color: '#273247',

    fontSize: 13,
    fontWeight: '800',
  },

  dietHint: {
    color: '#9A7772',

    fontSize: 8,
  },

  dietRow: {
    flexDirection: 'row',

    gap: 8,
  },

  dietOption: {
    flex: 1,

    minHeight: 62,

    borderRadius: 8,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#E8D8D5',

    alignItems: 'center',
    justifyContent: 'center',
  },

  dietOptionActive: {
    borderColor: '#D60815',
    borderWidth: 2,
  },

  dietIcon: {
    width: 23,
    height: 23,

    marginBottom: 5,
  },

  dietOptionText: {
    color: '#344054',

    fontSize: 8.5,
    fontWeight: '700',

    textAlign: 'center',
  },

  /* GENERIC SECTION */

  section: {
    marginHorizontal: 17,
    marginTop: 25,
  },

  sectionTitle: {
    color: '#283246',

    fontSize: 18,
    fontWeight: '900',
  },

  /* PORTIONS */

  portionRow: {
    flexDirection: 'row',

    gap: 11,

    marginTop: 12,
  },

  portionCard: {
    flex: 1,

    minHeight: 98,

    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    borderWidth: 1.5,
    borderColor: '#ECD9D5',

    padding: 13,
  },

  portionCardActive: {
    borderColor: '#D30A17',
    borderWidth: 2,
  },

  portionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  portionTitle: {
    color: '#273247',

    fontSize: 12,
    fontWeight: '800',
  },

  portionSub: {
    color: '#9A7772',

    fontSize: 10,

    marginTop: 4,
  },

  portionIncluded: {
    color: '#C90013',

    fontSize: 12,
    fontWeight: '800',

    marginTop: 13,
  },

  portionExtra: {
    color: '#273247',

    fontSize: 13,
    fontWeight: '800',

    marginTop: 13,
  },

  /* ACCOMPANIMENTS */

  accompanimentCard: {
    marginTop: 15,

    borderRadius: 11,

    backgroundColor: '#F2F4FF',

    borderWidth: 1,
    borderColor: '#E3E1E7',

    padding: 14,
  },

  accompanimentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 12,
  },

  accompanimentTitle: {
    color: '#273247',

    fontSize: 12,
    fontWeight: '800',
  },

  freeBadge: {
    backgroundColor: '#D7F7DF',

    borderRadius: 7,

    paddingHorizontal: 7,
    paddingVertical: 3,
  },

  freeText: {
    color: '#087E30',

    fontSize: 7,
    fontWeight: '800',
  },

  fullAccompaniment: {
    minHeight: 38,

    borderRadius: 7,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#E7D9D6',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,

    marginBottom: 10,
  },

  accompanimentRadio: {
    width: 17,
    height: 17,

    marginRight: 8,
  },

  accompanimentText: {
    flex: 1,

    color: '#5B4A46',

    fontSize: 9.5,
  },

  includedText: {
    color: '#A17F79',

    fontSize: 8,
  },

  accompanimentRow: {
    flexDirection: 'row',

    gap: 8,
  },

  accompanimentOption: {
    flex: 1,

    minHeight: 46,

    borderRadius: 8,

    borderWidth: 1,
    borderColor: '#E8D8D5',

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
  },

  accompanimentOptionActive: {
    borderColor: '#E5A9AA',
  },

  accompanimentOptionText: {
    flex: 1,

    color: '#55423E',

    fontSize: 9,

    marginLeft: 7,
  },

  /* PAIRINGS */

  pairingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pairingSub: {
    color: '#A17F79',

    fontSize: 10,

    marginTop: 2,
  },

  extraJoy: {
    color: '#9B6100',

    fontSize: 10,
    fontWeight: '800',
  },

  pairingCard: {
    minHeight: 101,

    borderRadius: 11,

    borderWidth: 1,
    borderColor: '#F0E2DE',

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',

    padding: 12,

    marginTop: 11,
  },

  pairingImage: {
    width: 67,
    height: 67,

    borderRadius: 7,

    marginRight: 11,
  },

  pairingContent: {
    flex: 1,
  },

  pairingTitle: {
    color: '#273247',

    fontSize: 12,
    fontWeight: '800',
  },

  pairingDescription: {
    color: '#9A7772',

    fontSize: 9.5,

    lineHeight: 13,

    marginTop: 3,
  },

  pairingPrice: {
    color: '#D10816',

    fontSize: 11,
    fontWeight: '900',

    marginTop: 3,
  },

  pairingAddButton: {
    width: 59,
    height: 59,

    borderRadius: 30,

    borderWidth: 2,
    borderColor: '#D20815',

    alignItems: 'center',
    justifyContent: 'center',
  },

  pairingAddPlus: {
    color: '#D20815',

    fontSize: 13,

    lineHeight: 13,
  },

  pairingAddText: {
    color: '#D20815',

    fontSize: 10,
    fontWeight: '800',
  },

  /* INSTRUCTIONS */

  instructionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 9,
  },

  instructionTitle: {
    color: '#273247',

    fontSize: 12,
    fontWeight: '800',
  },

  optionalText: {
    color: '#A17F79',

    fontSize: 8,
  },

  instructionChips: {
    gap: 7,

    paddingRight: 16,
  },

  instructionChip: {
    minHeight: 28,

    borderRadius: 14,

    backgroundColor: '#EEF2FF',

    justifyContent: 'center',

    paddingHorizontal: 11,
  },

  instructionChipText: {
    color: '#695954',

    fontSize: 8.5,
    fontWeight: '600',
  },

  instructionInputWrapper: {
    minHeight: 42,

    borderRadius: 8,

    borderWidth: 1,
    borderColor: '#E8D3CF',

    marginTop: 11,

    paddingHorizontal: 12,

    justifyContent: 'center',
  },

  instructionInput: {
    color: '#273247',

    fontSize: 9.5,

    paddingVertical: 0,
  },

  /* REVIEWS */

  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reviewTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  reviewStar: {
    color: '#FF9D00',

    fontSize: 18,

    marginLeft: 6,
  },

  reviewRating: {
    color: '#273247',

    fontSize: 14,
    fontWeight: '800',

    marginLeft: 3,
  },

  reviewSeeAll: {
    color: '#CF0916',

    fontSize: 9,
    fontWeight: '800',
  },

  reviewCard: {
    marginTop: 10,

    borderRadius: 10,

    backgroundColor: '#F1F3FF',

    padding: 12,

    flexDirection: 'row',
  },

  reviewerImage: {
    width: 42,
    height: 42,

    borderRadius: 21,

    marginRight: 10,
  },

  reviewContent: {
    flex: 1,
  },

  reviewerName: {
    color: '#283246',

    fontSize: 11,
    fontWeight: '800',
  },

  reviewStars: {
    color: '#FFA20A',

    fontSize: 10,

    marginTop: 2,
  },

  reviewText: {
    color: '#79625D',

    fontSize: 9,

    lineHeight: 13,

    marginTop: 3,
  },

  /* BOTTOM BAR */

  bottomBar: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 0,

    minHeight: 82,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#EEE2DF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 17,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 10,
  },

  quantityPill: {
    width: 110,
    height: 49,

    borderRadius: 25,

    borderWidth: 2,
    borderColor: '#D20A17',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    marginRight: 12,
  },

  qtyControl: {
    color: '#D20A17',

    fontSize: 20,
    fontWeight: '600',
  },

  qtyNumber: {
    color: '#1E293B',

    fontSize: 16,
    fontWeight: '800',
  },

  addButtonWrapper: {
    flex: 1,
  },

  addButton: {
    minHeight: 59,

    borderRadius: 30,

    backgroundColor: '#CA0014',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 15,

    shadowColor: '#CA0014',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.24,
    shadowRadius: 12,

    elevation: 6,
  },

  addButtonIcon: {
    width: 22,
    height: 22,

    marginRight: 12,
  },

  addButtonText: {
    color: '#FFFFFF',

    fontSize: 12,
    fontWeight: '900',

    lineHeight: 14,
  },

  addButtonPrice: {
    color: '#FFFFFF',

    fontSize: 17,
    fontWeight: '900',

    marginLeft: 'auto',
  },

  addArrow: {
    width: 21,
    height: 21,

    marginLeft: 7,
  },
});
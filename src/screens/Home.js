import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LOGO } from '../assets';

const IMAGES = {
  search: 'https://img.icons8.com/ios-filled/100/111827/search.png',

  bag: 'https://img.icons8.com/ios-filled/100/d30918/shopping-bag.png',

  table: 'https://img.icons8.com/ios-filled/100/8a4b00/table.png',

  takeaway: 'https://img.icons8.com/ios-filled/100/d30918/take-away-food.png',

  offer: 'https://img.icons8.com/ios-filled/100/111111/discount.png',

  veg: 'https://img.icons8.com/ios-filled/100/00852d/vegetarian-food-symbol.png',

  nonveg: 'https://img.icons8.com/ios-filled/100/d30918/square.png',

  jain: 'https://img.icons8.com/ios-filled/100/9a5700/leaf.png',

  fire: 'https://img.icons8.com/ios-filled/100/e50914/fire-element.png',

  minus: 'https://img.icons8.com/ios-filled/100/ffffff/minus.png',

  plus: 'https://img.icons8.com/ios-filled/100/ffffff/plus-math.png',

  arrow: 'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  feast: 'https://img.icons8.com/ios-filled/100/63332f/store.png',

  menu: 'https://img.icons8.com/ios-filled/100/ffffff/restaurant-menu.png',

  booking: 'https://img.icons8.com/ios-filled/100/63332f/table.png',

  orders: 'https://img.icons8.com/ios-filled/100/63332f/receipt.png',

  cart: 'https://img.icons8.com/ios-filled/100/ffffff/restaurant.png',

  dahiPuri:
    'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=85',

  paneer:
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=85',

  biryani:
    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=700&q=85',

  gulabJamun:
    'https://images.unsplash.com/photo-1666190094763-6e4f3eb1c8b4?auto=format&fit=crop&w=700&q=85',

  offerFood:
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=85',
};

const CATEGORIES = ['All Bites', 'Pure Veg', 'Non-Veg', 'Jain'];

const MENU_TABS = [
  'Street Chaats',
  'Tandoor Starters',
  'Royal Gravies',
  'Breads & Biryani',
];

const Home = ({ navigation }) => {
  const openProduct = () => navigation.navigate('ProductDetail');

  const [selectedFilter, setSelectedFilter] = useState('All Bites');

  const [quantities, setQuantities] = useState({
    dahi: 1,
    paneer: 0,
    biryani: 1,
    gulab: 0,
  });

  const increase = key => {
    setQuantities(prev => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const decrease = key => {
    setQuantities(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] - 1),
    }));
  };

  const totalItems = Object.values(quantities).reduce(
    (sum, item) => sum + item,
    0,
  );

  return (
    // Bottom edge is handled by the tab bar.
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View style={styles.root}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <Image
              source={LOGO}
              style={styles.brandLogo}
              resizeMode="contain"
            />

            <View>
              <Text style={styles.brandTitle}>Patel's Crazy Indian</Text>

              <Text style={styles.brandSub}>THE FESTIVE TREAT</Text>
            </View>
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={{ uri: IMAGES.search }}
                style={styles.headerIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.bagWrapper}
              onPress={() => navigation.navigate('Cart')}
            >
              <Image
                source={{ uri: IMAGES.bag }}
                style={styles.headerIcon}
                resizeMode="contain"
              />

              <View style={styles.badgeCount}>
                <Text style={styles.badgeCountText}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* TABLE SELECTOR */}
        <View style={styles.tableRow}>
          <TouchableOpacity activeOpacity={0.8} style={styles.tableSelector}>
            <Image
              source={{ uri: IMAGES.table }}
              style={styles.tableIcon}
              resizeMode="contain"
            />

            <View style={styles.tableTextArea}>
              <Text style={styles.tableTitle}>Table #12 • Ground Floor</Text>

              <Text style={styles.tableSub}>Dine-in Order</Text>
            </View>

            <Text style={styles.dropdownText}>⌄</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.takeawayButton}>
            <Image
              source={{ uri: IMAGES.takeaway }}
              style={styles.takeawayIcon}
              resizeMode="contain"
            />

            <Text style={styles.takeawayText}>Takeaway?</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* OFFER */}
          <View style={styles.offerCard}>
            <View style={styles.offerTextArea}>
              <View style={styles.offerBadge}>
                <Image
                  source={{ uri: IMAGES.offer }}
                  style={styles.offerIcon}
                  resizeMode="contain"
                />

                <Text style={styles.offerBadgeText}>CRAZY FESTIVE OFFER</Text>
              </View>

              <Text style={styles.offerTitle}>Royal Thali & Chaat Combo</Text>

              <Text style={styles.offerSub}>
                Free Mango Kulfi on orders over $30 wit...
              </Text>
            </View>

            <Image
              source={{ uri: IMAGES.offerFood }}
              style={styles.offerImage}
              resizeMode="cover"
            />
          </View>

          {/* FILTER CHIPS */}
          <View style={styles.filterRow}>
            {CATEGORIES.map(item => {
              const active = selectedFilter === item;

              return (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.8}
                  onPress={() => setSelectedFilter(item)}
                  style={[styles.filterChip, active && styles.filterChipActive]}
                >
                  {item !== 'All Bites' && (
                    <Image
                      source={{
                        uri:
                          item === 'Pure Veg'
                            ? IMAGES.veg
                            : item === 'Non-Veg'
                            ? IMAGES.nonveg
                            : IMAGES.jain,
                      }}
                      style={styles.filterIcon}
                      resizeMode="contain"
                    />
                  )}

                  <Text
                    style={[
                      styles.filterText,
                      active && styles.filterTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* CATEGORY TABS */}
          <View style={styles.categoryTabs}>
            {MENU_TABS.map((item, index) => (
              <TouchableOpacity
                key={item}
                activeOpacity={0.8}
                style={[
                  styles.categoryTab,
                  index === 0 && styles.categoryTabActive,
                ]}
              >
                <Text
                  numberOfLines={1}
                  style={[
                    styles.categoryTabText,
                    index === 0 && styles.categoryTabTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* CONTENT */}
          <View>
            <MenuSection
              title="Street Chaats"
              description="Bursting with sweet, tangy, and crunchy Mumbai street flavors"
              count="4"
              accent="#CE0014"
            >
              <MenuCard
                image={IMAGES.dahiPuri}
                title="Crazy Dahi Puri Blast"
                description="Crispy puris stuffed with spiced potatoes, sweetened curd, tangy..."
                price="$7.99"
                veg
                tags={[
                  {
                    text: 'Jain Avail',
                    style: 'yellow',
                  },
                ]}
                quantity={quantities.dahi}
                onAdd={() => increase('dahi')}
                onMinus={() => decrease('dahi')}
                onOpen={openProduct}
              />
            </MenuSection>

            <MenuSection
              title="Royal Gravies"
              description="Velvety butter gravies slow-simmered over open charcoal embers"
              count="6"
              accent="#8A4B0D"
            >
              <MenuCard
                image={IMAGES.paneer}
                title="Smoky Butter Paneer / Chicken"
                description="Charcoal-smoked rich tomato cashew makhani sauce infused with kasuri..."
                price="$14.99"
                tags={[
                  {
                    text: 'Customizable',
                    style: 'green',
                  },
                ]}
                chef
                quantity={quantities.paneer}
                onAdd={() => increase('paneer')}
                onMinus={() => decrease('paneer')}
                onOpen={openProduct}
              />
            </MenuSection>

            <MenuSection
              title="Breads & Biryani"
              description="Royal clay-pot dum biryanis layered with saffron basmati"
              count="5"
              accent="#FFA20A"
            >
              <MenuCard
                image={IMAGES.biryani}
                title="Hyderabadi Dum Gosht Biryani"
                description="Slow-cooked aromatic basmati rice layered with royal whole spices,..."
                price="$16.50"
                tags={[
                  {
                    text: 'Crazy Spicy',
                    style: 'red',
                  },
                ]}
                quantity={quantities.biryani}
                onAdd={() => increase('biryani')}
                onMinus={() => decrease('biryani')}
                onOpen={openProduct}
              />
            </MenuSection>

            <MenuSection
              title="Festive Desserts"
              description="Sweet royal indulgences drenched in saffron rabdi and cardamom"
              count="3"
              accent="#05852D"
            >
              <MenuCard
                image={IMAGES.gulabJamun}
                title="Gulab Jamun Sizzler with Rabdi"
                description="Warm condensed milk dumplings served on an iron sizzler plate topped..."
                price="$6.99"
                veg
                tags={[
                  {
                    text: 'Sweet Indulgence',
                    style: 'green',
                  },
                  {
                    text: 'Best Seller',
                    style: 'yellow',
                  },
                ]}
                quantity={quantities.gulab}
                onAdd={() => increase('gulab')}
                onMinus={() => decrease('gulab')}
                onOpen={openProduct}
              />
            </MenuSection>
          </View>

          <View style={styles.bottomSpacer} />
        </ScrollView>

        {/* CART BAR */}
        <View style={styles.cartBar}>
          <View style={styles.cartLeft}>
            <View style={styles.cartIconCircle}>
              <Image
                source={{ uri: IMAGES.cart }}
                style={styles.cartIcon}
                resizeMode="contain"
              />

              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{totalItems}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.cartTitle}>{totalItems} items in plate</Text>

              <Text style={styles.cartPrice}>
                $24.49
                <Text style={styles.cartTax}> + taxes</Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.viewTrayButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <Text style={styles.viewTrayText}>View Feast Tray</Text>

            <Image
              source={{ uri: IMAGES.arrow }}
              style={styles.trayArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const MenuSection = ({ title, description, count, accent, children }) => {
  return (
    <View style={styles.menuSection}>
      <View style={styles.sectionHeader}>
        <View style={[styles.sectionAccent, { backgroundColor: accent }]} />

        <View style={styles.sectionTitleArea}>
          <Text style={styles.sectionTitle}>{title}</Text>

          <Text style={styles.sectionDescription}>{description}</Text>
        </View>

        <View style={styles.itemCount}>
          <Text style={styles.itemCountNumber}>{count}</Text>

          <Text style={styles.itemCountLabel}>items</Text>
        </View>
      </View>

      {children}
    </View>
  );
};

const MenuCard = ({
  image,
  title,
  description,
  price,
  veg,
  chef,
  tags = [],
  quantity,
  onAdd,
  onMinus,
  onOpen,
}) => {
  return (
    <View style={styles.menuCard}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onOpen}
        style={styles.foodImageWrapper}
      >
        <Image
          source={{ uri: image }}
          style={styles.foodImage}
          resizeMode="cover"
        />

        <View style={styles.foodTypeBadge}>
          <Image
            source={{
              uri: veg ? IMAGES.veg : IMAGES.nonveg,
            }}
            style={styles.foodTypeIcon}
            resizeMode="contain"
          />
        </View>

        {chef && (
          <View style={styles.chefBadge}>
            <Text style={styles.chefText}>Chef Pick</Text>
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.foodContent}>
        <TouchableOpacity activeOpacity={0.7} onPress={onOpen}>
          <Text style={styles.foodTitle}>{title}</Text>
        </TouchableOpacity>

        <Text style={styles.foodDescription} numberOfLines={2}>
          {description}
        </Text>

        <View style={styles.tagsRow}>
          <View style={styles.spiceRow}>
            <Image
              source={{ uri: IMAGES.fire }}
              style={styles.spiceIcon}
              resizeMode="contain"
            />
            <Image
              source={{ uri: IMAGES.fire }}
              style={[styles.spiceIcon, styles.fadedSpice]}
              resizeMode="contain"
            />
            <Image
              source={{ uri: IMAGES.fire }}
              style={[styles.spiceIcon, styles.fadedSpice]}
              resizeMode="contain"
            />
          </View>

          {tags.map((tag, index) => (
            <View
              key={`${tag.text}-${index}`}
              style={[
                styles.tag,
                tag.style === 'green' && styles.tagGreen,
                tag.style === 'yellow' && styles.tagYellow,
                tag.style === 'red' && styles.tagRed,
              ]}
            >
              <Text
                style={[
                  styles.tagText,
                  tag.style === 'green' && styles.tagTextGreen,
                  tag.style === 'yellow' && styles.tagTextYellow,
                  tag.style === 'red' && styles.tagTextRed,
                ]}
              >
                {tag.text}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.foodDivider} />

        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}</Text>

          {quantity > 0 ? (
            <View style={styles.quantityPill}>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onMinus()}
                style={styles.quantityButton}
              >
                <Image
                  source={{ uri: IMAGES.minus }}
                  style={styles.quantityIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <Text style={styles.quantityText}>{quantity}</Text>

              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onAdd()}
                style={styles.quantityButton}
              >
                <Image
                  source={{ uri: IMAGES.plus }}
                  style={styles.quantityIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onAdd()}
              style={styles.addButton}
            >
              <Image
                source={{ uri: IMAGES.plus }}
                style={styles.addIcon}
                resizeMode="contain"
              />

              <Text style={styles.addText}>ADD</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  root: {
    flex: 1,
    backgroundColor: '#F9F8FF',
  },

  header: {
    height: 64,

    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,
    borderBottomColor: '#E7E4EB',
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandLogo: {
    width: 44,
    height: 44,

    marginRight: 8,
  },

  brandTitle: {
    color: '#C90013',

    fontSize: 16,
    fontWeight: '900',
  },

  brandSub: {
    color: '#7F4800',

    fontSize: 8,
    fontWeight: '700',

    marginTop: 1,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 18,
  },

  headerIcon: {
    width: 22,
    height: 22,
  },

  bagWrapper: {
    position: 'relative',
  },

  badgeCount: {
    position: 'absolute',

    right: -8,
    top: -8,

    width: 18,
    height: 18,

    borderRadius: 9,

    backgroundColor: '#C90013',

    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeCountText: {
    color: '#FFFFFF',

    fontSize: 9,
    fontWeight: '800',
  },

  tableRow: {
    minHeight: 57,

    paddingHorizontal: 16,

    backgroundColor: '#EEF1FF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tableSelector: {
    minHeight: 38,

    borderRadius: 20,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#EDD8D3',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,

    minWidth: 195,
  },

  tableIcon: {
    width: 17,
    height: 17,

    marginRight: 8,
  },

  tableTextArea: {
    flex: 1,
  },

  tableTitle: {
    color: '#111827',

    fontSize: 10,
    fontWeight: '600',
  },

  tableSub: {
    color: '#9B7C75',

    fontSize: 8,

    marginTop: 1,
  },

  dropdownText: {
    color: '#6F5550',

    fontSize: 14,

    marginLeft: 8,
  },

  takeawayButton: {
    minHeight: 36,

    borderRadius: 20,

    backgroundColor: '#E1E6FA',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 13,
  },

  takeawayIcon: {
    width: 15,
    height: 15,

    marginRight: 6,
  },

  takeawayText: {
    color: '#111827',

    fontSize: 10,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  offerCard: {
    minHeight: 95,

    marginHorizontal: 16,
    marginTop: 13,

    borderRadius: 13,

    overflow: 'hidden',

    flexDirection: 'row',

    backgroundColor: '#CD0718',
  },

  offerTextArea: {
    flex: 1,

    padding: 13,

    zIndex: 2,
  },

  offerBadge: {
    alignSelf: 'flex-start',

    minHeight: 21,

    borderRadius: 12,

    backgroundColor: '#FFA20A',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 8,
  },

  offerIcon: {
    width: 12,
    height: 12,

    marginRight: 4,
  },

  offerBadgeText: {
    color: '#111111',

    fontSize: 8,
    fontWeight: '800',
  },

  offerTitle: {
    color: '#FFFFFF',

    fontSize: 15,
    fontWeight: '900',

    marginTop: 7,
  },

  offerSub: {
    color: '#FFFFFF',

    fontSize: 10,

    marginTop: 3,
  },

  offerImage: {
    width: 96,
    height: '100%',
  },

  filterRow: {
    flexDirection: 'row',

    paddingHorizontal: 16,

    gap: 8,

    marginTop: 14,
  },

  filterChip: {
    minHeight: 31,

    borderRadius: 17,

    borderWidth: 1,
    borderColor: '#DEC9C6',

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 12,

    flexDirection: 'row',
    alignItems: 'center',
  },

  filterChipActive: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },

  filterIcon: {
    width: 15,
    height: 15,

    marginRight: 6,
  },

  filterText: {
    color: '#653D37',

    fontSize: 11,
  },

  filterTextActive: {
    color: '#FFFFFF',

    fontWeight: '700',
  },

  categoryTabs: {
    flexDirection: 'row',

    paddingHorizontal: 16,

    marginTop: 17,

    borderBottomWidth: 1,
    borderBottomColor: '#E9E5E5',
  },

  categoryTab: {
    marginRight: 18,

    paddingBottom: 9,
  },

  categoryTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#C90013',
  },

  categoryTabText: {
    color: '#4E3530',

    fontSize: 11,
  },

  categoryTabTextActive: {
    color: '#C90013',
    fontWeight: '700',
  },

  menuSection: {
    paddingHorizontal: 16,

    marginTop: 18,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'stretch',

    marginBottom: 12,
  },

  sectionAccent: {
    width: 3,

    marginRight: 10,
  },

  sectionTitleArea: {
    flex: 1,
  },

  sectionTitle: {
    color: '#111827',

    fontSize: 18,
    fontWeight: '900',
  },

  sectionDescription: {
    color: '#70524B',

    fontSize: 11,

    lineHeight: 16,

    marginTop: 2,
  },

  itemCount: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#EFF2FF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  itemCountNumber: {
    color: '#111827',

    fontSize: 10,
    fontWeight: '700',
  },

  itemCountLabel: {
    color: '#8D7772',

    fontSize: 8,
  },

  menuCard: {
    minHeight: 164,

    borderRadius: 13,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F0E1DE',

    flexDirection: 'row',

    padding: 13,

    marginBottom: 20,

    shadowColor: '#8E6A64',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 7,

    elevation: 3,
  },

  foodImageWrapper: {
    width: 100,
    height: 100,

    borderRadius: 8,

    overflow: 'hidden',

    marginRight: 13,

    position: 'relative',
  },

  foodImage: {
    width: '100%',
    height: '100%',
  },

  foodTypeBadge: {
    position: 'absolute',

    top: 6,
    left: 6,

    width: 19,
    height: 19,

    borderRadius: 3,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  foodTypeIcon: {
    width: 14,
    height: 14,
  },

  chefBadge: {
    position: 'absolute',

    right: 0,
    bottom: 0,

    backgroundColor: '#C90013',

    paddingHorizontal: 7,
    paddingVertical: 4,

    borderTopLeftRadius: 7,
  },

  chefText: {
    color: '#FFFFFF',

    fontSize: 8,
    fontWeight: '800',
  },

  foodContent: {
    flex: 1,
  },

  foodTitle: {
    color: '#111827',

    fontSize: 15,
    fontWeight: '800',

    lineHeight: 18,
  },

  foodDescription: {
    color: '#785A53',

    fontSize: 10.5,

    lineHeight: 15,

    marginTop: 5,
  },

  tagsRow: {
    flexDirection: 'row',
    alignItems: 'center',

    flexWrap: 'wrap',

    marginTop: 7,
  },

  spiceRow: {
    flexDirection: 'row',

    marginRight: 7,
  },

  spiceIcon: {
    width: 12,
    height: 12,

    marginRight: 2,
  },

  fadedSpice: {
    opacity: 0.25,
  },

  tag: {
    minHeight: 18,

    borderRadius: 5,

    paddingHorizontal: 6,

    justifyContent: 'center',

    marginRight: 5,
  },

  tagGreen: {
    backgroundColor: '#D6F7DC',
  },

  tagYellow: {
    backgroundColor: '#FFF0CF',
  },

  tagRed: {
    backgroundColor: '#FFE3E1',
  },

  tagText: {
    fontSize: 8,
  },

  tagTextGreen: {
    color: '#057223',
  },

  tagTextYellow: {
    color: '#945600',
  },

  tagTextRed: {
    color: '#C90013',
  },

  foodDivider: {
    height: 1,

    backgroundColor: '#F0E6E4',

    marginTop: 8,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 8,
  },

  price: {
    color: '#C90013',

    fontSize: 17,
    fontWeight: '900',
  },

  quantityPill: {
    minWidth: 86,
    height: 33,

    borderRadius: 17,

    backgroundColor: '#C90013',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  quantityButton: {
    width: 30,
    height: 33,

    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityIcon: {
    width: 14,
    height: 14,
  },

  quantityText: {
    color: '#FFFFFF',

    fontSize: 13,
    fontWeight: '800',
  },

  addButton: {
    minWidth: 74,
    height: 33,

    borderRadius: 17,

    backgroundColor: '#C90013',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addIcon: {
    width: 14,
    height: 14,

    marginRight: 5,
  },

  addText: {
    color: '#FFFFFF',

    fontSize: 11,
    fontWeight: '800',
  },

  bottomSpacer: {
    height: 95,
  },

  cartBar: {
    position: 'absolute',

    left: 16,
    right: 16,
    bottom: 12,

    minHeight: 66,

    borderRadius: 12,

    backgroundColor: '#243449',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 9,

    elevation: 8,
  },

  cartLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cartIconCircle: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: '#C90013',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,

    position: 'relative',
  },

  cartIcon: {
    width: 20,
    height: 20,
  },

  cartBadge: {
    position: 'absolute',

    right: -3,
    top: -5,

    width: 18,
    height: 18,

    borderRadius: 9,

    backgroundColor: '#FFA20A',

    justifyContent: 'center',
    alignItems: 'center',
  },

  cartBadgeText: {
    color: '#111827',

    fontSize: 9,
    fontWeight: '800',
  },

  cartTitle: {
    color: '#FFFFFF',

    fontSize: 11,
    fontWeight: '700',
  },

  cartPrice: {
    color: '#FFC24A',

    fontSize: 11,
    fontWeight: '800',

    marginTop: 2,
  },

  cartTax: {
    color: '#D7DCE6',

    fontSize: 8,
    fontWeight: '400',
  },

  viewTrayButton: {
    minHeight: 40,

    borderRadius: 20,

    backgroundColor: '#EE2725',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 15,
  },

  viewTrayText: {
    color: '#FFFFFF',

    fontSize: 11,
    fontWeight: '700',
  },

  trayArrow: {
    width: 15,
    height: 15,

    marginLeft: 7,
  },

  bottomNav: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#F0DDD9',

    flexDirection: 'row',

    paddingHorizontal: 12,
  },

  navItem: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  navIconWrapper: {
    width: 42,
    height: 38,

    borderRadius: 19,

    justifyContent: 'center',
    alignItems: 'center',
  },

  navIconWrapperActive: {
    width: 52,
    height: 52,

    borderRadius: 26,

    backgroundColor: '#E92323',
  },

  navIcon: {
    width: 21,
    height: 21,
  },

  navIconActive: {
    width: 23,
    height: 23,
  },

  navLabel: {
    color: '#553833',

    fontSize: 9,

    marginTop: 2,
  },

  navLabelActive: {
    color: '#E92323',

    fontWeight: '700',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Animated, PanResponder, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SCREEN_WIDTH = Dimensions.get('window').width;

const cardData = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const HomeScreen = () => {
  const [cards, setCards] = useState(cardData);
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 120) {

        Animated.timing(pan, {
          toValue: { x: SCREEN_WIDTH, y: gestureState.dy },
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          setCards((prev) => prev.slice(1)); 
          pan.setValue({ x: 0, y: 0 });
        });
      } else if (gestureState.dx < -120) {
        Animated.timing(pan, {
          toValue: { x: -SCREEN_WIDTH, y: gestureState.dy },
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          setCards((prev) => prev.slice(1)); 
          pan.setValue({ x: 0, y: 0 }); 
        });
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Learn</Text>
      <View style={styles.swipeContainer}>
        {cards
          .map((card, index) => {
            const isFront = index === cards.length - 1;
            return (
              <Animated.View
                key={card.id}
                style={[
                  styles.card,
                  isFront ? { transform: [...pan.getTranslateTransform()] } : { opacity: 0.8 },
                ]}
                {...(isFront ? panResponder.panHandlers : {})}
              >
                <Image source={{ uri: card.url }} style={styles.cardImage} />
              </Animated.View>
            );
          })
          .reverse()}
      </View>
      <View style={styles.svgContainer}>
        <Svg width="70" height="65" viewBox="0 0 89 84" fill="none">
          <Path
            d="M87 42C87 63.984 68.0826 82 44.5 82C20.9174 82 2 63.984 2 42C2 20.016 20.9174 2 44.5 2C68.0826 2 87 20.016 87 42Z"
            fill="#00B488"
            stroke="#00B488"
            strokeWidth="4"
          />
          <Path
            d="M35.4 38L25 47M25 47L35.4 56M25 47H53.6C56.3583 47 59.0035 46.0518 60.9539 44.364C62.9043 42.6761 64 40.3869 64 38C64 35.6131 62.9043 33.3239 60.9539 31.636C59.0035 29.9482 56.3583 29 53.6 29H51"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <Svg width="70" height="65" viewBox="0 0 89 84" fill="none" style={styles.secondSvg}>
          <Path
            d="M87 42C87 63.984 68.0826 82 44.5 82C20.9174 82 2 63.984 2 42C2 20.016 20.9174 2 44.5 2C68.0826 2 87 20.016 87 42Z"
            fill="#00B488"
            stroke="#00B488"
            strokeWidth="4"
          />
          <Path
            d="M33.9792 26.1609C35.7485 25.8762 37.5629 25.9701 39.2887 26.4357C41.0145 26.9013 42.6076 27.7266 43.9507 28.8509L44.0247 28.9132L44.0926 28.8565C45.3745 27.7943 46.8814 27.0024 48.513 26.5337C50.1446 26.065 51.8633 25.9301 53.5544 26.1383L54.0462 26.2062C56.1778 26.5538 58.1703 27.4392 59.8125 28.7687C61.4548 30.0982 62.6857 31.8223 63.3749 33.7585C64.0641 35.6947 64.186 37.7708 63.7276 39.7671C63.2693 41.7633 62.2477 43.6054 60.7712 45.0981L60.4113 45.4474L60.3154 45.5248L45.422 59.454C45.0784 59.7752 44.623 59.9679 44.1404 59.9963C43.6578 60.0248 43.1806 59.8871 42.7972 59.6088L42.6093 59.454L27.63 45.4436C26.0432 43.9857 24.9146 42.1414 24.3694 40.1152C23.8242 38.0889 23.8835 35.9597 24.5408 33.9633C25.1982 31.9669 26.4279 30.1813 28.0937 28.8042C29.7596 27.4271 31.7966 26.5122 33.9792 26.1609Z"
            fill="white"
          />
        </Svg>
      </View>
      <View style={styles.pngContainer}>
        <Image source={require("../../assets/images/upload.png")} style={styles.pngImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 80,
  },
  swipeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  card: {
    position: 'absolute',
    width: 250,
    height: 300,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  svgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 50,
    marginTop: -20,
  },
  secondSvg: {
    marginLeft: 10,
  },
  pngContainer: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 100,
  },
  pngImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Svg, { Path } from 'react-native-svg';
import { useRouter } from 'expo-router';
// Import `useMutation` and `api` from Convex.
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { carddata } from "../../data/captions"; // Import articles data

const cardData = [
  {
    id: 1,
    url: 'https://i.pinimg.com/736x/26/5e/07/265e0737f5209e666e121cfdb151ba5f.jpg',
  },
  {
    id: 2,
    url: 'https://i.pinimg.com/736x/6c/dd/d4/6cddd44aab04449816faa5b1a407439a.jpg',
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/736x/58/24/74/5824747aab09a9ce7b28fd03f3bb93d6.jpg',
  },
  {
    id: 4,
    url: 'https://i.pinimg.com/736x/77/c0/93/77c0936e6164b79e39bf8ff3871852e4.jpg',
  },
  {
    id: 5,
    url: 'https://i.pinimg.com/736x/9b/14/94/9b1494a48c1e0d8df0886ad879f769de.jpg',
  },
  {
    id: 6,
    url: 'https://i.pinimg.com/736x/50/01/f1/5001f1f97d6ed975ce3b53fd48048903.jpg',
  },
  {
    id: 7,
    url: 'https://i.pinimg.com/736x/35/17/6b/35176b705d47f7c5bf27497b50d04173.jpg',
  },
  {
    id: 8,
    url: 'https://i.pinimg.com/736x/47/84/6d/47846d60f1310e89f57cf624256de9e7.jpg',
  },
  {
    id: 9,
    url: 'https://i.pinimg.com/736x/de/6b/99/de6b99d5695dd4196b7d492a3c0a58a7.jpg',
  },
  {
    id: 10,
    url: 'https://i.pinimg.com/736x/81/d9/73/81d9735c6f6f358655d504571149b2fe.jpg',
  },
];

const HomeScreen = () => {
  const router = useRouter();
  const swiperRef = useRef(null);
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const [randomNum, setRandomNum] = useState(randomNumber);
  const [isPressed, setIsPressed] = useState(false); // Track press state

  const handleSwipeRight = (cardIndex) => {
    console.log('Swiped Right on:', cardData[cardIndex]);
    setRandomNum(Math.floor(Math.random() * 100) + 1);
  };

  const handleSwipeLeft = (cardIndex) => {
    console.log('Swiped Left on:', cardData[cardIndex]);
    setRandomNum(Math.floor(Math.random() * 100) + 1);
  };

  const addedMeme = useMutation(api.addMeme.addMeme);

  // const handlePress = async (url: string) => {
  //   await addedMeme({ url, liked: "liked" });
  //   console.log("YESSIR");
  // };

  const handlePress = async () => {
    if (swiperRef.current) {
      // Access currentIndex directly from the state
      const currentIndex = (swiperRef.current as any).state.firstCardIndex;
      console.log("Current index:", currentIndex);
      
      // Get the current card's URL
      const currentCard = cardData[currentIndex];
      
      if (currentCard) {
        try {
          await addedMeme({ url: currentCard.url, id: currentCard.id , caption: carddata[randomNum]});
          console.log("Successfully added meme:", currentCard.url);
        } catch (error) {
          console.error("Error adding meme:", error);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Learn</Text>
      <View style={styles.swipeContainer}>
        <Swiper
        ref={swiperRef}
          cards={cardData}
          renderCard={(card) => (
            <View style={styles.card}>
              <Image source={{ uri: card.url }} style={styles.cardImage} />
              <View style={styles.cap}>
              <Text style={styles.caption}>{carddata[randomNum]}</Text>
              </View>  

              
            </View>
          )}
          keyExtractor={(card) => card.id.toString()}
          onSwipedRight={(cardIndex) => handleSwipeRight(cardIndex)}
          onSwipedLeft={(cardIndex) => handleSwipeLeft(cardIndex)}
          stackSize={3}
          cardVerticalMargin={20}
          cardHorizontalMargin={20}
          backgroundColor="transparent"
          overlayLabels={{
            left: {
              title: 'NO',
              style: {
                container: {
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  borderRadius: 10,
                },
                label: {
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              },
            },
            right: {
              title: 'YES',
              style: {
                container: {
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 255, 0, 0.5)',
                  borderRadius: 10,
                },
                label: {
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.svgContainer}>
        {/* <Svg width="70" height="65" viewBox="0 0 89 84" fill="none">
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
        </Svg> */}
        {/* <Pressable
      onPress={onPress}
    > */}
            <Pressable 
          style={[styles.press, isPressed && styles.pressedButton]} // Apply border on press
          onPressIn={() => setIsPressed(true)} // Button pressed in
          onPressOut={() => setIsPressed(false)} // Button released
          onPress={handlePress}
        >
        {/* <Pressable style={styles.press}
      onPress={handlePress}
    > */}
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

        </Pressable>
      
    {/* </Pressable> */}
        {/* <TouchableOpacity onPress={() => handleTouch(card.url)}> */}

        {/* </TouchableOpacity> */}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  press: {
    position: "absolute",
    zIndex: 102000,
  },
  pressedButton: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.90,
    shadowRadius: 4,
    // borderColor: '#00B488', // Set the border color on press
    // borderWidth: 4, // Set border width
    // borderRadius: 100, // Optional: to make it circular
  },
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
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 27,
    marginTop: 20
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    width: 300,
    height: 400,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 60
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  svgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 190,
    gap: 15,
  },
  secondSvg: {
    marginLeft: 10
  },
  pngContainer: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 80,
    marginLeft: 5,
  },
  pngImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#00B488',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    marginTop: 50,
    marginBottom: 60,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  cap: {
    height: 160,
    color: '#000'
  }
});

export default HomeScreen;


// import React, { useRef } from 'react';
// import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
// import Swiper from 'react-native-deck-swiper';
// import Svg, { Path } from 'react-native-svg';
// import { useRouter } from 'expo-router';
// import { useMutation, useQuery } from "convex/react";
// import { api } from "../../convex/_generated/api";

// const HomeScreen = () => {
//   const router = useRouter();
//   const swiperRef = useRef(null);
  
//   // Fetch captions from Convex
//   const captions = useQuery(api.getCaptions.getCaptions);
  
//   // Combine image data with captions
//   const cardData = [
//     {
//       id: 1,
//       url: 'https://i.pinimg.com/736x/26/5e/07/265e0737f5209e666e121cfdb151ba5f.jpg',
//     },
//     // ... rest of your image data
//   ].map((card, index) => ({
//     ...card,
//     caption: captions?.[index]?.text || 'Loading caption...',
//     captionId: captions?.[index]?._id,
//   }));

//   const handleSwipeRight = (cardIndex) => {
//     console.log('Swiped Right on:', cardData[cardIndex]);
//   };

//   const handleSwipeLeft = (cardIndex) => {
//     console.log('Swiped Left on:', cardData[cardIndex]);
//   };

//   const addedMeme = useMutation(api.addMeme.addMeme);

//   const handlePress = async () => {
//     if (swiperRef.current) {
//       const currentIndex = (swiperRef.current as any).state.firstCardIndex;
//       const currentCard = cardData[currentIndex];
      
//       if (currentCard) {
//         try {
//           await addedMeme({ 
//             url: currentCard.url, 
//             id: currentCard.id,
//             captionId: currentCard.captionId // Include the caption ID in the mutation
//           });
//           console.log("Successfully added meme with caption");
//         } catch (error) {
//           console.error("Error adding meme:", error);
//         }
//       }
//     }
//   };

//   // Show loading state while captions are being fetched
//   if (!captions) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Learn</Text>
//       <View style={styles.swipeContainer}>
//         <Swiper
//           ref={swiperRef}
//           cards={cardData}
//           renderCard={(card) => (
//             <View style={styles.cardContainer}>
//               <View style={styles.card}>
//                 <Image source={{ uri: card.url }} style={styles.cardImage} />
//               </View>
//               <View style={styles.captionContainer}>
//                 <Text style={styles.captionText}>{card.caption}</Text>
//               </View>
//             </View>
//           )}
//           keyExtractor={(card) => card.id.toString()}
//           onSwipedRight={handleSwipeRight}
//           onSwipedLeft={handleSwipeLeft}
//           stackSize={3}
//           cardVerticalMargin={20}
//           cardHorizontalMargin={20}
//           backgroundColor="transparent"
//           overlayLabels={{
//             left: {
//               title: 'NO',
//               style: {
//                 container: {
//                   position: 'absolute',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   width: '100%',
//                   height: '100%',
//                   backgroundColor: 'rgba(255, 0, 0, 0.5)',
//                   borderRadius: 10,
//                 },
//                 label: {
//                   color: 'white',
//                   fontSize: 24,
//                   fontWeight: 'bold',
//                   textAlign: 'center',
//                 },
//               },
//             },
//             right: {
//               title: 'YES',
//               style: {
//                 container: {
//                   position: 'absolute',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   width: '100%',
//                   height: '100%',
//                   backgroundColor: 'rgba(0, 255, 0, 0.5)',
//                   borderRadius: 10,
//                 },
//                 label: {
//                   color: 'white',
//                   fontSize: 24,
//                   fontWeight: 'bold',
//                   textAlign: 'center',
//                 },
//               },
//             },
//           }}
//         />
//       </View>
//       {/* SVG Container remains the same */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   // ... existing styles remain the same ...
//   cardContainer: {
//     width: 300,
//     height: 450,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   captionContainer: {
//     width: '100%',
//     padding: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   captionText: {
//     fontSize: 16,
//     color: '#333',
//     textAlign: 'center',
//   },
// });

// export default HomeScreen;
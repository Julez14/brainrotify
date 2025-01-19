import { useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import axios from "axios";
import OPENAI_API_KEY from "../openaikey";

const ArticleDetail = ({ route }: { route: any }) => {
  const params = useLocalSearchParams();
  const { title, date, time, text } = params;

  const initialText = typeof text === "string" ? text : String(text);

  const [displayedText, setDisplayedText] = useState(initialText);
  const [brainrotifiedText, setBrainrotifiedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation effect
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isAnimating && brainrotifiedText) {
      if (currentIndex <= brainrotifiedText.length) {
        timer = setTimeout(() => {
          setDisplayedText(brainrotifiedText.substring(0, currentIndex));
          setCurrentIndex((prev) => prev + 1);
        }, 0.1); // this affects speed
      } else {
        setIsAnimating(false);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentIndex, isAnimating, brainrotifiedText]);

  const getDescriptions = async (inputText: string): Promise<void> => {
    try {
      // Set loading state
      setIsLoading(true);

      // Clear current text and start animation
      setDisplayedText("");
      setCurrentIndex(0);
      setIsAnimating(true);

      const chatGptResponse = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: `Take this article and rewrite it with maximum chaotic 'Brainrot' energy. Incorporate absurd internet slang, meme culture, Gen Z humor, and references to viral trends, while retaining the core message. Use phrases like 'Skibidi Rizz,' 'Goofy Ahh,' 'Nathaniel B,' 'sigma grindset,' 'sus,' 'Grimace Shake,' and any other chaotic terms that match the tone of Brainrot. Turn formal language into unhinged internet jargon while ensuring the tips or advice in the article remain clear and followable. Keep it fun, over-the-top, and packed with references like 'Ohio,' 'Andrew Tate in the goon cave,' 'Whopper Whopper,' and '1-2 Buckle My Shoe.' Don't hold back. Consider other phrases like: skibidi gyatt rizz only in ohio duke dennis did you pray today livvy dunne rizzing up baby gronk sussy imposter pibby glitch in real life sigma alpha omega male grindset andrew tate goon cave freddy fazbear colleen ballinger smurf cat vs strawberry elephant blud dawg shmlawg ishowspeed a whole bunch of turbulence ambatukam bro really thinks he's carti literally hitting the griddy the ocky way kai cenat fanum tax garten of banban no edging in class not the mosquito again bussing axel in harlem whopper whopper whopper whopper 1 2 buckle my shoe goofy ahh aiden ross sin city monday left me broken quirked up white boy busting it down sexual style goated with the sauce john pork grimace shake kiki do you love me huggy wuggy nathaniel b lightskin stare biggest bird omar the referee amogus uncanny wholesome reddit chungus keanu reeves pizza tower zesty poggers kumalala savesta quandale dingle glizzy rose toy ankha zone thug shaker morbin time dj khaled sisyphus oceangate shadow wizard money gang ayo the pizza here PLUH nair butthole waxing t-pose ugandan knuckles family guy funny moments compilation with subway surfers gameplay at the bottom nickeh30 ratio uwu delulu opium bird cg5 mewing fortnite battle pass all my fellas gta 6 backrooms gigachad based cringe kino redpilled no nut november pokénut november foot fetish F in the chat i love lean looksmaxxing gassy social credit bing chilling xbox live mrbeast kid named finger better caul saul i am a surgeon hit or miss i guess they never miss huh i like ya cut g ice spice gooning fr we go gym kevin james josh hutcherson coffin of andy and leyley metal pipe falling. Article: ${inputText}`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const description = chatGptResponse.data.choices[0].message.content;
      setBrainrotifiedText(description);

      // Reset currentIndex to ensure animation starts from beginning
      setCurrentIndex(0);
    } catch (error) {
      console.error("Error fetching from OpenAI: ", error);
      setIsAnimating(false);
      setDisplayedText(initialText);
      setBrainrotifiedText("");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleReset = () => {
    setIsAnimating(false);
    setCurrentIndex(0);
    setDisplayedText(initialText);
    setBrainrotifiedText("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, isAnimating && styles.buttonDisabled]}
            disabled={isAnimating || isLoading} // Disable when loading
            onPress={() => getDescriptions(initialText)}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" /> // Show loading indicator
            ) : (
              <Text style={styles.buttonText}>✨ Brainrotify!</Text>
            )}
          </TouchableOpacity>
          {brainrotifiedText && (
            <TouchableOpacity
              style={[styles.button, styles.resetButton]}
              onPress={handleReset}
            >
              <Text style={styles.buttonText}>↺ Reset</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.meta}>
            {date} | {time} read
          </Text>
          <Text style={styles.body}>{displayedText}</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  meta: {
    fontSize: 14,
    color: "gray",
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    flex: 1,
    backgroundColor: "#00B488",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  resetButton: {
    backgroundColor: "#666",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ArticleDetail;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput("");

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(input),
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    if (userInput.toLowerCase().includes("hello")) {
      return "Hello! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("help")) {
      return "Sure, what do you need help with?";
    } else {
      return "I'm sorry, I didn't understand that. Can you rephrase?";
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Custom Header */}
          <View style={styles.header}>
            <Text style={styles.title}>ChatBot</Text>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => router.push("/(tabs)")}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>

          {/* Chat Messages */}
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageBubble,
                  item.sender === "user"
                    ? styles.userBubble
                    : styles.botBubble,
                ]}
              >
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
            contentContainerStyle={styles.chatContainer}
            inverted
          />

          {/* Input Field */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your message..."
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: "#2f9d8a",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  chatContainer: {
    padding: 10,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  messageBubble: {
    maxWidth: "80%",
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#2f9d8a",
  },
  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#ccc",
  },
  messageText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#2f9d8a",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChatBot;
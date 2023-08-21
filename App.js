import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

const App = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const animationValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: isTextVisible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isTextVisible]);

  const animatedStyles = {
    opacity: animationValue,
    transform: [
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-20, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header1}>Jonathan Willumsen</Text>
        <Text style={styles.header2}>Semler IT{"\n"}IT Consultant</Text>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setIsTextVisible(!isTextVisible)}
          activeOpacity={0.9}
        >
          <Text style={styles.buttonText}>
            {isTextVisible
              ? "Hide Contact Information"
              : "Show Contact Information"}
          </Text>
        </TouchableOpacity>

        <View style={styles.contactContainer}>
          <Animated.Text style={[styles.contactInfo, animatedStyles]}>
            Mail: jona95k7@stud.kea.dk{"\n"}Phone: +45 12345678
          </Animated.Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#959695",
  },
  header1: {
    fontSize: 24,
    marginBottom: 10,
  },
  header2: {
    fontSize: 20,
    marginBottom: 10,
  },
  contactContainer: {
    height: 40,
    justifyContent: "center",
  },
  contactInfo: {
    fontSize: 12,
    margin: 5,
  },
  buttonStyle: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#737573",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  box: {
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default App;

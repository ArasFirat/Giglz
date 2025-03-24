import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import { NavigationProp } from '@react-navigation/native';

const SignUpScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Sign Up!</Text>

      {/* Email Field */}
      <Text style={styles.label}>What’s your email?</Text>
      <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#bbb" onChangeText={setEmail} value={email} />
      <Text style={styles.helperText}>You’ll need to confirm this email later.</Text>

      {/* Password Field */}
      <Text style={styles.label}>Create a password</Text>
      <TextInput style={styles.input} placeholder="Enter password" placeholderTextColor="#bbb" secureTextEntry onChangeText={setPassword} value={password} />

      {/* Confirm Password */}
      <Text style={styles.label}>Re-enter your password</Text>
      <TextInput style={styles.input} placeholder="Re-enter password" placeholderTextColor="#bbb" secureTextEntry onChangeText={setConfirmPassword} value={confirmPassword} />
      <Text style={styles.helperText}>Use at least 10 characters.</Text>

      {/* Birthday */}
      <Text style={styles.label}>When is your birthday?</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" placeholderTextColor="#bbb" onChangeText={setBirthday} value={birthday} />

      {/* Gender */}
      <Text style={styles.label}>What is your gender?</Text>
      <TextInput style={styles.input} placeholder="Enter your gender" placeholderTextColor="#bbb" onChangeText={setGender} value={gender} />

      {/* Username */}
      <Text style={styles.label}>What is your username?</Text>
      <TextInput style={styles.input} placeholder="Enter username" placeholderTextColor="#bbb" onChangeText={setUsername} value={username} />
      <Text style={styles.helperText}>Your username will be shown on your profile.</Text>

      {/* Checkbox Agreement */}
      {/* <View style={styles.checkboxContainer}>
        <CheckBox value={agree} onValueChange={setAgree} />
        <Text style={styles.agreementText}>
          By tapping left button, you agree to create an account and to Giglz’s{" "}
          <Text style={styles.linkText}>Terms</Text>, <Text style={styles.linkText}>Privacy Policy</Text>, and{" "}
          <Text style={styles.linkText}>Cookies Policy</Text>.
        </Text>
      </View> */}

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log("Sign Up Pressed")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1E1E1E",
    padding: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  backArrow: {
    fontSize: 24,
    color: "white",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "white",
    marginTop: 15,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },
  helperText: {
    fontSize: 12,
    color: "#bbb",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  agreementText: {
    color: "#bbb",
    marginLeft: 8,
    flex: 1,
  },
  linkText: {
    color: "#FFD700",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUpScreen;

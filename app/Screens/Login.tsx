import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
// import CheckBox from "@react-native-community/checkbox";
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Logging in with:", email, password, rememberMe);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.welcomeText}>Welcome Back,</Text>
      <Text style={styles.loginText}>Log In</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Remember Me & Forgot Password */}
      <View style={styles.optionsRow}>
        {/* <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkboxContainer}>
          <CheckBox value={rememberMe} onValueChange={setRememberMe} />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: "white",
  },
  loginText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    color: "white",
    marginLeft: 5,
  },
  forgotPasswordText: {
    color: "#f5d76e",
  },
  loginButton: {
    backgroundColor: "#f5d76e",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default LoginScreen;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {/*
         * Let's fix typo.
         * We need development build installed on the device.
         * We will use GitHub Actions on the "main" branch to push changes and preview them
         * in a development build.
         */}
        Open up App.js to start working on your device!
      </Text>
      <Text>This is a preview build</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
});

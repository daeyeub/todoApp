import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
const { height: HEIGHT } = Dimensions.get("window");
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.purple}>
        <Text style={styles.hello}>Hello</Text>
      </View>
      <ScrollView style={styles.teal}>
        <Text style={styles.scroll}>So Cool</Text>
        <Text>So sexy!!!</Text>
        <Text style={styles.scroll}>So Cool</Text>
        <Text>So sexy!!!</Text>
        <Text style={styles.scroll}>So Cool</Text>
        <Text>So sexy!!!</Text>
        <Text style={styles.scroll}>So Cool</Text>
        <Text>So sexy!!!</Text>
        <Text style={styles.scroll}>So Cool</Text>
        <Text>So sexy!!!</Text>

        <Text style={styles.scroll}>So Cool</Text>
        <Text>So sexy!!!</Text>
        <Text style={styles.scroll}>So Cool</Text>
        <Text>So sexy!!!</Text>
        <Text style={styles.scroll}>So Cool</Text>
        <Text>So sexy!!!</Text>
        <Text style={styles.scroll}>So Cool</Text>
        <Text>So sexy!!!</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  purple: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  hello: {
    fontSize: 50,
    height: 100,
    color: "white",
    fontWeight: "400",
  },
  teal: {
    backgroundColor: "teal",
    height: "50%",
  },
  scroll: {
    fontSize: 100,
    fontWeight: "600",
  },
});

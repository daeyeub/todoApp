import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
const { height: HEIGHT } = Dimensions.get("window");
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.oneHalf}>
        <View style={styles.purple}>
          <Text style={styles.hello}>Hello</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.foot}>foot</Text>
        </View>
      </View>
      <View style={styles.twoHalf}>
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
      </View>
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
    marginTop: 40,
    fontSize: 50,
    height: 100,
    color: "white",
    fontWeight: "400",
  },
  teal: {
    height: "50%",
    backgroundColor: "teal",
    height: "70%",
  },
  scroll: {
    fontSize: 100,
  },
  footer: {
    backgroundColor: "tomato",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  foot: {
    fontSize: 80,
    color: "white",
  },
  oneHalf: {
    flex: 1,
  },
  twoHalf: {
    flex: 2,
  },
});

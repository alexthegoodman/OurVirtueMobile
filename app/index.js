import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
// import { believeInGod } from '../../content/salvation';
import { SimpleAccordion } from "react-native-simple-accordion";
import { Link } from "expo-router";
import { poemList } from "../content/allPoems";

// TODO: (add language picker. include Gospels later?)

export default function App() {
  return (
    <ScrollView>
      <View>
        <Image
          source={require("../assets/our-virtue.png")}
          style={styles.icon}
        />
        <Text style={styles.headline}>Our Virtue</Text>
        <Text style={styles.subHeadline}>An Introduction to God</Text>
      </View>
      <View style={{ marginTop: 25 }}>
        {poemList.map((chapter) => {
          return (
            <SimpleAccordion
              key={chapter.title}
              title={chapter.title}
              viewInside={
                <View>
                  {chapter.items.map((poem) => {
                    return (
                      <Link
                        key={poem.path}
                        href={poem.path}
                        style={styles.poemLink}
                      >
                        {poem.title}
                      </Link>
                    );
                  })}
                </View>
              }
              bannerStyle={styles.bannerStyle}
              viewContainerStyle={styles.viewContainerStyle}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  headline: {
    fontSize: 48,
    fontWeight: 600,
    marginBottom: 5,
  },
  subHeadline: {
    fontSize: 28,
    fontWeight: 300,
  },
  bannerStyle: { backgroundColor: "#F7F7F7" },
  viewContainerStyle: { shadowColor: "white" },
  poemLink: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

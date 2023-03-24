import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { believeInGod } from '../../content/salvation';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { Link } from 'expo-router';

export default function App() {
  return (
    <ScrollView>
      <View>
        <Image source={require("../assets/our-virtue.png")} style={styles.icon} />
        <Text style={styles.headline}>Our Virtue</Text>
        <Text style={styles.subHeadline}>An Introduction to God</Text>
      </View>
      <View style={{ marginTop: 25 }}>
        <SimpleAccordion 
          title={"Salvation"}
          viewInside={(
            <View>
              <Link href="/salvation/believeInGod">Believe in God</Link>
            </View>
          )}
          bannerStyle={styles.bannerStyle}
          viewContainerStyle={styles.viewContainerStyle}
        />
        <SimpleAccordion 
          title={"Being Together"}
          viewInside={(
            <View>
              <Link href="/salvation/believeInGod">Believe in God</Link>
            </View>
          )}
          bannerStyle={styles.bannerStyle}
          viewContainerStyle={styles.viewContainerStyle}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    marginBottom: 15
  },
  headline: {
    fontSize: 48,
    fontWeight: 600,
    marginBottom: 5
  },
  subHeadline: {
    fontSize: 28,
    fontWeight: 300
  },
  bannerStyle:{ backgroundColor: "#F7F7F7" },
  viewContainerStyle: { shadowColor: "white" }
});

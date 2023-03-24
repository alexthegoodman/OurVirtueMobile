import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { believeInGod } from './content/salvation';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SimpleAccordion } from 'react-native-simple-accordion';

export default function App() {
  return (
    <View style={{...styles.container, paddingTop: getStatusBarHeight() + 25}}>
      <StatusBar style="auto" />
      <ScrollView>
        <View>
          <Image source={require("./assets/our-virtue.png")} style={styles.icon} />
          <Text style={styles.headline}>Our Virtue</Text>
          <Text style={styles.subHeadline}>An Introduction to God</Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <SimpleAccordion 
            title={"Salvation"}
            viewInside={<View><Text>Believe in God</Text></View>}
            bannerStyle={styles.bannerStyle}
            viewContainerStyle={styles.viewContainerStyle}
          />
          <SimpleAccordion 
            title={"Being Together"}
            viewInside={<View><Text>Trust Each Other</Text></View>}
            bannerStyle={styles.bannerStyle}
            viewContainerStyle={styles.viewContainerStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  },
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

import { Link, useSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { believeInGodEn } from "../../content/salvation/believeInGod";
import { followJesus } from "../../content/salvation/followJesus";

const Poem = () => {
  const { chapter, poem } = useSearchParams();

  console.info("info", chapter, poem);

  let content = <></>;

  switch (poem) {
    case "believe-in-god":
      content = (
        <View>
          <Text style={styles.title}>Believe in God</Text>
          <Text style={styles.content}>{believeInGodEn}</Text>
        </View>
      );
      break;
    case "follow-jesus":
      content = (
        <View>
          <Text style={styles.title}>Follow Jesus</Text>
          <Text style={styles.content}>{followJesus}</Text>
        </View>
      );
      break;
  }

  return (
    <ScrollView>
      <Link href="/" style={styles.backLink}>
        Back to Poems
      </Link>
      <View>{content}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backLink: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
  },
  content: {
    fontSize: 18,
    lineHeight: 28,
  },
});

export default Poem;

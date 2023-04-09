import { Link, useSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { englishPoemIndex, poemList } from "../../content/allPoems";

const Poem = () => {
  const { chapter, poem } = useSearchParams();

  console.info("info", chapter, poem);

  let poemIndex = [];
  if (true) {
    poemIndex = englishPoemIndex;
  }

  const poemContent = poemIndex.filter((po) => po.slug === poem)[0];

  let poemData = null;
  poemList.forEach((chap) => {
    chap.items.forEach((item) => {
      if (item.path === `/${chapter}/${poem}`) {
        poemData = item;
      }
    });
  });

  console.info("poemData", poemData);

  return (
    <ScrollView>
      <Link href="/" style={styles.backLink}>
        Back to Poems
      </Link>
      <View>
        <Text style={styles.title}>{poemData?.title}</Text>
        <Text style={styles.content}>{poemContent?.content}</Text>
      </View>
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

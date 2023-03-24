import { Link, useSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { believeInGod } from "../../content/salvation";

const Poem = () => {
    const { chapter, poem } = useSearchParams();

    console.info("info", chapter, poem)

    let content = <></>

    switch (poem) {
        case "believeInGod":
            content = <View><Text style={styles.title}>Believe in God</Text><Text>{believeInGod}</Text></View>;
            break;
    }

    return <View><Link href="/">Back to Poems</Link><View>{content}</View></View>
}

const styles = StyleSheet.create({
    title: {
      fontSize: 32
    },
});

export default Poem;

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function MainLayout() {
  return (
    <View style={{...styles.container, paddingTop: getStatusBarHeight() + 25}}>
        <StatusBar style="auto" />
        <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25
    },
});
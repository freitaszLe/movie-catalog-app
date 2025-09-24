import React from "react";
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { SafeAreaFrameContext } from "react-native-safe-area-context";

export default function HomeScreen() {
    function handlePress() {
        console.log("Botão clicado");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}> HomeScreen</Text>
                <Text style={styles.subtitle}> View inicial</Text>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Pressione aqui</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000", },
    content: {flex: 1,alignItems: "center",justifyContent: "center",padding : 20,},
    title: {color: "#FFF",fontSize: 24,fontWeight: "bold",marginbottom: 8,},
    subtitle: {color: "#bbb",fontSize: 14,marginBottom: 20,textAlign: "center",},
    button: {backgroundColor: "#ff8800ff",paddingVertical : 12,paddingHorizontal: 18,borderRadius: 8,},
    buttonText: {color: "#fff",fontSize: 16,fontWeight: "600",},
});

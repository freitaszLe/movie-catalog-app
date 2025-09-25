import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Header({title}) {
    return( 
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header:{
        paddinsTop: 40,
        paddingBottom: 15,
        backgroundColor: "#ff8800ff",
        alignItems: "center",
    },
    title:{
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    }
});
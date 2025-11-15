import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Excellence</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },

    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: "green",
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
    },

    boxText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },

});


import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Exercise4() {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: "#77d1c4" }]}>
                <Text style={styles.childText}>Square 1</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "#66c1cc" }]}>
                <Text style={styles.childText}>Square 2</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "#e64b4b" }]}>
                <Text style={styles.childText}>Square 3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "whitesmoke",


        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    child: {
        width: 80,
        height: 80,
        marginHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
    },

    childText: {
        fontSize: 16,
        color: "black",
    },
});

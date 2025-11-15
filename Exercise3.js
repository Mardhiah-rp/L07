import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
    return (
        <ScrollView style={styles.mainContainer}>
            <Text style={styles.title}>Exercise 3A</Text>
            <View style={styles.parentRow}>
                <View style={[styles.childRow, { backgroundColor: "powderblue" }]}>
                    <Text style={styles.childText}>Child One</Text>
                </View>

                <View style={[styles.childRow, { backgroundColor: "skyblue" }]}>
                    <Text style={styles.childText}>Child Two</Text>
                </View>

                <View style={[styles.childRow, { backgroundColor: "steelblue" }]}>
                    <Text style={styles.childText}>Child Three</Text>
                </View>
            </View>


            <Text style={styles.title}>Exercise 3B</Text>
            <View style={styles.parentColumn}>
                <View style={[styles.childColumn, { backgroundColor: "powderblue" }]}>
                    <Text style={styles.childText}>Child One</Text>
                </View>

                <View style={[styles.childColumn, { backgroundColor: "skyblue" }]}>
                    <Text style={styles.childText}>Child Two</Text>
                </View>

                <View style={[styles.childColumn, { backgroundColor: "steelblue" }]}>
                    <Text style={styles.childText}>Child Three</Text>
                </View>
            </View>


            <Text style={styles.title}>Exercise 3C</Text>
            <View style={styles.parentColumn}>
                <View
                    style={[
                        styles.childColumn,
                        {
                            backgroundColor: "powderblue",
                            maxWidth: 90,
                            alignSelf: "flex-start"
                        },
                    ]}
                >
                    <Text style={styles.childText}>Child One</Text>
                </View>

                <View
                    style={[
                        styles.childColumn,
                        { backgroundColor: "skyblue" },
                    ]}
                >
                    <Text style={styles.childText}>Child Two</Text>
                </View>

                <View
                    style={[
                        styles.childColumn,
                        {
                            backgroundColor: "steelblue",
                            maxHeight: 120,
                        },
                    ]}
                >
                    <Text style={styles.childText}>Child Three</Text>
                </View>
            </View>


            <Text style={styles.title}>Exercise 3D</Text>
            <View style={styles.parentRow}>
                <Text
                    style={[
                        styles.flexText,
                        { flex: 1, backgroundColor: "powderblue" },
                    ]}
                >
                    Child One
                </Text>

                <Text
                    style={[
                        styles.flexText,
                        { flex: 2, backgroundColor: "skyblue" },
                    ]}
                >
                    Child Two
                </Text>

                <Text
                    style={[
                        styles.flexText,
                        { flex: 3, backgroundColor: "steelblue" },
                    ]}
                >
                    Child Three
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },

    parentRow: {
        flexDirection: "row",
        backgroundColor: "#F5fcff",
        borderColor: "#0099AA",
        borderWidth: 5,
        marginBottom: 20,
    },

    childRow: {
        borderWidth: 2,
        borderColor: "black",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    parentColumn: {
        height: 400,
        flexDirection: "column",
        backgroundColor: "#F5fcff",
        borderColor: "#0099AA",
        borderWidth: 5,
        marginBottom: 20,
    },

    childColumn: {
        flex: 1,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: "center",
    },

 
    childText: {
        fontSize: 24,
        textAlign: "center",
    },


    flexText: {
        borderWidth: 2,
        borderColor: "black",
        fontSize: 24,
        textAlign: "center",
        paddingVertical: 10,
    },
});

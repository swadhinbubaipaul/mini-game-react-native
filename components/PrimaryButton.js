import { StyleSheet, Text, View, Pressable } from "react-native";

const PrimaryButton = ({ children, handleOnPress }) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={styles.buttonInnerContainer}
				onPress={handleOnPress}
				android_ripple={{ color: "#4B0528" }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: "#72063c",
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});

export default PrimaryButton;

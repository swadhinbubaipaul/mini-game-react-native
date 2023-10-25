import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
	const [enteredNumber, setEnteredNumber] = useState("");

	const handleInputChange = (enteredText) => {
		setEnteredNumber(enteredText);
	};

	const handleResetInput = () => {
		setEnteredNumber("");
	};

	const handleConfirmInput = () => {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			// Show alert
			Alert.alert(
				"Invalid Number",
				"Number has to be a number between 1 and 99.",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: handleResetInput,
					},
				]
			);
			return;
		}
		console.log(chosenNumber);
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCorrect={false}
				value={enteredNumber}
				onChangeText={handleInputChange}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton handleOnPress={handleResetInput}>
						Reset
					</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton handleOnPress={handleConfirmInput}>
						Confirm
					</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 100,
		marginHorizontal: 24,
		alignItems: "center",
		borderRadius: 8,
		padding: 16,
		backgroundColor: "#4e0329",
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 30,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});

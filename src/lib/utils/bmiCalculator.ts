
interface ICalcProps {
	weight: number;
	height: number;
	weightUnit: string;
	heightUnit: string;
}
export const bmiCalculator = ({ weight, height, weightUnit, heightUnit }: ICalcProps): string => {
	const weightInKg = weightUnit === 'kg' ? weight : weight / 2.205;
	const heightInM = heightUnit === 'cm' ? height : height / 39.37;
	console.log('weightInKg:', weightInKg, heightInM);
	const result = weightInKg / ((heightInM / 100) * (heightInM / 100));
	if (isNaN(result)) {
		return `Error`;
	} else if (result < 18.5) {
		return `Underweight (${result.toFixed(2)})`;
	} else if (result < 25) {
		return `Normal (${result.toFixed(2)})`;
	} else if (result < 30) {
		return `Overweight (${result.toFixed(2)})`;
	} else if (result < 35) {
		return `Obese (${result.toFixed(2)})`;
	}
	return `Extremely Obese (${result.toFixed(2)})`;
};

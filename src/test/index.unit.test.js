const {
	getHealthData1,
	handleNutrients,
	handleRecipe,
} = require('../controlles/handlers');

describe('Test Pure Functions', () => {
	test('handleRecipe function should return object have these keys [strYoutube,strInstructions] only and their data', () => {
		const obj = {
			idMeal: '53014',
			strMeal: 'Pizza Express Margherita',
			strDrinkAlternate: null,
			strCategory: 'Miscellaneous',
			strArea: 'Italian',
			strInstructions:
				'1 Preheat the oven to 230°C.\r\n' +
				'\r\n' +
				'2 Add the sugar and crumble the fresh yeast into warm water.\r\n' +
				'\r\n' +
				'3 Allow the mixture to stand for 10 – 15 minutes in a warm place (we find a windowsill on a sunny day works best) until froth develops on the surface.\r\n' +
				'\r\n' +
				'4 Sift the flour and salt into a large mixing bowl, make a well in the middle and pour in the yeast mixture and olive oil.\r\n' +
				'\r\n' +
				'5 Lightly flour your hands, and slowly mix the ingredients together until they bind.\r\n' +
				'\r\n' +
				'6 Generously dust your surface with flour.\r\n' +
				'\r\n' +
				'7 Throw down the dough and begin kneading for 10 minutes until smooth, silky and soft.\r\n' +
				'\r\n' +
				'8 Place in a lightly oiled, non-stick baking tray (we use a round one, but any shape will do!)\r\n' +
				'\r\n' +
				'9 Spread the passata on top making sure you go to the edge.\r\n' +
				'\r\n' +
				'10 Evenly place the mozzarella (or other cheese) on top, season with the oregano and black pepper, then drizzle with a little olive oil.\r\n' +
				'\r\n' +
				'11 Cook in the oven for 10 – 12 minutes until the cheese slightly colours.\r\n' +
				'\r\n' +
				'12 When ready, place the basil leaf on top and tuck in!',
			strMealThumb:
				'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg',
			strTags: null,
			strYoutube: 'https://www.youtube.com/watch?v=Mt5lgUZRoUg',
			strIngredient1: 'Water',
			strIngredient2: 'Sugar',
			strIngredient3: 'Yeast',
			strIngredient4: 'Plain Flour',
			strIngredient5: 'Salt',
			strIngredient6: 'Olive Oil',
			strIngredient7: 'Passata',
			strIngredient8: 'Mozzarella',
			strIngredient9: 'Oregano',
			strIngredient10: 'Basil',
			strIngredient11: 'Black Pepper',
			strIngredient12: '',
			strIngredient13: '',
			strIngredient14: '',
			strIngredient15: '',
			strIngredient16: '',
			strIngredient17: '',
			strIngredient18: '',
			strIngredient19: '',
			strIngredient20: '',
			strMeasure1: '150ml',
			strMeasure2: '1 tsp ',
			strMeasure3: '15g',
			strMeasure4: '225g',
			strMeasure5: '1 1/2 tsp ',
			strMeasure6: 'Drizzle',
			strMeasure7: '80g',
			strMeasure8: '70g',
			strMeasure9: 'Peeled and Sliced',
			strMeasure10: 'Leaves',
			strMeasure11: 'Pinch',
			strMeasure12: ' ',
			strMeasure13: ' ',
			strMeasure14: ' ',
			strMeasure15: ' ',
			strMeasure16: ' ',
			strMeasure17: ' ',
			strMeasure18: ' ',
			strMeasure19: ' ',
			strMeasure20: ' ',
			strSource:
				'https://www.dailymail.co.uk/femail/food/article-8240361/Pizza-Express-release-secret-recipe-Margherita-Pizza-make-home.html',
			dateModified: null,
		};
		const actual = handleRecipe(obj);
		const expected = {
			strYoutube: 'https://www.youtube.com/watch?v=Mt5lgUZRoUg',
			strInstructions:
				'1 Preheat the oven to 230°C.\r\n' +
				'\r\n' +
				'2 Add the sugar and crumble the fresh yeast into warm water.\r\n' +
				'\r\n' +
				'3 Allow the mixture to stand for 10 – 15 minutes in a warm place (we find a windowsill on a sunny day works best) until froth develops on the surface.\r\n' +
				'\r\n' +
				'4 Sift the flour and salt into a large mixing bowl, make a well in the middle and pour in the yeast mixture and olive oil.\r\n' +
				'\r\n' +
				'5 Lightly flour your hands, and slowly mix the ingredients together until they bind.\r\n' +
				'\r\n' +
				'6 Generously dust your surface with flour.\r\n' +
				'\r\n' +
				'7 Throw down the dough and begin kneading for 10 minutes until smooth, silky and soft.\r\n' +
				'\r\n' +
				'8 Place in a lightly oiled, non-stick baking tray (we use a round one, but any shape will do!)\r\n' +
				'\r\n' +
				'9 Spread the passata on top making sure you go to the edge.\r\n' +
				'\r\n' +
				'10 Evenly place the mozzarella (or other cheese) on top, season with the oregano and black pepper, then drizzle with a little olive oil.\r\n' +
				'\r\n' +
				'11 Cook in the oven for 10 – 12 minutes until the cheese slightly colours.\r\n' +
				'\r\n' +
				'12 When ready, place the basil leaf on top and tuck in!',
		};
		expect(actual).toEqual(expected);
	});
	test('handleNutrients function should return object have these keys [ENERC_KCAL, PROCNT, FAT, SUGAR, CHOCDF, CHOLE ] only and their data', () => {
		const obj = {
			ENERC_KCAL: {
				label: 'Energy',
				quantity: 2620.983838835843,
				unit: 'kcal',
			},

			FAT: { label: 'Fat', quantity: 70.85852721973856, unit: 'g' },
			FASAT: { label: 'Saturated', quantity: 24.146169048868092, unit: 'g' },
			FAMS: {
				label: 'Monounsaturated',
				quantity: 32.422316318640384,
				unit: 'g',
			},
			FAPU: { label: 'Polyunsaturated', quantity: 8.52380890119751, unit: 'g' },
			CHOCDF: { label: 'Carbs', quantity: 422.0246006775219, unit: 'g' },
			FIBTG: { label: 'Fiber', quantity: 26.7047133985592, unit: 'g' },
			SUGAR: { label: 'Sugars', quantity: 30.215096388254253, unit: 'g' },
			'SUGAR.added': {
				label: 'Sugars, added',
				quantity: 6.137700000000001,
				unit: 'g',
			},
			PROCNT: { label: 'Protein', quantity: 73.06396909756897, unit: 'g' },
			CHOLE: { label: 'Cholesterol', quantity: 108.68666666666667, unit: 'mg' },
			NA: { label: 'Sodium', quantity: 3782.255459576151, unit: 'mg' },
			CA: { label: 'Calcium', quantity: 334.29146530405507, unit: 'mg' },
			MG: { label: 'Magnesium', quantity: 208.73343054795708, unit: 'mg' },
			K: { label: 'Potassium', quantity: 1769.5171930720503, unit: 'mg' },
			FE: { label: 'Iron', quantity: 26.07861297605938, unit: 'mg' },
			ZN: { label: 'Zinc', quantity: 6.299787586540953, unit: 'mg' },
			P: { label: 'Phosphorus', quantity: 750.0567007480139, unit: 'mg' },
			VITA_RAE: {
				label: 'Vitamin A',
				quantity: 407.25119695914213,
				unit: 'µg',
			},
			VITC: { label: 'Vitamin C', quantity: 69.33900700043584, unit: 'mg' },
			THIA: { label: 'Thiamin (B1)', quantity: 7.580114662552134, unit: 'mg' },
			RIBF: {
				label: 'Riboflavin (B2)',
				quantity: 3.40290136455282,
				unit: 'mg',
			},
			NIA: { label: 'Niacin (B3)', quantity: 45.881123703909466, unit: 'mg' },
			VITB6A: { label: 'Vitamin B6', quantity: 1.0873681957234116, unit: 'mg' },
			FOLDFE: {
				label: 'Folate equivalent (total)',
				quantity: 1795.5656365958646,
				unit: 'µg',
			},
			FOLFD: {
				label: 'Folate (food)',
				quantity: 485.50313659586453,
				unit: 'µg',
			},
			FOLAC: { label: 'Folic acid', quantity: 770.625, unit: 'µg' },
			VITB12: { label: 'Vitamin B12', quantity: 0.1498, unit: 'µg' },
			VITD: { label: 'Vitamin D', quantity: 0.5553333333333333, unit: 'µg' },
			TOCPHA: { label: 'Vitamin E', quantity: 9.630200297359673, unit: 'mg' },
			VITK1: { label: 'Vitamin K', quantity: 35.32538554183929, unit: 'µg' },
			WATER: { label: 'Water', quantity: 1052.8575604934392, unit: 'g' },
		};
		const weight = 100;
		const actual = handleNutrients(obj, weight);
		const expected = {
			ENERC_KCAL: {
				label: 'Energy',
				quantity: 2620.983838835843,
				unit: 'kcal',
			},
			PROCNT: { label: 'Protein', quantity: 73.06396909756897, unit: 'g' },
			FAT: { label: 'Fat', quantity: 70.85852721973856, unit: 'g' },
			SUGAR: { label: 'Sugars', quantity: 30.215096388254253, unit: 'g' },
			CHOCDF: { label: 'Carbs', quantity: 422.0246006775219, unit: 'g' },
			CHOLE: { label: 'Cholesterol', quantity: 108.68666666666667, unit: 'mg' },
			weight: 100,
		};
		expect(actual).toEqual(expected);
	});
});

test('test jest', () => {
	// eslint-disable-next-line no-undef
	expect(getHealthData1()).toBe(5);
});

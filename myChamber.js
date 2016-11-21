define(function (require) {
	'use strict';

	const 
		TabbedListChamber = require('common/platform/chamber/TabbedListChamber'),
		data = [
			{
				text: 'Tab 1',
				enabled: true,
				selected: true,
				fetchInfo: {
					fetchFunction: 'firstFetchFunction'
				}
			},
			{
				text: 'Tab 2',
				enabled: true,
				selected: false,
				fetchInfo: {
					fetchFunction: 'secondFetchFunction'
				}
			},
			{
				text: 'Tab 3',
				enabled: true,
				selected: false,
				fetchInfo: {
					fetchFunction: 'thirdFetchFunction'
				}
			}
		],
		firstListData = [
			{ text: 'Maryland' },
			{ text: 'Virginia' },
			{ text: 'New York' },
			{ text: 'Pennsylvania' },
			{ text: 'Massachusetts' },
			{ text: 'Florida' },
			{ text: 'Washington' },
			{ text: 'Oregon' },
			{ text: 'California' },
		],
		secondListData = [
			{ text: 'Seattle' },
			{ text: 'Washington' },
			{ text: 'New York' },
			{ text: 'Philadelphia' },
			{ text: 'Boston' },
			{ text: 'Miami' },
			{ text: 'San Francisco' },
			{ text: 'Los Angeles' },
			{ text: 'San Diego' },
		],
		thirdListData = [
			{ text: 'United States' },
			{ text: 'Canada' },
			{ text: 'Japan' },
			{ text: 'England' },
			{ text: 'France' },
			{ text: 'Italy' },
			{ text: 'Spain' },
			{ text: 'Mexico' },
			{ text: 'Brazil' },
		];

	return class extends TabbedListChamber {
		data () {
			return data;
		}

		filterListData (originalData) {
			const searchTerm = this.getSearchTerm();
			let filteredData;

			if (searchTerm) {
				filteredData = originalData.filter(d => d.text.toLowerCase().includes(searchTerm.toLowerCase()));
			}

			return Promise.resolve(filteredData ? filteredData : originalData);
		}

		firstFetchFunction () {
			return this.filterListData(firstListData);
		}

		secondFetchFunction () {
			return this.filterListData(secondListData);
		}

		thirdFetchFunction () {
			return this.filterListData(thirdListData);
		}

		getFetchFunctions () {
			return {
				'firstFetchFunction': this.firstFetchFunction,
				'secondFetchFunction': this.secondFetchFunction,
				'thirdFetchFunction': this.thirdFetchFunction,
			}
		}
	}
});

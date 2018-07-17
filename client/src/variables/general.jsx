import React from 'react';

// @material-ui/icons
import CardTravel from '@material-ui/icons/CardTravel';
import Extension from '@material-ui/icons/Extension';
import Fingerprint from '@material-ui/icons/Fingerprint';
import FlightLand from '@material-ui/icons/FlightLand';
import Build from '@material-ui/icons/Build';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';

// ##############################
// // // stories for Widgets view
// #############################

const widgetStories = [
	{
		// First story
		inverted: true,
		badgeColor: 'danger',
		badgeIcon: CardTravel,
		title: 'Some Title',
		titleColor: 'danger',
		body: (
			<p>
				Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my
				family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude
				Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.
			</p>
		),
		footerTitle: '11 hours ago via Twitter',
	},
	{
		// Second story
		inverted: true,
		badgeColor: 'success',
		badgeIcon: Extension,
		title: 'Another One',
		titleColor: 'success',
		body: (
			<p>
				Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first
				album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything
				I do from shoes to music to homes is that Kim has to like it....
			</p>
		),
	},
	{
		// Third story
		inverted: true,
		badgeColor: 'info',
		badgeIcon: Fingerprint,
		title: 'Another Title',
		titleColor: 'info',
		body: (
			<div>
				<p>
					Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous
					viewing @ Figueroa and 12th in downtown LA 11:10PM
				</p>
				<p>
					What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch
					is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye
				</p>
			</div>
		),
		footer: (
			<CustomDropdown
				buttonIcon={Build}
				buttonProps={{
					round: true,
					style: { marginBottom: '0' },
					color: 'info',
				}}
				dropdownList={['Action', 'Another action', 'Something else here', { divider: true }, 'Separated link']}
			/>
		),
	},
];

// ##############################
// // // stories for Timeline view
// #############################

const stories = [
	{
		// First story
		inverted: true,
		badgeColor: 'danger',
		badgeIcon: CardTravel,
		title: 'Some Title',
		titleColor: 'danger',
		body: (
			<p>
				Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my
				family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude
				Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.
			</p>
		),
		footerTitle: '11 hours ago via Twitter',
	},
	{
		// Second story
		badgeColor: 'success',
		badgeIcon: Extension,
		title: 'Another One',
		titleColor: 'success',
		body: (
			<p>
				Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first
				album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything
				I do from shoes to music to homes is that Kim has to like it....
			</p>
		),
	},
	{
		// Third story
		inverted: true,
		badgeColor: 'info',
		badgeIcon: Fingerprint,
		title: 'Another Title',
		titleColor: 'info',
		body: (
			<div>
				<p>
					Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous
					viewing @ Figueroa and 12th in downtown LA 11:10PM
				</p>
				<p>
					What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch
					is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye
				</p>
			</div>
		),
		footer: (
			<CustomDropdown
				buttonIcon={Build}
				buttonProps={{
					round: true,
					style: { marginBottom: '0' },
					color: 'info',
				}}
				dropdownList={['Action', 'Another action', 'Something else here', { divider: true }, 'Separated link']}
			/>
		),
	},
	{
		// Fourth story
		badgeColor: 'warning',
		badgeIcon: FlightLand,
		title: 'Another One',
		titleColor: 'warning',
		body: (
			<p>
				Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and
				makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the
				invite thank you to the whole Vogue team
			</p>
		),
	},
];

// ##############################
// // // Tasks for TasksCard - see Widget view
// #############################

var bugs = [
	'Sign contract for "What are conference organizers afraid of?"',
	'Lines From Great Russian Literature? Or E-mails From My Boss?',
	'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
	'Create 4 Invisible User Experiences you Never Knew About',
];
var website = [
	'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
	'Sign contract for "What are conference organizers afraid of?"',
];
var server = [
	'Lines From Great Russian Literature? Or E-mails From My Boss?',
	'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
	'Sign contract for "What are conference organizers afraid of?"',
];

// ##############################
// // // Tasks for TasksCard - see RTLSupport view
// #############################

var rtlBugs = [
	'فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.',
	'بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.',
	'تسبب أفريقيا ضرب عن, عن إنطلاق جعل السبب وفرنسا الصينية أي.',
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
];
var rtlWebsite = [
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
];
var rtlServer = [
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
];

// ##############################
// // // data for datatables.net in DataTables view
// #############################

const dataTable = {
	headerRow: ['Order', 'Customer', 'Date', 'Deliver by', 'Status'],
	footerRow: ['Order', 'Customer', 'Date', 'Deliver by', 'Status'],
	dataRows: [
		['180621', 'MATRIX', '2018-06-01', '2018-06-07', 'Reconciled'],
		['180634', 'All Star', '2018-06-01', '2018-06-02', 'Reconciled'],
		['180706', 'Moffit', '2018-06-02', '2018-06-10', 'Reconciled'],
		['180711', 'ERA Industries', '2018-06-01', '2018-06-02', 'Reconciled'],
		['180684', 'ICP ', '2018-07-01', '2018-07-03', 'Pending'],
		['180671', 'BW Industrial', '2018-07-11', '2018-07-12', 'Reconciled'],
		['180693', 'TULSTAR', '2018-07-13', '2018-07-20', 'Pending'],
		['180623', 'J&J', '2018-06-01', '2018-06-11', 'Ready to Shipped'],
		['180622', 'Mexcor', '2018-06-03', '2018-06-12', 'Pending'],
		['180591', 'VEXAPAK', '2018-06-05', '2018-06-12', 'Pending'],
		['180899', 'OWE Group', '2018-06-05', '2018-06-12', 'Reconciled'],
		['180719', 'WS International', '2018-06-12', '2018-06-19', 'Pending'],
		['180733', 'ERA Industries', '2018-06-14', '2018-06-22', 'Reconciled'],
		['180644', 'ICP ', '2018-07-01', '2018-07-06', 'Pending'],
		['180614', 'BW Industrial', '2018-06-13', '2018-06-17', 'Reconciled'],
		['180690', 'Tulstar', '2018-06-11', '2018-06-12', 'Pending'],
		['180702', 'J&J', '2018-06-21', '2018-06-28', 'Ready to Shipped'],
	],
};

const custData = {
	headerRow: ['Customer', 'Phone', 'Balance'],
	footerRow: ['Customer', 'Phone', 'Balance'],
	dataRows: [
		['MATRIX', '(281) 231-9823', '$56,567'],
		['All Star', '(713) 342-8623', '$356,235'],
		['J&J', '(888) 231-7766', '$256,353'],
		['MEXCOR', '(213) 873-2212', '$14,552'],
		['BW Industrial', '(315) 914-0920', '$16,152'],
		['MOFFIT', '(832) 543-3352', '$36,552'],
		['Lone Star', 'n/a', '$77,555'],
		['Vexapak', '(888) 324-3212', '$46,553'],
		['ICP International', 'n/a', '$56,452'],
		['AutoMobile', 'n/a', '$88,555'],
	],
};

const productTable = {
	headerRow: ['Product', 'Description'],
	footerRow: ['Product', 'Description'],
	dataRows: [
		['88-0W-20', 'SAE 0W-20 Full Synthetic, API SN, ILSAC GF-5'],
		['88-5W-20', 'SAE 5W-20 Full Synthetic, API SN, ILSAC GF-5'],
		['88-5W-30', 'SAE 5W-30 Full Synthetic, API SN, ILSAC GF-5'],
		['88-10W-30', 'SAE 10W-30 Full Synthetic, API SN, ILSAC GF-5'],
		['88-5W-40', 'SAE 5W-40 Full Synthetic, ACEA C3-10, API SN'],
		['88-5W-40-ACEA', 'SAE 5W-40 Full Synthetic, ACEA A3/B4-10'],
		['88-5W-50', 'SAE 5W-50 Full Synthetic, API SN'],
		['88-15W-50', 'SAE 15W-50 Full Synthetic, API SN'],
		['99-5W-20', 'SAE 5W-20 Synthetic Blend API SN, ILSAC GF-5'],
		['99-5W-30', 'SAE 5W-30 Synthetic Blend API SN, ILSAC GF-5'],
		['99-10W-30', 'SAE 10W-30 Synthetic Blend API SN, ILSAC GF-5'],
		['99-10W-40', 'SAE 10W-40 Synthetic Blend API SN'],
		['99-20W-50', 'SAE 20W-50 Synthetic Blend API SN'],
		['77-5W-20', 'SAE 5W-20 Economy Motor Oil Blend API SL'],
		['77-5W-30', 'SAE 5W-30 Economy Motor Oil Blend API SL'],
		['77-10W-30', 'SAE 10W-30 Economy Motor Oil API SL'],
		['77-10W-40', 'SAE 10W-40 Economy Motor Oil API SL/CF'],
		['77-15W-40', 'SAE 15W-40 Economy Motor Oil API CC/SC'],
		['77-20W-50', 'SAE 20W-50 Economy Motor Oil API CC/SC'],
		['77-SAE50', 'SAE 50 Economy Motor Oil API CC/SC'],
		['87-10W-30', 'SAE 10W-30 Synthetic Blend HDMO API CK-4/SN'],
		['87-10W-30FA', 'SAE 10W-30 Synthetic Blend HDMO API FA-4'],
		['87-15W-40', 'SAE 15W-40 Synthetic Blend HDMO API CK-4/SN'],
		['87-10W-30CJ', 'SAE 10W-30 Synthetic Blend HDMO API CJ-4/SN'],
		['87-15W-40CJ', 'SAE 15W-40 Synthetic Blend HDMO API CJ-4/SN'],
		['87-20W-50CJ', 'SAE 20W-50 Synthetic Blend HDMO API CJ-4/SN'],
		['82-15W-40', 'SAE 15W-40 HDMO API CI-4/SL, CI-4 PLUS'],
		['82-20W-50', 'SAE 20W-50 HDMO API CI-4/SL, CI-4 PLUS'],
		['82-25W-60', 'SAE 25W-60 HDMO API CH-4'],
		['82-40', 'SAE 40 HDMO API CF'],
		['82-50', 'SAE 50 HDMO API CF'],
	],
};

export {
	// stories for Widgets view
	widgetStories,
	// stories for Timeline view
	stories,
	// these 3 are used to create the tasks lists in TasksCard - Widget view
	bugs,
	website,
	server,
	// these 3 are used to create the tasks lists in TasksCard - RTLSupport view
	rtlBugs,
	rtlWebsite,
	rtlServer,
	// data for datatables.net in DataTables view
	dataTable,
	custData,
	productTable,
};

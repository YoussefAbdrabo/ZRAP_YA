sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"raptravelapp/test/integration/pages/TravelList",
	"raptravelapp/test/integration/pages/TravelObjectPage",
	"raptravelapp/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('raptravelapp') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});


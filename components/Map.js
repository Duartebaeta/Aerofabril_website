import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Loader } from "@googlemaps/js-api-loader";
import {useEffect, useRef} from 'react';

function Map() {
	const googlemap = useRef(null);
	useEffect(() => {
	const loader = new Loader({
		apiKey: process.env.NEXT_PUBLIC_API_KEY,
		version: 'weekly',
	});
	let map;
	const uluru = { lat: 38.780694, lng: -9.196626 };
	loader.load().then(() => {
		const google = window.google;
		map = new google.maps.Map(googlemap.current, {
			center: uluru,
			zoom: 13,
			tilt: 0,
			mapTypeId: 'hybrid',
			fullscreenControl: false, // remove the top-right button
			mapTypeControl: false, // remove the top-left buttons
			zoomControl: false, // remove the bottom-right buttons
		});
		const marker = new google.maps.Marker({
			position: uluru,
			map: map,
		  });

		marker.addListener("click", () => {
			window.open("http://maps.google.co.uk/maps?q=38.780694,-9.196626", '_blank').focus();
		});
	});
	});
	return (
	<div id="map" ref={googlemap} />
	);
}

export default Map
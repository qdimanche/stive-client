import React from 'react';
import Navbar from "../components /Navbar";
import Footer from "../components /Footer";

const Format = ({children}) => {
	return (
		<div className={'container mx-auto lg:px-0 px-4 '}>
			<Navbar/>
			<main className={''}>{children}</main>
			<Footer/>
		</div>
	);
};

export default Format;
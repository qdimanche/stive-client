import React from 'react';
import Format from "../layout/Format";
import Swiper from "../components /UI/Swiper";
import ProductRecommandation from "../components /ProductRecommandation";

const Home = () => {
	return (
		<Format>
			<Swiper/>
			<ProductRecommandation/>
		</Format>
	);
};

export default Home;
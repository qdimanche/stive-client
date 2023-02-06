import React, {useState} from 'react';
import FilterBar from "./UI/FilterBar";
import {BsStar, BsStarFill, BsHeart, BsHeartFill} from "react-icons/bs";
import Button from "./UI/Button";


const ProductRecommandation = () => {
	return (
		<div className={'lg:mb-40 mb-28'}>
			<FilterBar/>
			<h2 className={'lg:mt-20 mt-14 mb-12'}>Des produits rien que pour vous !</h2>
			
			<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-12 ">
				<Product/>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
			</div>
		
		</div>
	);
};

export default ProductRecommandation


const Product = () => {
	
	const [isHover, setIsHover] = useState(false);
	
	return (
		<div className={"flex flex-col space-y-4"}>
			<div className={'rounded-[10px] overflow-hidden relative'}>
				<img
					src={"https://images.unsplash.com/photo-1545608508-78f351665a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
					className={'object-cover aspect-square'} alt={""}/>
				<div className={'absolute top-3 right-3 bg-white rounded-full p-2 cursor-pointer'}  onMouseEnter={() => setIsHover(true)}  onMouseLeave={() => setIsHover(false)}>
					{
						isHover? <BsHeartFill color={"black"} size={20}/>
							: <BsHeart color={"black"} size={20}/>
					}
				</div>
				
			</div>
			<div className={'grid grid-cols-[2fr_1fr]'}>
				<p className={'font-semibold'}>Château Bellegrave (Pomerol)</p>
				<p className={'font-bold justify-self-end'}>100,50 €</p>
			</div>
			<p className={'text-sm'}>Vin rouge</p>
			<div className={'flex space-x-1'}>
				<BsStarFill/>
				<BsStarFill/>
				<BsStarFill/>
				<BsStarFill/>
				<BsStar/>
			</div>
			<Button variant={"black"} text={"Commander"}/>
		</div>
	)
}

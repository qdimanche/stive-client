import React from 'react';
import DropdownButton from "./DropdownButton";

const FilterBar = () => {
	return (
		<div className={"flex lg:flex-row flex-col space-y-6 justify-between lg:mt-20 mt-14"}>
			<div className={'flex space-x-6'}>
				<DropdownButton>Couleur</DropdownButton>
				<DropdownButton>Prix</DropdownButton>
				<DropdownButton>Provenance</DropdownButton>
			</div>
			<div>
				<DropdownButton>Trier par</DropdownButton>
			</div>
		</div>
	);
};

export default FilterBar;
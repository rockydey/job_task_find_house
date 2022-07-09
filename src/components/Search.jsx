import React, { useContext } from 'react';
import CountrySearch from './CountrySearch';
import MoveDateSearch from './MoveDateSearch';
import PriceSearch from './PriceSearch';
import PropertySearch from './PropertySearch';

//import content
import { HouseContent } from './HouseContent';

const Search = () => {

    const { handleClick } = useContext(HouseContent);

    return (
        <div className='px-[30px] py-6 flex flex-col lg:flex-row justify-between gap-4 shadow-lg bg-white rounded-lg items-center'>
            <CountrySearch />
            <MoveDateSearch />
            <PropertySearch />
            <PriceSearch />
            <button onClick={() => handleClick()} className='bg-violet-700 hover:bg-violet-800 text-white px-5 py-2 rounded-lg'>
                Search
            </button>
        </div>
    );
};

export default Search;
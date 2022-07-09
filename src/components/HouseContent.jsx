import React, { createContext, useState } from 'react';

// import data
import { housesData } from '../data';

//create context
export const HouseContent = createContext();

//Provider
const HouseContentProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('Location (any)');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Price range (any)');
    const [move, setMove] = useState('Moving Time (any)');

    return (
        <HouseContent.Provider value={
            {
                country,
                setCountry,
                countries,
                property,
                setProperty,
                properties,
                price,
                setPrice,
                houses,
            }
        }>
            {children}
        </HouseContent.Provider>
    );
};

export default HouseContentProvider;
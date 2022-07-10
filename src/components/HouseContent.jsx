import React, { createContext, useEffect, useState } from 'react';

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
    const [moves, setMoves] = useState([]);
    const [loading, setLoading] = useState(false);

    //return all countries
    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country;
        })

        //remove duplicates
        const uniqueCountries = ['Location (any)', ...new Set(allCountries)]

        //set countries
        setCountries(uniqueCountries);
    }, [houses])

    //return all properties
    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        })

        //remove duplicates
        const uniqueProperties = ['Property type (any)', ...new Set(allProperties)]

        //set properties
        setProperties(uniqueProperties);
    }, [houses])

    //return all moving data
    useEffect(() => {
        const allMoves = houses.map((house) => {
            return house.move;
        })

        //remove duplicates
        const uniqueMoves = ['Moving Time (any)', ...new Set(allMoves)]

        //set properties
        setMoves(uniqueMoves);
    }, [houses])

    const handleClick = () => {

        setLoading(true);

        const isDefault = (str) => {
            return str.split(' ').includes('(any)');
        }

        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);

            if (house.country === country && house.type === property && house.move === move && housePrice >= minPrice && housePrice <= maxPrice) {
                return house;
            }

            if (isDefault(country) && isDefault(property) && isDefault(move) && isDefault(price)) {
                return house;
            }
        });

        // console.log(newHouses)

        setTimeout(() => {
            return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses), setLoading(false)
        }, 1000);

        // console.log(houses);
    };

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
                move,
                setMove,
                moves,
                handleClick,
                loading
            }
        }>
            {children}
        </HouseContent.Provider>
    );
};

export default HouseContentProvider;
import React, { useContext } from 'react';
import Home from './Home'

//import content
import { HouseContent } from './HouseContent';

const HouseList = () => {

    const { houses } = useContext(HouseContent);

    return (
        <section className='mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    houses.map(house => <Home
                        key={house.id}
                        house={house}
                    ></Home>)
                }
            </div>
        </section>
    );
};

export default HouseList;
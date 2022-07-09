import React, { useContext } from 'react';
import Home from './Home'

//import content
import { HouseContent } from './HouseContent';

import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {

    const { houses, loading } = useContext(HouseContent);

    if (loading) {
        return (
          <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[100px]' />
        );
      }

    if (houses.length < 1) {
        return <div className='text-red-500 text-center font-bold text-3xl'>Sorry, Nothing Found</div>
    }

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
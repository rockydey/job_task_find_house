import React, { useContext, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Menu } from '@headlessui/react'

//import house content
import { HouseContent } from './HouseContent';

const PriceSearch = () => {
    const { price, setPrice } = useContext(HouseContent);
    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        {
            value : 'Price range (any)'
        },
        {
            value : '500 - 750'
        },
        {
            value : '751 - 1000'
        },
        {
            value : '1001 - 1250'
        },
        {
            value : '1251 - 1500'
        },
        {
            value : '1501 - 1750'
        },
        {
            value : '1751 - 2000'
        },
        {
            value : '2001 - 2250'
        },
        {
            value : '2251 - 2500'
        }
    ];

    return (
        <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='flex h-[64px] items-center px-[18px] border rounded-lg'>
                <div>
                    <div className='text-[15px] font-medium leading-tight'>{price}</div>
                    <div className='text-[13px]'>Price Range</div>
                </div>
                <div className='ml-3'>
                    {
                        isOpen ? (<IoMdArrowDropup />) : (
                            <IoMdArrowDropdown />
                        )
                    }
                </div>
            </Menu.Button>
            <Menu.Items className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>
                {
                    prices.map((price, index) => {
                        return (
                            <Menu.Item onClick={() => setPrice(price.value)} className='cursor-pointer' as='li' key={index}>{price.value}</Menu.Item>
                        )
                    })
                }
            </Menu.Items>
        </Menu>
    );
};

export default PriceSearch;
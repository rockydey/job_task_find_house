import React, { useContext, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Menu } from '@headlessui/react'

//import house content
import { HouseContent } from './HouseContent';

const CountrySearch = () => {
    const { country, setCountry, countries } = useContext(HouseContent);
    const [isOpen, setIsOpen] = useState(false);
    console.log(countries);
    return (
        <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='flex h-[64px] items-center px-[18px] border rounded-lg'>
                <div>
                    <div className='text-[15px] font-medium leading-tight'>{country}</div>
                    <div className='text-[13px]'>Select Your Place</div>
                </div>
                <div className='ml-3'>
                    {
                        isOpen ? (
                            <IoMdArrowDropdown />
                        ) : <IoMdArrowDropup />
                    }
                </div>
            </Menu.Button>
            <Menu.Items>
                {
                    countries.map((country, index) => {
                        return (
                            <Menu.Item onClick={()=>setCountry(country)} className='cursor-pointer' as='li' key={index}>{country}</Menu.Item>
                        )
                    })
                }
            </Menu.Items>
        </Menu>
    );
};

export default CountrySearch;
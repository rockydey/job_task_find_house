import React, { useContext, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Menu } from '@headlessui/react'

//import house content
import { HouseContent } from './HouseContent';

const PropertySearch = () => {
    const { property, setProperty, properties } = useContext(HouseContent);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='flex h-[64px] items-center px-[18px] border rounded-lg'>
                <div>
                    <div className='text-[15px] font-medium leading-tight'>{property}</div>
                    <div className='text-[13px]'>Select Type</div>
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
                    properties.map((property, index) => {
                        return (
                            <Menu.Item onClick={() => setProperty(property)} className='cursor-pointer' as='li' key={index}>{property}</Menu.Item>
                        )
                    })
                }
            </Menu.Items>
        </Menu>
    );
};

export default PropertySearch;
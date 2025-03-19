import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react'
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaCheck, FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { HiOutlineShoppingCart, HiOutlineTruck } from "react-icons/hi2";

function Footer() {
  return (
    <div>
        <div className='w-full sm:h-40 bg-[#DFD5D5] px-7 p-5 flex sm:flex-nowrap flex-wrap sm:gap-0 gap-y-6 justify-around items-center'> 
            <div className="flex items-center gap-2">
            <FaCheck size={26}/>
            <div>
                <h1 className='font-bold'>Pakistan's Leading Toy Store</h1>
                <p>Your one-stop virtual wonderland, bringing joy to every corner of Pakistan!</p>
            </div>
            </div>
            <div className="flex items-center gap-2">
            <HiOutlineTruck size={44}/>
            <div>
                <h1 className='font-bold'>Fastest Delivery</h1>
                <p>Swiftly delivering smiles to your doorstep, coast to coast, across Pakistan!</p>
            </div>
            </div>
            <div className="flex items-center gap-2">
            <HiOutlineShoppingCart size={44}/>
            <div>
                <h1 className='font-bold'>100% Shipping</h1>
                <p>Guaranteed delivery with 100% shipping success rate!</p>
            </div>
            </div>
        </div>

        <div className='w-full sm:h-64 bg-radial from-[#FA995E] from-20% to-[#FFB854] flex sm:flex-row flex-col justify-between px-2 sm:px-14 items-center'>
            <div className='relative mt-7 sm:mt-0 mb-7'>
            <Input placeholder='Your e-mail goes here' className='relative w-full sm:w-80 bg-white text-black sm:h-12 '/>
            <Button className='absolute right-[-10px] rounded-sm top-0 sm:h-12 p-3'>Subscribe</Button>
            </div>
            <div className='w-full flex flex-wrap justify-around'>
            <div>
                <h1 className='font-bold text-lg text-center mb-2'>Quick Links</h1>
                <div className='flex text-sm flex-col gap-2'>
                    <Link href={'#'}>Refund & Exchange Policy</Link>
                    <Link href={'#'}>Privacy Policy</Link>
                    <Link href={'#'}>Terms & Conditions</Link>
                    <Link href={'#'}>Contact Us</Link>
                    <Link href={'#'}>Shipping Policy</Link>
                </div>
            </div>

            <div>
                <h1 className='text-center mb-2 font-bold text-lg'>Follow Us</h1>
                <div className='flex justify-center items-center gap-2'>
                        <FaFacebookF size={22}/>
                        <FaInstagram size={22}/>
                        <FaWhatsapp size={22}/>
                        <FaYoutube size={22}/>
                        <FaTiktok size={18}/>
                    </div>
            </div>
            <div>
            <h1 className='font-bold text-lg mt-4 sm:mt-0 text-center mb-2'>Pay Via Debit/Credit Cards</h1>
            <div className='flex flex-wrap justify-center gap-1'>
            <FaCcVisa size={30}/>
            <FaCcMastercard size={30}/>
            <FaCcPaypal size={30}/>
            </div>
        </div>
        </div>
       
        </div>


    </div>
  )
}

export default Footer;
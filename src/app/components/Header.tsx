import Image from 'next/image';
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GoSearch } from 'react-icons/go';
import { BsBagFill, BsPersonPlus } from "react-icons/bs";
import { LuCircleArrowLeft, LuCircleX } from "react-icons/lu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MdOutlineShoppingBag } from 'react-icons/md';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { NIKE_ITEMS } from '../../../constants';
import MegaMenu from './MegaMenu';


function Header() {
  return (
    <>
    <div className='w-full h-8 bg-[#EEEEEE] flex items-center justify-center px-10'>
    <div className='flex justify-center items-center gap-2'>
        <FaFacebookF size={22}/>
        <FaInstagram size={22}/>
        <FaWhatsapp size={22}/>
        <FaYoutube size={22}/>
        <FaTiktok size={18}/>
    </div>
    {/* <h1 className='font-bubblegum'>Only Rs.4,990.00 more for free shipping!</h1> */}
    </div>
    <div className="w-full h-40 bg-radial from-[#FA995E] from-20% to-[#FFB854] flex justify-between px-5 sm:px-10 items-center">
    <div className="">
  <Sheet>
    <SheetTrigger className="block md:hidden">
      <IoMenu size={26} />
    </SheetTrigger>
    <SheetContent 
      side='left' 
      className="h-full max-h-screen overflow-y-auto bg-radial from-[#FA995E] from-20% to-[#FFB854]"
    >
      <ul className='flex flex-col my-6 mx-5 gap-4 capitalize'>
        <li><Link href="#">Track Order</Link></li>
        <li><Link href="#">Stock clearance</Link></li>
        <li><Link href="#">New arrival</Link></li>
        <Accordion type="single" collapsible className="space-y-0">
      <AccordionItem value="item-1" className="p-0 m-0 border-none">
        <AccordionTrigger className="flex justify-between w-full text-left p-0">
          <li><Link href={'#'}>Hobby</Link></li>
        </AccordionTrigger>
        <AccordionContent className="p-0 m-0">
          <ul className='gap-2 mt-2 flex flex-col capitalize mx-4'>
          <li>Diecast Scale Models</li>
          <li>Flying Mania</li>
          <li>Collectibles</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <ul className='gap-2 mt-2 flex flex-col capitalize'>
        <li><Link href="#">Boy</Link></li>
        <li><Link href="#">Girl</Link></li>
      </ul>
      <AccordionItem value="Baby" className="mt-4 border-none">
        <AccordionTrigger className="flex justify-between w-full text-left p-0">
          <span>Baby</span>
        </AccordionTrigger>
        <AccordionContent className="p-0 m-0">
        <ul className='gap-2 mt-2 flex flex-col capitalize mx-4'>
          <li>Diecast Scale Models</li>
          <li>Flying Mania</li>
          <li>Collectibles</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        <li><Link href="#">Education & learning</Link></li>
        <li><Link href="#">Brands</Link></li>
        <li><Link href="#">T<span>C tech</span></Link></li>
        <li><Link href="#">999</Link></li>
        <li><Link href="#">Sale</Link></li>
        <li><Link href="#">Essentials</Link></li>
        <li><Link href="#">Damaged & returned</Link></li>
        <li><Link href="#">Blogs</Link></li>
        <div className='px-10 flex gap-2'>
          <Link href={'#'}>Login</Link>
          <Link href={'#'}>Register</Link>
        </div>
      </ul>
    </SheetContent>
  </Sheet>
</div>

        <Image
        className='mx-auto my-auto flex justify-center'
        src='/toy_company_logo.png'
        alt="Toy Company Logo"
        width={80}
        height={80}
        />
            <nav className='w-full md:4/6 hidden md:flex'>
                <ul className='flex-wrap flex justify-center gap-6 capitalize cursor-pointer leading-1 transition-colors'>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>track order</li>
                    <div className="flex gap-5">
        {NIKE_ITEMS.map((item) => (
          <div key={item.category} className="group">
            <Link
              href={item.href}
              className="text-lg font-semibold py-1 hover:border-b-[3px] border-black"
            >
              {item.category}
              {item.product && <MegaMenu product={item.product} />}
            </Link>
          </div>
        ))}
      </div>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>stock clearance</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>new arrival</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>boy</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>girl</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>baby</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>type of toy</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>education & learning</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>brands</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>t<span>C</span> tech</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>999</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>sale</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>essentials</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>damaged & returned</li>
                    <li className='hover:text-[#AC4AA9] p-2 transition-colors'>blogs</li>
                </ul>
            </nav>
            <div className='flex gap-1 cursor-pointer'>
            <Popover>
            <PopoverTrigger>
                <CgProfile size={22} className='hidden sm:block cursor-pointer'/>
            </PopoverTrigger>
            <PopoverContent className='w-48'>
                <div className='flex flex-col gap-2'>
                <div className="flex gap-2 items-center">
                    <LuCircleArrowLeft />
                    Log In
                </div>
                <div className="flex gap-2 items-center">
                <BsPersonPlus />
                Register
                </div>
                <div className="flex gap- items-center">
                    <BsBagFill />
                    View Cart
                </div>
                </div>
            </PopoverContent>
            </Popover>

            <Drawer direction="top">
  <DrawerTrigger className="cursor-pointer">
    <GoSearch size={22} />
  </DrawerTrigger>
  <DrawerContent content="Search" className="p-4">
    <DrawerHeader className="relative">
      <DrawerTitle>Search Drawer</DrawerTitle> {/* Accessible title */}

      <DrawerClose className="cursor-pointer absolute right-2 top-2">
        <LuCircleX size={24} />
      </DrawerClose>
    </DrawerHeader>

    <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
      <GoSearch size={30} />
      <Input className="w-full outline-none" placeholder="Search..." />
    </div>
  </DrawerContent>
</Drawer>

<Drawer direction="right">
  <DrawerTrigger className="cursor-pointer">
    <AiOutlineShoppingCart size={22} />
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader className="relative">
      <div className="flex justify-between mx-2">
      <DrawerTitle>Your Cart (0)</DrawerTitle> {/* Accessible title */}
        <DrawerClose className="cursor-pointer hover:text-red-700">CLOSE</DrawerClose>
      </div>
    </DrawerHeader>

    <div className="flex flex-col items-center mt-6">
      <MdOutlineShoppingBag className="hover:text-[#AC4AA9]" size={140} />
      <h1 className="mt-4 mb-6">Your cart is empty</h1>
      <Button variant="destructive" size="sm" className="px-6 py-6">
        Check out our offerings
      </Button>
    </div>
  </DrawerContent>
</Drawer>


            </div>
    </div>
    </>
  )
}

export default Header;
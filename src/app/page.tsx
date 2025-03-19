import Image from "next/image";

export default function Home() {
  return (
    <>
<div className="w-full h-screen sm:h-[75vh] md:h-[85vh] lg:h-screen">
  <Image 
    src={'/new arrival.JPG'}
    alt="New Arrival"
    width={1600}
    height={1700}
    className="w-full h-full object-cover"
  />
</div>

 


    </>
  ); 
}

// import Image from 'next/image'
// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font h-screen flex items-center" 
//     //   style={{ 
//     //   backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/assets/images/color.jpg")',
//     //     backgroundSize: 'cover',
//     //     backgroundPosition: 'center',
//     // }}
//     >
    
//   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 className="heading">Hi, i'm Andrew!
//       </h1>
//       <p className="paragraph">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
//       <div className="flex justify-center">
//         <button className="button mt-4">Contact</button>
//       </div>
//     </div>
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex items-center justify-center">
//     <Image
//             src={"/assets/images/andrewmtn.png"}
//             alt="Andrew Ransom"
//             width={450}
//             height={450}
//             className="h-7 w-auto mx-auto rounded-full flex items-center"
//             style={{
//               maxWidth: "100%",
//               height: "400px",
//             }}
//           />
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default Hero
import Image from 'next/image';
import React from 'react';
import Box from './Box'
import Link from 'next/link';

const Hero = () => {
  return (
    <div >
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Front-End Engineer</h1>
      <p class="mb-8 leading-relaxed">A multi-tool of business and technical skills. Goal oriented individual, with strong problem-solving skills. I bring a track record of success working in a start-up environment. Strong entrepreneurial spirit, hard working, and up for new challenges!</p>
      <div class="flex justify-center gap-2">
        <Link href='/contact'>
        <button class="button">Contact</button>
        </Link>
        <Link href='https://github.com/bigballahransom'>
        <Image src='/assets/images/git.png' width={40} height={10} className='text-white'/>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Hero;


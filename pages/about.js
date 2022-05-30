import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import product from "../Components/assets/product.png";
import gallery1 from "../Components/assets/gallery1.png";
import gallery2 from "../Components/assets/gallery2.png";

const About = (props) => {
  return (
    <>
      <Head>
        <title>About | {props.name}</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-20 pb-10 items-center justify-center flex-col">
          <Image className="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center" alt="hero" src={product} width={720} height={400} />
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ECOM : E-Commerce</h1>
            <p className="mb-8 leading-relaxed text-justify md:text-center">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-10 pb-20 mx-auto flex flex-wrap">
          <div className="flex w-full mb-10 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block" src={gallery1} width={500} height={300} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block" src={gallery1} width={500} height={300} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image alt="gallery" className="w-full h-full object-cover object-center block" src={gallery2} width={600} height={360} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image alt="gallery" className="w-full h-full object-cover object-center block" src={gallery2} width={600} height={360} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block" src={gallery1} width={500} height={300} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block" src={gallery1} width={500} height={300} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
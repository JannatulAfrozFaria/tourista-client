import React from 'react';
import { Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import Travel from "/src/Travel.json";
import Passport from "/src/Passport.json";
import MapLocation from "/src/MapLocation.json";


const Banner = () => {
    return (
       <div>
            <div  className='mx-10 md:mx-auto lg:mx-auto'>
                <div className="carousel w-full">
                    {/* SLIDE-------1 */}
                    <div id="slide1" className="carousel-item relative w-full h-auto lg:h-[540px]">
                        <div className="hero w-full h-auto lg:h-[540px] border rounded-3xl" style={{backgroundImage: 'url(https://i.postimg.cc/Kv3J3G4q/a2.jpg)'}}>
                            <div className="hero-overlay bg-opacity-60 border rounded-3xl"></div>
                            <div className="hero-content text-center text-neutral-content ">
                                 <div className="max-w-lg">
                                     <div  className='w-1/2 lg:1/3 mx-auto' >
                                         <Lottie className='' animationData={Travel} />
                                     </div>
                                     <Slide direction={'left'}>
                                            <h1 className="mb-5 text-5xl font-bold">Phuket</h1>
                                            <p className="mb-5 w-full text-center">Phuket is Thailand's biggest island. Phuket is known for its pristine beaches, offshore islands, vibrant markets, fast-paced nightlife, and exhilarating watersports. Kata and Surin beaches are ideal for families and anyone with unusual interests.</p>
                                     </Slide>
                                 </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    {/* SLIDE----------2 */}
                    <div id="slide2" className="carousel-item relative w-full  h-[540px] sm:h-auto">
                        <div className="hero w-full h-full border rounded-3xl" style={{backgroundImage: 'url(https://i.postimg.cc/VkySZdz6/1621248978-shutterstock-264206966.jpg)'}}>
                            <div className="hero-overlay bg-opacity-60 h-full border rounded-3xl"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-lg">
                                        <div  className='w-1/3 mx-auto' >
                                            <Lottie className='' animationData={Passport} />
                                        </div>
                                       <Slide direction={'right'}>
                                            <h1 className="mb-5 text-5xl font-bold">Angkor Wat</h1>
                                                <p className="mb-5">Angkor is a standout amongst the most imperative archeological destinations in South-East Asia. The site is an extraordinary grouping of components vouching for an excellent progress.</p>
                                       </Slide>
                                        {/* <button className="btn btn-primary">Get Started</button> */}
                                    </div>
                                </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    {/* SLIDE--------3 */}
                    <div id="slide3" className="carousel-item relative w-full  h-[540px] sm:h-auto">
                        <div className="hero w-full h-full border rounded-3xl" style={{backgroundImage: 'url(https://i.postimg.cc/QtVxd3jw/vietnam-halong-bay.jpg)'}}>
                            <div className="hero-overlay bg-opacity-60 h-full border rounded-3xl"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-lg">
                                        <div  className='w-1/3 mx-auto' >
                                            <Lottie className='' animationData={MapLocation} />
                                        </div>
                                        <Slide>
                                            <h1 className="mb-5 text-5xl font-bold">Halong Bay</h1>
                                            <p className="mb-5">Ha Long Bay, also known as a UNESCO World Heritage Site, is famous for its stunning limestone mountains that rise up from emerald waters, formed thousands of years ago. Visitors can explore the amazing caves and experience the culture of Ha Long.</p>
                                        </Slide>
                                        {/* <button className="btn btn-primary">Get Started</button> */}
                                    </div>
                                </div>
                            </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                </div>
            </div>
       </div>
    );
};

export default Banner;
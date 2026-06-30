import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Reviews = () => {
    return (
        <>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-3 gap-5 '>
                        <div className='bg-white p-8 '>
                            <h1 className='text-sm italic mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto veritatis fuga commodi iste ipsa, repellat pariatur corporis enim accusantium temporibus quisquam aut distinctio eum vero consectetur rem. Sunt, dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptate natus praesentium dolores, unde modi! Possimus, veritatis, similique, at nam repellendus corrupti optio qui laudantium facere accusantium asperiores quisquam dolores labore ducimus fugiat obcaecati quis. Alias magnam magni tempore qui.</h1>
                            <div className='flex items-center gap-2'>
                                <div className='h-12 w-12 rounded-full'>
                                    <img src="https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg" className='object-center object-cover w-full h-full rounded-full' alt="" />
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Hamza Zenheri</h1>
                                    <h1>Founder CEO, De tempete</h1>
                                </div>
                            </div>
                        </div><div className='bg-white p-8 '>
                            <h1 className='text-sm italic mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto veritatis fuga commodi iste ipsa, repellat pariatur corporis enim accusantium temporibus quisquam aut distinctio eum vero consectetur rem. Sunt, dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptate natus praesentium dolores, unde modi! Possimus, veritatis, similique, at nam repellendus corrupti optio qui laudantium facere accusantium asperiores quisquam dolores labore ducimus fugiat obcaecati quis. Alias magnam magni tempore qui.</h1>
                            <div className='flex items-center gap-2'>
                                <div className='h-12 w-12 rounded-full'>
                                    <img src="https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg" className='object-center object-cover w-full h-full rounded-full' alt="" />
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Hamza Zenheri</h1>
                                    <h1>Founder CEO, De tempete</h1>
                                </div>
                            </div>
                        </div><div className='bg-white p-8 '>
                            <h1 className='text-sm italic mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto veritatis fuga commodi iste ipsa, repellat pariatur corporis enim accusantium temporibus quisquam aut distinctio eum vero consectetur rem. Sunt, dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptate natus praesentium dolores, unde modi! Possimus, veritatis, similique, at nam repellendus corrupti optio qui laudantium facere accusantium asperiores quisquam dolores labore ducimus fugiat obcaecati quis. Alias magnam magni tempore qui.</h1>
                            <div className='flex items-center gap-2'>
                                <div className='h-12 w-12 rounded-full'>
                                    <img src="https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg" className='object-center object-cover w-full h-full rounded-full' alt="" />
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Hamza Zenheri</h1>
                                    <h1>Founder CEO, De tempete</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-3 gap-5 '>
                        <div className='bg-white p-8 '>
                            <h1 className='text-sm italic mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto veritatis fuga commodi iste ipsa, repellat pariatur corporis enim accusantium temporibus quisquam aut distinctio eum vero consectetur rem. Sunt, dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptate natus praesentium dolores, unde modi! Possimus, veritatis, similique, at nam repellendus corrupti optio qui laudantium facere accusantium asperiores quisquam dolores labore ducimus fugiat obcaecati quis. Alias magnam magni tempore qui.</h1>
                            <div className='flex items-center gap-2'>
                                <div className='h-12 w-12 rounded-full'>
                                    <img src="https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg" className='object-center object-cover w-full h-full rounded-full' alt="" />
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Hamza Zenheri</h1>
                                    <h1>Founder CEO, De tempete</h1>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-8 '>
                            <h1 className='text-sm italic mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto veritatis fuga commodi iste ipsa, repellat pariatur corporis enim accusantium temporibus quisquam aut distinctio eum vero consectetur rem. Sunt, dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptate natus praesentium dolores, unde modi! Possimus, veritatis, similique, at nam repellendus corrupti optio qui laudantium facere accusantium asperiores quisquam dolores labore ducimus fugiat obcaecati quis. Alias magnam magni tempore qui.</h1>
                            <div className='flex items-center gap-2'>
                                <div className='h-12 w-12 rounded-full'>
                                    <img src="https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg" className='object-center object-cover w-full h-full rounded-full' alt="" />
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Hamza Zenheri</h1>
                                    <h1>Founder CEO, De tempete</h1>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-8 '>
                            <h1 className='text-sm italic mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto veritatis fuga commodi iste ipsa, repellat pariatur corporis enim accusantium temporibus quisquam aut distinctio eum vero consectetur rem. Sunt, dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptate natus praesentium dolores, unde modi! Possimus, veritatis, similique, at nam repellendus corrupti optio qui laudantium facere accusantium asperiores quisquam dolores labore ducimus fugiat obcaecati quis. Alias magnam magni tempore qui.</h1>
                            <div className='flex items-center gap-2'>
                                <div className='h-12 w-12 rounded-full'>
                                    <img src="https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg" className='object-center object-cover w-full h-full rounded-full' alt="" />
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Hamza Zenheri</h1>
                                    <h1>Founder CEO, De tempete</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

export default Reviews;
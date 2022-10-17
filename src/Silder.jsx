import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 100,
                    depth: 500,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                
                navigation={true}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="silder">
                <div className="profile-sect">
                    <div className="profile-sec">
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <div className="name-post">
                            <div className="names">
                                Mohit Pareek
                            </div>
                            <div className="post">
                                Starting Core
                            </div>
                        </div>
                    </div>
                    <div className="profile-content">
                        "Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! "
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="silder">
                    <div className="profile-sect">
                        <div className="profile-sec">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <div className="name-post">
                                <div className="names">
                                    Mohit Pareek
                                </div>
                                <div className="post">
                                    Starting Core
                                </div>
                            </div>
                        </div>
                        <div className="profile-content">
                            "Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! "
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="silder">
                    <div className="profile-sect">
                        <div className="profile-sec">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <div className="name-post">
                                <div className="names">
                                    Mohit Pareek
                                </div>
                                <div className="post">
                                    Starting Core
                                </div>
                            </div>
                        </div>
                        <div className="profile-content">
                            "Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! "
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="silder">
                    <div className="profile-sect">
                        <div className="profile-sec">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <div className="name-post">
                                <div className="names">
                                    Mohit Pareek
                                </div>
                                <div className="post">
                                    Starting Core
                                </div>
                            </div>
                        </div>
                        <div className="profile-content">
                            "Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! "
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

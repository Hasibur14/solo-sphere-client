
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImg1 from '../assets/images/carousel1.jpg';
import bannerImg2 from '../assets/images/carousel2.jpg';
import bannerImg3 from '../assets/images/carousel3.jpg';
import Slide from './Slider';


const Carousel = () => {
    return (
        <>
            <div className='container mx-auto my-10 rounded-lg'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Slide
                         image={bannerImg1}
                         text='Get Your Web Development Projects Done in Minute '
                         ></Slide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide 
                        image={bannerImg2}
                        text='Get Your Graphics Design Projects Done in Minute '
                        ></Slide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide 
                        image={bannerImg3}
                        text='Get Your Digital Marketing  Projects Done in Minute '
                        ></Slide>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Carousel;
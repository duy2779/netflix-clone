import clsx from 'clsx';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';
import { useState } from 'react';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// Import Swiper styles
import 'swiper/modules/pagination/pagination.min.css'
// scss
import './slider.scss'
// components
import SliderItem from '../slider-item'

const Slider = ({ movies, title, genreId, link }) => {
    const [hasExpanded, setHasExpanded] = useState(false);
    const toggleHover = () => setHasExpanded(!hasExpanded)

    return movies.length > 0 && (
        <div
            className={clsx("slider", { "has-expanded": hasExpanded })}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <Link to={genreId ? `/browse/genre/${genreId}` : link} className="slider__title">{title}</Link>
            <Swiper
                allowTouchMove={true}
                spaceBetween={10}
                speed={1000}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    // when window width is >= 640px
                    500: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        navigation: false,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        navigation: false,
                    },
                    1288: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        allowTouchMove: false,
                    },
                    1588: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                        allowTouchMove: false,
                    },
                    1886: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        allowTouchMove: false,
                    },
                }}
            >
                {
                    movies.map((movie, index) => (
                        <SwiperSlide key={movie.id}>
                            <SliderItem movie={movie} index={index} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slider

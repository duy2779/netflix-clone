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

const Slider = ({ movies, title, genreId }) => {
    const [hasExpanded, setHasExpanded] = useState(false);
    const toggleHover = () => setHasExpanded(!hasExpanded)

    return movies.length > 0 && (
        <div
            className={clsx("slider", { "has-expanded": hasExpanded })}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <Link to={genreId ? `/browse/genre/${genreId}` : "/"} className="slider__title">{title}</Link>
            <Swiper
                allowTouchMove={false}
                spaceBetween={10}
                speed={1000}
                slidesPerView={6}
                slidesPerGroup={6}
                navigation={true}
                modules={[Navigation]}
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

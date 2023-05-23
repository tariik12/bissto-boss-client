import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Testimonial = () => {
    const [testimonial, setTestimonial] =useState([])

    useEffect(() =>{
        fetch('testimonial.json')
        .then(res => res.json())
        .then(data =>setTestimonial(data))
    },[])
    return (
        <div className="my-20 p-20">
            <SectionTitle 
            subTitle={'What Our Client Say'}
            title={'Testimonial'}
            ></SectionTitle>

            <div>
            <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            testimonial?.map((tes,index) =><SwiperSlide key={index}>

                <div className="text-center p-20 justify-center">
                    <div className="flex justify-center mb-5">
                    <Rating style={{ maxWidth: 250 }} value={tes.rating} readOnly />
                    </div>
                    <div className="mx-32 p-10">
                        <p>{tes.details}</p>
                        <h4 className="text-xl">{tes.name}</h4>
                    </div>
                </div>
            </SwiperSlide>)
        }
        
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
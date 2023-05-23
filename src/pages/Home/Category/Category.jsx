import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
       <section>
        <SectionTitle
         subTitle={'From 11:00am to 10:00pm'}
         title={'ORDER ONLINE'}>
         </SectionTitle>
         <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-5"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <p className="text-center font-bold uppercase -mt-16 text-slate-100 ">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <p className="text-center font-bold uppercase -mt-16 text-slate-100 ">Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <p className="text-center font-bold uppercase -mt-16 text-slate-100 ">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <p className="text-center font-bold uppercase -mt-16 text-slate-100 ">Desurd</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <p className="text-center font-bold uppercase -mt-16 text-white ">Soups</p>
        </SwiperSlide>
      </Swiper>
       </section>
    );
};

export default Category;
import { Parallax } from 'react-parallax';

const Cover = ({img,title,subTitle}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div className="hero ">
  {/* <div className=""></div> */}
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-6xl px-40 text-sm py-16 mt-20 hero-overlay bg-opacity-50">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className=" uppercase">{subTitle}</p>
      
    </div>
  </div>
</div>
        <div style={{ height: '200px' }} />
    </Parallax>
    );
};

export default Cover;
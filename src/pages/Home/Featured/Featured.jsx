import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="text-white bg-fixed " style={{background: `linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)0), url(${featured});`}}>
            <SectionTitle
                subTitle={'check it out'}
                title={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="flex justify-center items-center p-10 " >
                <img className="w-[500px] m-20" src={featured} alt="" />
                <div>
                    <p>March 20, 2023</p>
                    <h4 className="uppercase">WHERE CAN I GET SOME?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn btn-outline btn-">Info</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;


const SectionTitle = ({subTitle, title}) => {
    return (
        <div className="md:w-1/3 text-center  pt-10 mx-auto">
            <p className=" text-yellow-300 mb-2">---{subTitle}---</p>
            <h3 className="text-4xl border-y uppercase py-4">{title}</h3>
        </div>
    );
};

export default SectionTitle;
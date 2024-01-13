
const ServiceItem = ({image, name, handleModal, price}) => {
    return (
        <div onClick={() => handleModal(name, price)} className="flex gap-4 p-5 shadow-xl bg-white items-center justify-center rounded-xl cursor-pointer">
            <img src={image} alt="" />
            <h3 className="text-xl font-bold">{name}</h3>
        </div>
    );
};

export default ServiceItem;
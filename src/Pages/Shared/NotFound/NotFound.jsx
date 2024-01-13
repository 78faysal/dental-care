import { useNavigate } from 'react-router-dom';
import img from '../../../assets/404.jpg';
import { IoMdArrowRoundBack } from "react-icons/io";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
            <img className='h-96' src={img} alt="" />
            <h2 onClick={() => navigate(-1)} className='text-2xl font-semibold flex items-center gap-3 hover:text-blue-600 justify-center cursor-pointer'><IoMdArrowRoundBack />Go Back</h2>
            </div>
        </div>
    );
};

export default NotFound;
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {

    const details = useLoaderData()
    // console.log(details);

    const { thumbnail, title, stock, discountPercentage, description, rating } = details

    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/products')
    }

    const { productId } = useParams()
    console.log(productId);

    return (
        <div className="flex justify-around items-center border-2 border-green-200 my-5 gap-5 px-5 py-3">
            <div className="w-full">
                <img className="rounded-md w-[600px] h-[450px]" src={thumbnail} alt="" />
            </div>
            <div>
                <h2 className="text-3xl font-bold mt-3">{title}</h2>
                <h3 className="mt-3 font-bold text-xl"> Discounted Rate: ${discountPercentage} </h3>
                <p> <span className="mt-3 font-bold text-xl">Features:</span> {description} </p>
                <h3 className='font-bold text-xl'>Stock: {stock} </h3>
                <h3 className='font-bold text-xl'>Rating: {rating} </h3>

                <button onClick={handleGoHome} className='bg-green-400 text-white font-bold px-2 py-1 rounded-md mt-4' >Go Back</button>
            </div>
        </div>
    );
};

export default ProductDetails;
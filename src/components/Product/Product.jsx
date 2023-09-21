import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { id, thumbnail, title, description, price, } = product

    const navigate = useNavigate()

    const handleShowDetails = () => {
        navigate(`/products/${id}`)
    }

    return (
        <div className="card bg-base-100 shadow-xl p-4 relative">
            <img className="h-52 w-full rounded" src={thumbnail} alt="Phones" />

            <h2 className="text-xl font-bold mt-3">{title}</h2>
            <p className="text-sm mt-3"> {description} </p>
            <h3 className='font-bold'>Price ${price} </h3>

            <Link to={`/products/${id}`}> <button className='bg-green-400 text-white font-bold px-2 py-1 rounded-md w-full absolute left-0 -bottom-5'>Show Details</button> </Link>

            <button onClick={handleShowDetails} className='bg-green-400 text-white font-bold px-2 py-1 rounded-md w-full absolute left-0 -bottom-5'>Show Details</button>


        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;
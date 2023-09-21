import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError()
    console.log(error);

    return (
        <div className="max-w-screen-xl my-5 mx-auto px-2 md:px-16 lg:px-24 space-y-2 text-center">
            <h2 className="text-3xl font-bold">Oops!!</h2>
            <p className="text-xl font-bold">
                {
                    error.statusText || error.message
                }
            </p>

            {
                error.status === 404 && <div>
                    <h3 className="text-xl font-bold">Page Not Found!!</h3>
                    <p className="text-xl font-bold">Go Back Where you from.</p>

                    <Link to="/"><button className='bg-green-400 text-white font-bold px-2 py-1 rounded-md mt-4'>Go Home</button></Link>
                </div>
            }

        </div>
    );
};

export default ErrorPage;
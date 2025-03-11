import { Link } from "react-router-dom";

function Supports() {
    const support = ["Help Center", "Contact", "API Documentation"];

    return (
        <div className='flex-1 min-w-[200px]'>
            <h3 className='text-xl font-bold mb-4'>Support</h3>
            <ul className='flex flex-col space-y-2'>
                {support.map((item, index) => (
                    <Link to={"/"} key={index} className='hover:text-white'>
                        {item}
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Supports;

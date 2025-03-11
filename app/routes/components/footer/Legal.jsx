import { Link } from "react-router-dom";

function Legal() {
    const legal = ["Help", "Term Policy", "Cookie Policy"];

    return (
        <div className='flex-1 min-w-[200px]'>
            <h3 className='text-xl font-bold mb-4'>Legal</h3>
            <ul className='flex flex-col space-y-2'>
                {legal.map((item, index) => (
                    <Link to={"/"} key={index} className='hover:text-white'>
                        {item}
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Legal;

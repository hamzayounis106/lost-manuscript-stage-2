// Catalogue.js
import { Breadcrumbs } from "../../index";
import Card from "./cards/Card";

const Catalogue = () => {
    return (
        <>
            <div className='mx-4 pt-4'>
                <Breadcrumbs />
            </div>
            <Card />
        </>
    );
};

export default Catalogue;

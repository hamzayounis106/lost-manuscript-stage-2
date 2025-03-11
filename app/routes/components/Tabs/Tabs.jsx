import { useState } from "react";

const Tabs = ({ tabs }) => {
    const [tab, setTab] = useState(0);

    return (
        <div className=''>
            <div className='bg-[#F2F2F2] border border-[#CCCCCC] rounded-t-lg pt-4 px-6 flex text-[#4F4F4F] text-sm'>
                {tabs.map((cur, i) => (
                    <div
                        key={i}
                        className={`p-[10px] px-1 cursor-pointer flex-1 text-center ${
                            tab === i
                                ? "bg-white border border-b-0 border-[#CCCCCC]"
                                : ""
                        }`}
                        onClick={() => {
                            setTab(i);
                        }}
                    >
                        {cur.label}
                    </div>
                ))}
            </div>
            <div className='rounded-b-lg overflow-hidden bg-white p-4'>
                {tabs[tab].content}
            </div>
        </div>
    );
};


export default Tabs;

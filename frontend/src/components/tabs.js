import { useState, useEffect } from "react";
import Table from "./table";

const Tabs = ({setTable}) => {
    const [tab, setTab] = useState(1);
    const [tableData, setTableData] = useState({ reserved_tables: [], unreserved_tables: [] });

    useEffect(() => {
        const fetchTableData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/tables');
                if (!response.ok) {
                    throw new Error('Failed to fetch table data');
                }
                const data = await response.json();
                setTableData(data);
            } catch (error) {
                console.error('Error fetching table data:', error);
                // Handle error
            }
        };
        fetchTableData();
    }, []);

    const getTables = () => {
        if (tab === 1) {
            return (
                <div className="flex flex-wrap w-full opacity-100 transition-opacity duration-150 ease-linear " id="tabs-home02" role="tabpanel" aria-labelledby="tabs-home-tab02" data-te-tab-active>
                    {tableData.reserved_tables.map(table =>(
                        <div key={table.table_id} className="m-12" onClick={()=>setTable(table.table_id)}>
                            <Table color={1} tableId={table.table_id}/>
                        </div>
                    ))}
                </div>
            );
        } else if (tab === 2) {
            return (
                <div className="flex flex-wrap w-full opacity-100 transition-opacity duration-150 ease-linear " id="tabs-home02" role="tabpanel" aria-labelledby="tabs-home-tab02" data-te-tab-active>
                    {tableData.unreserved_tables.map(table => (
                        <div key={table.table_id} className="m-12">
                            <Table color={2} tableId={table.table_id}/>
                        </div>
                    ))}
                </div>
            );
        } else {
            // Handle booked tables
            return null; // You can implement this according to your requirements
        }
    };

    return (
        <>
            <ul className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0" role="tablist" data-te-nav-ref>
                <li role="presentation" className="flex-grow basis-0 text-center">
                    <span className={`${tab === 1 ? 'bg-neutral-100' : ''} my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 cursor-pointer`} onClick={() => { setTab(1) }}>Occupied Tables</span>
                </li>
                <li role="presentation" className="flex-grow basis-0 text-center">
                    <span className={`${tab === 2 ? 'bg-neutral-100' : ''} my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 cursor-pointer`} onClick={() => { setTab(2) }}>Available Tables</span>
                </li>
                <li role="presentation" className="flex-grow basis-0 text-center">
                    <span className={`${tab === 3 ? 'bg-neutral-100' : ''} my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 cursor-pointer`} onClick={() => { setTab(3) }}>Booked Tables</span>
                </li>
            </ul>

            <div className="mb-6 w-full">
                {getTables()}
            </div>
        </>
    );
}

export default Tabs;

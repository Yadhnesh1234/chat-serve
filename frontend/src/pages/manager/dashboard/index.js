import Cards from '../../../components/cards'
import Tabs from '../../../components/tabs'
import SidePannel from '../../../components/sidepannel'
import { useState } from 'react'

const Dashboard = ()=>{
  const [table,setTable]=useState(0)
    return(
  <> 
  <div className="flex flex-row">
    <div className='flex flex-col w-3/4'>
      <div>
          <Cards />
      </div>
      <div className='flex flex-col mt-12 ml-8 p-12 rounded-md bg-white  w-[94%]'>
        <div>
          <h1 className='text-2xl'>Tables Status</h1>
        </div>
        <div className='mt-12'>
           <Tabs setTable={setTable}/>
        </div>
      </div>
    </div>
    <div>
      <SidePannel table={table}/>
    </div>
  </div>
  </>
    )
}

export default Dashboard
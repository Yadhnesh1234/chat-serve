import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
      <div id="docs-sidebar" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-6">
          <div style={{ fontFamily: "'Lobster', sans-serif" }} className="text-4xl text-primary flex justify-center"><h2>Chat-Serve</h2></div>
        </div>
        <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul class="space-y-1.5">
            <li>
              <Link to="/home" class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                <HomeIcon/>
                Dashboard
              </Link>
            </li>

            <li class="hs-accordion" id="users-accordion">
              <Link to="cooks" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <OutdoorGrillIcon/>
                Cooks
              </Link>
            </li>

            <li class="hs-accordion" id="account-accordion">
              <Link to="menu" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <MenuBookOutlinedIcon/>
                Menu
              </Link>
            </li>

            <li class="hs-accordion" id="account-accordion">
              <Link to="settings" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <SettingsOutlinedIcon/>
                Settings
              </Link>
            </li>

            <li class="hs-accordion" id="account-accordion">
              <Link to="transactions" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <AccessTimeIcon/>
                Transactions
              </Link>
            </li>

            <li><Link to="/login" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
              <LogoutIcon />
              <b className="text-lg">Logout</b>
            </Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar

import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            
            <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/3' >
            <Navbar></Navbar>
            </div>
            <div className='md:w-2/3'>
            <Outlet></Outlet>
            </div>
            
            </div>
        </div>
    );
};

export default MainLayout;
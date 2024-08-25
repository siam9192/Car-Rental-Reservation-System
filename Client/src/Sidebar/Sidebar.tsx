import React, { useEffect } from 'react';
import { toggleSidebar } from '../redux/features/toogle/toggle.slice';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { navRoutes } from '../utils/constant';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.toggle.isSidebarOpen);

  useEffect(() => {
    if (isSidebarOpen) {
      window.document.body.style.overflow = 'hidden';
    }
    return () => {
      window.document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  const closeSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      onClick={closeSidebar}
      className={`w-full h-full fixed ${isSidebarOpen ? 'left-0' : '-left-[200%]'} transition-all duration-300 top-0  shadow bg-gray-800 bg-opacity-40 dark:bg-opacity-90  md:hidden`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-dark-light-primary  w-[80%] h-full py-10 px-5"
      >
        <nav className="space-y-4">
          {navRoutes.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className={`${pathname === item.path ? 'text-primary-color' : 'text-gray-800 dark:text-slate-200'} text-2xl hover:text-primary-color font-medium block `}
              >
                {item.display}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

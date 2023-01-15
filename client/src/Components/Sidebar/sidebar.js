import React from 'react'
import { useState } from 'react';
import './sidebar.css';
import {  NavLink } from 'react-router-dom';


const Sidebar = () => {

    const [open, setsidebar] = useState(false);
    const [loc_swtich, setloc_swtich] = useState(false);
    const [ul_main, setul_setting] = useState(false);
    //   const showsidebar=()=> setsidebar(!open);
    function showsidebar() {
        setsidebar(!open);
        if (open == false) {
            document.documentElement.style.setProperty('--sidebar-width', '90px');
        }
        else {
            document.documentElement.style.setProperty('--sidebar-width', '240px');
        }
    }

    function showlocationsbox() {
        setloc_swtich(!loc_swtich);

    }

    function change_ul() {
        setul_setting(!ul_main);



    }

    return (


        <div className={open ? 'sidebar ' : 'sidebar active'}>



            <div className="logo_content">
                <div className="logo">

                    <div className="logo_name">FIx My Online</div>
                </div>
                <i className='bx bx-menu menu_icon' id='btn' onClick={showsidebar}></i>
            </div>

            
                <ul className="nav_list" >


                    <li>
                        <NavLink to="/dashboard" className="navlink">
                        <i class='bx bxs-category-alt' ></i>

                            <span className="links_name">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/launchpad" className="navlink">
                        <i class='bx bx-grid-alt' ></i>
                            <span class="links_name">add bus</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" className="navlink">
                            <i class='bx bxs-conversation' ></i>
                            <span class="links_name">Conversations</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" className="navlink">
                        <i class='bx bxs-calendar'></i>

                            <span class="links_name">Cleanders</span>
                        </NavLink>
                    </li>



                </ul>







        </div>


    )
}

export default Sidebar
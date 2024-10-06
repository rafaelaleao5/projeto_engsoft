import React, {useState, useContext, useEffect} from 'react'
import Topbar from '../scenes/dashboard/global/Topbar'
import Sidebar from '../scenes/dashboard/global/sidebar/Sidebar'
import Dashboard from '../scenes/dashboard/Dashboard'
import GastosContext from '../scenes/dashboard/GastosContext';
import { getCategoryByUserId } from "../controllers/categoryController";

function Menu () {

    const { adicionarTipoGasto, tiposGasto } = useContext(GastosContext);
    let hasCategoryInfo = false;

    useEffect(() => {
        getCategories()
      
      }, []);


    const getCategories = async () => {
        if(!hasCategoryInfo){
            hasCategoryInfo = true;
            const tags = await getCategoryByUserId()
            tags.forEach(tag => {
              if (tiposGasto.includes(tag.tagName)) {
                return;
              }
              
              adicionarTipoGasto(tag.tagName)
            });
          }
    }



    return (
        <div className="menu">
            <Topbar/>
            <Sidebar/>
            <Dashboard/>
        </div>
    )
}

export default Menu
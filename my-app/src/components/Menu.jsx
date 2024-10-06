import React, {useState, useContext, useEffect} from 'react'
import Topbar from '../scenes/dashboard/global/Topbar'
import Sidebar from '../scenes/dashboard/global/sidebar/Sidebar'
import Dashboard from '../scenes/dashboard/Dashboard'
import GastosContext from '../scenes/dashboard/GastosContext';
import { getCategoryByUserId } from "../controllers/categoryController";
import { getPaymentMethodByUserId } from '../controllers/paymentMethodController';

function Menu () {

    const { adicionarTipoGasto, tiposGasto } = useContext(GastosContext);
    const { formasPagamento, adicionarFormaPagamento, removerFormaPagamento } = useContext(GastosContext);
    let hasCategoryInfo = false;
    let hasPaymentMethodInfo = false;

    useEffect(() => {
        getCategories()
        getPaymentMethods()
      
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
  
    const getPaymentMethods = async () => {
      if(!hasPaymentMethodInfo){
        hasPaymentMethodInfo = true;
        const paymentMethods = await getPaymentMethodByUserId()
        paymentMethods.forEach(paymentMethod => {
          debugger
          if (formasPagamento.includes(paymentMethod.methodName)) {
            return;
          }
          
          adicionarFormaPagamento(paymentMethod.methodName)
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
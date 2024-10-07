import React, {useState, useContext, useEffect} from 'react'
import Topbar from '../scenes/dashboard/global/Topbar'
import Sidebar from '../scenes/dashboard/global/sidebar/Sidebar'
import Dashboard from '../scenes/dashboard/Dashboard'
import GastosContext from '../scenes/dashboard/GastosContext';
import { getCategoryByUserId, getDefaultCategories } from "../controllers/categoryController";
import { getPaymentMethodByUserId, getDefaultPaymentMethod } from '../controllers/paymentMethodController';

function Menu () {

    const { formasPagamento, adicionarFormaPagamento, removerFormaPagamento, adicionarTipoGasto, tiposGasto , setCategoryInfo, hasCategoryInfo, setDefaultCategoryInfo, hasDefaultCategoryInfo, hasPaymentMethodInfo, setPaymentMethodInfo, hasDefaultPaymentMethodInfo, setDefaultPaymentMethodInfo } = useContext(GastosContext);

    useEffect(() => {
        getCategories();
        getCategoriesDefault();
        getPaymentMethods();
        getPaymentMethodsDefault();
      
      }, []);


    const getCategories = async () => {
        if(!hasCategoryInfo){
            setCategoryInfo(true);
            const tags = await getCategoryByUserId()
            tags.forEach(tag => {
              if (tiposGasto.includes(tag.tagName)) {
                return;
              }
              
              adicionarTipoGasto(tag)
            });
          }
    }

    const getCategoriesDefault = async () => {
      if(!hasDefaultCategoryInfo){
        setDefaultCategoryInfo(true);
        const tags = await getDefaultCategories();
        tags.forEach(tag => {
            if (tiposGasto.includes(tag.tagName)) {
              return;
            }
            adicionarTipoGasto(tag)    
          debugger
        });
      }
    }
  
    const getPaymentMethods = async () => {
      if(!hasPaymentMethodInfo){
        setPaymentMethodInfo(true);
        const paymentMethods = await getPaymentMethodByUserId()
        paymentMethods.forEach(paymentMethod => {
          if (formasPagamento.includes(paymentMethod.methodName)) {
            return;
          }
          
          adicionarFormaPagamento(paymentMethod)
        });
      }
    }

    const getPaymentMethodsDefault = async () => {
      if(!hasDefaultPaymentMethodInfo){
        setDefaultPaymentMethodInfo(true);
        const paymentMethods = await getDefaultPaymentMethod()
        paymentMethods.forEach(paymentMethod => {
          if (formasPagamento.includes(paymentMethod.methodName)) {
            return;
          }
          
          adicionarFormaPagamento(paymentMethod)
          debugger
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
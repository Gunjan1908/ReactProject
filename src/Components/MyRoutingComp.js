import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyImagesComp from './MyImagesComp';
import UserFormComp from './UserFormComp';
import PageNotFound from './PageNotFound';
import ClassComp from './ClassComp';
import MyClassComp from './MyClassComp';
import MyCssComp from './MyCssComp';
import MyStateComp from './MyStateComp';
import NavComp from './NavComp';
import FooterNavComp from './FooterNavComp';
import FavColorComp from './FavColorComp';
import ReactHooksComp from '../Hooks/ReactHooksComp';
import UseStateHookComp  from '../Hooks/UseStateHookComp';
import UseEffectHookComp from '../Hooks/UseEffectHookComp';
import DashboardComp from '../CRUD/DashboardComp';
import { AddProductComp } from '../CRUD/AddProductComp';
import EditProductComp from '../CRUD/EditProductComp';
import MyCarousel from './MyCarousel';
import LoginComp from './LoginComp';

function MyRoutingComp() {
    return (
        <div> <h2>This is my Routing component</h2>


            <div className='container mt-3'> <BrowserRouter>

                <div className='card mt-3'  style={{background:"lightyellow"}}>
                    <div className='card-header '><NavComp></NavComp></div>
                    <div className='card-body border-primary'>

                    <Routes>
                        {/* default routing */}
                        <Route path='' element={<LoginComp/>}></Route>
                        {/* naming routing */}
                        <Route path='multimedia' element={<MyImagesComp />}></Route>
                        <Route path='list' element={<FavColorComp/>}></Route>
                        {/* parametrized routing */}
                        <Route path='form/:id' element={<UserFormComp />}></Route>
                        {/* child routing */}
                        <Route path='classcomp' element={<ClassComp/>}>
                            <Route path='mycss' element={<MyCssComp/>}></Route>
                            <Route path='mystatecomp' element={<MyStateComp/>}></Route>
                        </Route>
                           {/* child routing */}
                        <Route path='hooks' element={<ReactHooksComp/>}>
                        <Route path='' element={<UseStateHookComp/>}></Route>
                        <Route path='useState' element={<UseStateHookComp/>}></Route>
                        <Route path='useEffect' element={<UseEffectHookComp/>}></Route>
                        </Route>

                        {/* routing for crud operation */}

                        <Route path="dashboard" element={<DashboardComp/>}></Route>
                        <Route path="addproduct" element={<AddProductComp/>}></Route>
                        <Route path='editproduct/:id's element={<EditProductComp/>}></Route>

                        <Route path="carousel" element={<MyCarousel/>}></Route>
                        


                        {/* wildcard routing if we pass wrong path on browser */}
                        <Route path='/*' element={<PageNotFound />}></Route>

                    </Routes>
                </div>
                <div className='card-footer'><FooterNavComp></FooterNavComp></div>

                </div>  
            </BrowserRouter>
            
            </div>
            </div>
            )
}

            export default MyRoutingComp

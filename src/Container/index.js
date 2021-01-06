import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Aboutus from '../Component/Aboutus';
import Contactme from '../Component/Contactme';
import Facts from '../Component/Facts';
import Header from '../Component/Header';
import HomeBlog from '../Component/HomeBlog';
import Product from '../Component/Product';
import Testimonial from '../Component/Testimonial';
import Topbrands from '../Component/Topbrands';
import Whybukalo from '../Component/Whybukalo';
import Blogone from '../Component/Blogone';
import Blogtwo from '../Component/Blogtwo';
import Blogthree from '../Component/Blogthree';

import Home from './Home';

const Container=()=>{
    return(
        <>
           <BrowserRouter> <Header/>
           <Switch>
           <Route exact path="/" component={Home}></Route>
           <Route exact path="/home" component={Home}></Route>
           <Route exact path="/about" component={Aboutus}></Route>
           <Route exact path="/homeblog" component={HomeBlog}></Route>
           <Route exact path="/facts" component={Facts}></Route>
           <Route exact path="/product" component={Product}></Route>
           <Route exact path="/testimonial" component={Testimonial}></Route>
           <Route exact path="/contactme" component={Contactme}></Route>
           <Route exact path="/whybukalo" component={Whybukalo}></Route>
           <Route exact path="/topbrands" component={Topbrands}></Route>
           <Route exact path="/blogone" component={Blogone}></Route>
           <Route exact path="/blogtwo" component={Blogtwo}></Route>
           <Route exact path="/blogthree" component={Blogthree}></Route>

           <Redirect to="/" />     
           </Switch>
           </BrowserRouter>   
    </>
    )
};
export default Container;




    
       
            
//    </Switch>  <br/><Footers/><Footerstrip/><Chatwidget/>


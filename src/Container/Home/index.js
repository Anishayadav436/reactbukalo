import React from 'react';
import Aboutus from '../../Component/Aboutus';
import Banner from '../../Component/Banner';
import Contactme from '../../Component/Contactme';
import Facts from '../../Component/Facts';
import Header from '../../Component/Header';
import HomeBlog from '../../Component/HomeBlog';
import Testimonial from '../../Component/Testimonial';
import Topbrands from '../../Component/Topbrands';
import Whybukalo from '../../Component/Whybukalo';


const Home=()=>{
    return(
        <div >
         <Header/>
         <Banner/>
         <Aboutus/>
         <Topbrands/>
         <Whybukalo/>
         <Testimonial/>
         <Facts/>
         <HomeBlog/>
         <Contactme/>

        </div>
    )
};
export default Home;
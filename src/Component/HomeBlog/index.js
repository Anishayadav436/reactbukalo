import React from 'react';
import './style.css';
import Homeblogsrc from '../Homeblogsrc';
import blog1 from '../../Images/blog1.jpg';
import blog2 from '../../Images/blog2.jpg';
import blog3 from '../../Images/blog3.jpg';



const HomeBlog=(props)=>{
    return(
        <div className="Cards " id="blog">
      
        <h4 className="happen py-5  mb-2">BLOGS</h4>
                
      
<div className="desktop_blog px-5">
          <div class="containers px-5 ">
<div class="row px-5 mb-3">
<div class="col-sm mb-5">
  <Homeblogsrc imgsrc={blog2} title="Weight Loss Products Helps in Weight Loss?" 
  blogtext="BY ADMIN | JUN 29, 2020 | UNCATEGORIZED"
          blogtext="Confusion is the common cause behind procrastination about many a thing. We often delay the time of action because we are not sure about our decision at that point of time. Similarly, in bodybuilding, the choice of the supplement is one of the major decision for..."
        //    visit="https://gogxn.com/all-you-need-to-know-about-gxn-pure-whey-protein/"
           visit="/blogone"
           btnname="Read More"
/>
  </div>
  <div class="col-sm mb-3">
  <Homeblogsrc imgsrc={blog1} title="Role of Protein Supplement in Bodybuilding" 
          blogtext="An intense workout must be a part of our daily activity. This is not limited to muscle size growth and muscular physique, it increase your work efficiency and boost mental stability. There are numerous benefits of workout, but there is some requirement of our body as..."
        //    visit="https://gogxn.com/why-do-we-need-pre-workout-supplement-for-bodybuilding/"
        visit="/blogtwo"
         btnname="Read More"/>
  </div>

  <div class="col-sm mb-3">
  <Homeblogsrc imgsrc={blog3} title="What Is The Role Of Mass Gainer In Bodybuilding" 
          blogtext="If you’re Looking for the best mass gainer in India, then this blog is going to be very helpful for you. Here we have described all the essential points we need to know before we use mass gainer supplement for body building. Look, we know that we go for..."
        //    visit="https://gogxn.com/how-fat-burner-like-hyper-ripped-work/"
        visit="blogthree"
          btnname="Read More"/>
  </div>
 
</div>
</div></div>



<div className="mobile_blog" id="blog">
          <div class="containers  ">
<div class="row  mb-3">
<div class="col-sm mb-4">
  <Homeblogsrc imgsrc={blog2} title="Weight Loss Products Helps in Weight Loss?" 
  blogtext="BY ADMIN | JUN 29, 2020 | UNCATEGORIZED"
          blogtext="Confusion is the common cause behind procrastination about many a thing. We often delay the time of action because we are not sure about our decision at that point of time. Similarly, in bodybuilding, the choice of the supplement is one of the major decision for..."
           visit="https://gogxn.com/all-you-need-to-know-about-gxn-pure-whey-protein/"
           btnname="Read More"
/>
  </div>
  <div class="col-sm mb-4">
  <Homeblogsrc imgsrc={blog1} title="Role of Protein Supplement in Bodybuilding" 
          blogtext="An intense workout must be a part of our daily activity. This is not limited to muscle size growth and muscular physique, it increase your work efficiency and boost mental stability. There are numerous benefits of workout, but there is some requirement of our body as..."
           visit="https://gogxn.com/why-do-we-need-pre-workout-supplement-for-bodybuilding/" btnname="Read More"/>
  </div>

  <div class="col-sm mb-4">
  <Homeblogsrc imgsrc={blog3} title="What Is The Role Of Mass Gainer In Bodybuilding" 
          blogtext="If you’re Looking for the best mass gainer in India, then this blog is going to be very helpful for you. Here we have described all the essential points we need to know before we use mass gainer supplement for body building. Look, we know that we go for..."
           visit="https://gogxn.com/how-fat-burner-like-hyper-ripped-work/"
          btnname="Read More"/>
  </div>
 
</div>
</div></div>
</div>
    )
};
export default HomeBlog;
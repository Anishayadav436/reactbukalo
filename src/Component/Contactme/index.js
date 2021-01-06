import React from 'react';
import './style.css';
const Contactme=()=>{
    return(<div className="contact_me" id="contact">
    <div class="container contact py-5 ">
		<h1 >Contact Us</h1>
		<b>    <hr className="contact_lining" /></b> 
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
            <div className="contact_add mt-5" >
       
    
    <div class="col-sm">
        <h3>Visit Us</h3>
        <p>Office No. : 204, I Block, Palam Vihar, Major Sushil Aima Marg, Sector 1, Gurugram, Haryana</p>
    </div>
<br/>
    <div> 
        <h3>Call Us</h3>
        <p>+91-80106 25625</p>
    </div>
    <br/>
    <div> 
        <h3>Email Us</h3>
        <p>support@bukalo.in</p>
    </div>

    </div>
    </div>
				
			
		</div>
		<div class="col-md-9">
			<div class="contact-form">
				<div class="form-group">
				  <label class="control-label col-sm-12" for="fname">Name:</label>
				  <div class="col-sm-10">          
					<input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-12" for="number">Contact Number:</label>
				  <div class="col-sm-10">          
					<input type="number  " class="form-control" id="number" placeholder="Enter Contact Number" name="number"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-12" for="email">Email:</label>
				  <div class="col-sm-10">
					<input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-12" for="comment">Comment:</label>
				  <div class="col-sm-10">
					<textarea class="form-control" rows="5" id="comment"></textarea>
				  </div>
				</div>
				<div class="form-group">        
				  <div class="col-sm-offset-2 col-sm-2">
					<button type="submit" class="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div></div>
    )
};
export default Contactme;
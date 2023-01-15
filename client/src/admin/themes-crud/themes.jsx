import React from 'react'
import  Axios from 'axios';

import './themes.css'

const Themes = () => {

var name='';
var css_path='';
var type='';
var description='';
var img_path='';

  const  handleSubmit = (event) => {
    event.preventDefault();
     name =event.target.name.value;
     css_path =event.target.css_path.value;
     type =event.target.type.value;
     description =event.target.description.value;
     img_path ='./imgs/sidebarC.png';
    // console.log(event.target.files.value);  

    Axios.post('http://localhost:8000/admin/login/themes/',{

      css_path:css_path,
      name:name,
      type:type,
      description:description,
      img_path:img_path

    }).then((response)=>{
      console.log(response.data);
    });


    
  };



  return (
    <div className='main-content'><div className="container">
    <form onSubmit={handleSubmit} method='POST'>
 
    <div className="inputs">
      <label>Theme Name</label>
      <input type="text" placeholder="Theme Name" name='name' />
     <div classNameName="inputs">
      <label>Css Path</label>
      <input type="input" placeholder='Css Path' name='css_path'/>
     </div>
     <div className="inputs">
      <label>Type</label>
      <input type="input" placeholder='Type' name='type' />
     </div>
     <div className="inputs">
      <input type="hidden" value='Start by choosing our beautifully crafted presets, then you can head over to Customize tab to futher tweak it.' placeholder='Discription' name='description' />
     </div>
     {/* <div className="inputs">
      <label>Upload Image</label>
      <input type="file"  name='img_path' />
     </div> */}
       
       <button type="submit"
    className="sub_btn">Submit</button>
    </div>
  </form>
  </div>
        
    </div>
  )
}

export default Themes
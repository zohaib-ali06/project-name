import React from 'react'
import './model.css'
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import  Axios from 'axios';
// import imgs from '../logo.svg';

const Model = (props) => {

  const [themes_data, setthemes_data] = useState([]);
  const [scripttag, setscripttag] = useState([]);
  var theme_name='';
  var loc_id='';

  useEffect(()=>{

    getthemesdata();
  // Axios.get(`http://localhost:8000/admin/login/themedata/:1234`)
  // .then(res => {
  //   setthemes_data (res.data);
  //   //  console.log(themes_data);
  // }).catch(err => console.log(err))

},[])

const getthemesdata =async () =>{

const response= await Axios.get(`http://localhost:8000/admin/login/themedata/:1234`);

if(response.status===200){
  setthemes_data(response.data);
}


};

console.log(themes_data);

  const [value, setValue] = React.useState('1');

 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const select_theme =(themeid,locid) => () => {
    theme_name=themeid;
    loc_id=locid;
    setscripttag("<script src='http://127.0.0.1:5502/server/public/js/"+loc_id+".js'></script>")

    console.log(theme_name);
    console.log(loc_id);

     Axios.post('http://localhost:8000/theme/',{

      theme_name:theme_name,
      loc_id:loc_id

    }).then((response)=>{
      console.log(response.data);
    });


  };
  
  return (


    <div>
      <div className="main">

      </div>

      <div class="modal fade " id={props.dataid} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true p-0">
        <div class="modal-dialog border-0 m-0 p-0" >
          <div class="modal-content border-0 p-0 m-0">
            <div class="border-0 header m-0 p-0 ">


             
                <button type="button" class="close mr-2 " data-dismiss="modal" aria-label="Close">

                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
           

              <div></div>




            </div>
            <div class="modal-body border-0 p-0 m-0">
              <div className=" model-tabs p-0 m-0">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList  className='tabs-wrapper pb-3  pl-4' onChange={handleChange} aria-label="lab API tabs example">
                        <Tab className='tabs'  label="Templates" value="1" />
                        <Tab className='tabs' label="Customizations" value="2" />
                      </TabList>
                    </Box>
                    <TabPanel value="1" className=' p-0'>
                      <div className="row ">
                        <div className="col-md-12  main-heading">
                          <h2>Sidebar Theme</h2>
                        </div>
                      </div>
                    <div className="content-wrapper mt-5">
                    {themes_data.map((themedata) =>(

                    <div className="row mb-5 ">
                         <div className="col-md-9 pt-5 pl-4 pb-5 img-wrapper">

                       <div className="row">
                       <div className="col-md-6">
                         <img src={themedata.img_path}   alt="" />
                         </div>
                         <div className="col-md-6 d-flex flex-column mt-3">
                        <h4>
                          {themedata.name}
                        </h4>
                        <p className='mt-4'> {themedata.description}</p>

                        <div className='arialabel'>

                    {scripttag}

                   </div>

                        <button className='btn btn-primary mt-5' onClick={select_theme(themedata.name ,'rYjkcYslT4o55rjfwJlI')}>set</button>

                  


                         </div>
                       </div>
                         </div>
                        
                        
                      </div>
                         ))}

                    
                    </div>
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                  </TabContext>
                </Box>


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model
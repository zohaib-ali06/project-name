
import * as React from 'react'
import './firstslider.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FirstSlider = () => {

  const [SliderCustomizationvalue, setSliderCustomizationvalue] = React.useState('')



  const SliderCustomization = (value) => () => {

    setSliderCustomizationvalue(value);
    console.log(SliderCustomizationvalue);

  }


  return (
    <div>

      <div>

        <div className="row">
          <div className="col-md-12">
            <h5 className='tabs-heading mt-4 ml-4'>slides</h5>
          </div>

        </div>

        <div className="row mt-2 tabs-content ml-4 mt-3 mr-4" onClick={SliderCustomization('FirstSlider')}>
          <div className="col-md-12   ">
            <div className="row">

              <div className="col-md-3 pt-2">
                <img src='https://www.ncronline.org/files/raimond-klavins-UvWx67Ivqe0-unsplash%20CROP.jpg' height={45} width={60} class="d-block " alt="..." />

              </div>
              <div className="col-md-6 m-0 p-0 mt-3 ">
                <span>second slide label</span>
              </div>

              <div className="col-md-1  mt-3 tabs-icon">
                <ContentCopyIcon />
              </div>

              <div className="col-md-1  mt-3 tabs-icon">
                <DeleteIcon />
              </div>


            </div>

          </div>

        </div>
      </div>



      <div>


        <div className="row m-0 p-0">
          <div className="col-md-12 m-0 p-0  customization-top-heading">
            <span className='topbar'>
              <ArrowBackIcon className='ml-3 mr-3 icon' onClick={SliderCustomization('')} />
              Slides
            </span>
          </div>
        </div>


        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 mt-3 ml-4 ">

                <span className='disc-heading'>IMAGE OR VIDEO</span>

              </div>
            </div>
            <div className="row">
              <div className="col-md-10 ml-5 mr-5 mt-4 dis-para-main">

                <p className='dis-para'>High resolution images may affect the loading speed of the widget. We do not process the images you upload, so please be advised to optimize them before uploading to the widget.</p>

                <input type="file" />

              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 slider-btn-cust">
            <div className="row ml-3">
              <div className="col-md-12">
                <label htmlFor="LINK (OPTIONAL)">LINK (OPTIONAL)</label>

              </div>
            </div>
            <div className="row ml-3">
              <div className="col-md-12">
                <input type="text" />

              </div>
            </div>

          </div>
        </div>


        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row" >
              <div className="col-md-9 ml-5 sub-customization " onClick={SliderCustomization('Content')}>

                <div className="row">
                  <div className="col-md-6 content">Content</div>
                  <div className="col-md-6 m-0 p-0 icon pr-2"><ArrowForwardIosIcon className='' /></div>
                </div>

              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-9 ml-5 sub-customization" onClick={SliderCustomization('Image Effect')}>

                <div className="row">
                  <div className="col-md-6 content">Image Effect</div>
                  <div className="col-md-6 m-0 p-0 icon pr-2"><ArrowForwardIosIcon className='' /></div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>



      <div className={SliderCustomizationvalue == "Content" ? '' : 'd-none'}>
        <div className="row m-0 p-0">
          <div className="col-md-12 m-0 p-0  customization-top-heading">
            <span className='topbar'>
              <ArrowBackIcon className='ml-3 mr-3 icon' onClick={SliderCustomization('FirstSlider')} />
              Content
            </span>
          </div>
        </div>
      </div>
      <div className={SliderCustomizationvalue == "Image Effect" ? '' : 'd-none'}>
        <div className="row m-0 p-0">
          <div className="col-md-12 m-0 p-0  customization-top-heading">
            <span className='topbar'>
              <ArrowBackIcon className='ml-3 mr-3 icon' onClick={SliderCustomization('FirstSlider')} />
              Image Effect
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSlider



























import * as React from 'react'
import './slides.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slides = (props) => {

  const [SliderCustomizationvalue, setSliderCustomizationvalue] = React.useState('')



  const SliderCustomization = (value) => () => {

    setSliderCustomizationvalue(value);
    console.log(SliderCustomizationvalue);

  }


  return (
    <div>

      <div>

        <div className="row">
          <div className="col-md-12">
            <h5 className='tabs-heading mt-4 ml-4'>slides</h5>
          </div>

        </div>

        <div className="row mt-2 tabs-content ml-4 mt-3 mr-4" onClick={SliderCustomization(props.name)}>
          <div className="col-md-12   ">
            <div className="row">

              <div className="col-md-3 pt-2">
                <img src={props.src} height={45} width={60} class="d-block " alt="..." />

              </div>
              <div className="col-md-6 m-0 p-0 mt-3 ">
                <span>{props.label}</span>
              </div>

              <div className="col-md-1  mt-3 tabs-icon">
                <ContentCopyIcon />
              </div>

              <div className="col-md-1  mt-3 tabs-icon">
                <DeleteIcon />
              </div>


            </div>

          </div>

        </div>
      </div>
      
      <div>
        <div className="row m-0 p-0">
          <div className="col-md-12 m-0 p-0  customization-top-heading">
            <span className='topbar'>
              <ArrowBackIcon className='ml-3 mr-3 icon' onClick={SliderCustomization('')} />
              Slides
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 mt-3 ml-4 ">

                <span className='disc-heading'>IMAGE OR VIDEO</span>

              </div>
            </div>
            <div className="row">
              <div className="col-md-10 ml-5 mr-5 mt-4 dis-para-main">

                <p className='dis-para'>High resolution images may affect the loading speed of the widget. We do not process the images you upload, so please be advised to optimize them before uploading to the widget.</p>

                <input type="file" />

              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 slider-btn-cust">
            <div className="row ml-3">
              <div className="col-md-12">
                <label htmlFor="LINK (OPTIONAL)">LINK (OPTIONAL)</label>

              </div>
            </div>
            <div className="row ml-3">
              <div className="col-md-12">
                <input type="text" />

              </div>
            </div>

          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row" >
              <div className="col-md-9 ml-5 sub-customization " onClick={SliderCustomization('Content')}>

                <div className="row">
                  <div className="col-md-6 content">Content</div>
                  <div className="col-md-6 m-0 p-0 icon pr-2"><ArrowForwardIosIcon className='' /></div>
                </div>

              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-9 ml-5 sub-customization" onClick={SliderCustomization('Image Effect')}>

                <div className="row">
                  <div className="col-md-6 content">Image Effect</div>
                  <div className="col-md-6 m-0 p-0 icon pr-2"><ArrowForwardIosIcon className='' /></div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>
      
      <div className={SliderCustomizationvalue == "Content" ? '' : 'd-none'}>
        <div className="row m-0 p-0">
          <div className="col-md-12 m-0 p-0  customization-top-heading">
            <span className='topbar'>
              <ArrowBackIcon className='ml-3 mr-3 icon' onClick={SliderCustomization('FirstSlider')} />
              Content
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slides
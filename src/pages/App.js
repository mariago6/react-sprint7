import React from 'react'
import { useState, useEffect } from 'react';
import {PanellBox, TextTotalPrice} from '../styled'
import Panell from '../components/Panell';
import Navbar from '../components/Navbar';


function App() {
  const [formData, setFormData] = useState( 
    JSON.parse(window.localStorage.getItem('count')) ||
    {web: false, seo: false, ads: false, pages: 1, languages: 1}
  ); 

  const [totalPrice, setTotalPrice] = useState(0); 

  function handleChange(event) {
    const {name, type, value, checked} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value 
    }));
  }  

  useEffect(() => {
    const price = (formData.web && (500 + (formData.pages * formData.languages * 30))) + (formData.seo && 300) + (formData.ads && 200 ); 
    setTotalPrice(prevTotalPrice => prevTotalPrice = price); 
    window.localStorage.setItem("count", JSON.stringify(formData));
  }, [formData]);

  return (
    <form>
      <Navbar />
      <div className='app'>
        <h3>What do you want to do?</h3>
        <input 
            type="checkbox" 
            id='web'
            checked={formData.web}
            onChange={handleChange}
            name='web'
        />
        <label htmlFor="web">A website (500€)</label>
        <br />
        <br />
        <div>
          {formData.web && 
            <PanellBox>
              <Panell 
                text='Total number of pages' 
                name='pages' 
                onChange={handleChange} 
                value={formData.pages} 
                onClickAdd={() => setFormData(prevFormData => ({ ...prevFormData, pages: prevFormData.pages + 1}))} 
                onClickSub={() => formData.pages > 1 && setFormData(prevFormData => ({ ...prevFormData, pages: prevFormData.pages - 1}))}
              />
              <Panell 
                text='Number of languages' 
                name='languages' 
                onChange={handleChange} 
                value={formData.languages}
                onClickAdd={() => setFormData(prevFormData => ({ ...prevFormData, languages: prevFormData.languages + 1}))} 
                onClickSub={() => formData.languages > 1 && setFormData(prevFormData => ({ ...prevFormData, languages: prevFormData.languages - 1}))}
              />
            </PanellBox>
          }
        </div>
        <input 
            type="checkbox" 
            id='seo'
            checked={formData.seo}
            onChange={handleChange}
            name='seo'
        />
        <label htmlFor="seo">A SEO consultancy (300€)</label>
        <br />
        <br />
        <input 
            type="checkbox" 
            id='ads'
            checked={formData.ads}
            onChange={handleChange}
            name='ads'
        />
        <label htmlFor="ads">A Google Ads campaign (200€)</label>
        <br />
        <br />
        <TextTotalPrice>Total price: {totalPrice}€</TextTotalPrice>
      </div>
    </form>
  )
}

export default App;

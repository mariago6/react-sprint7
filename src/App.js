import React from 'react'
import { useState, useEffect } from 'react';
import {PanellBox} from './styled'
import Panell from './components/Panell';


function App() {
  const [formData, setFormData] = useState(
    {web: false, seo: false, ads: false, pages: 1, languages: 1}
  )

  function handleChange(event) {
    const {name, type, value, checked} = event.target;
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }
    })
  } 

  const [totalPrice, setTotalPrice] = useState(0); 

  useEffect(() => {
    const price = (formData.web && (500 + (formData.pages * formData.languages * 30))) + (formData.seo && 300) + (formData.ads && 200 ); 
    return setTotalPrice(prevTotalPrice => prevTotalPrice = price); 
  }, [formData.web, formData.seo, formData.ads, formData.pages, formData.languages]);

  return (
    <form>
        <h4>What do you want to do?</h4>
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
              <Panell text='Number of pages' name='pages' onChange={handleChange} value={formData.pages}/>
              <Panell text='Number of languages' name='languages' onChange={handleChange} value={formData.languages}/>
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
        <p>Total price: {totalPrice}€</p>
    </form>
  )
}

export default App;

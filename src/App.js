import React from 'react'
import { useState, useEffect } from 'react';


function App() {
  const [formData, setFormData] = useState(
    {web: false, seo: false, ads: false}
)

function handleChange(event) {
    const {name, checked} = event.target;
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: checked
        }
    })
}

const [totalPrice, setTotalPrice] = useState(0); 

useEffect(() => {
    const price = (formData.web ? 500 : 0) + (formData.seo ? 300 : 0) + (formData.ads ? 200 : 0); 
    return setTotalPrice(prevTotalPrice => prevTotalPrice = price); 
}, [formData.web, formData.seo, formData.ads]);

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

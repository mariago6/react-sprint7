import React from 'react'
import { useState, useEffect } from 'react';
import {PanellBox, TextTotalPrice, BudgetButton, Table, TableStructure, TableTitles} from '../styled'
import Panell from '../components/Panell';
import Navbar from '../components/Navbar';
import TableBudget from '../components/TableBudget';


function App() {
  const [formData, setFormData] = useState( 
    JSON.parse(window.localStorage.getItem('count')) ||
    {budget: '', client: '', web: false, seo: false, ads: false, pages: 1, languages: 1}
  ); 

  const [totalPrice, setTotalPrice] = useState(0); 
  const [showBudget, setShowBadget] = useState(false); 
  const [totalBudget, setTotalBudget] = useState([]); 

  function handleChange(event) {
    const {name, type, value, checked} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value 
    }));
  }  

  function budgetList() {
    setTotalBudget(prevTotalBudget => [...prevTotalBudget, {budget: formData.budget, client: formData.client, price: totalPrice, time: new Date().toLocaleDateString('es-ES')}])
    setShowBadget(prevShowBadget => prevShowBadget = true)
  }; 

  const newTotalBudget = totalBudget.map((bud, index) => {
    return(
      <TableBudget 
        key={index}
        budget={bud.budget}
        client={bud.client}
        price={bud.price}
        time={bud.time}
      />
    )
  })

  useEffect(() => {
    const price = (formData.web && (500 + (formData.pages * formData.languages * 30))) + (formData.seo && 300) + (formData.ads && 200 ); 
    setTotalPrice(prevTotalPrice => prevTotalPrice = price); 
    window.localStorage.setItem("count", JSON.stringify(formData));
  }, [formData]);

  return (
    <form>
      <Navbar />
      <main className='main'>
        <div className='app'>
          <h4>Register</h4>
          <div>
            <label>Budget name: </label>
            <input
              type='text'
              placeholder='budget name'
              onChange={handleChange}
              name='budget'
              value={formData.budget}
            />
          </div>
          <br />
          <div>
            <label>Client name: </label>
            <input
              type='text'
              placeholder='client name'
              onChange={handleChange}
              name='client'
              value={formData.client}
            />
          </div>
          <br />
          <h4>What do you want to do?</h4>
          <br />
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
                  text='Total number of pages&nbsp; &nbsp; &nbsp; &nbsp;' 
                  name='pages' 
                  onChange={handleChange} 
                  value={formData.pages} 
                  onClickAdd={() => setFormData(prevFormData => ({ ...prevFormData, pages: prevFormData.pages + 1}))} 
                  onClickSub={() => formData.pages > 1 && setFormData(prevFormData => ({ ...prevFormData, pages: prevFormData.pages - 1}))}
                  textInformation='This component indicates the number of pages that your website will have. The current number of pages is: '
                />
                <Panell 
                  text='Total number of languages ' 
                  name='languages' 
                  onChange={handleChange} 
                  value={formData.languages}
                  onClickAdd={() => setFormData(prevFormData => ({ ...prevFormData, languages: prevFormData.languages + 1}))} 
                  onClickSub={() => formData.languages > 1 && setFormData(prevFormData => ({ ...prevFormData, languages: prevFormData.languages - 1}))}
                  textInformation='This component indicates the number of languages that your website will have. The current number of languages is: '
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
          <BudgetButton type='button' onClick={budgetList}>Add budget</BudgetButton>
        </div>
        <div className='table'>
          {showBudget &&
            <Table>
              <TableStructure>
                <TableTitles>Budget name</TableTitles>
                <TableTitles>Client name</TableTitles>
                <TableTitles>Total price</TableTitles>
                <TableTitles>Date</TableTitles>
              </TableStructure>
              {newTotalBudget}
            </Table> 
          }
          
        </div>
      </main>
    </form>
  )
}

export default App;

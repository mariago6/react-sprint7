import React from 'react'
import { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';
import {PanellBox, TextTotalPrice, BudgetButton, Table, TableTitles, ButtonOrder, ButtonReset, KeywordFilter, ButtonDelete} from '../styled'
import Panell from '../components/Panell';
import Navbar from '../components/Navbar';
import TableBudget from '../components/TableBudget';


function App() {
  const [params, setParams] = useSearchParams();  
  const URLParams = params.toString().length > 0 ? getParams() : null;
  const localData =  JSON.parse(localStorage.getItem('count')); 
  const defaultData = {index: 0, budget: '', client: '', web: false, seo: false, ads: false, pages: 1, languages: 1}; 
  const [formData, setFormData] = useState(URLParams ? URLParams : localData ? localData : defaultData); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const [showBudget, setShowBadget] = useState(false); 
  const [totalBudget, setTotalBudget] = useState(JSON.parse(localStorage.getItem("list")) || []); 
  const [filterTotalBudget, setFilterTotalBudget] = useState([]);  
  const [keywordFilter, setKeywordFilter] = useState('');


  function handleChange(event) {
    const {name, type, value, checked} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value 
    }));
  }  

  function budgetList() {
    setTotalBudget(prevTotalBudget => [...prevTotalBudget, {index: prevTotalBudget.length,budget: formData.budget, client: formData.client, price: totalPrice, time: new Date().toLocaleDateString('es-ES')}])
    setShowBadget(prevShowBadget => prevShowBadget = true);
  }; 

  function sortButtonAsc(index) {
    let orderBudgetList = [...totalBudget];
    if(index === 0) {
      orderBudgetList.sort((a, b) => Number(a.index) - Number(b.index));
    } else if(index === 1) {
        orderBudgetList.sort((a, b) => a.budget.toLowerCase() > b.budget.toLowerCase() ? 1 : -1);
    } else if(index === 2) {
        orderBudgetList.sort((a, b) => a.client.toLowerCase() > b.client.toLowerCase() ? 1 : -1);
    } else if (index === 3) {
        orderBudgetList.sort((a, b) => Number(a.price) - Number(b.price));
    } else if(index === 4) {
        orderBudgetList.sort((a, b) => Number(a.time) - Number(b.time));
    }
    setTotalBudget(orderBudgetList); 
  }

  function sortButtonDesc(index) {
    let orderBudgetList = [...totalBudget];
    if(index === 1) {
      orderBudgetList.sort((a, b) => b.budget.toLowerCase() > a.budget.toLowerCase() ? 1 : -1);
    } else if(index === 2) {
      orderBudgetList.sort((a, b) => b.client.toLowerCase() > a.client.toLowerCase() ? 1 : -1);
    } else if(index === 3) {
      orderBudgetList.sort((a, b) => Number(b.price) - Number(a.price)); 
    } else if (index === 4) {
      orderBudgetList.sort((a, b) => Number(b.time) - Number(a.time)); 
    }
    setTotalBudget(orderBudgetList); 
  }

  const filter = (key) => {
    const keyword = key.target.value;
    let filterBudgetList = [...totalBudget];
    if(keyword !== '') {
      const result = filterBudgetList.filter(bud => bud.budget.toLowerCase().startsWith(keyword.toLowerCase()));
      setFilterTotalBudget(result); 
    } else {
      setFilterTotalBudget(filterBudgetList)
    }
    setKeywordFilter(keyword); 
  }

  function loadTableBudget(list) {
    return list.map((bud, index) => {
      return(
        <TableBudget 
          key={index}
          budget={bud.budget}
          client={bud.client}
          price={bud.price}
          time={bud.time}
        />
      )
    });
  }

  function deleteTable() {
    setTotalBudget(prevTotalBudget => prevTotalBudget = []); 
  }

  function getParams() {
    const paramsBudget = {index: 0, budget: '', client: '', 
      web: params.get('web') === 'true', seo: params.get('seo') === 'true', ads: params.get('ads') === 'true', pages: 1, languages: 1};
    paramsBudget.pages = (params.get('pages') ? isNaN(parseInt(params.get('pages'))) ? 1 : parseInt(params.get('pages')) : 1);  
    paramsBudget.languages = (params.get('languages') ? isNaN(parseInt(params.get('languages'))) ? 1 : parseInt(params.get('languages')) : 1); 
    return paramsBudget; 
  }


  useEffect(() => {
    const price = (formData.web && (500 + (formData.pages * formData.languages * 30))) + (formData.seo && 300) + (formData.ads && 200 ); 
    setTotalPrice(prevTotalPrice => prevTotalPrice = price); 
    localStorage.setItem("count", JSON.stringify(formData));
    localStorage.setItem("list", JSON.stringify(totalBudget)); 
    setShowBadget(totalBudget.length === 0 ? false : true); 
    setParams({
      web: formData.web, 
      seo: formData.seo, 
      ads: formData.ads, 
      pages: formData.pages, 
      languages: formData.languages
    }); 
  }, [formData, totalBudget]);



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
            <div>
              <ButtonDelete type='button' onClick={deleteTable}>Delete table</ButtonDelete>
              <Table>
                <thead>
                  <tr>
                    <TableTitles>
                      Budget name 
                      <ButtonOrder type='button' onClick={() => sortButtonAsc(1)}>↓</ButtonOrder>
                      <ButtonOrder type='button' onClick={() => sortButtonDesc(1)}>↑</ButtonOrder>
                      <br/>
                      <KeywordFilter 
                        type="search"
                        value={keywordFilter}
                        onChange={filter}
                        placeholder="Search..."
                      />
                    </TableTitles>
                    <TableTitles >Client name 
                      <ButtonOrder type='button' onClick={() => sortButtonAsc(2)}>↓</ButtonOrder>
                      <ButtonOrder type='button' onClick={() => sortButtonDesc(2)}>↑</ButtonOrder>
                      <br/>
                      <br/>
                    </TableTitles>
                    <TableTitles >Total price 
                      <ButtonOrder type='button' onClick={() => sortButtonAsc(3)}>↓</ButtonOrder>
                      <ButtonOrder type='button' onClick={() => sortButtonDesc(3)}>↑</ButtonOrder>
                      <br/>
                      <br/>
                    </TableTitles>
                    <TableTitles >Date 
                      <ButtonOrder type='button' onClick={() => sortButtonAsc(4)}>↓</ButtonOrder>
                      <ButtonOrder type='button' onClick={() => sortButtonDesc(4)}>↑</ButtonOrder>
                        <br/>
                        <br/>
                    </TableTitles>
                    <ButtonReset type='button' onClick={() => sortButtonAsc(0)}>Reset filter</ButtonReset>
                  </tr>    
                </thead>
                <tbody>
                  {keywordFilter === '' ? loadTableBudget(totalBudget) : loadTableBudget(filterTotalBudget)}
                </tbody>              
              </Table> 
            </div>
          }
        </div>
      </main>
    </form>
  )
}

export default App;

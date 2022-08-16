import styled from 'styled-components'; 

export const PanellBox = styled.div`
  border: solid;
  border-color: black; 
  border-width: 2px;
  border-radius: 8px; 
  width: 450px; 
  padding: 20px 2px; 
  margin-bottom: 20px;
  text-align: center;
`
export const TextBox = styled.label`
  margin: 10px; 
`
export const Box = styled.input`
  margin: 10px;
  width: 30px; 
  border: none; 
  font-size: 15px;
  text-align: center;
`
export const Button = styled.button`
  background-color: #DF7861; 
  color: white; 
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px; 
  cursor:pointer; 
  font-size: 25px; 
`

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: #DF7861;
  color: white; 
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  font-size: 20px; 
  margin: 0;
`

export const NavUl = styled.ul`
  display: flex;
  padding: 0;
`

export const NavLi = styled.li`
  list-style-type: none;
  margin: 0 1rem;
  color: white; 
`

export const TextTotalPrice = styled.p`
  font-size: 18px;
  border: solid;
  border-width: 5px;
  border-color: #DF7861; 
  border-radius: 8px; 
  width: 140px;
  padding: 10px;
  background-color: white;
`

export const WelcomeBox = styled.div`
  margin: 30px; 
  display: flex;
  justify-content: space-evenly;
`

export const WelcomeTitle = styled.h1`
  font-size: 50px;  
`

export const WelcomeText = styled.p`
  font-size: 20px;
`

export const WelcomeFondo = styled.div`
  height: 620px;
  align-items: center;
`

export const WelcomeImage = styled.img`
  object-fit: cover;
  width: 40%;
  height: 40%;
  border-radius: 8px; 
`

export const InfoButton = styled.input`
  margin: 5px; 
  border: none;
  border-radius: 50%; 
  color: white; 
  background-color: #CFD2CF; 
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 11;
  color: white;
  text-align: center;
  font-weight: bold;
    
`

export const PopupContainer = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const PopupBox = styled.div`
  position: fixed;
  top: 55%;
  left: 13%;
  width: 70%;
  height: auto;
  max-height: 70vh;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
  overflow: auto;
`


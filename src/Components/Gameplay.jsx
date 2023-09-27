import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import { useState } from "react";
import Rules from "./Rules";
const Gameplay = () => {
        const[score,setscore] = useState(0);
        const[selectedNumber,setselectedNumber] = useState();
        const[currentDice, setCurrentDice] = useState(1);
        const[error, seterror] = useState("");
        const[showRules,setshowRules] = useState(false);
                const generateRandomNumber = (min,max)=>{
            return Math.floor(Math.random()*(max-min)+min);
        };

        const resetScore = ()=>{
            setscore(0);
        }
    
        const rolldice =()=>{
            if(!selectedNumber){
                seterror("You have not selecred any number");
                return;
            }
          
            const randomNumber = generateRandomNumber(1,7);
            setCurrentDice((prev)=>randomNumber);
            
            if(selectedNumber === randomNumber){
                setscore((prev)=> prev+randomNumber);
            }
            else{
                setscore((prev)=>prev-2);
            }
            setselectedNumber(undefined);
        }

  return (
    <Maincontainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
        seterror={seterror}
        error={error}
        selectedNumber={selectedNumber}
        setselectedNumber={setselectedNumber}
         />
      </div>
      <RollDice
       currentDice={currentDice}
       rolldice={rolldice}

       />

       <div className="btn">
        <Outline onClick={resetScore}>Reset</Outline>
        <Button
        onClick={()=>setshowRules((prev)=>!prev)}
        >{showRules ? "Hide" : "show"} Rules</Button>
       </div>
       {showRules && <Rules/>}
    </Maincontainer>
  );
};

export default Gameplay;

const Maincontainer = styled.main`
padding-top: 17px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.btn{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    align-items: center;
    gap: 10px;
}
`;

const Button = styled.button`
  color: white;
  padding:10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  cursor:pointer;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background-color ease-in;

  &:hover{
    background-color:white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background-color ease-in;
  }
`;

const Outline = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;

   &:hover{
    background-color:black;
    border: 1px solid black;
    color: white;
    transition: 0.3s background-color ease-in;
  }
`;

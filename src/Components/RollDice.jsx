import styled from "styled-components";

const RollDice = ({rolldice,currentDice}) => {

  
  return (
    <DiceController>
      <div className="dice" onClick={rolldice}>
        <img src={`/Images/dice_${currentDice}.png`} alt="dice 1"/>
      </div>
      <p>Click on the Dice to roll</p>
    </DiceController>
  );
};

export default RollDice;

const DiceController = styled.div`
 margin-top: 48px;
 display: flex;
 flex-direction: column;
 align-items: center;
 p{
    font-size: 24px;
 }
 .dice{
    cursor: pointer;
 }
`;

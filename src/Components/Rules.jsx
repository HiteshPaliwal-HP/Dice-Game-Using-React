import styled from 'styled-components';

const Rules = () => {
  return (
   <RulesContainer>
    <h2>How to Play dice game</h2>
    <div className="text">
        <p>Select any Number</p>
        <p>Click on dice image</p>
        <p>
            after clicking on dice if selected number is equal to dice number you will get same point as dice {" "}
        </p>
        <p>if you ger wrong guess then 2 points will be deducted</p>
    </div>
   </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
 background-color: #fcf1f1;
 padding: 20px;
 margin-top: 40px;
 border-radius: 10px;
 h2{
    font-size: 24px;
 }
 .text{
    margin-top: 24px;
 }
`;
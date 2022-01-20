import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import { generateRandomHand, compareHand } from "./utils";

const INITIAL_VALUE = 'rock';

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = compareHand(nextHand, nextOtherHand); 
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (nextHistoryItem === '승리') setScore(score + bet);
    if (nextHistoryItem === '패배') setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    setBet(Number(e.target.value));
  };

  return (
    <div id="root">
      <div className="App">
        <h1 className="App-heading">가위바위보</h1>
        <Button onClick={handleClearClick}/>
        <div className="App-scores">
          <div className="Score">
            <div className="Score-num">{score}</div>
            <div className="Score-name">나</div>
          </div>
          <div className="App-versus">:</div>
          <div className="Score">
            <div className="Score-num">{otherScore}</div>
            <div className="Score-name">상대</div>
          </div>
        </div>
        <div className="Box App-box">
          <div className="Box-inner">
            <div className="App-hands">
              <div className="Hand">
                <HandIcon className="Hand-icon" value={hand}/>
              </div>
              <div className="App-versus">VS</div>
              <div className="Hand">
                <HandIcon className="Hand-icon" value={otherHand}/>
              </div>
            </div>
            <div className="App-bet">
              <span>배점</span><input type="number" value={bet} min={1} max={9} step={1} onChange={handleBetChange}/><span>배점</span>
            </div>
            <div className="App-history">
              <h2>승부기록</h2>
              <p>{gameHistory.join(',')}</p>
            </div>
          </div>   
        </div>
        <HandButton value="rock" onClick={handleButtonClick}/>
        <HandButton value="scissor" onClick={handleButtonClick}/>
        <HandButton value="paper" onClick={handleButtonClick}/>
      </div>
    </div>    
  );
}

export default App;


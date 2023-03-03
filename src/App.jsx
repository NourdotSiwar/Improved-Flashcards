// import statements 
import './App.css'; 
import React from 'react'; 
import { useState } from 'react'; 
import Donna from './images/donna.jpg'; 
import Harvey from './images/harvey.jpg'; 
import Mike from './images/mike.jpg'; 
import Jessica from './images/jessica.jpg'; 
import Louis from './images/litt.png'; 
import Rachel from './images/zane.jpg'; 

const App = () => {

  // this is an array of objects that contains the quotes and the characters
  let cardPairs = [ { question: "I prefer to appear at the exact moment I'm needed.", answer: "Donna Paulsen", image: <img src={Donna}></img> }, { question: "I know people usually better than they know themselves.", answer: "Donna Paulsen", image: <img src={Donna}></img> }, { question: "I'm sorry I don't have a photographic memory but my brain is too busy being awesome.", answer: "Donna Paulsen", image: <img src={Donna}></img> }, { question: "I'm [name]. I know everything.", answer: "Donna Paulsen", image: <img src={Donna}></img> }, { question: "When you're backed against the wall, break the goddamn thing down.", answer: "Harvey Specter", image: <img src={Harvey}></img> }, { question: "Winners don't make excuses when the other side plays the game.", answer: "Harvey Specter", image: <img src={Harvey}></img> }, { question: "I'm not a lawyer. I'm a closer.", answer: "Harvey Specter", image: <img src={Harvey}></img> }, { question: "Loyalty is a two-way street. If I'm asking for it from you, then you are getting it from me.", answer: "Harvey Specter", image: <img src={Harvey}></img> }, { question: "Rule against us if you have to, but don't tell me we don't care.", answer: "Mike Ross", image: <img src={Mike}></img> }, { question: "I don't have a tux. I'm not Bruce Wayne.", answer: "Mike Ross", image: <img src={Mike}></img> }, { question: "Whose story is looking more far fetched now?", answer: "Mike Ross", image: <img src={Mike}></img> }, { question: "Patient zero is the first person infected with the disease, not the disease itself.", answer: "Mike Ross", image: <img src={Mike}></img> }, { question: "We're at a funeral and you're quoting highlander?", answer: "Jessica Pearson", image: <img src={Jessica}></img> }, { question: "I do not respond to threats. I make them.", answer: "Jessica Pearson", image: <img src={Jessica}></img> }, { question: "Usually people don't start by washing their hands.", answer: "Jessica Pearson", image: <img src={Jessica}></img> }, { question: "Son, your ego's writing checks your body can't cash.", answer: "Jessica Pearson", image: <img src={Jessica}></img> }, { question: "Revenge is the best revenge.", answer: "Louis Litt", image: <img src={Louis}></img> }, { question: "It's not a scarf. It's one of the worlds finest pashminas.", answer: "Louis Litt", image: <img src={Louis}></img> }, { question: "Who is this stunning creature?", answer: "Louis Litt", image: <img src={Louis}></img> }, { question: "I am feeling generous. So absolutely 100%, without a doubt, go screw yourself.", answer: "Louis Litt", image: <img src={Louis}></img> }, { question: "You think this is a year-round tan?", answer: "Rachel Zane", image: <img src={Rachel}></img> }, { question: "It's like my computer is accusing me of being single.", answer: "Rachel Zane", image: <img src={Rachel}></img> }, { question: "I am pretty much a legal superhero.", answer: "Rachel Zane", image: <img src={Rachel}></img> }, { question: "I am not the goody-goody you think I am.", answer: "Rachel Zane", image: <img src={Rachel}></img> }] 

  // this is useState of streak and setStreak to keep track of streak
  const [streak, setStreak] = useState(0);

  // this is useState of longestStreak and setLongestStreak to keep track of longest streak
  const [longestStreak, setLongestStreak] = useState(0);

  // this is useState of guess and setGuess to keep track of user input
  const [guess, setGuess] = useState('');

  // this is useState of isCorrect and setIsCorrect to keep track of whether user input is correct
  const [isCorrect, setIsCorrect] = useState('');

  // this is useState of currentQuote and setCurrentQuote to keep track of current quote
  const [currentQuote, setCurrentQuote] = useState('');

  // this is useState of isDisabled and setIsDisabled to disable button
  const [isDisabled, setIsDisabled] = useState(false);

  // this is useState of isFlipped and setIsFlipped to flip card
  const [isFlipped, setIsFlipped] = useState(false); 
  const handleClick = () => { setIsFlipped(!isFlipped); }; 
  
  // this is useState of nextCard and setNextCard to keep track of next card
  const [nextCard, setNextCard] = React.useState(0); 
  const followingCard = () => { 
    setNextCard(nextCard + 1);
    setGuess('');
    setIsCorrect('');
    setIsDisabled(false);
  } 
  
  // this is useState of previousCard and setPreviousCard to keep track of previous card
  const [previousCard, setPreviousCard] = React.useState(nextCard);
  const formerCard = () => { 
    setNextCard(nextCard - 1);
    setGuess('');
    setIsCorrect('');
    setIsDisabled(false);
  }

  // this is useState of shuffledCards and setShuffledCards to shuffle cards
  const [shuffledCards, setShuffledCards] = React.useState(cardPairs);
  const shuffleCards = () => {  
    setNextCard(Math.floor(Math.random() * cardPairs.length));
    setGuess('');
    setIsCorrect('');
    setIsDisabled(false);
   }

  // this is useState of color and setColor to change color of card 
  const [color, setColor] = React.useState(''); 
  const changeColor = () => { 
    setColor(previousColor => 
      { if (cardPairs[nextCard].answer === "Donna Paulsen") { return '#ff6961' } 
      else if (cardPairs[nextCard].answer === "Harvey Specter") { return '#A7C7E7' } 
      else if (cardPairs[nextCard].answer === "Mike Ross") { return '#77DD77' } 
      else if (cardPairs[nextCard].answer === "Jessica Pearson") { return '#FFFAA0' } 
      else if (cardPairs[nextCard].answer === "Louis Litt") { return '#C3B1E1' } 
      else if (cardPairs[nextCard].answer === "Rachel Zane") { return '#F8C8DC' } 
    
    }) 
  
  } 

  // this is function to check if user input is correct
  const onCheckAnswer = () => {
    // if user input is correct, set isCorrect to correct and add 1 to streak
        if (guess === cardPairs[nextCard].answer
          || guess === cardPairs[nextCard].answer.substring(0, cardPairs[nextCard].answer.indexOf(' '))) {
              setIsCorrect("correct");
              setStreak(streak + 1);

    // if user input is wrong, set isCorrect to wrong and reset streak
        } else {
              setIsCorrect("wrong");
              if (streak > longestStreak) {
                setLongestStreak(streak);
              }
              setStreak(0);
        }
        
  }

      return( 
      
      <div className="App"> 
  
      <h1 className='title'>Who Said What? : Suits Quiz!</h1> 
      <h2><span style={{border:"1px solid white"}} className='numCard'>Number of cards: 24</span></h2> 
      <h3><span style={{border:"1px solid white"}} className='desc'> Press card to know the speaker.</span></h3> 
      
      <div className='streakDiv'>
      <h4 className='streakHeader'><span style = {{border:"1px solid white"}} className="streak">Current Streak: {streak}</span></h4>
      <h4 className='streakHeader'><span style = {{border:"1px solid white"}} className="streak">Longest Streak: {longestStreak}</span></h4>
      </div>

      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={ () => {handleClick(); changeColor();}} style={{background:color}}> 
      <div className="flip-card-inner"> 
      <div className="flip-card-front"> 
      <h2>{cardPairs[nextCard].question}</h2> 
      </div> 
      
      <div className="flip-card-back"> 
      <h2>{[cardPairs[nextCard].answer, cardPairs[nextCard].image]}</h2> 
      </div> 
      </div> 
      </div> 

    <div className="guessForm">
    <h4>Guess the answer here:</h4>
    <input
      id={isCorrect}
      value={guess}
      onChange={e => setGuess(e.target.value)}
      type="text"
      className = "textBox"
      placeholder="Place your answer here..."
      name="guess"
      />
    <button className="submitBtn" type="submit" onClick={() => {onCheckAnswer(); setIsDisabled(true)}}  disabled={isDisabled} >Submit Guess</button>

      </div>
      
      <div className="btnDiv" onClick={() => {setIsFlipped(false); setColor('white');}} > 
      <button className="btn" onClick={formerCard}>←</button>
      <button className="btn" onClick={followingCard}>→</button> 
      <button className="btn" onClick={shuffleCards}>Shuffle</button>
      </div>
       
      </div> 
      
      ) 
    } 

export default App;


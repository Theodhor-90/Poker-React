import React from 'react';
import Title from './components/Title';
import Prizes from './components/prizes/Prizes';
import Display from './components/Display';
import Main from './components/main/Main';
import { backCards } from './js/bacCards';
import Counter from './components/counter/Counter'
import Info from './components/info/Info';
import blackChip from './assets/chips/black-chip.png';
import redChip from './assets/chips/red-chip.png';
import cards from './js/cards';
import './css/style.css';
import { firstExtractions } from './js/game'

let gameParams = {
  deck: cards(),
  cardsInGame: []
}

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      cards : [
        1,2,3,4,5
      ],
      backCardIndex: 0,
      betIndex: 0,
      info: false,
      cardsInGame: []
    };
    this.setBet = this.setBet.bind(this);
    this.switchInfo = this.switchInfo.bind(this);
    this.setBackCard = this.setBackCard.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  setBet(index){
    this.setState({ betIndex: index });
  }

  switchInfo(){
    const newInfo = !this.state.info;
    this.setState({ info: newInfo })
  }

  setBackCard(newIndex){
    this.setState({ backCardIndex: newIndex })
  }

  startGame(){
    firstExtractions(gameParams);
    this.setState({ cardsInGame: gameParams.cardsInGame })
  }

  render(){
    console.log(this.state.cardsInGame)
    return (
      <div className="starter p-v-25">
        <Title blackChip={blackChip} redChip={redChip}/>
        <div className='relative'>
          <div className={`absolute back-light info ${this.state.info ? '' : 'invisible'}`}>
            <Info 
              blackChip={blackChip} 
              redChip={redChip} backCards={backCards} 
              backCardIndex={this.state.backCardIndex}
              setBackCard={this.setBackCard}/>
              <div onClick={this.switchInfo} className='close'>X</div>
          </div>
          <Prizes betIndex={this.state.betIndex}/>
          <Display />
          <Main 
            cards={this.state.cards} 
            backCard={backCards[this.state.backCardIndex]}
            reverse={backCards[3]}
            cardsInGame={this.state.cardsInGame} />
          </div>
         <Counter 
          betIndex={this.state.betIndex} 
          setBet={this.setBet} 
          switchInfo={this.switchInfo}
          startGame={this.startGame}/>
      </div>
    )
  }
}

export default App;

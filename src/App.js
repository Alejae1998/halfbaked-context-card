import './App.css';
// import initialCards from './cards-data';
import Player from './Player';
import CardList from './CardList';
// import { useState } from 'react';
import ExecutePassButton from './ExecutePassButton';
import { useGameContext } from './GameProvider';

function App() {
  const { selectedCard, playerOneHand, playerTwoHand, playerThreeHand, deck } = useGameContext();

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <player player={1} hand={playerOneHand} />
        <player player={2} hand={playerTwoHand} />
        <player player={3} hand={playerThreeHand} />
        <CardList cards={deck} player={'deck'} />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton />
        }
      </section>
    </div>
  );
}

export default App;

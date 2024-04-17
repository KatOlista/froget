import { UserSlider } from '../';
import styles from './GameItem.module.scss';
import { useDispatch } from 'react-redux';
import socket from '../../api/socket';
import { useEffect, useRef, useState } from 'react';
import { setGameId, setGameMultiplier } from '../../redux/features/gameSlice';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { setEnd } from '../../redux/features/endGameSlice';
import { setResultsOfgame } from '../../redux/features/resultsOfGameSlice';
import { deleteCurrentBet, setCurrentBet } from '../../redux/features/currentBetSlice';
import {
  Circle,
  
  WinLoseBoard,
} from '../';

export const GameItem = () => {

  const dispatch = useDispatch();

const { startGame } = useSelector(state => state.startGame);
const game= useSelector(state=>state.game.game)
const [isCircleVisible, setIsCircleVisible] = useState(false);
const [isDisplaying, setIsDisplaying] = useState(false)
const [isSuccess, setIsSuccess] = useState(true);
var resultsOfGame = useRef()
resultsOfGame.current = useSelector(state=>state.resultsOfGame.resultsOfGame)

var  endGame  = useRef()
endGame.current = useSelector(state=>state.endGame);
const [result, setResult] = useState(0)
const currentBet = useRef()

let timerId;

useEffect(() => {
if (resultsOfGame.current.isSuccess != null){
  setIsDisplaying(true);
 
  dispatch(deleteCurrentBet())

  currentBet.current = null 
  
}
  timerId = setTimeout(() => {
    console.log(resultsOfGame.current)
    setIsDisplaying(false)
    dispatch(setResultsOfgame({isSuccess:null}))
  }, 3000);

  function currentGameHandler(newData){

    setIsCircleVisible(false)
    dispatch(setGameId(newData.game_id))
    dispatch(setEnd(false))
    dispatch( setGameMultiplier( newData.current_multiplier.toFixed(2)));

   
  }
socket.on('current_game', currentGameHandler) 
function timeRemainingHandler(data){
  setIsCircleVisible(true)


}

socket.on('time_remaining',timeRemainingHandler)

function crashHandler(){
  if(currentBet.current){
    
    setResult(currentBet.price)
   
    setIsSuccess(false)

  }
  dispatch(setEnd(true))
}

socket.on('crash', crashHandler)
return ()=>{
  socket.off('current_game', currentGameHandler) 
  
socket.off('crash', crashHandler)
  socket.off('time_remaining',timeRemainingHandler)
  clearTimeout(timerId)
}
},[resultsOfGame.current.isSuccess])
currentBet.current =  useSelector(state=>state.currentBet.currentBet)

return (
    <section className={styles.game}>
      <div className={styles.game__info}>
        <p className={styles.game__ratio}>
          { game.currentMultiplier}
          <span>{ 'x'}</span>
        </p>


      </div>
      {
  isCircleVisible && !isDisplaying && (
    <div className={styles['game__circle-container']}>
      <Circle />
    </div>
  )
}


      <div className={styles['game__modale-container']}>
        
        {(isDisplaying || (currentBet.current && game && currentBet.current.round_id == game.id &&( resultsOfGame.current.isSuccess)) )&& (<WinLoseBoard isSuccess={resultsOfGame.current.isSuccess} rate={resultsOfGame.current.amount.toFixed(2)} />)}
      </div>
      <div className={cn(
          styles.game__clouds,
          { [styles.game__start]: startGame }
        )}
      >
        <div className={styles.game__cloud1} />

        <div className={styles.game__cloud2} />

        <div className={styles.game__cloud3} />

        </div>

        <div className={cn(
          styles.game__clouds,
          { [styles.game__start2]: startGame }
        )}
      >
        <div className={styles.game__cloud4} />

        <div className={styles.game__cloud5} />

        <div className={styles.game__cloud6} />

        <div className={styles.game__cloud7} />

        <div className={styles.game__cloud8} />
      </div>
      <UserSlider />
    </section>
  );
};

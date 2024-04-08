import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { socket } from './socket';

import { Header } from './components';
import { HomePage } from './pages';

/////////////////////////
import { USER } from './utils/constants';
import { setUser } from './redux/features/userSlice';


////////////////////////

export const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsConnected(true);

    dispatch(setUser(USER));
  }, []);


  // const [isConnected, setIsConnected] = useState(socket.connected);

  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);

  //     const webApp = window.Telegram.WebApp;
  //     const telegramUsername = document.querySelector('#ipAdress').value ;
  //     const ipAdress = document.querySelector('#ipAdress').value;

  //     webApp.expand();
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

  //   function onFooEvent(value) {
  //     dispatch(setUser(() => value));

  //     // setFooEvents(previous => [...previous, value]);
  //   }

  //   socket.on('connect', onConnect);
  //   socket.on('disconnect', onDisconnect);
  //   socket.on('foo', onFooEvent);

  //   return () => {
  //     socket.off('connect', onConnect);
  //     socket.off('disconnect', onDisconnect);
  //     socket.off('foo', onFooEvent);
  //   };
  // }, []);

  return (
    <div className='app'>
      {isConnected && (
        <>
          <Header />

          <main className='main'>
            <HomePage />
          </main>
        </>
      )}
    </div>
  );
};

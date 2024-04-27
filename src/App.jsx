import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { socket } from './socket';

import { Header } from './components';
import { HomePage, Screensaver, UserPage } from './pages';

/////////////////////////
import { USER } from './utils/constants';
import { setUser } from './redux/features/userSlice';
import { colors } from '@mui/material';

////////////////////////

export const App = () => {
  document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        this.blur();
    });
  });

  const [isConnected, setIsConnected] = useState(false);

  const { hasUserPage } = useSelector(state => state.hasUserPage);

  const dispatch = useDispatch();

  useEffect(() => {
    // setIsConnected(true);

    dispatch(setUser(USER));
  }, []);

  setTimeout(() => {
    setIsConnected(true)
  }, 3000);

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
      {!isConnected
        ? (<Screensaver />)
        : (
            <>
              <Header />

              <button style={{ background: 'red', width: '100px', height: '200px', display: 'block', margin: '0 auto' }}></button>

              <main className='main'>
                {!hasUserPage
                  ? (<HomePage />)
                  : (<UserPage />)
                }
              </main>
            </>
      )}
    </div>
  );
};

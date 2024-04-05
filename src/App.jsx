import { Footer } from './components';
import { Header } from './components/Header/Header';
// import { useTheme } from './hooks';

export const App = () => {
  // const { theme, setTheme } = useTheme();

  return (
    <div className='app'>
      <Header />
      
      <main className='main'>
      </main>

      <Footer />
    </div>
  );
};

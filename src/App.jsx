import { Header } from './components';
import { HomePage } from './pages';
// import { useTheme } from './hooks';

export const App = () => {
  // const { theme, setTheme } = useTheme();

  return (
    <div className='app'>
      <Header />

      <main className='main'>
        <HomePage />
      </main>
    </div>
  );
};

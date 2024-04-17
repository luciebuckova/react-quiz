import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import { useQuiz } from './contexts/QuizContext';

export default function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </Main>
    </div>
  );
}

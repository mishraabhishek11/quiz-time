import Header from "./component/Header";
import Quiz from "./component/Quiz";
import { QuizContextProvider } from "./context/QuizContext";

function App() {
  return (
    <QuizContextProvider>
      <Header />
      <main>
        <Quiz />
      </main>
    </QuizContextProvider>
  );
}

export default App;

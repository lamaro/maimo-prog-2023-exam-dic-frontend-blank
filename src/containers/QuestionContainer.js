import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";
import { useAppContext } from "@/contexts/AppContext";
import Answer from "@/components/Answer/Answer";

const QuestionContainer = ({ id }) => {
  const {
    questions,
    getAnsewers,
    actualQuestionAnswers,
    anwersLoading,
    questionDataById,
    handleStep,
    step,
  } = useAppContext();
  const questionData = questionDataById(id);

  useEffect(() => {
    if (id) {
      getAnsewers(id);
    }
  }, [id]);

  const handleSetStep = (action) => {
    handleStep(action);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {!anwersLoading && (
        <div>
          <div className='question_data'></div>
          <div className='answers_list'></div>
        </div>
      )}
      {anwersLoading && "Loading..."}
      <div className='flex justify-between items-center w-full pl-40 pr-40'>
        <button onClick={() => handleSetStep(`prev`)}>Previus Question</button>
        <button>Next question</button>
      </div>
    </main>
  );
};

export default QuestionContainer;

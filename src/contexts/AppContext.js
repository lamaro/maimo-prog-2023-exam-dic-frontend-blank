import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { insertInArray } from "@/utils";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [step, setStep] = useState(0);

  const [actualQuestionAnswers, setActualQuestionAnswers] = useState([]);
  const [anwersLoading, setAnswersLoading] = useState(true);

  const [userAnswers, setUserAnswers] = useState([]);

  const router = useRouter();

  const BASE_URL = ``;

  const getQuestions = useCallback(async () => {
    setLoading(true);
    try {
      
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  const getAnsewers = useCallback(async (questionId) => {
    setActualQuestionAnswers([]);
    setAnswersLoading(true);
    try {
      
    } catch (error) {
      console.log("ERROR NO EXISTE SHOW");
    }
  }, []);

  const questionDataById = (id) =>
    questions.find((question) => question.id === parseInt(id) && question);

  const handleStep = (action) => {
    switch (action) {
      case `prev`:
        if (step > 0) {
          setStep(step - 1);
          router.push(`/question/${questions[step - 1]?.id}`);
        }
        break;
      case `next`:
        if (step < questions.length - 1) {
          setStep(step + 1);
          router.push(`/question/${questions[step + 1]?.id}`);
        }
        break;
      case `resume`:
        router.push(`/resume`);
        break;
      default:
        break;
    }
  };

  const handleSetAnswer = (answer) => {
    
  };

  const handleResume = () => {
    // const resumeItems = 
    // return resumeItems;
  };

  return (
    <AppContext.Provider
      value={{
        questions,
        loading,
        getQuestions,
        getAnsewers,
        anwersLoading,
        actualQuestionAnswers,
        questionDataById,
        handleStep,
        step,
        handleSetAnswer,
        handleResume,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContexts must be used within a AppContextProvider");
  }
  return context;
};

export default AppContext;

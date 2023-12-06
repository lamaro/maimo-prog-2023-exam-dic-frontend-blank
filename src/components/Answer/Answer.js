import { useAppContext } from "@/contexts/AppContext";

const Answer = ({ data }) => {
  const { handleSetAnswer } = useAppContext();

  return (
    <div>
      <button onClick={() => handleSetAnswer(data)}>{data.title}</button>
    </div>
  );
};

export default Answer;

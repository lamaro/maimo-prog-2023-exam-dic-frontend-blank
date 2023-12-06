import { useAppContext } from "@/contexts/AppContext";

const Answer = ({ data }) => {
  const { handleSetAnswer } = useAppContext();

  return (
    <div>
      <button>titulo</button>
    </div>
  );
};

export default Answer;

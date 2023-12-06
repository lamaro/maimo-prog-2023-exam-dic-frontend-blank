import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useAppContext } from "@/contexts/AppContext";

const ResumeContainer = () => {
  const { handleResume } = useAppContext();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="questions_list">
        
      </div>
    </main>
  );
};

export default ResumeContainer;

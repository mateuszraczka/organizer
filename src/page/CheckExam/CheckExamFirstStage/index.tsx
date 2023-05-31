import ChooseClassField from "./ChooseClassField";
import ChooseExamField from "./ChooseExamField";
import Next from "../../../components/Next";
import { useContext } from "react";
import { CheckExamContext } from "../../../contexts/CheckExamContextProvider";

const CheckExamFirstStage = () => {
  const { handleStageChange, buttonUnlocked } = useContext(CheckExamContext);
  return (
    <>
      <article className="grid grid-cols-1 sm:grid-cols-2">
        <ChooseClassField />
        <ChooseExamField />
      </article>
      <section className="flex items-end justify-end h-full">
        <Next onClick={handleStageChange} active={buttonUnlocked}></Next>
      </section>
    </>
  );
};
export default CheckExamFirstStage;

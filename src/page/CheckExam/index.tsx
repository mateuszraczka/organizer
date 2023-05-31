import SubPageTitle from "../../components/SubPageTitle";
import { useContext } from "react";
import { CheckExamContext } from "../../contexts/CheckExamContextProvider";
import CheckExamFirstStage from "./CheckExamFirstStage";
import CheckExamSecondStage from "./CheckExamSecondStage";

const CheckExam = () => {
  const { secondStage, selectedExamData, selectedClassData } =
    useContext(CheckExamContext);

  const currentSubtitle =
    selectedExamData &&
    selectedClassData &&
    secondStage &&
    `"${selectedExamData?.name}" dla klasy "${selectedClassData?.name}"`;
  return (
    <>
      <section>
        <SubPageTitle>Sprawdzanie sprawdzianu {currentSubtitle}</SubPageTitle>
      </section>
      {!secondStage ? (
        <CheckExamFirstStage></CheckExamFirstStage>
      ) : (
        <CheckExamSecondStage></CheckExamSecondStage>
      )}
    </>
  );
};
export default CheckExam;

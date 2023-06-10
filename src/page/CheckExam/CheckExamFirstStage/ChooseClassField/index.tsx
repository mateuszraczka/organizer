import useFetch from "../../../../hooks/useFetch";
import { Class } from "../../../../types";
import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import TableField from "../../../../components/TableField";
import { useContext } from "react";
import { CheckExamContext } from "../../../../contexts/CheckExamContextProvider";

const ChooseClassField = () => {
  const { data } = useFetch({ collection_: "teachers/123/classes" });
  const classes = data as Class[];
  const { setSelectedClass } = useContext(CheckExamContext);

  const handleClassChange = (classId: string) => {
    setSelectedClass(() => classId);
  };

  return (
    <section className="flex flex-col gap-2 sm:border-r-2 border-b-2 sm:border-b-0 border-gray-200 p-3">
      <h4 className="text-center font-semibold border-b-2 border-gray-200">
        Wybierz klasę
      </h4>
      <Table colTitle1="Nazwa" colTitle2="Opis">
        {classes.length > 0 ? (
          classes.map((class_: Class, index: number) => {
            const { name, description, id } = class_;
            return (
              <TableField
                key={index}
                input1={
                  <>{name || <span className="opacity-30">Brak nazwy</span>}</>
                }
                input2={
                  <>
                    {description || (
                      <span className="opacity-30">Brak opisu</span>
                    )}
                  </>
                }
                input3={
                  <div className="flex justify-center items-center">
                    <Input
                      type="radio"
                      name="class"
                      className="w-[15px] h-[15px]"
                      onChange={() => handleClassChange(id)}
                    />
                  </div>
                }
              ></TableField>
            );
          })
        ) : (
          <tr>
            <td>
              <span className="opacity-30">Brak dostępnych klas</span>
            </td>
          </tr>
        )}
      </Table>
    </section>
  );
};
export default ChooseClassField;

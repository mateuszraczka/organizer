interface TableFieldProps {
  input1?: React.ReactNode;
  input2?: React.ReactNode;
  input3?: React.ReactNode;
  select?: React.ReactNode;
  index?: number;
}
const TableField = ({
  input1,
  input2,
  input3,
  select,
  index,
}: TableFieldProps) => {
  return (
    <tr className="border-b-2 border-gray-200 border-l-2 border-r-2">
      {index!=undefined && <td className="border-gray-200 border-l-2">{index}</td>}
      {input1 && <td className="border-gray-200 border-l-2">{input1}</td>}
      {input2 && <td className="border-gray-200 border-l-2">{input2}</td>}
      {input3 && <td className="border-gray-200 border-l-2">{input3}</td>}
      {select && <td className="border-gray-200 border-l-2">{select}</td>}
    </tr>
  );
};
export default TableField;

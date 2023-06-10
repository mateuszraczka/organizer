interface TableFieldProps extends React.HTMLAttributes<HTMLTableRowElement> {
  input1?: React.ReactNode;
  input2?: React.ReactNode;
  input3?: React.ReactNode;
  input4?: React.ReactNode;
  select?: React.ReactNode;
  index?: number;
  delete_?: React.ReactNode;
  mandatory?: boolean;
}
const TableField = ({
  input1,
  input2,
  input3,
  input4,
  select,
  index,
  delete_,
  mandatory,
  ...props
}: TableFieldProps) => {
  return (
    <tr
      className={`border-b-2 border-gray-200 border-l-2 border-r-2 ${mandatory ? "bg-red-400 hover:bg-red-500" : "even:bg-white odd:bg-slate-50 hover:bg-slate-100"}`}
      {...props}
    >
      {index != undefined && (
        <td className="flex justify-center items-center">{index}</td>
      )}
      {input1 && <td className="border-gray-200 border-l-2 break-words">{input1}</td>}
      {input2 && <td className="border-gray-200 border-l-2 break-words">{input2}</td>}
      {input3 && <td className="border-gray-200 border-l-2 break-words">{input3}</td>}
      {input4 && <td className="border-gray-200 border-l-2 break-words">{input4}</td>}
      {select && <td className="border-gray-200 border-l-2 break-words">{select}</td>}
      {delete_ && (
        <td className="border-gray-200 border-l-2 text-lg m-1 text-red-400 hover:text-red-500 cursor-pointer flex justify-center items-center">
          {delete_}
        </td>
      )}
    </tr>
  );
};
export default TableField;

interface TableFieldProps extends React.HTMLAttributes<HTMLTableRowElement> {
  input1?: React.ReactNode;
  input2?: React.ReactNode;
  input3?: React.ReactNode;
  input4?: React.ReactNode;
  select?: React.ReactNode;
  index?: number;
  delete_?: React.ReactNode;
}
const TableField = ({
  input1,
  input2,
  input3,
  input4,
  select,
  index,
  delete_,
  ...props
}: TableFieldProps) => {
  return (
    <tr
      className="border-b-2 border-gray-200 border-l-2 border-r-2 even:bg-white odd:bg-slate-50 hover:bg-slate-100"
      {...props}
    >
      {index != undefined && (
        <td className="flex justify-center items-center">{index}</td>
      )}
      {input1 && <td className="border-gray-200 border-l-2 break-all">{input1}</td>}
      {input2 && <td className="border-gray-200 border-l-2 break-all">{input2}</td>}
      {input3 && <td className="border-gray-200 border-l-2 break-all">{input3}</td>}
      {input4 && <td className="border-gray-200 border-l-2 break-all">{input4}</td>}
      {select && <td className="border-gray-200 border-l-2 break-all">{select}</td>}
      {delete_ && (
        <td className="border-gray-200 border-l-2 text-lg m-1 text-red-400 hover:text-red-500 cursor-pointer flex justify-center items-center">
          {delete_}
        </td>
      )}
    </tr>
  );
};
export default TableField;

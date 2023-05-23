interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  colTitle1?: string;
  colTitle2?: string;
  colTitle3?: string;
  colTitle4?: string;
  children: React.ReactNode;
  index?: boolean;
}

const Table = ({
  colTitle1,
  colTitle2,
  colTitle3,
  colTitle4,
  children,
  index,
  ...props
}: TableProps) => {
  return (
    <table className="w-full" {...props}>
      <thead>
        <tr className="border-b-2 border-gray-200">
          {index && <td className="font-bold">Id</td>}
          {colTitle1&&<td className="font-bold">{colTitle1}</td>}
          {colTitle2 && <td className="font-bold">{colTitle2}</td>}
          {colTitle3 && <td className="font-bold">{colTitle3}</td>}
          {colTitle4 && <td className="font-bold">{colTitle4}</td>}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
export default Table;

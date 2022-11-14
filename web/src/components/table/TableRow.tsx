import Person from "../../models/Person";
interface OwnProps {
  row: Person;
}

const TableRow = ({ row }: OwnProps) => {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.dateOfBirth}</td>
      <td>{row.country}</td>
      <td>{row.city}</td>
      <td>{row.street}</td>
    </tr>
  );
};

export default TableRow;

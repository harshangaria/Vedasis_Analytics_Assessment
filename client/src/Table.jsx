


import './Table.css';
const Table = ({ data }) => {
  return (
    <table id="customers">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

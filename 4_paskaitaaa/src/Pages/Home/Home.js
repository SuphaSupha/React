// import Table from "../../Components/Table/Table";
import TableOne from "../../Components/tableOne/TableOne";
import CustomButton from "../../Components/CustomButton/CustomButton";
import Breathe from "../../Components/Breathe/Breathe";
import Navigation from "../../Components/Navigation/Navigation";
const Home = () => {
  const tableHeadings = ["ID", "name", "surname", "email"];
  const tableData = [
    {
      id: 1,
      name: "Rokas",
      surname: "Andreik4nas",
      email: "rokas123@gmail.com",
    },
    {
      id: 2,
      name: "Edvinas",
      surname: "Vai2iunas",
      email: "1223sad@gmail.com",
    },
  ];

  const handleRowClick = (row) => {
    console.log(row);
  };
  return (
    <div>
      <Navigation />
      <h1>Orders</h1>

      <div className="table">
        {/* <Table /> */}
        <br />
        <br />
        <br />
        <br />
        <TableOne
          headings={tableHeadings}
          data={tableData}
          onRowClick={handleRowClick}
        />
        <br />
        <CustomButton>Home Button</CustomButton>
        <br />
        <Breathe />
      </div>
    </div>
  );
};

export default Home;

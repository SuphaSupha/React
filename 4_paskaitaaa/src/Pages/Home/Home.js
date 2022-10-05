import Navigation from "../../Components/Navigation/Navigation";
import Table from "../../Components/Table/Table";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Orders</h1>

      <div className="table">
        <Table />
      </div>
    </div>
  );
};

export default Home;

import Heading from "../../Components/Heading";
import Navbar from "../../Components/Navbar/Navbar";
import DefaultLayout from "../../layouts/DefaultLayout";
import Form from "../../Components/Form/Form";

const Add = () => {
  return (
    <div>
      <Navbar />
      <DefaultLayout>
        <Heading>Add Pet</Heading>
      </DefaultLayout>
      <DefaultLayout>
        <Form />
      </DefaultLayout>
    </div>
  );
};

export default Add;

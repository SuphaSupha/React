import Heading from "../../Components/Heading";
import NavigationBar from "../../Components/NavigationBar";
import DefaultLayout from "../../layouts/DefaultLayout";
import Form from "../../Components/Form/Form";

const Add = () => {
  return (
    <div>
      <NavigationBar />
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

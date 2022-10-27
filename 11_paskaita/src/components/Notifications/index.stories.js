import Notification from "./index";
import Button from "./index";

export default {
  title: "Components/Notification",
  component: Notification,
};

export const PrimaryNotification = () => (
  <Button>
    <Notification />
  </Button>
);

import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
};

export const PrimaryButton = () => <Button distance={5}>Any text here</Button>;
export const SecondaryButton = () => (
  <Button color="secondary" type="button">
    Any text here
  </Button>
);

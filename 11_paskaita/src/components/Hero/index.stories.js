import Hero from "./index";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const PrimaryHero = () => (
  <Hero type="primary" title="Primary title" subtitle="Primary subtitle" />
);
export const SecondaryHero = () => (
  <Hero
    type="secondary"
    title="Secondary title"
    subtitle="Secondary subtitle"
  />
);

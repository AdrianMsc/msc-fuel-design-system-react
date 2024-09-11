import MscAlphabeticalPager from "../components/ds/MscAlphabeticalPager";

export default {
  title: "Navigation/AlphabeticalPager",
  component: MscAlphabeticalPager,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    responsive: { control: "boolean" },
  },
};

export const mscAlphabeticalPager = {
  args: {
    responsive: false,
  },
};

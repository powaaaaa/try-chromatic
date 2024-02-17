import { Tag } from "./Tag";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tag> = {
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: "tag",
  },
};

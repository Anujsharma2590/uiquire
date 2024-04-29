import { StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "UIQUIRE/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: () => console.log("Button clicked"),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "Secondary Button",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    type: "primary",
    disabled: true,
    children: "Primary Disabled",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    type: "secondary",
    disabled: true,
    children: "Secondary Disabled",
  },
};

export const PrimaryLoading: Story = {
  args: {
    type: "primary",
    isLoading: true,
    children: "Primary Loading",
  },
};

export const SecondaryLoading: Story = {
  args: {
    type: "primary",
    isLoading: true,
    children: "Secondary Loading",
  },
};

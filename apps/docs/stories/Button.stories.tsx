import type { Meta, StoryObj } from 'storybook-solidjs'
import { within, userEvent } from '@storybook/testing-library'
import { Button } from '@khyonn/dst-solid'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click me' },
  argTypes: {
    children: { description: "What's inside the button like text or icons" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Overview: Story = {
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', {
      name: /Click me/i,
    })
    await userEvent.click(button)
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

import type { Meta, StoryObj } from 'storybook-solidjs'
import { within, userEvent } from '@storybook/testing-library'
import { Input } from '@khyonn/dst-solid'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Components/Input',
  component: Input,
  args: { placeholder: 'Type something here...' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Overview: Story = {
  args: {
    role: 'input',
  },
  parameters: {
    controls: {
      exclude: ['role'],
    },
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('input')
    await userEvent.type(input, 'Hello')
    await userEvent.clear(input)
  },
}

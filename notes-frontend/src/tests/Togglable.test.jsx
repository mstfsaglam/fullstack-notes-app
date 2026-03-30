import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Togglable from '../components/Togglable'

describe('<Togglable />', () => {
  beforeEach(() => {
    render(
      <Togglable buttonLabel="show...">
        <div>togglable content</div>
      </Togglable>
    )
  })

  test('renders its children', () => {
    screen.getByText('togglable content')
  })

  test('at start the children are not display', () => {
    const element = screen.getByText('togglable content')
    expect(element).not.toBeVisible()
  })

  test('after clicking the children are not display', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('show...')
    await user.click(button)

    const element = screen.getByText('togglable content')
    expect(element).toBeVisible()
  })

  test('toggled content can be closed', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('show...')
    await user.click(button)

    const closeButton = screen.getByText('togglable content')
    await user.click(closeButton)

    const element = screen.getByText('togglable content')
    expect(element).not.toBeVisible
  })
})
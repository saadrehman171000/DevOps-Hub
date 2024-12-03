import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
import '@testing-library/jest-dom'

jest.mock('../src/components/AuthRedirect', () => {
  return function MockAuthRedirect() {
    return <div data-testid="auth-redirect">Mock Auth Redirect</div>
  }
})

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByTestId('auth-redirect')).toBeInTheDocument()
  })
}) 
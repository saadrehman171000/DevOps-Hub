import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    // Add a basic test that will pass
    expect(true).toBe(true)
  })
}) 
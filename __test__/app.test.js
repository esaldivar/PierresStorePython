// import dependencies
import React from 'react'
import {App} from '../client/App';

// import react-testing methods
import {render, fireEvent, waitFor, screen} from 'test-utils';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'


test('find h1 with text of hello aurora', async () => {
    // Arrange
    render(<App />)
    // Act
    // Assert
    expect(screen.getByText('Hello from Auroraa'))

  })
// import dependencies
import React from 'react'
import {App} from '../client/App';

// import react-testing methods
import {render, fireEvent, waitFor, screen} from 'test-utils';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'


test('find text of Amaranth seeds', async () => {
    // Arrange
    render(<App />)
    // Act
    // Assert
    expect(screen.getByText('Item Description'))

  })
import { fireEvent, render, screen } from '@testing-library/react';
import CounterApp from '../CounterApp';

test('Simulação de incremento pelo botão', () => {
    render(<CounterApp />);
    const eventIncrement = screen.getByText('+');
    fireEvent.click(eventIncrement);
    const countDisplay = screen.getByText('1');
    expect(countDisplay).toBeInTheDocument();
});

test('Simulaçãom de decremento pelo botão', () => {
    render(<CounterApp />);
    const eventDescrement = screen.getByText('-');
    fireEvent.click(eventDescrement);
    const countDisplay = screen.getByText('-1');
    expect(countDisplay).toBeInTheDocument();
});

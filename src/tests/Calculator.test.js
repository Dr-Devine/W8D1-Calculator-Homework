import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let button0;
  let add;
  let minus;
  let divide;
  let multiply;
  let equals;
  let decimal;
  let clear;
  let runningTotal;

  beforeEach(() => {
    container = render(<Calculator/>);
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    button0 = container.getByTestId('number0');
    add = container.getByTestId('operator_add')
    minus = container.getByTestId('operator-subtract')
    divide = container.getByTestId('operator-divide')
    multiply = container.getByTestId('operator-multiply')
    equals = container.getByTestId('operator-equals')
    decimal = container.getByTestId('decimal')
    clear = container.getByTestId('clear')
    runningTotal = container.getByTestId('running-total');

  });

  it('should change running total on number enter', () => {
    // const button4 = container.getByTestId('number4');
    // const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should be able to add 1 to 4 and get 5', () => {
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  });

  it('Should be able to subtract 4 from 7 and get 3', () => {
    fireEvent.click(button7);
    fireEvent.click(minus);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('Should be able to multiply 3 by 5 and get 15', () => {
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15');
  });

  it('Should be able to divide 21 by 7 and get 3', () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('Should be able to concatenate multiple number button clicks', () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button8);
    fireEvent.click(button7);
    fireEvent.click(button9);
    fireEvent.click(button0);
    fireEvent.click(button6);
    expect(runningTotal.textContent).toEqual('2187906');
  });

  it('Should be able to chain multiple operations together', () => {
    fireEvent.click(button2);
    fireEvent.click(add);
    fireEvent.click(button8);
    fireEvent.click(divide);
    fireEvent.click(button2);
    fireEvent.click(minus);
    fireEvent.click(button1);
    fireEvent.click(multiply);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('28');
  });

  it('Should be able to clear the running total without affecting the calculation', () => {
    fireEvent.click(button7);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals);
    fireEvent.click(clear);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('28');
  });
})


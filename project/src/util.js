export const roundNumber = (number) => {
  if (Number.isInteger(parseFloat(number))) {
    return number;
  }

  return parseFloat(number).toFixed(2);
}

export const onEscKeyDown = (evt, func) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    func();
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

export const makeRightYearWordForm = (value) => {
  const stringValue = String(value);
  const lastNumber = Number(stringValue[stringValue.length - 1]);
  const secondNumber = stringValue.length > 1 ? Number(stringValue[stringValue.length - 2]) : 0;
  if (lastNumber === 1 && ((secondNumber && secondNumber !== 1) || !secondNumber)) {
    return 'год';
  } else if ((lastNumber === 2 || lastNumber === 3 || lastNumber === 4) && ((secondNumber && secondNumber !== 1) || !secondNumber)) {
    return 'года';
  }

  return 'лет';
}

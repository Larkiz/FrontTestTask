export function eraseInput({ value, setValue }) {
  return setValue((prev) => prev.slice(0, -1));
}

export const keyboardInput = (e, { value, setValue }) => {
  if (e.key === "Backspace") {
    return setValue((prev) => prev.slice(0, -1));
  }
  if (/^\d+$/.test(e.key) && value.length < 11) {
    return setValue((prev) => prev + e.key);
  }
};

export function handleInput(event, { setValue, value }) {
  if (value.length < 11) {
    return setValue((prev) => prev + event);
  }
}

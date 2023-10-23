export const KeyboardButton = ({ children, onClick, id }) => {
  return (
    <button onClick={() => onClick()} id={id} className="grid-item-style">
      {children}
    </button>
  );
};

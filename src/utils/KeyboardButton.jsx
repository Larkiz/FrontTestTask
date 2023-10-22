export const KeyboardButton = ({ children, onClick }) => {
  return (
    <button onClick={() => onClick()} className="grid-item-style">
      {children}
    </button>
  );
};

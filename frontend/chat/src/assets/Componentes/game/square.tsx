interface SquareProps {
  children: React.ReactNode;
  isSelected: boolean;
  updateBoard: (index: number) => void;
  index: number;
}
//esta constante modifica lo que contiene x y o, el contenido del tablero.
export const Square: React.FC<SquareProps> = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''} w-20 h-20 border-2 border-white rounded-5 grid place-items-center cursor-pointer text-4xl`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
 
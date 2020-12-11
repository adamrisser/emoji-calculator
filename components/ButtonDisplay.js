const ButtonDisplay = ({
  onClick,
  children,
  buttonText,
  textSize,
  height,
  id,
}) => {
  const classStr = 'bg-white border border-gray-300 rounded-lg py-2 px-4';

  return (
    <div className="flex mb-4">
      <div className="w-full">
        <div
          className={`${classStr} ${height || 'h-10 '} ${textSize || ''}`}
          id={id}
        >
          {children}
        </div>
      </div>
      <div>
        <button
          className={`${
            height || ''
          } w-12 bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="button"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ButtonDisplay;

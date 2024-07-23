const Button = ({ onClick, className, title }) => {
  return (
    <button onClick={onClick} className={`${className} bg-button`}>
      <p className='text-sm'>{title}</p>
    </button>
  );
};

export default Button;

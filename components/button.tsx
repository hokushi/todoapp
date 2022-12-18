const Button = ({ func = () => {}, title, style }) => {
    return (
      <button onClick={func} className={style}>
        {title}
      </button>
    );
  };
  
  export default Button;
  
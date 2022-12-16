const Button = ({ func = () => {}, title, style }:{func:any,title:string,style:any}) => {
    return (
      <button onClick={func} className={style}>
        {title}
      </button>
    );
  };
  
  export default Button;
  
const ButtonComponent = function (props) {
  return (
    <>
    <button 
    className={props.bgColor} 
    width={props.width} 
    style={props.style}> 

    {props.textButton} 

    </button>
    </>
  );
};

export default ButtonComponent
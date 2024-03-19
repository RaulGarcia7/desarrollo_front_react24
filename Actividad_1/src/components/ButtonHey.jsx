function ButtonHey(){

    const handleClick = () => {
        console.log("Holi");
    }

  return(
    <button onClick={handleClick}>Salude a la consola</button>
  );
}

export default ButtonHey;
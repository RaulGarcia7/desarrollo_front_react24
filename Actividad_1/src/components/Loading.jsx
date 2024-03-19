import PropTypes from "prop-types";
import ShowMessage from "./ShowMessage";

function Loading({show, loadMessage}){
    return (
    <>
      {show ? (
        <ShowMessage message={"Ahora puedes leer esto"} showMessage={true} /> 
      ) : (
        <p>{loadMessage}</p>
      )}
    </>
    );

}

Loading.propTypes = {
    show : PropTypes.bool.isRequired,
    loadMessage : PropTypes.string.isRequired
}

export default Loading;
import PropTypes from "prop-types";

function ShowMessage({message, showMessage}){

    if (showMessage){
        return (
            <p>{message}</p>
        );
    } else {
        return null;
    }
}

ShowMessage.propTypes = {
    message : PropTypes.string.isRequired,
    showMessage : PropTypes.bool.isRequired
};

export default ShowMessage;
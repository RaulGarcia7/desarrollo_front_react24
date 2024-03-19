import PropTypes from "prop-types";

function ShowName({user}) {
    return (
        <p>Nombre: {user.name}</p>
    );
}

ShowName.propTypes = {
    user : PropTypes.shape({name: PropTypes.string}).isRequired
};

export default ShowName;
import PropTypes from "prop-types";

function Greeting({title}) {
    return (
            <h1>{title}</h1>
    );
}

Greeting.propTypes = {
    title : PropTypes.string.isRequired,
};

export default Greeting;
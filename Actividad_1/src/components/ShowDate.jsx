import PropTypes from "prop-types";

function ShowDate({date}) {

    const currentDate = new Date(date);

    return (
        <span>{currentDate.toDateString()}</span>
    );
}

ShowDate.propTypes = {
    date : PropTypes.number.isRequired
};

export default ShowDate;
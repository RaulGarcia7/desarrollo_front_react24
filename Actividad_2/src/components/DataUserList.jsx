import PropTypes from "prop-types";

function DataUserList({dataList}) {
    return(
        <ul>
            {dataList.map((user, index) => (
                <li key={index}>
                    <b>Nombre:</b> {user.name} <b>Edad:</b> {user.age}
                </li>
            ))}
        </ul>
    );
}



DataUserList.propTypes = {
    dataList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        })
    ).isRequired
};

export default DataUserList
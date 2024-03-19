import PropTypes from "prop-types";

function UserList({userList}) {
    return(
        <ul>
            {userList.map((user, index) => (
                <li key={index}>
                    {user}
                </li>
            ))}
        </ul>
    );
}

UserList.propTypes = {
    userList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserList
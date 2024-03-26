import { useSelector } from "react-redux";

function Header() {

    const user = useSelector((state) => state.user);

    return(
        <header>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>      
        </header>
    );
}

export default Header;
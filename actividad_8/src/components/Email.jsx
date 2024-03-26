import { changeEmail } from "./userSlice";
import {useDispatch, useSelector} from 'react-redux';


function Email() {

    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);

    return(
        <>
            <p>Email: {email}</p>
            <p>Change your email:</p>
            <input 
                type="email"
                value={email}
                onChange={(e) => dispatch(changeEmail(e.target.value))}
            />
        </>
    );
}

export default Email;
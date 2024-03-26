import reactLogo from '../assets/react.svg'
import styled, { keyframes } from 'styled-components';

function LogoAnimation() {

    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    `;

    const LogoReact = styled.img`
        width: 90px;
        animation: ${rotate} 3s linear infinite;  
    `;

    return(
        <>
            <a href="https://react.dev" target="_blank">
                <LogoReact src={reactLogo} alt="React logo"/>
            </a>
        </>
    );
}

export default LogoAnimation;
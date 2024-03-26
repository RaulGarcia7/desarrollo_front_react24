import styled from "styled-components";


const Button = styled.button`

    ${(props) => {
        switch (props.type) {
            case "success":
                return `
                    background-color: #17c700;
                    color: #000000;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 7px;
                    cursor: pointer;

                    &:hover {
                        background-color: #066106;
                        color: whitesmoke;
                    } 
                `;
            case "error":
                return `
                    background-color: #a80e0e;
                    color: #ffffff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 7px;
                    cursor: pointer;

                    &:hover {
                        background-color: #570202;
                        color: #ffffff;
                        align-content: centre;
                        width: 250px;
                        height: 50px;
                        font-size: 30px;
                    } 
                `;

            case "warning":
                return `
                    background-color: #e4c30a;
                    color: #000000;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 7px;
                    cursor: pointer;

                    &:hover {
                        background-color: #000000;
                        color: #d8cb11;
                    } 
                `;

            case "info":
                return `
                    background-color: #0a82e4;
                    color: #ffffff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 7px;
                    cursor: help;

                    &:hover {
                        background-color: #7be7de;
                        color: #000000;
                    } 
                `;
            default:
                return `
                background-color: #6cccac;
                color: black;
                padding: 10px 20px;
                border: none;
                border-radius: 7px;
                cursor: pointer;

                &:hover {
                    background-color: #2b3ff0;
                    color: whitesmoke;
                } 
            `
                
        }
    }}
`;

export default Button;
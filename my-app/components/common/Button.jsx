import styled from 'styled-components';

const StyledButton = styled.button`
    height: 3rem;
    width: 10rem;
    border: solid 2px black;
    background: inherit;
    font-size: 1rem;
`;

const Button = ({ children, onClick, disabled }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;

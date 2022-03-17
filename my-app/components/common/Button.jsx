import styled from 'styled-components';

const StyledButton = styled.button`
    color: ${(p) =>
        p.disabled
            ? p.theme.colors.primaryLightGrey
            : p.theme.colors.primaryBlack};
    background: inherit;
    margin: 0.5rem 0;
    text-decoration: underline;
    border: none;
`;

const Button = ({ children, onClick, disabled }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;

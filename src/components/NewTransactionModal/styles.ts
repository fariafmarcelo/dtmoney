import styled from 'styled-components';

export const Container = styled.form`
    h2 {
        color: var(--textTitle);
        font-size: 1.25rem;

        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;

        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(textBody);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;

        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter .2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
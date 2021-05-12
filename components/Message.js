import styled from 'styled-components'

function Message({ user, message }) {
    return (
        <Container>
            <p>{message}</p>
        </Container>
    )
}

const Container = styled.div``;

export default Message

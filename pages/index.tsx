import React from 'react';
import styled from 'styled-components';
import Link from "next/link";

const Index: React.FC = () => {
    return (
        <Wrapper>
            <p>Hello.</p>
            <p>It is Index page.</p>
            <Link href="/user"><a>Go to User page</a></Link>
        </Wrapper>
    )
};

export default Index;

const Wrapper = styled.div`
    width: 80%;
    text-align: center;
    margin: 0 auto;
    color : olivedrab;
`

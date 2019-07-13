import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link from "next/link";


interface Props {
    data?: Array<object>
}

interface UserPage<Props> extends React.FC<Props> {
    getInitialProps?: (ctx: any) => Promise<{}>;

}


const User: UserPage<Props> = ({data = []}) => {
    return (
        <Wrapper>
            <h2>User List</h2>
            {
                data.map((user: any) => (
                    <Link href={`http://localhost:3000/user/${user.id}`} key={user.id}>
                        <p>
                            {user.name} / {user.phone}
                        </p>
                    </Link>
                ))
            }
        </Wrapper>
    )
}

User.getInitialProps = async () => {
    const result: any = await axios.get('http://localhost:3000/api/user');
    const data = result ? result.data : [];
    return {data}
}

export default User;

const Wrapper = styled.div`
    width: 300px;
    margin: 0 auto;
    border : 1px solid olivedrab;
    
    p {
        cursor : pointer;
        &:hover {
            background : #eeeeee;
        }
    }
`

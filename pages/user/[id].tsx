import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link from "next/link";


interface Props {
    data?: {
        name : string,
        id : string,
        email : string,
        company : string
    }
}

interface UserDetailPage<Props> extends React.FC<Props> {
    getInitialProps?: (ctx: any) => Promise<{}>;

}


const UserDetail: UserDetailPage<Props> = ({data}) => {
    const {name, id, email, company} = data;
    return (
        <Wrapper>
            {
                id ? <React.Fragment>
                    <p>Name : {name}</p>
                    <p>Email : {email}</p>
                    <p>Company : {company}</p>
                </React.Fragment> : <p>
                    There is no Data
                </p>
            }
            <Link href="/user"><a>{'<- '}Back to list</a></Link>
        </Wrapper>
    )
}

UserDetail.getInitialProps = async ({query}) => {
    const {id} = query;
    const result: any = await axios.get(`http://localhost:3000/api/user/${id}`);
    const data = result ? result.data : {};
    return {data}
}

export default UserDetail;

const Wrapper = styled.div`
    width: 300px;
    margin: 0 auto;
    
    p {
        font-weight: bold;
    }
`

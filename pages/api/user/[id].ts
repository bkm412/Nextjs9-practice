import {NextApiRequest, NextApiResponse} from 'next'
import data from '../../../assets/sampleData.json';

export default (req : NextApiRequest, res : NextApiResponse) => {
    const {query : {id : queryId}} = req;
    if(isNaN(+queryId)){
        res.status(400);
        res.send('Querystring should be number');
    } else {
        const userData = data.find((item: any) => item.id === +queryId) || [];
        res.send(userData);
    }
    res.end()
}
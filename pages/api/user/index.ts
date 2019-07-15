import data from '../../../assets/sampleData.json';
import {NextApiRequest, NextApiResponse} from 'next'

export default (req : NextApiRequest, res : NextApiResponse) => {
    res.send(data);
    res.end();
}
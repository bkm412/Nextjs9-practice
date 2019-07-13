import * as express from 'express'
import data from '../../../assets/sampleData.json';

export default (req : express.Request, res : express.Reponse) => {
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
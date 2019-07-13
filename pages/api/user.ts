import * as express from 'express'
import data from '../../assets/sampleData.json';

export default (req : express.Request, res : express.Reponse) => {
    res.send(data);
    res.end();
}
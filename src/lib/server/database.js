import {getXataClient, XataClient} from './xata';
import {XATA_API_KEY} from '$env/static/private'

const database = new XataClient({apiKey: XATA_API_KEY});

export default database;
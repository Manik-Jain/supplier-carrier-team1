import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use('api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended : false}))

const db = admin.firestore()
export const webapi=functions.https.onRequest(main);

interface Carrier {
    id : number,
    name : string
}

app.post('/saveCarrier', async(req, res) => {
    const carrier : Carrier = {
        id:1, name: "carrier_1"
    }

    await db.collection("carriers").add(carrier);
} )
import {initializeApp, getApps, getApp, App, cert} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

const serviceKey = require('@/service_key.json');

let app: App;

if (getApps().length == 0) {
    app = initializeApp({
        credential: cert(serviceKey),
    });
} else {
    app = getApp()
}

const adminDb = getFirestore(app);

export {adminDb, app as adminApp};

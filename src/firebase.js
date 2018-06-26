import * as firebase from 'firebase';
import 'firebase/firestore';

import config from './firebase.config';

firebase.initializeApp(config);

const fstore = firebase.firestore();
fstore.settings({ timestampsInSnapshots: true });

export { fstore };

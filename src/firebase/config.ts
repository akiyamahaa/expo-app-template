import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCsrP4moxDa2ajv9m7Dfcisqk9PQ8MSoAg',
  authDomain: 'expo-test-335e4.firebaseapp.com',
  projectId: 'expo-test-335e4',
  storageBucket: 'expo-test-335e4.appspot.com',
  messagingSenderId: '756514751792',
  appId: '1:756514751792:web:4e8a6bdcb2418fd82f34f5',
  measurementId: 'G-4G99E1DNKF',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// NOTE: Test firebase
// const getData = async () => {
//   const querySnapshot = await getDocs(collection(db, 'orders'));
//   const resultList = querySnapshot.docs.map((doc) => doc.data());
//   console.log('🚀 ~ resultList', resultList);
// };
// useEffect(() => {
//   getData();
// }, []);

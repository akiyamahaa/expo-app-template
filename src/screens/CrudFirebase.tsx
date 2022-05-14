import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { Box, Button } from 'native-base';

type Props = {};

const CrudFirebase = (props: Props) => {
  const [users, setUsers] = useState<any>([]);
  const [name, setName] = useState<any>('');
  const [age, setAge] = useState<any>('');

  const userCollectionRef = collection(db, 'users');

  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      name,
      age,
    });
  };

  const updateUser = async (id: string, age: any) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id: string) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <Box mt="10" alignItems={'center'}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '80%',
          marginBottom: 20,
          padding: 6,
        }}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '80%',
          marginBottom: 20,
          padding: 6,
        }}
        onChangeText={(text) => setAge(Number(text))}
      />

      <Button onPress={createUser}>Create User</Button>
      {users.map((user: any) => (
        <Box key={user.name} mt="5" flexDirection={'row'} alignItems={'center'}>
          <Box>
            <Text>Name:{user.name}</Text>
            <Text>Age:{user.age}</Text>
          </Box>
          <Box>
            <Button onPress={() => updateUser(user.id, user.age)} m='2'>
              Update Age
            </Button>
            <Button onPress={() => deleteUser(user.id)} m='2'>Delete User</Button>
          </Box>
        </Box>
      ))}
      <Text>CrudFirebase</Text>
    </Box>
  );
};

export default CrudFirebase;

const styles = StyleSheet.create({});

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { fireStore } from './firebase';
import type { User } from '$lib/model/User';

export async function addUser(name: string): Promise<void> {
	await addDoc(collection(fireStore, 'users'), {
		name
	});
}

export async function getUsers(): Promise<User[]> {
	const users = await getDocs(collection(fireStore, 'users'));

	return users.docs.map((doc) => ({
		id: doc.id,
		name: doc.data().name
	}));
}

import { getUsers } from '$lib/service/database';

export async function load() {
	const users = await getUsers();

	return {
		users
	};
}

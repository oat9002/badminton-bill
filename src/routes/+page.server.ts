import { getUsers } from '$lib/service/database';

export function load() {
	return {
		users: getUsers()
	};
}

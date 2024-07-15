<script lang="ts">
	import type { User } from "$lib/model/User";
	import { addUser } from "$lib/service/database";

    export let data: { users: User[] };  
    let userName: string = "";  

    function onUserNameChange(event: Event) {
        userName = (event.target as HTMLInputElement).value;
    }

    function onUserAddClick() {
        addUser(userName);
    }
</script>

<h1>Welcome to badminton bill</h1>
<h2>Users</h2>
<ul>
    {#each data.users as user}
        <li>{user.name}</li>
    {/each}
</ul>
<h2>Add user</h2>
<div>
    <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" on:change={onUserNameChange} />
    <button class="btn" on:click={() => onUserAddClick}>Add</button>
</div>



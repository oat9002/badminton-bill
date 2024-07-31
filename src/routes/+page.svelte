<script lang="ts">
	import type { User } from "$lib/model/User";
	import { addUser } from "$lib/service/database";
    import AddTransaction from "$lib/component/AddTransaction.svelte";

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
<h2>Add user</h2>
<div>
    <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" on:change={onUserNameChange} />
    <button class="btn" on:click={() => onUserAddClick()}>Add</button>
</div>
<AddTransaction/>
<div>
    <button class="btn">+ Add Transaction</button>
</div>



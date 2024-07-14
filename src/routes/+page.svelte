<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { userStore } from '../store/userStore';
    import { user } from '../types/user';

    let users: user[] = [];

    onMount(() => {
        users = userStore;
    });

    function addUser() {
        userStore.push({ name: 'New user' });
    }
</script>

<h1>Welcome to badminton bill</h1>
<h2>Add user</h2>
<div>
    <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
    <button class="btn">Add</button>
</div>



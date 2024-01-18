<script setup>

</script>

<template>
    <h1>Time It</h1>

    <div>
        <img src="" alt="white gloves logo">
    </div>

    <div>
        <button @click="$router.push('/profile')">Profile</button>
    </div>


    <div>
        <h1>Menu</h1>
        <button @click="$router.push('/settings')">Settings</button>
        <button @click="$router.push('/time')">Time</button>
    </div>

    <h3>Welcome</h3>

    <button>Clock In</button>
    <button>Clock Out</button>

    <div>
        <button @click="$router.push('/')">Logout</button>
    </div>


    <h3>Date</h3>

    <h3>Time</h3>
</template>

<style scoped></style>
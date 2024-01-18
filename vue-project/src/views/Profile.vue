<script setup>





</script>

<template>
    <h1>Time It</h1>

    <div>
        <img src="" alt="white gloves logo">
    </div>

    <h1>Profile</h1>

    <div>
        <p>Role</p>
        <img src="" alt="profile pic">
        <br>
        <input v-model="pic" type="text" placeholder="photo URL">
        <br>

        <button>Update</button>
    </div>
    <br>



    <button @click="$router.push('/welcome')">Back</button>

    <button @click="$router.push('/')">Logout</button>


    <h3>Date</h3>

    <h3>Time</h3>
</template>

<style></style>
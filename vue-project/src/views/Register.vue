<script setup>
import { ref } from 'vue';
import router from '@/router'

const email = ref('');
const username = ref('');
const password = ref('');

function register() {
    const reqBody = {
        "email": email.value,
        "password": password.value,
        "username": username.value
    }

    fetch("http://localhost:3000/users",
        {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqBody),
            method: "POST"
        })

        .then(response => {
            if (response.status === 201) {
                alert("Account created! Login to continue")
                router.push("/")
            } else {
                alert('Something went wrong! Please try again.')
            }
            console.log(response)
        })
        .then(json => {
            console.log(json)
        })
        .catch(error => {
            console.log(error)
        })
}


</script>

<template>
    <div class="centerContainer">
        <div id="container">
            <h1>Register</h1>

            <h3>Time It</h3>

            <div>
                <img src="" alt="white gloves logo">
            </div>

            <h1>Create User</h1>
            <div>

                <input v-model="email" type="text" placeholder="email">
                <input v-model="username" type="text" placeholder="username">
                <input v-model="password" type="text" placeholder="password">



                <button @click="register">Register</button>

                <button @click="$router.push('/')">Login</button>

            </div>

        </div>
    </div>
</template>

<style>
#container {

    font-family: "lemon";
    height: 80vh;
    width: 50vw;
    background-color: #4169e1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    border-radius: 30%;
    border: 10px solid grey;
}

.centerContainer {
    display: flex;
    padding-top: 5%;


    justify-content: center;
}
</style>
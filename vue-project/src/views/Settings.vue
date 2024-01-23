<script setup>

import { store } from '../store.js';
import { defineModel } from 'vue';
import router from '@/router';

const email = defineModel("email")
const username = defineModel("username")
const password = defineModel("password")


function updateUser() {
    if (username.value != undefined) store.username = username.value
    if (email.value != undefined) store.email = email.value
    if (password.value != undefined) store.password = password.value

    fetch('http://localhost:3000/updateuser', {
        headers: { "Content-Type": "application/json", "Authorization": document.cookie },
        body: JSON.stringify({ "username": store.username, "password": store.password, "email": store.email }),
        method: "PUT"
    })
        .then(response => {
            if (response.status === 200) {
                alert("Account has been updated!")

                console.log(response)
                return response.json()
            } else {
                alert("Something went wrong, try again!")
            }
        })

        .catch(error => {
            console.log(error)
        })
}


function deleteUser() {

    fetch("http://localhost:3000/deleteuser",
        {
            headers: { "Content-Type": "application/json", "Authorization": document.cookie },
            body: '',//JSON.stringify(reqBody),
            method: "DELETE"
        })

        .then(response => {

            console.log('delete response', response)

            if (response.status === 200) {
                // alert("Account deleted")
                router.push("/")
            } else {
                alert('Something went wrong! Please try again.')
            }

        })
        .catch(error => {
            console.log('delete error', error)
        })
}


</script>

<template>
    <div class="background">
        <div class="centerContainer">
            <div class="container">


                <h1 class="headerStyle">Settings</h1>

                <div>
                    <form name="role" id="role1" action="/action_page.php">
                        <p class="words">Role</p>

                        <select name="role" id="role1">
                            <option value="" selected>Cleaner</option>
                            <option value="">Maintenace</option>
                        </select>

                    </form>
                    <br>
                    <input type="checkbox">Text Reminders
                    <br>
                    <input type="checkbox">Email Reminders

                    <br>
                    <br>

                </div>


                <input v-model="email" type="text" :placeholder="store.email" maxlength="30" minlength="10" value="">
                <input v-model="username" type="text" :placeholder="store.username" maxlength="30" minlength="10" value="">
                <input v-model="password" type="text" :placeholder="store.password" maxlength="30" minlength="10" value="">

                <br>

                <button @click="updateUser">Update User</button>
                <button @click="deleteUser">Delete User</button>
                <br>

                <!-- <button @click="$router.push('/delete')">Delete User</button> -->

                <button @click="$router.push('/welcome')">Back</button>


                <!-- <h3>Date</h3>

            <h3>Time</h3> -->
            </div>
        </div>
    </div>
</template>

<style>
.background {

    background-color: lightseagreen;
    height: 100%;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

.headerStyle {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: glow 10s ease-in infinite;
    width: 70%;
    font: 5rem lemon;
    text-transform: uppercase;
    color: #f0edaa
}

@keyframes glow {

    0%,
    100% {
        text-shadow: 0 0 40px red;
    }

    25% {
        text-shadow: 0 0 45px red;
    }

    50% {
        text-shadow: 0 0 50px red;
    }

    75% {
        text-shadow: 0 0 55px red;
    }
}

.container {

    margin-bottom: 20%;
    box-shadow: 15px 15px black;
    font-family: "lemon";
    height: 80vh;
    width: 50vw;
    /* background-color: #4169e1; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    border-radius: 20%;
    border: 6px solid black;
    background-image: url(https://cdn.pixabay.com/photo/2018/03/13/11/26/clock-3222267_1280.jpg);
}

.centerContainer {
    display: flex;
    padding-top: 5%;


    justify-content: center;
}
</style>
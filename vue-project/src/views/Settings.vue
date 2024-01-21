<script setup>

import { store } from '../store.js';
import { defineModel } from 'vue';

const email = defineModel("email")
const username = defineModel("username")
const password = defineModel("password")

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

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



</script>

<template>
    <div class="centerContainer">
        <div id="container">
            <h1>Time It</h1>

            <div>
                <img src="" alt="white gloves logo">
            </div>

            <h1>Settings</h1>

            <div>
                <form name="role" id="role1" action="/action_page.php">
                    <p>Role</p>

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
                <button>Update</button>


            </div>


            <input v-model="email" type="text" :placeholder="store.email" maxlength="30" minlength="10" value="">
            <input v-model="username" type="text" :placeholder="store.username" maxlength="30" minlength="10" value="">
            <input v-model="password" type="text" :placeholder="store.password" maxlength="30" minlength="10" value="">

            <br>

            <button @click="updateUser">Update User</button>

            <button @click="$router.push('/delete')">Delete User</button>

            <button @click="$router.push('/welcome')">Back</button>


            <h3>Date</h3>

            <h3>Time</h3>

        </div>
    </div>
</template>

<style>
.dropdown-content a:hover {
    background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}


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
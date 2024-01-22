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

    fetch("http://localhost:3000/register",
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
    <div class="background">
        <div class="centerContainer">

            <div class="container">

                <div class="headerStyle">
                    <h1>Register</h1>
                </div>


                <h1 class="header2">Create User</h1>


                <div class="inputPosition">

                    <input v-model="email" type="text" placeholder="email">
                    <input v-model="username" type="text" placeholder="username">
                    <input v-model="password" type="text" placeholder="password">
                </div>

                <div class="buttonPosition">
                    <button @click="register">Register</button>

                    <button @click="$router.push('/')">Login</button>
                </div>


            </div>

        </div>
    </div>
</template>

<style>
.button {
    width: 100%;

    font: 20px lemon;
    text-transform: uppercase;

    color: white;



    text-align: center;
    border-radius: 5px;
    width: fit-content;
    height: 40px;

}

.headerStyle {

    display: flex;
    flex-direction: column;
    align-items: center;
    animation: glow 10s ease-in infinite;
    width: 70%;
    font: 6rem lemon;
    text-transform: uppercase;
    color: #f0edaa
}

.header2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation: glow 10s ease-in infinite;
    width: 70%;
    font: 2.5rem lemon;
    text-transform: uppercase;
    color: #f0edaa;
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


    font-family: "lemon";
    height: 80vh;
    width: 50vw;

    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    border-radius: 20%;
    border: 6px solid black;
    background-image: url(https://cdn.pixabay.com/photo/2018/03/13/11/26/clock-3222267_1280.jpg);
    box-shadow: 15px 15px black;
}




.background {
    background-color: lightseagreen;
    height: 100%;


}


.buttonPosition {
    display: flex;
    justify-content: space-evenly;
    gap: 2%;

}


.inputPosition {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20%;


}
</style>
<script setup>
import { ref } from 'vue';

let clockid = ""

function clockin() {
    const reqBody = {

    }

    fetch('http://localhost:3000/clockin', {
        headers: { "Content-Type": "application/json", "Authorization": document.cookie },
        body: JSON.stringify(reqBody),
        method: "POST"
    })
        .then(response => {
            if (response.status === 200) {
                alert("Clockin Successful!")
                // router.push('/posts')
                console.log(response)
                return response.json()
            } else {
                alert("Something went wrong, try again!")
            }
        })

        .then(json => {
            clockid = json[0].id
            console.log(json)
        })

        .catch(error => {
            console.log(error)
        })
}


function clockout() {

    if (clockid === "") {
        alert('You must clockin first')
    } else {
        fetch('http://localhost:3000/clockout', {
            headers: { "Content-Type": "application/json", "Authorization": document.cookie },
            body: JSON.stringify({ clockid: clockid }),
            method: "POST"
        })
            .then(response => {
                if (response.status === 200) {
                    alert("Clockout Successfull!")
                } else {
                    alert("Something went wrong, try again!")
                }
            })
    }
}

let profilepic = ref("")

fetch('http://localhost:3000/getpic', {
    headers: { "Content-Type": "application/json", "Authorization": document.cookie },

})
    .then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            alert("Something went wrong, try again!")
        }
    })

    .then(json => {
        console.log(json)
        profilepic.value = json[0].profilepic
    })



</script>

<template>
    <div class="background">
        <div class="centerContainer">
            <div id="container">

                <img :src=profilepic>

                <h1>Time It</h1>



                <div>
                    <button @click="$router.push('/profile')">Profile</button>
                </div>


                <div>
                    <h1>Menu</h1>
                    <button @click="$router.push('/settings')">Settings</button>
                    <button @click="$router.push('/timestamp')">Timestamps</button>
                </div>

                <h3>Welcome</h3>
                <br>

                <div class="button">
                    <button class="buttonColor" @click="clockin()">Clock In</button>
                    <button class="buttonColor" @click="clockout()">Clock Out</button>
                </div>
                <div>
                    <p id="punch"></p>
                </div>
                <br>

                <div>
                    <button @click="$router.push('/')">Logout</button>
                </div>


                <h3>Date</h3>

                <h3>Time</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    background-color: lightpink;
}

.button {
    display: flex;
    flex-direction: row;
}

.buttonColor {

    color: white;
    background-image: linear-gradient(to right, lightblue, navy, grey);
    text-align: center;
    border-radius: 5px;


}

#container {

    /* font-family: "lemon"; */
    height: 80vh;
    width: 50vw;
    background-color: #4169e1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    border-radius: 30%;
    border: 10px solid lightgray;
}

.centerContainer {
    display: flex;
    padding-top: 5%;


    justify-content: center;
}
</style>
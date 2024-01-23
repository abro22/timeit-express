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
            <div class="container">

                <img :src=profilepic class="profilepic">

                <div class="center">
                    <h1 class="headerStyle">Welcome</h1>



                    <div class="button">
                        <div>
                            <button @click="$router.push('/profile')">Profile</button>
                            <button @click="$router.push('/settings')">Settings</button>
                            <button @click="$router.push('/timestamp')">Timestamps</button>
                        </div>
                        <div>
                            <button @click="clockin()">Clock In</button>
                            <button @click="clockout()">Clock Out</button>
                        </div>




                        <button @click="$router.push('/')">Logout</button>
                    </div>
                </div>

                <!-- 
                <h3>Date</h3>

                <h3>Time</h3> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.center {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.headerStyle {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: glow 10s ease-in infinite;
    width: 70%;
    font: 6rem lemon;
    text-transform: uppercase;
    color: #f0edaa;

    transform: perspective(800px) rotateY(5deg) scale(0.9) rotateX(10deg);
    filter: drop-shadow();

    transition: 0.2s ease all;

    &:hover {
        transform:
            perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1);

        opacity: 1;
    }
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

.profilepic {
    height: 5rem;
    width: 5rem;
    display: flex;
    /* padding-left: 60%; */
    border-radius: 50px;
    border: 4px solid white;
    justify-content: right;

}

.background {
    background-color: lightseagreen;
    height: 100%;
}

button {
    display: flex;

    justify-content: space-around;
    color: white;

    text-align: center;
    border-radius: 5px;
    background-color: #4169e1;
    width: fit-content;
    height: 40px;
    border: 2px solid black;


}

.clockButtons {
    display: flex;
    flex-direction: column;
    gap: 20%;
    width: fit-content;

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
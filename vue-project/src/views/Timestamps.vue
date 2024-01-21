<script setup>
import { ref } from 'vue';


let times = ref()

fetch('http://localhost:3000/gettime', {
    headers: { "Content-Type": "application/json", "Authorization": document.cookie }
}).then(response => {
    if (response.status === 200) {
        return response.json()
    }
}).then(json => {
    times.value = json
})




</script>

<template  >
    <div class="background">




        <div class="centerContainer">


            <div class="clockButton">
                <img class="pinkClock" src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png" alt="pink clock">
                <br><br>
                <img class="blueClock" src="https://cdn-icons-png.flaticon.com/512/1584/1584942.png" alt="blue clock">
            </div>

            <div id="container">

                <div class="timestamp">



                    <h1>Timestamps</h1>
                </div>


                <h3>Time It</h3>



                <div>

                    <table>
                        <div class="scroll">
                            <tr>
                                <th>Clockin</th>
                                <th>Clockout</th>
                            </tr>

                            <tr v-for="time in times">
                                <td>{{ time.clockin }}</td>
                                <td>{{ time.clockout }}</td>
                                <br>
                            </tr>
                        </div>
                    </table>
                </div>


                <br>


                <div>
                    <button class="buttonColor big-btn" @click="$router.push('/welcome')">Back</button>
                </div>


            </div>

            <div>
                <p id="date"></p>
            </div>

            <div>
                <p id="time"></p>
            </div>

        </div>
    </div>
</template>

<style  scoped>
.clockButton {
    display: flex;
    flex-direction: column;
    float: left;

}

table {
    color: black;
    background-color: pink;

}

.scroll {
    overflow: auto;
    max-height: 20rem;

}



.background {
    background-color: lightpink;
    height: 100%;

}



h1 {
    animation: glow 10s ease-in infinite;
    width: 100%;
    padding: 20px;
    font: 60px lemon;
    text-transform: uppercase;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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


img {
    height: 5rem;
    width: 5rem;

}

#container {
    font-family: 'Lemon', serif;

    height: 80vh;
    width: 50vw;
    background-color: #4169e1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    border-radius: 20%;
    border: 10px solid black;


    background-image: url(https://cdn.pixabay.com/photo/2018/03/13/11/26/clock-3222267_1280.jpg);

}






.timestamp {
    display: flex;
    flex-direction: columns;

    align-items: center;
    justify-content: center;
}

.buttonColor {
    size: 30px;
    background-color: lightpink;
    color: white;
    /* background-image: linear-gradient(to right, #f0edaa, pink); */
    text-align: center;
    border-radius: 5px;
    border: black solid 2px;
}



button {
    width: 100%;

    font: 20px lemon;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #f0edaa;



}



.big-btn {
    width: 80px;
    height: 40px;
}

table {
    border: 2px solid whitesmoke;
    border-collapse: collapse;
    width: 500px;
}

/* tr {border: 2px solid green;} */

td {
    border: 2px solid whitesmoke;
}

th {
    border: 2px solid whitesmoke;
}

.pinkClock {
    padding-top: 100px;
    height: 15rem;
    width: 15rem;
    transform:
        perspective(800px) rotateY(5deg) scale(0.9) rotateX(10deg);
    filter: drop-shadow();
    /* opacity: 0.5; */
    transition: 0.2s ease all;

    &:hover {
        transform:
            perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1);
        /* filter: drop-shadow(); */
        opacity: 1;
    }

    padding-right: 10%;

}

.blueClock {
    padding-right: 80px;
    padding-top: 40px;
    height: 15rem;
    width: 15rem;
    transform:
        perspective(800px) rotateY(5deg) scale(0.9) rotateX(10deg);
    filter: drop-shadow();
    /* opacity: 0.5; */
    transition: 0.2s ease all;

    &:hover {
        transform:
            perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1);
        /* filter: drop-shadow(); */
        opacity: 1;


    }

}
</style>
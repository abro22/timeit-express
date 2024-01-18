<script setup >


const d = new Date();
document.getElementById("date").textContent = d;


</script>

<template>
    <h1>Time</h1>

    <div>
        <img src="" alt="white gloves logo">
    </div>

    <h3>Time It</h3>

    <div>
        <h3>Menu</h3>
        <button @click="$router.push('/timestamp')">Timestamps</button>
    </div>

    <div>
        <img src="" alt="clock">
    </div>

    <button>Clock In</button>
    <button>Clock Out</button>

    <div>
        <button @click="$router.push('/welcome')">Back</button>
    </div>



    <h3 id="date"></h3>


    <h3>Time</h3>
</template>

<style scoped></style>
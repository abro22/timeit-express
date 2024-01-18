<script setup>

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



</script>

<template>
    <h1>Time It</h1>

    <div>
        <img src="" alt="white gloves logo">
    </div>

    <h1>Settings</h1>

    <div>
        <form name="role" id="role1" action="/action_page.php">
            <p>Role</p>
            <select name="role" id="role1">
                <option value="" selected="selected">Cleaner</option>
                <option value="" selected="selected">Maintenace</option>
            </select>
        </form>
        <br>
        <input type="checkbox">Text Reminders
        <br>
        <input type="checkbox">Email Reminders
        <br>
        <button>Update</button>


    </div>
    <br>



    <button @click="$router.push('/welcome')">Back</button>


    <h3>Date</h3>

    <h3>Time</h3>
</template>

<style>
.dropdown-content a:hover {
    background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}
</style>
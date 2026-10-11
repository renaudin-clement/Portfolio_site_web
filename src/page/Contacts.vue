<script setup lang="ts">

</script>

<template>
    <section class="Contact">
        <h1>Contacts</h1>
        <section class="info">
            <ul>
                <li> <img src="/reposit/icon/contact/icons8-linkedin-96.png" alt="Linkedin">
                    <p>Linkedin : <a href="https://www.linkedin.com/in/renaudin-clement/"> renaudin-clement</a> </p>
                </li>
                <li> <img src="/reposit/icon/contact/icons8-github-96.png" alt="Git-hub ">
                    <p>Git-hub : <a href="https://github.com/renaudin-clement"> renaudin-clement</a> </p>
                </li>
                <li> <img src="/reposit/icon/contact/icons8-gmail-nouveau-96.png" alt="E-mails">
                    <p>E-mails : <a href="pro.renaudin.clement@gmail.com"> pro.renaudin.clement@gmail.com</a> </p>
                </li>
            </ul>
        </section>
    </section>
</template>

<style scoped>
.Contact {
    width: 100%;
    background-image: url('/reposit/icon/contact/top-view-desk-concept-with-smartphone.jpg');
    background-size: cover;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}

h1 {
    text-align: center;
    width: 100%;
    color: #ffff;
    margin-bottom: 0;
    height: 6%;
    background-color: #646262e8;
    padding-bottom: 0.5em;
    align-self: center;
    align-content: center;

}

.info {
    background-color: #fffffff5;
    width: 100%;
    padding: 1em;
    align-content: center;
    height: fit-content;
}

ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    align-items: center;
    height: 68%;
    align-content: center;
}

li {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    align-items: center;
    justify-content: start;
}

p,
a {
    padding-left: 1em;
    font-size: 1.2em;
    overflow:auto;
}

img {
    height: 100%;
    width: 4em;
}
</style>

<script setup lang="ts">

</script>

<template>
    <section class="ContainerEvent">
        <section class="ContainerInfo">
            <p>
                Participation à l’édition 2024 de la Nuit de l’Info.
                Cette année nous devions développer un site dont le thème était de promouvoir le numérique durable et libre,
                tout en implémentant les défis proposés par des entreprises partenaires. Le theme etait locean un organisme vivant.
            </p>
        </section>
        <section class="ContainerImage">
            <img src="/reposit/icon/nuitinfo2024.jpg" alt="nuit de linfo 2024">
        </section>
    </section>
</template>

<style scoped>
.ContainerEvent{
    display: flex;
    flex-wrap: nowrap;
    padding: 1em;

}

.ContainerImage{
    width: 25%;
    text-align: right;
}

.ContainerInfo{
    width: 75%;
    padding: 1em;
    background-color: var(--GrisClaire)
}

img{
    width: 12em;
    height: 9em;
}


</style>
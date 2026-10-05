<script setup lang="ts">

</script>

<template>
    <section class="ContainerEvent">
        <section class="ContainerImage">
            <img src="/reposit/icon/crea-campus.png" alt="crea-campus">
        </section>

        <section class="ContainerInfo">
            <p>
                Participation au concours crea campus 2025-2026
                Créa Campus est le rendez-vous incontournable des étudiants de la Région Centre-Val de Loire qui souhaitent se sensibiliser de façon approfondie à l’entrepreneuriat !
            </p>
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
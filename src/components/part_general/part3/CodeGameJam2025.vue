<script setup lang="ts">

</script>

<template>
    <section class="ContainerEvent">
        <section class="ContainerImage">
            <img src="/reposit/icon/cgj.png" alt="code Game jame">
        </section>

        <section class="ContainerInfo">
            <p>
                Participation à la Code Game Jam 2025 organisée par l'IUT de Montpellier et organisée à l'IUT d'Orléans pour 2 équipes
                (dont la nôtre). Nous avons réalisé un jeu sur le thème de 'Mélodie à l'infini', que l'on a nommé : 'Le chant du silence'.
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
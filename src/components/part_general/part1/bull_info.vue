<script setup lang="ts">

</script>

<template>
    <section class="Information">
        <section class="ContainerInfoText">
            <h2>Bienvenue</h2>
            <p>Jeune diplômé d’un BUT Informatique – parcours Réalisation d’applications : conception, développement,
                validation, je suis actuellement à la recherche d’une opportunité en tant que développeur logiciel ou
                développeur web.
                <br>
                Au cours de ma formation et de mes expériences, j’ai eu l’occasion de travailler avec différentes
                entreprises, notamment Spaycific’Zoo et E.Leclerc Allonnes, sur des projets réalisés aussi bien en
                équipe qu’en autonomie.
            </p>
        </section>
        <section class="ContainerImage">
            <img src="/reposit/icon/meV2.jpg" alt="Clement renaudin">
        </section>
    </section>
</template>

<style scoped>
.Information {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 13em;
}

.ContainerImage {
    width: 23%;
    text-align: center;
    align-content: center;
    background-color: var(--GrisClaire);
    
}

.ContainerInfoText {
width: 70%;
  background-color: var(--GrisClaire);
  padding-left: 1em;
  padding-right: 2em;
}

p{
    text-align: justify;
}

img {
    width: 17em;
  height: 12em;
}
</style>
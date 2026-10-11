<script setup lang="ts">


</script>

<template>
    <section class="Base_Part6">
        <section class="SectionAutre">
            <section class="ContainerInfo">
            <h2>Démo et Projet en cours</h2>
            <p>
                Vous souhaitez découvrir mes compétences ou explorer quelques exemples de réalisations ? Je vous invite à consulter la section <router-link to="demo"> « Démo »</router-link>, où vous trouverez une sélection de projets personnels actuellement en cours de conception.
            </p>
            <router-link to="demo">
                <button>ThreeJs_Projet</button>
            </router-link>
            </section>
            <section class="ContainerImage">
                <img src="/reposit/icon/gif-vieux-objets-2.gif" alt="ordinateur gif">
            </section>
            
        </section>

    </section>
</template>

<style scoped>

.SectionAutre{
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
    padding-top: 0;
    background-color: var(--GrisClaire);
    border: 8px solid var(--mainOrange);
}


.Base_Part6 {
    width: 100%;
    background-color: var(--noirBalise);
}

img{
      width: 17em;
      height: 100%;
}
</style>
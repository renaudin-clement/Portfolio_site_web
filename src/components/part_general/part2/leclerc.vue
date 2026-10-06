<script setup lang="ts">

</script>

<template>
    <section class="ContainerExperiencePro">

        <section class="TitreExperience">
            <h2> Stage 3 année BUT Informatique: Application de communication (4 mois)</h2>
        </section>

        <section class="ContainerExperience">

            <section class="SectionImage">
                <section class="ContainerImage">
                    <img src="/reposit/icon/leclercallonnes.jpeg" alt="Clement renaudin">
                </section>
            </section>

            <section class="ContainerInfoText">
                <h2>Objectif Du Stage</h2>
                <p>
                    1 Développement d’une application de communication comprenant une messagerie, un annuaire et un gestionnaire de documents. <br>
                    2 Mise en place d’un livret d’accueil numérique accessible via un QR code.<br>
                    3 Promotion des alliances locales.<br>
                </p>
            </section>


            <section class="ContainerInfoText2">
            <h2>avril 2026 - juillet 2026</h2>
            <button> En s'avoir plus</button>
            </section>
        </section>

        <section class="ContainerLieu">
            <p> E.leclerc Allonnes Medicis </p>
        </section>

    </section>
</template>

<style scoped>
.ContainerExperiencePro {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 1em;
    padding-top: 1em;
}

.SectionImage{
    width: 13%;
    background-color: var(--GrisClaire);
    align-content: center;
    padding: 1em;
    margin: 1em;
}

.ContainerImage{
    padding: 1em;
    background-color: var(--mainOrange);
    
}

.ContainerInfoText{
    width: 67%;
    background-color: var(--GrisClaire);
    margin: 1em;
    padding: 1em;
}

.ContainerInfoText2{
    width: 15%;
    background-color: var(--GrisClaire);
    margin: 1em;
    padding: 1em;
}

.ContainerExperience{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}

.TitreExperience,.ContainerLieu{
    width: 100%;
    background-color: var(--GrisClaire);
}

.TitreExperience>h2{
    text-align: center;
    margin: 0.2em;
    font-size: 1.1em;
}

.ContainerLieu>p{
    text-align: right;
    margin: 0.2em;
    font-size: 1.1em;
    padding-right:1em ;
}

img {
    height: 100%;
  width: 100%;
  border-radius: 16px;
}
</style>
<script setup lang="ts">

</script>

<template>
    <section class="ContainerExperiencePro">

        <section class="TitreExperience">
            <h2> Stage 2 année BUT Informatique: Concepteur d’applications ludiques  </h2>
        </section>

        <section class="ContainerExperience">

            <section class="SectionImage">
                <section class="ContainerImage">
                    <img src="/reposit/icon/gif-vieux-objets-2.gif" alt="Clement renaudin">
                </section>
            </section>

            <section class="ContainerInfoText">
                <h2>Bienvenue</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni facere, eum quaerat enim harum quo
                    quisquam sapiente ex ipsa consectetur, qui obcaecati asperiores ratione nihil sequi hic magnam. Optio.
                </p>
            </section>


            <section class="ContainerInfoText">
                <h2>Bienvenue</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni facere, eum quaerat enim harum quo
                    quisquam sapiente ex ipsa consectetur, qui obcaecati asperiores ratione nihil sequi hic magnam. Optio.
                </p>
            </section>
        </section>

        <section class="ContainerLieu">
            <p> Spaycific’ZOO Spay </p>
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
    width: 25%;
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
    width: 75%;
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
}
</style>
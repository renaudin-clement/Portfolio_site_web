<script setup lang="ts">

</script>

<template>
    <section class="ContainerExperiencePro">

        <section class="TitreExperience">
            <h2> Stage 3 année BUT Informatique: Application de communication </h2>
        </section>

        <section class="ContainerExperience">
            <section class="ContainerImage">
                <img src="/reposit/icon/gif-vieux-objets-2.gif" alt="Clement renaudin">
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
            <p> E.leclerc Allonnes Medicis </p>
        </section>

    </section>
</template>

<style scoped>
.ContainerExperiencePro {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.ContainerImage{
    width: 25%;
    background-color: var(--GrisClaire);
    
}

.ContainerInfoText{
    width: 75%;
    background-color: var(--GrisClaire);
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
}

.ContainerLieu>p{
    text-align: right;
}

img {
    height: 100%;
  width: 100%;
}
</style>
<script setup lang="ts">

</script>

<template>
    <section class="Balise">
        <section class="BaseBalise">
            <section class="Baseline">
                <section>
                    <h2>Info</h2>
                </section>

                <section class="ContainerSymbole">
                    <section class="ContainerImage">
                        <img src="/reposit/icon/icons8-personne-gliphyline/icons8-personne-64.png" alt="personne">
                    </section>
                </section>


            </section>
        </section>
    </section>
</template>

<style scoped>

h2 {
    text-align: center;
    color: #ffffff;
    margin: 0;
    padding: 0;
}


.Balise {
    background-color: var(--noirBalise);
    width: 11em;
    height: 15em;
    align-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    cursor: pointer; 

    padding-right: 10px;
}


.Balise:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 122, 0, 0.3); 
}

.BaseBalise {
    background-color: var(--mainOrange);
    z-index: 2;
    width: 11em;
    height: 15em;
    
    align-content: center;
}

.Baseline {
    background-color: var(--noirBalise2);
    z-index: 3;
    height: 14em;
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-evenly;
}

.ContainerSymbole {
    align-content: center;
    justify-content: center;
    display: flex;
}


.ContainerImage {
    background-color: var(--mainOrange);
    height: 8em;
    width: 8em;
    align-content: center;
    border-radius: 11px;
    transition: transform 0.3s ease;
}


.Balise:hover .ContainerImage {
    transform: scale(1.05); 
}


.ContainerImage{
    text-align: center;
    align-items: center;
}

img{
    text-align: center;
    height: 5em;
}
</style>
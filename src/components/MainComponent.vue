<template>
    <div>
        <main class="main-content">
            <div class="pokemon-imagen" v-for="pokemon in pokeapi" :key="pokemon.id">
                <img class="imagen" :src="pokemon.imagen" alt="">
                <p class="nombre">
                    {{ pokemon.nombre }}
                </p>

                <p class="tipo" :style="{'background-color': pokemon.type_color}">
                    {{ pokemon.type_name}}
                </p>
            </div>


        </main>
    </div>
</template>

<script>
export default {
    name: 'MainContent',

    data() {
        return {
            pokeapi: []
        };
    },

    created() {
        fetch('https://cobuses.com.co/APIV2/model/pokemon.php?dato=getallpokemon')
        .then(response => response.json())
        .then(data => {
            this.pokeapi = data;
        });


    }
};

</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.main-content{
    margin: auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
}


.pokemon-imagen{
    width: 12rem;
}
.imagen{
    width: 100%;
    height: 100%;
    object-position: center center;

}

</style>

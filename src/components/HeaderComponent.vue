<template>
    <div>
        <header class="encabezado">
            <h1 class="titulo">POKEMON</h1>
        </header>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style scoped>
.encabezado{
    height: 80px;
    background: #000;
    display: flex;
    justify-content: space-around;
    color: #fff;
}
.titulo{
    color: yellow;
    padding: 18px;
}
.menu{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 13rem;
}

.menu li{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
}

.menu li:hover{
    border-bottom: solid #fff 3px;
}

</style>
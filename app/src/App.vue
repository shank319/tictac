<template>
    <div id="app">
        <nav-top></nav-top>
        <project></project>
        <nav-bottom></nav-bottom>
    </div>
</template>








<script>
    import NavTop from "./components/navtop.component/index.vue";
    import Project from './components/project.component/index.vue'
    import NavBottom from "./components/navbottom.component/index.vue";

    export default {
        name: 'app',
        components: {
            NavTop,
            Project,
            NavBottom,
        }
    }
</script>




<style>
    html,body {
        height: 100%;
        background: #FAFAFA;
    }
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*background: red;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>

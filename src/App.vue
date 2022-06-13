<template>
  <TmpHeader />
  <TmpMain />
</template>

<script>
import TmpHeader from "./components/template/TmpHeader.vue";
import TmpMain from "./components/template/TmpMain.vue";
export default {
  name: "App",
  components: { TmpHeader, TmpMain },
};
</script>

<style lang="scss">
@import "./assets/style/style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

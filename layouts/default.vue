<template>
  <v-app style="background: #212121">
    <v-app-bar app style="background: #757575">
      <v-tabs centered slider-color="grey lighten-4" color="grey lighten-4">
        <v-tab color="grey lighten-4" :to="'/'" router>Pesquisa</v-tab>
        <v-tab color="grey lighten-4" :to="'favoritos'" router>Favoritos</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer style="background: #212121" :absolute="true" app>
      <span style="color: #fff"
        >&copy; {{ new Date().getFullYear() }} GitRepo. Todos os direitos
        reservados.</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

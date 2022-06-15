<template>
  <div>
    <v-row v-if="!detalhesRepo.id" justify="center" align="center" class="mt-5">
      <v-col cols="8" v-if="favoritos.length > 0">
        <h2 class="mb-3" style="color: #bdbdbd">Favoritos</h2>
        <div v-for="(repo, i) in favoritos" :key="i">
          <CardRepo :isFavPage="true" :repo="repo"></CardRepo>
        </div>
      </v-col>
      <v-col cols="8" v-else justify="center" align="center">
        <p class="mb-3" style="color: #bdbdbd">
          Ainda não adicionou favoritos :/
        </p>
      </v-col>
    </v-row>
    <v-row v-else class="pt-5" justify="center" align="center">
      <v-col cols="8">
        <CardRepoInfo :repoInfo="detalhesRepo"></CardRepoInfo>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Favoritos",
  data: () => ({
    repos: [],
  }),
  watch: {
    favoritos() {
      localStorage.setItem("repos", JSON.stringify(this.favoritos));
    },
  },
  computed: {
    ...mapGetters(["favoritos", "detalhesRepo"]),
  },
  created() {
    const json = localStorage.getItem("repos");
    const array = JSON.parse(json);
    const favoritosStorage = Array.isArray(array) ? array : [];
    if (favoritosStorage.length > 0) {
      this.adicionarFavoritos(favoritosStorage);
    }
  },
  methods: {
    ...mapActions(["adicionarFavoritos"]),
  },
};
</script>

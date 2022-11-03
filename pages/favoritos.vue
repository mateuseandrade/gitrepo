<template>
  <div class="favoritos">
    <v-row>
      <v-col cols="8" v-if="favoritos.length">
        <h2>Favoritos</h2>
        <div v-for="(repo, i) in favoritos" :key="i">
          <CardRepo :repo="repo"></CardRepo>
        </div>
      </v-col>
      <v-col cols="8" v-else>
        <p>Ainda não adicionou favoritos :/</p>
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
    ...mapGetters(["favoritos"]),
  },

  created() {
    const repos = localStorage.getItem("repos");
    const reposFavoritos = JSON.parse(repos);
    const favoritosStorage = Array.isArray(reposFavoritos)
      ? reposFavoritos
      : [];
    if (favoritosStorage.length) {
      this.addFavorito(favoritosStorage);
    }
  },

  methods: {
    ...mapActions(["addFavorito"]),
  },
};
</script>

<style lang="scss" scoped>
.favoritos > div {
  display: flex;
  justify-content: center;
}

h2 {
  margin-bottom: 10px;
  color: #bdbdbd;
}

p {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  color: #bdbdbd;
}
</style>

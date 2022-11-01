<template>
  <div>
    <v-row v-if="!detalhesRepo.id" justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <p>Como podemos simplificar seu código hoje?</p>
      </v-col>
      <v-col cols="8">
        <v-text-field
          dense
          chips
          small-chips
          hide-details
          class="input-style"
          @keyup="getRepos"
        >
        </v-text-field>
      </v-col>
      <v-col cols="8" v-if="repos.length > 0">
        <div v-for="(repo, i) in repos" :key="i">
          <CardRepo :repo="repo"></CardRepo>
        </div>
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
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",
  data: () => ({
    debounce: null,
    repos: [],
  }),
  watch: {
    favoritos() {
      localStorage.setItem("repos", JSON.stringify(this.favoritos));
      this.repos.forEach((item) => {
        this.favoritos.forEach((item2) => {
          if (item2.id === item.id) {
            item.fav = true;
          }
        });
      });
    },
  },
  computed: {
    ...mapGetters(["favoritos", "detalhesRepo"]),
  },
  methods: {
    getRepos(e) {
      const search = e.target.value;
      if (!search) {
        this.repos = [];
      } else {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          if (search) {
            axios
              .get(
                `https://api.github.com/search/repositories?q=${search}&per_page=4`
              )
              .then(({ data }) => this.setReposApi(data.items))
              .catch((err) => console.log(err));
          }
        }, 400);
      }
    },
    setReposApi(items) {
      this.repos = items;
      this.repos.forEach((item) => {
        item.fav = false;
        this.favoritos.forEach((item2) => {
          if (item2.id === item.id) {
            item.fav = true;
          }
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.input-style {
  display: block;
  width: 350px;
  margin: 0px auto;
  padding: 10px 25px;
  background-size: 15px 15px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #e0e0e0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
p {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  color: #bdbdbd;
}
</style>

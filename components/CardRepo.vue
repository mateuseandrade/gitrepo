<template>
  <div>
    <v-card color="grey darken-1" dark class="mb-5">
      <div class="d-flex justify-space-between">
        <div class="d-flex">
          <v-avatar class="ma-3" size="100" tile>
            <v-img :src="repo.owner.avatar_url"></v-img>
          </v-avatar>
          <div>
            <div class="d-flex" style="display: block; align-items: center">
              <v-card-title
                pointer
                @click="showModal = true"
                class="text-h5 pointer"
                v-text="repo.full_name"
              ></v-card-title>
              <v-btn icon color="grey lighten-1" @click="favoritar()">
                <v-icon>{{ isFav ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
              </v-btn>
            </div>
            <v-card-subtitle v-text="repo.description"></v-card-subtitle>
          </div>
        </div>
        <div style="align-self: center">
          <v-card-actions>
            <v-btn
              class="ma-2"
              icon
              color="grey lighten-2"
              @click="showModal = true"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
    <v-dialog v-model="showModal" width="1000">
      <CardRepoInfo :repoInfo="repo"></CardRepoInfo>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CardRepoInfo from "./CardRepoInfo.vue";

export default {
  components: { CardRepoInfo },
  props: {
    repo: {
      type: Object,
    },
  },

  data: () => ({
    showModal: false,
    isFav: false,
  }),

  mounted() {
    this.isFav = this.repo.fav;
  },

  methods: {
    ...mapActions(["setFavorito"]),

    favoritar() {
      if (this.$router.currentRoute.name !== "favoritos") {
        this.isFav = !this.isFav;
      }
      this.setFavorito(this.repo);
    },
  },
};
</script>

<style lang="css" scoped>
.pointer {
  cursor: pointer;
}
</style>

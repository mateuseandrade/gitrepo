<template>
  <div>
    <v-card color="grey darken-1" dark class="repo">
      <div>
        <div class="d-flex">
          <v-avatar class="ma-3" size="100" tile>
            <v-img :src="repo.owner.avatar_url"></v-img>
          </v-avatar>
          <div>
            <div class="repo-title">
              <v-card-title
                pointer
                @click="showModal = !showModal"
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
              @click="showModal = !showModal"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
    <CardRepoInfo
      :repoInfo="repo"
      :showModal="showModal"
      @closeModal="showModal = $event"
    ></CardRepoInfo>
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

<style lang="scss" scoped>
.repo {
  margin-block: 10px;
  > div {
    display: flex;
    justify-content: space-between;
  }
  &-title {
    display: flex;
    align-items: center;
  }
}
.pointer {
  cursor: pointer;
}
</style>

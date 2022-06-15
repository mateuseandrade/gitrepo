<template>
  <v-card color="grey darken-1" dark class="mb-5">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div class="d-flex">
        <v-avatar class="ma-3" size="100" tile>
          <v-img :src="repo.owner.avatar_url"></v-img>
        </v-avatar>
        <div>
          <div class="d-flex">
            <v-card-title
              pointer
              @click="setDetalhesRepo(repo)"
              class="text-h5 pointer"
              v-text="repo.full_name"
            ></v-card-title>
            <v-btn
              class="mt-3"
              icon
              color="grey lighten-1"
              @click="setFavorito(repo)"
            >
              <v-icon>{{
                repo.fav ? "mdi-heart" : "mdi-heart-outline"
              }}</v-icon>
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
            @click="setDetalhesRepo(repo)"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    repo: {
      type: Object,
    },
    isFavPage: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(["setFavorito", "setDetalhesRepo"]),
  },
};
</script>

<style lang="css" scoped>
.pointer {
  cursor: pointer;
}
</style>


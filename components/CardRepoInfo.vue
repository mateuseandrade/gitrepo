<template>
  <v-card color="grey darken-3" dark class="mt-5">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div class="d-flex">
        <v-avatar class="ma-5" size="150" tile>
          <v-img :src="repoInfo.owner.avatar_url"></v-img>
        </v-avatar>
        <div>
          <div class="d-flex pt-5" style="display: block; align-items: center">
            <v-card-title class="text-h4" v-text="repoInfo.full_name">
            </v-card-title>
            <v-btn icon color="grey lighten-1" @click="setFavorito(repoInfo)">
              <v-icon>{{
                repoInfo.fav ? "mdi-heart" : "mdi-heart-outline"
              }}</v-icon>
            </v-btn>
          </div>
          <v-card-subtitle
            class="pt-3"
            v-text="repoInfo.description"
          ></v-card-subtitle>
        </div>
      </div>
      <div style="align-self: start">
        <v-card-actions>
          <v-btn
            class="ma-2"
            text
            icon
            color="grey lighten-2"
            @click="setDetalhesRepo({})"
          >
            <v-icon>mdi-arrow-left-circle</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </div>
    <div class="d-flex pt-4 pb-4 flex-no-wrap justify-space-around">
      <div class="d-flex">
        <v-icon>mdi-star</v-icon>
        <div class="pl-5">{{ repoInfo.stargazers_count }}</div>
      </div>
      <div class="d-flex">
        <v-icon>mdi-eye</v-icon>
        <div class="pl-5">{{ repoInfo.watchers_count }}</div>
      </div>
      <div class="d-flex">
        <v-icon>mdi-calendar-range</v-icon>
        <div class="pl-5">{{ updatedAt }}</div>
      </div>
    </div>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    repoInfo: {
      type: Object,
    },
  },
  computed: {
    updatedAt() {
      let data = this.repoInfo.updated_at;
      var ano = data.split("-")[0];
      var mes = data.split("-")[1];
      var dia = data.split("T")[0];

      return ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;
    },
  },
  methods: {
    ...mapActions(["setDetalhesRepo", "setFavorito"]),
  },
};
</script>
<style lang="scss" scoped></style>

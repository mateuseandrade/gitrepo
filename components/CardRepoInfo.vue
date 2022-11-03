<template>
  <v-dialog v-model="showModal" persistent width="1000">
    <v-card color="grey darken-3" dark class="repo-info">
      <div class="repo-info-principal">
        <div>
          <v-avatar class="ma-5" size="150" tile>
            <v-img :src="repoInfo.owner.avatar_url"></v-img>
          </v-avatar>
          <div>
            <div class="d-flex pt-5 align-center">
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
            <v-btn class="ma-2" icon color="grey lighten-2" @click="close()">
              <v-icon>mdi-close-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </div>
      <div class="repo-info-option">
        <div>
          <v-icon>mdi-star</v-icon>
          <div>{{ repoInfo.stargazers_count }}</div>
        </div>
        <div>
          <v-icon>mdi-eye</v-icon>
          <div>{{ repoInfo.watchers_count }}</div>
        </div>
        <div>
          <v-icon>mdi-calendar-range</v-icon>
          <div>{{ updatedAt }}</div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    repoInfo: {
      type: Object,
    },
    showModal: {
      type: Boolean,
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
    ...mapActions(["setFavorito"]),

    close() {
      this.$emit("closeModal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.repo-info {
  margin-top: 10px;

  &-principal {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
    }
  }

  &-option {
    display: flex;
    padding: 15px 0px;
    justify-content: space-around;

    div {
      display: flex;

      div {
        padding-left: 8px;
      }
    }
  }
}
</style>

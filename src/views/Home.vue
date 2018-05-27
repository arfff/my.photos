<template>
  <div>
    <v-jumbotron color="grey lighten-2"
                 height="100px">
      <v-container>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Bienvenue !</h3>
            <!-- <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae
              id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare
              assueverit ex eum, ne nam essent vocent admodum.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Check out our newest features!</div>
            <v-btn large
                   color="primary"
                   class="mx-0">See more</v-btn> -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container fill-height>
      <v-layout row
                wrap
                align-center>
        <v-flex>
          <v-carousel>
            <v-carousel-item v-for="index in 3"
                             :src="albums[index - 1].coverSrc"
                             :key="index"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import albumsSettings from '../../static/albums/albums.json';

export default {
  data() {
    return {
      albums: albumsSettings.albums,
      items: [
        {
          src: '/static/welcome_images/1.jpg',
        },
        {
          src: '/static/welcome_images/2.jpg',
        },
        {
          src: '/static/welcome_images/3.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>

<template>
  <v-container xs10>
    <v-card>
      <v-toolbar color="white"
                 height="50px"
                 flat>
        <v-btn icon
               light
               @click="$router.go(-1)">
          <v-icon color="grey darken-2">arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title class="grey--text text--darken-4">{{album.title}}
          <small>({{album.date}})</small>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog"
                  fullscreen
                  hide-overlay
                  transition="scale-transition"
                  scrollable>
          <v-btn light
                 flat
                 slot="activator"
                 @click.native="cycle = true">Diaporama
            <v-icon color="grey darken-2"
                    large>play_arrow</v-icon>
          </v-btn>
          <v-card class="full-screen-slide">
            <!-- <v-toolbar dark
                       color="grey darken-4"
                       flat>
              <v-btn icon
                     dark
                     @click.native="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar> -->
            <v-carousel v-if="dialog"
                        style="height:100%"
                        dark
                        :cycle="cycle"
                        v-model="carousel"
                        :hideDelimiters=true>
              <v-carousel-item v-for="(photo, photoIndex) in album.photos"
                               :key="photoIndex"
                               :src="`./../static/albums/${$route.params.id}/original/${photo.src}`">
                <!-- <v-jumbotron dark>
                  <v-container fill-height>
                    <v-layout align-center>
                      <v-flex> -->
                <h2 class="display-0 white--text">{{ photo.text }}</h2>
                <h2 class="display-0 white--text slides-counter">{{photoIndex + 1 + "/" + album.photos.length}}</h2>
                <!-- </v-flex>
                    </v-layout>
                  </v-container>
                </v-jumbotron> -->
              </v-carousel-item>
            </v-carousel>
            <v-fab-transition>
              <v-btn @click.native="closeCarousel()"
                     color="black"
                     fab
                     dark
                     medium
                     absolute
                     right
                     class="close-btn">
                <v-icon>close</v-icon>
              </v-btn>
            </v-fab-transition>
            <v-fab-transition>
              <v-btn @click.native="cycle = !cycle; photoIndex = 0"
                     color="grey darken-2"
                     fab
                     dark
                     medium
                     absolute
                     class="play-btn">
                <v-icon>{{cycle ? "pause" : "play_arrow"}}</v-icon>
              </v-btn>
            </v-fab-transition>
            <!-- <v-carousel height="100%">
              <v-carousel-item v-for="photo in album.photos"
                               :key="photo.src"
                               :src="`./../static/albums/album-1/original/${photo.src}`"></v-carousel-item>
            </v-carousel> -->
          </v-card>
        </v-dialog>
        <!-- <v-btn icon
               light>
          <v-icon color="grey darken-2">share</v-icon>
        </v-btn> -->
      </v-toolbar>
      <v-subheader v-if="album.subtitle && album.subtitle.trim() !== ''">{{album.subtitle}}</v-subheader>
      <!-- <img v-for="photo in album.photos"
                 :key="photo.src"
                 :src="`./../static/albums/album-1/${photo.thumb_src}`"
                 class="image"
                 alt="lorem"
                 :width="`${photo.width / photo.height * 100}px`"
                 height="100px"
                 mx-3> -->
      <v-container v-bind="{ [`grid-list-xs`]: true }"
                   fluid>
        <v-layout row
                  wrap>
          <v-flex v-for="(photo,photoIndex) in album.photos"
                  :key="photo.src"
                  lg1
                  md2
                  sm2
                  xs3>
            <v-tooltip bottom>
              <v-card flat
                      tile
                      slot="activator"
                      hover>
                <v-card-media :src="`./../static/albums/${$route.params.id}/${photo.thumb_src}`"

                              @click.native.stop="openCarousel(photoIndex)"
                              height="100px">
                  <!-- <v-btn v-if="hovered === photoIndex"
                         flat
                         icon
                         large
                         color="white">
                    <v-icon>visibility</v-icon>
                  </v-btn> -->
                </v-card-media>
              </v-card>
              <span>{{photo.text}}</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- <v-container fluid
                   grid-list-lg>
        <v-layout wrap
                  v-for="
                              photo
                              in
                              album.photos
                              "
                  :key="photo.src
                              ">
          <v-flex justify-center>

            <v-card flat
                    tile>
              <v-card-media :src="`./../static/albums/album-1/${photo.thumb_src}`
                              "
                            height="150px
                              ">
              </v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container> -->
      <!-- :width="`${photo.width /
                              photo.height
                              *
                              66}px`
                              "
             height="66px
                              "> -->
      <!-- <v-container fluid
                   grid-list-xs
                   xs10
                   text-xs-center>
        <v-layout row
                  wrap>
          <v-flex justify-center
                  v-for="photo
                              in
                              album.photos
                              "
                  :key="photo.src
                              "
                  xs1>
            <img :src="`./../static/albums/album-1/${photo.thumb_src}`
                              "
                 class="image
                              "
                 alt="lorem
                              "
                 :width="`${photo.width /
                              photo.height
                              *
                              66}px`
                              "
                 height="66px
                              ">
          </v-flex>
        </v-layout>
      </v-container> -->
    </v-card>
  </v-container>
</template>

<script>
// import axios from 'axios';
// import album from '../../static/albums/album-1/list.json';
// const album = await axios.get('../../static/albums/album-1/list.json');

export default {
  data: () => ({
    dialog: false,
    cycle: false,
    album: {},
    // photoIndex: 0,
    carousel: 0,
  }),
  watch: {
    '$route.params.id': function (id) {
      if (id !== '') {
        this.loadList();
      }
    },
  },
  mounted() {
    this.loadList();
  },
  methods: {
    loadList() {
      import(`../../static/albums/${this.$route.params.id}/list.json`).then((response) => {
        this.album = response;
      });
    },
    openCarousel(itemIndex) {
      this.carousel = itemIndex;
      // this.carousel = 0;
      this.dialog = true;
      // this.cycle = true;
    },
    closeCarousel() {
      this.dialog = false;
      this.cycle = false;
      this.carousel = 0;
      // this.$nextTick(() => (this.dialog = true));
    },
  },
};
</script>

<style>
.close-btn {
  top: 15px;
  opacity: 0.75;
}
.play-btn {
  /* top: 90%;*/
  right: 0;
  margin: auto;
  position: fixed;
  left: 0;
  bottom: 10px;
  opacity: 0.75;
}
.jumbotron__image {
  margin: auto;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  min-width: auto;
  position: absolute;
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
}
.slides-counter {
  right: 0;
  margin: auto;
  position: fixed;
  left: 10px;
  bottom: 10px;
}
.dialog--fullscreen > div.full-screen-slide {
  background-color: rgba(24, 24, 24, 0.8);
}
</style>

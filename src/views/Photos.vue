<template>
  <v-container>
    <v-layout column>
      <v-flex xs12>
        <v-card>
          <v-container fluid
                       grid-list-md>
            <v-layout row
                      wrap>
              <v-flex v-for="card in cards"
                      v-bind="{ [`xs${card.flex}`]: true }"
                      :key="card.title"
                      xs6
                      sm4
                      md3
                      lg2>
                <v-card>
                  <v-card-media :src="card.coverSrc"
                                height="200px">
                    <v-container fill-height
                                 fluid>
                      <v-layout fill-height>
                        <v-flex xs12
                                align-end
                                flexbox>
                          <span class="headline white--text"
                                v-text="card.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <!-- <v-card-title primary-title>
                    <div>
                      <div class="headline">{{card.title}}</div>
                      <div>{{card.date}}</div>
                      <span class="grey--text">{{card.subtitle}}</span>
                    </div>
                  </v-card-title> -->
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon
                           :to="`/album/${card.path}`">
                      <v-icon>visibility</v-icon>
                    </v-btn>
                    <!-- <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn> -->
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import albumsSettings from '../../static/albums/albums.json';

export default {
  data: () => ({
    cards: albumsSettings.albums,
    // [
    //     { title: 'Album 1', src: '/static/welcome_images/1.jpg', flex: 4 },
    //     { title: 'Album 2', src: '/static/welcome_images/2.jpg', flex: 4 },
    //     { title: 'Album 3', src: '/static/welcome_images/3.jpg', flex: 4 },
    // ],
  }),
};
</script>

<style scoped>

</style>

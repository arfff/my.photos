<template>
  <v-app>
    <!-- <v-navigation-drawer permanent
                         app
                         fixed
                         clipped
                         class="blue lighten-3"
                         dark>
      <v-list>
        <v-list-tile v-for="item in items"
                     :key="item.title"
                     :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar class="blue lighten-3"
               dark>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>My Photos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat
               to='/'>Accueil</v-btn>
        <v-btn flat
               to='/photos'>Photos</v-btn>
        <v-btn flat
               to='/videos'>Vidéos</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: [
        { title: 'Accueil', icon: 'home', route: '/' },
        { title: 'Photos', icon: 'photo_library', route: '/photos' },
        { title: 'Vidéos', icon: 'video_library', route: '/videos' },
      ],
    };
  },
};
</script>

<style>
html {
  overflow: auto;
}
</style>

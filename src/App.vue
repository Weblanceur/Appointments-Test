<template>
  <v-app id="inspire">

    <v-app-bar
            app
            color="blue darken-3"
            dark
    >
      <v-toolbar-title
              style="width: 300px"
              class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Appointments</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
              title="My Appointments"
              icon
              to="/"
      >
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container
              class="fill-height"
              fluid
      >
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {}
</script>
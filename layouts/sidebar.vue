<template>
  <div class="font" style="background-color: #252422">

    <v-container
      fill-height
      fluid
    >
      <v-row
        v-model="active"
      >
        <vs-button
          @click="activeSidebar = !activeSidebar"
          icon
          relief
          danger
        >
          <v-icon aria-hidden="false">
            mdi-menu-open
          </v-icon>
        </vs-button>
      </v-row>

    </v-container>

    <vs-sidebar
      absolute
      v-model="active"
      :open.sync="activeSidebar"
      background="#403D39"
      textWhite
    >
      <template #logo>
        Adarsh Sivadas
      </template>

      <vs-sidebar-item id="home" NuxtLink to="/">
        <template #icon>
          <v-icon aria-hidden="false" style="color: white;">
            mdi-home
          </v-icon>
        </template>
        Home
      </vs-sidebar-item>

      <vs-sidebar-item id="skills" NuxtLink to="/About">
        <template #icon>
          <v-icon aria-hidden="false" style="color: white;">
            mdi-developer-board
          </v-icon>
        </template>
        About
      </vs-sidebar-item>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow id="resume" NuxtLink to="/resume">
            <template #icon>
              <v-icon aria-hidden="false" style="color: white;">
                mdi-code-braces-box
              </v-icon>
            </template>
            Resume
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="menu_exp" NuxtLink to="/resume#experience">
          <template #icon>
            <v-icon aria-hidden="false" style="color: #6030ff;">
              mdi-trending-up
            </v-icon>
          </template>
          Experience
        </vs-sidebar-item>

        <vs-sidebar-item id="menu_edu" NuxtLink to="/resume#education">
          <template #icon>
            <v-icon aria-hidden="false" style="color: #6030ff;">
              mdi-google-classroom
            </v-icon>
          </template>
          Education
        </vs-sidebar-item>

        <vs-sidebar-item id="menu_cert" NuxtLink to="/resume#certifications">
          <template #icon>
            <v-icon aria-hidden="false" style="color: #6030ff;">
              mdi-certificate-outline
            </v-icon>
          </template>
          Certifications
        </vs-sidebar-item>

        <vs-sidebar-item id="menu_link" NuxtLink to="/resume#links">
          <template #icon>
            <v-icon aria-hidden="false" style="color: #6030ff;">
              mdi-link-variant
            </v-icon>
          </template>
          Links
        </vs-sidebar-item>
      </vs-sidebar-group>

      <template #footer>
        <vs-row justify="space-around">
          <vs-button color="#2867B2" icon>
            <v-icon aria-hidden="false" style="color: white;">
              mdi-linkedin
            </v-icon>
          </vs-button>

          <vs-button color="#6CC644" icon>
            <v-icon aria-hidden="false" style="color: white;">
              mdi-github
            </v-icon>
          </vs-button>

          <vs-button color="#F9A73E" icon>
            <v-icon aria-hidden="false" style="color: white;">
              mdi-web
            </v-icon>
          </vs-button>

        </vs-row>
      </template>
    </vs-sidebar>

    <Nuxt/>
  </div>
</template>

<script>
  export default {
    data:() => ({
      active: 'home',
      activeSidebar: false
    })
  }
</script>

<style>
  .font {
    hidden: true;
    font-family: 'Google Sans', cursive;
  }
</style>

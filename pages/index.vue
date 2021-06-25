<template>
  <v-app id="home" class="font" style="background-color: #252422">
    <v-main>
      <v-container
        fill-height
      >
        <v-row>
          <v-col
            cols="6"
            md="4"
          >
            <!--<v-card-->
              <!--class="pa-2"-->
              <!--outlined-->
              <!--tile-->
            <!--&gt;-->
              <!---->
            <!--</v-card>-->
            <img src="../assets/profile_adarsh.png" style="max-height: 350px" alt="yellow">
          </v-col>
          <v-col
            cols="12"
            md="8"
            class="ml-auto"
          >
            <v-sheet
              class="pa-2"
              color="rgb(0,0,0,0)"
              transparent
            >
              <p class="font-weight-regular text-xl-left" style="font-size: 40px">
                <b> Hello 👋 </b><br>
                I am Adarsh Sivadas <br>
                I troubleshoot problems, lead teams and help business succeed.

              </p>
            </v-sheet>
            <v-row >
              <vs-button
                color="#403D39"
                size="large"
                success
                animation-type="vertical"
              >
                Email
                <template #animate >
                  <v-icon aria-hidden="false" small>
                    mdi-email-send-outline
                  </v-icon>Send
                </template>
              </vs-button>

              <vs-button
                color="#403D39"
                size="large"
                @click="linkedin"
              >
                Linkedin
                <template #animate >
                  <v-icon aria-hidden="false">
                    mdi-linkedin
                  </v-icon>Link up!
                </template>
              </vs-button>

              <vs-button
                color="#403D39"
                size="large"
                NuxtLink to="/about"
              >
                About
                <template #animate >
                  <v-icon aria-hidden="false">
                    mdi-developer-board
                  </v-icon>
                </template>
              </vs-button>

              <vs-button
                color="#403D39"
                size="large"
                NuxtLink to="/resume"
              >
                Resume
                <template #animate >
                  <v-icon aria-hidden="false">
                    mdi-file-account
                  </v-icon> +

                  <v-icon aria-hidden="false">
                    mdi-code-braces-box
                  </v-icon>
                </template>
              </vs-button>

            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    data: () => ({
      center: "center",
      active: "home"
    }),

    methods: {
      linkedin() {
        window.open("https://www.linkedin.com/in/adarshsivadas/", "_blank", "noopener noreferrer");
      }
    }
  }
</script>

<style scoped>
  .font {
    font-family: 'Google Sans', cursive;
  }
</style>


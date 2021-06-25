<template >
  <v-app id="resume" class="font" style="background-color: #252422">
    <v-container
      fill-height
      fluid
    >
      <v-spacer></v-spacer>

      <!-- Business Card !-->
      <v-row
        :justify=centered
        class="pa-2"
      >
        <vs-card type="3">
          <template #title>
            <h3>Adarsh Sivadas</h3>
          </template>
          <template #img>
            <img src="../assets/profile_adarsh.jpeg" alt="">
          </template>
          <template #text>
            <p>
              <em>Software Developer</em>
            </p>
            <p>
              Troubleshooting problems, leading teams and helping businesses succeed.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <v-icon aria-hidden="false" small>
                mdi-at
              </v-icon>
            </vs-button>

            <vs-button color="#2867B2" icon>
              <v-icon aria-hidden="false" small>
                mdi-linkedin
              </v-icon>
            </vs-button>

            <vs-button color="#6CC644" icon>
              <v-icon aria-hidden="false" small>
                mdi-github
              </v-icon>
            </vs-button>

            <vs-button color="#F9A73E" icon>
              <v-icon aria-hidden="false" small>
                mdi-web
              </v-icon>
            </vs-button>

          </template>
        </vs-card>
      </v-row>

      <!-- WORK EXPERIENCE !-->
      <v-container
        :justify=centered
        id="experience"
      >
        <v-banner>
          <strong>WORK EXPERIENCE</strong>
        </v-banner>

        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/UB_LOGO.jpg">
              </v-avatar>
            </template>
            <v-row
            >
              <v-col
                cols="6"
                md="4"
              >
                <strong>Tech Squad Consultant</strong><br>
                <div class="text-caption mb-2">
                  <b>UBIT <br>
                  Buffalo, NY<br></b>
                  MAY 2021 - PRESENT
                </div>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/linde-group-vector-logo.jpg">
              </v-avatar>
            </template>
            <v-row
            >
              <v-col
                cols="6"
                md="4"
              >
                <strong>Software Engineer Intern</strong><br>
                <div class="text-caption mb-2">
                  <b>LINDE / PRAXAIR <br>
                    Buffalo, NY<br></b>
                  MAY 2020 - MAY 2021
                </div>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
          large
          >
          <template v-slot:icon>
            <v-avatar>
              <img src="../assets/DSC_LOGO.jpg">
            </v-avatar>
          </template>
          <v-row
          >
            <v-col
              cols="6"
              md="4"
            >
              <strong>Student Lead</strong><br>
              <div class="text-caption mb-2">
                <b>GOOGLE DEVELOPER STUDENT CLUB<br>
                  Buffalo, NY<br></b>
                AUG 2019 - JULY 2020
              </div>
            </v-col>

            <v-col
              cols="12"
              md="8"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
              Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-col>
          </v-row>
          </v-timeline-item>

          <v-timeline-item
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/TCIE_LOGO.jpg">
              </v-avatar>
            </template>
            <v-row
            >
              <v-col
                cols="6"
                md="4"
              >
                <strong>Student Assistant</strong><br>
                <div class="text-caption mb-2">
                  <b>UB THE CENTER FOR INDUSTRIAL EFFECTIVENESS <br>
                    Buffalo, NY<br></b>
                  JUN 2019 - JAN 2020
                </div>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/MOTIVAIR_LOGO.jpeg">
              </v-avatar>
            </template>
            <v-row
            >
              <v-col
                cols="6"
                md="4"
              >
                <strong>Technical Intern</strong><br>
                <div class="text-caption mb-2">
                  <b>MOTIVAIR <br>
                    Buffalo, NY<br></b>
                  JUN 2019 - AUG 2019
                </div>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/UBCDS_LOGO.jpg">
              </v-avatar>
            </template>
            <v-row
            >
              <v-col
                cols="6"
                md="4"
              >
                <strong>Food Service Worker</strong><br>
                <div class="text-caption mb-2">
                  <b>UB CAMPUS DINING & SHOPS <br>
                    Buffalo, NY<br></b>
                  JAN 2019 - MAY 2019
                </div>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/ZOMATO_LOGO.jpg">
              </v-avatar>
            </template>
            <v-row
            >
              <v-col
                cols="6"
                md="4"
              >
                <strong>Customer Service Associate</strong><br>
                <div class="text-caption mb-2">
                  <b>ZOMATO<br>
                    Delhi, India<br></b>
                  MAY 2018 - AUG 2018
                </div>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-timeline-item>

        </v-timeline>
      </v-container>

      <!-- EDUCATION !-->
      <v-container
        :justify=centered
        id="education"
      >
        <v-banner>
          <strong>EDUCATION</strong>
        </v-banner>

        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/UB_LOGO.jpg">
              </v-avatar>
            </template>
            <v-row
            >
              <v-col
                cols="6"
                md="4"
              >
                <strong>Bachelor's - Computer Science</strong><br>
                <div class="text-caption mb-2">

                  <b>UNIVERSITY AT BUFFALO<br>
                  Buffalo, NY<br></b>
                  2018 - 2022
                </div>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-timeline-item>

        </v-timeline>
      </v-container>

      <!-- CERTIFICATIONS !-->
      <v-container
        :justify=centered
        id="certifications"
      >
        <v-banner>
          <strong>CERTIFICATIONS</strong>
        </v-banner>

        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/GOOGLECLOUD_LOGO.jpg">
              </v-avatar>
            </template>
            <v-row
            >
              <v-col
                cols="6"
                md="4"
              >
                <strong>Google Cloud Platform Fundamentals: Core Infrastructure </strong><br>
                <div class="text-caption mb-2">

                  <b>COURSERA<br></b>
                    FEB 2020
                </div>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-timeline-item>

        </v-timeline>
      </v-container>

      <!-- LINKS !-->
      <v-container
        :justify=centered
        id="links"
      >
        <v-banner>
          <strong>CONNECT</strong>
        </v-banner>

        <v-row
          :justify=centered
          no-gutters
        >
          <vs-button
            icon
            color="facebook"
          >
            <v-icon aria-hidden="false">
              mdi-facebook
            </v-icon> Facebook
          </vs-button>

          <vs-button
            icon
            color="facebook"
          >
            <v-icon aria-hidden="false">
              mdi-facebook
            </v-icon> Facebook
          </vs-button>

          <vs-button
            icon
            color="facebook"
          >
            <v-icon aria-hidden="false">
              mdi-facebook
            </v-icon> Facebook
          </vs-button>
        </v-row>
      </v-container>

    </v-container>
  </v-app>
</template>

<script>

  export default {
    layout: 'sidebar',
    data: () => ({
      centered: 'center',
    }),
  }
</script>

<style>
  .font {
    font-family: 'Google Sans', cursive;
  }
</style>

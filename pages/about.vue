<template>
  <v-app id="about" class="font" style="background-color: #252422">
    <v-main>
      <v-container
        fill-height
      >
        <v-row
          :justify=centered
          class="pa-2"
        >
          <v-col>

          </v-col>

        </v-row>

        <v-container>
          <v-banner>
            <strong>WHO DIS?</strong>
          </v-banner>

          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="6"
                sm="6"
              >
                <div class="responsive-youtube">
                  <iframe
                    width="560" height="315" src="https://www.youtube.com/embed/at1NMO9YCOw"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
                sm="6"
              >
                <p class="font-weight-regular text-xl-left" style="font-size: 20px">
                  <b> Hello 👋 </b><br>
                  I am Adarsh Sivadas. I build software applications that help you succeed.<br><br>
                  I took Computer Science in high school but dropped out because I was told: "I wasn't good enough."<br><br>
                  So I decided to pursue a Bachelor's in Computer Science and years later, after many hours of coding,
                  I can confidently say it was the right call.
                </p>
              </v-col>
            </v-row>
          </v-container>

        </v-container>

        <v-container>
          <v-banner>
            <strong>SKILLS</strong>
          </v-banner>

          <v-container>
            <v-row
            >
              <v-col
                cols="12"
                md="4"
                xs="4"
              >
                <v-card height="425">
                  <v-card-title>
                    <span class="text-h6 font-weight-light">Frontend Stacks</span>
                  </v-card-title>
                  <zingchart :data="frontEnd"></zingchart>
                </v-card>
              </v-col>

              <v-col
                cols="12"
                md="4"
                xs="4"
              >
                <v-card height="425">
                  <v-card-title>
                    <!--<span class="text-h6 font-weight-light">Backend Stacks</span>-->
                    <span class="text-h6 font-weight-light text-align-center">Backend Stacks</span>
                  </v-card-title>
                  <zingchart :data="backEnd"></zingchart>
                </v-card>
              </v-col>

              <v-col
                cols="12"
                md="4"
                xs="4"
              >
                <v-card height="425">
                  <v-card-title>
                    <span class="text-h6 font-weight-light">Programming Languages</span>
                  </v-card-title>
                  <zingchart :data="languages"></zingchart>
                </v-card>
              </v-col>
            </v-row>
            <!--<v-row>-->
              <!--<v-col>-->
                <!--<v-card>-->
                  <!--<v-card-title>-->
                    <!--&lt;!&ndash;<span class="text-h6 font-weight-light">Backend Stacks</span>&ndash;&gt;-->
                    <!--<span class="text-h6 font-weight-light text-align-center">Other skills</span>-->
                  <!--</v-card-title>-->
                  <!--<zingchart :data="otherSkills"></zingchart>-->
                <!--</v-card>-->
              <!--</v-col>-->
            <!--</v-row>-->
          </v-container>
        </v-container>

        <v-container>
          <v-banner>
            <strong>PROJECTS</strong>
          </v-banner>

          <v-container>
            <v-row>
              <v-col>
                <v-dialog
                  v-model="dialog"
                  width="900"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <vs-card
                      v-bind="attrs"
                      v-on="on"
                      type="2"
                    >
                      <template #title>
                        <h3>Basketball dunk contest</h3>
                      </template>
                      <template #img>
                        <img src="../assets/stock-photos.jpg" alt="">
                      </template>
                      <template #text>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                      </template>
                      <template #interactions>
                        <vs-button danger icon>
                          <v-icon small >mdi-amazon</v-icon>
                        </vs-button>
                      </template>
                    </vs-card>
                  </template>

                  <v-card
                    class="mx-auto"
                    max-width="900"
                  >
                    <v-card-title>
                      <v-icon
                        large
                        left
                      >
                        mdi-twitter
                      </v-icon>
                      <span class="text-h6 font-weight-light">Some project</span>
                    </v-card-title>

                    <v-carousel
                      cycle
                      height="400"
                      hide-delimiter-background
                    >
                      <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                      >
                        <v-sheet
                          :color="colors[i]"
                          height="100%"
                        >
                          <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                          >
                            <div class="text-h2">
                              {{ slide }} Slide
                            </div>
                          </v-row>
                        </v-sheet>
                      </v-carousel-item>
                    </v-carousel>

                    <v-card-text class="text-h5 font-weight-bold">
                      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                    </v-card-text>
                  </v-card>

                </v-dialog>
              </v-col>
            </v-row>

          </v-container>

        </v-container>

        <v-container>
          <v-banner>
            <strong>BOOKS I LOVE</strong>
          </v-banner>

          <vs-card-group>
            <vs-card type="3">
              <template #title>
                <h3>1984</h3>
              </template>
              <template #img>
                <img src="../assets/1984.jpeg" alt="" style="max-width:1000px; max-height:1000px;">
              </template>
              <template #text>
                <p>
                  1984 is the fictional dystopian world where the totalitarian governments have taken over freedom and free will of citizens.
                  Though published in 1949, it is still considered a modern take on authority.
                </p>
              </template>
              <template #interactions>
                <vs-button icon>
                  <v-icon small >mdi-amazon</v-icon>
                </vs-button>
              </template>
            </vs-card>

            <vs-card type="3">
              <template #title>
                <h3>Art of War</h3>
              </template>
              <template #img>
                <img src="../assets/art-of-war.jpeg" alt="" style="max-width:1000px; max-height:1000px;">
              </template>
              <template #text>
                <p>
                  The Art of War is a Chinese military treatise dating from the Late Spring and Autumn Period.
                  The work is attributed to the military strategist, Sun Tzu.
                </p>
              </template>
              <template #interactions>
                <vs-button icon>
                  <v-icon small >mdi-amazon</v-icon>
                </vs-button>
              </template>
            </vs-card>

            <vs-card type="3">
            <template #title>
              <h3>Man's search for meaning</h3>
            </template>
            <template #img>
              <img src="../assets/mans-search-for-meaning.jpeg" alt="" style="max-width:1000px; max-height:1000px;">
            </template>
            <template #text>
              <p>
                The Art of War is a dating from the Late Spring and Autumn Period.
                The work is attributed to the military strategist, Sun Tzu.
              </p>
            </template>
            <template #interactions>
              <vs-button icon>
                <v-icon small >mdi-amazon</v-icon>
              </vs-button>
            </template>
          </vs-card>

          <vs-card type="3">
            <template #title>
              <h3>The Intelligent Investor</h3>
            </template>
            <template #img style="max-width:1000px; max-height:1000px;">
              <img src="../assets/the-intelligent-investor.jpeg" alt="" style="max-width:1010px; max-height:1000px;">
            </template>
            <template #text>
              <p>
                The Art of War is a Chinese military treatise dating from the Late Spring and Autumn Period.
                The work is attributed to the military strategist, Sun Tzu.
              </p>
            </template>
            <template #interactions>
              <vs-button icon>
                <v-icon small >mdi-amazon</v-icon>
              </vs-button>
            </template>
          </vs-card>

          <vs-card type="3">
            <template #title>
              <h3>Outliers</h3>
            </template>
            <template #img style="max-width:1000px; max-height:1000px;">
              <img src="../assets/outliers.jpeg" alt="" style="max-width:1000px; max-height:1000px;">
            </template>
            <template #text>
              <p>
                The Art of War is a Chinese military treatise dating from the Late Spring and Autumn Period.
                The work is attributed to the military strategist, Sun Tzu.
              </p>
            </template>
            <template #interactions>
              <vs-button icon>
                <v-icon small >mdi-amazon</v-icon>
              </vs-button>
            </template>
          </vs-card>
          </vs-card-group>
        </v-container>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    layout: 'sidebar',

    data() {
      return {
        centered: 'center',
        dialog: false,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        frontEnd: {
          "type": "radar",
          "height": "75%",
          "background-color": "#202020",
          "plot": {
            "aspect": "area",
            "animation": {
              effect: 3,
              sequence: 1,
              speed: 700
            }
          },
          scaleV: {
            visible: false
          },
          scaleK: {
            values: '0:5:1',
            labels: ['Javascript / Typescript', 'NodeJS', 'Vue.js', 'Meteor.js', 'React', 'Angular'],
            item: {
              fontColor: '#F2135D',
              backgroundColor: "white",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: '5 10',
              borderRadius: 10
            },
            refLine: {
              lineColor: '#c10000'
            },
            tick: {
              lineColor: '#59869c',
              lineWidth: 2,
              lineStyle: 'dotted',
              size: 20
            },
            guide: {
              lineColor: "#607D8B",
              lineStyle: 'solid',
              alpha: 0.3,
              backgroundColor: "#c5c5c5 #718eb4"
            }
          },
          "series": [{
            "values": [100, 90, 80, 70, 60, 50],
            "line-color": "#F2135D",
            "background-color": "#F2135D",
            "marker": {
              "type": "none"
              }
            },
          ]
        },
        backEnd: {
          "type": "radar",
          "height": "75%",
          "background-color": "#202020",
          "plot": {
            "aspect": "area",
            "animation": {
              effect: 3,
              sequence: 1,
              speed: 700
            }
          },
          scaleV: {
            visible: false
          },
          scaleK: {
            values: '0:5:1',
            labels: ['MongoDB', 'SQL', '.NET', 'Express.js / Koa.js', 'Django', 'PHP'],
            item: {
              fontColor: '#EB5E28',
              backgroundColor: "white",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: '5 10',
              borderRadius: 10
            },
            refLine: {
              lineColor: '#c10000'
            },
            tick: {
              lineColor: '#59869c',
              lineWidth: 2,
              lineStyle: 'dotted',
              size: 20
            },
            guide: {
              lineColor: "#607D8B",
              lineStyle: 'solid',
              alpha: 0.3,
              backgroundColor: "#c5c5c5 #718eb4"
            }
          },
          "series": [{
            "values": [100, 90, 80, 70, 60, 50],
            "line-color": "#EB5E28",
            "background-color": "#EB5E28",
            "marker": {
              "type": "none"
            }
          },
          ]
        },
        languages: {
          "type": "radar",
          "height": "75%",
          "background-color": "#202020",
          "plot": {
            "aspect": "area",
            "animation": {
              effect: 3,
              sequence: 1,
              speed: 700
            }
          },
          scaleV: {
            visible: false
          },
          scaleK: {
            values: '0:5:1',
            labels: ['Python', 'Scala', 'Java', 'C / C++', 'Kotlin', 'C#'],
            item: {
              fontColor: '#469962',
              backgroundColor: "white",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: '5 10',
              borderRadius: 10
            },
            refLine: {
              lineColor: '#c10000'
            },
            tick: {
              lineColor: '#59869c',
              lineWidth: 2,
              lineStyle: 'dotted',
              size: 20
            },
            guide: {
              lineColor: "#607D8B",
              lineStyle: 'solid',
              alpha: 0.3,
              backgroundColor: "#c5c5c5 #718eb4"
            }
          },
          "series": [{
            "values": [100, 90, 80, 70, 60, 50],
            "line-color": "#50C878",
            "background-color": "#50C878",
            "marker": {
              "type": "none"
            }
          },
          ]
        },
        otherSkills: {
          type: "hbar",
          "background-color": "#202020",
          plotarea: {
            'adjust-layout': true
          },
          'scale-x': {
            label: { /* Scale Title */
              text: "Here is a category scale",
            },
            labels: [ "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8" ] /* Scale Labels */
          },
          plot: {
            styles: [
              "#DC2f02",
              "#E85D04",
              "#f48c06",

            ] /* Bar Fill by Node */
          },
          series: [
            {
              values: [20,40,25,50,15,45,33,34],
            },
          ]
        },
      }
    }

  }
</script>

<style>
  .font {
    font-family: 'Google Sans', cursive;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: #202020;
    border-left: 1px solid #2c2c2c;
  }

  ::-webkit-scrollbar-thumb {
    background: #F2135D;
    border: solid 3px #202020;
    border-radius: 7px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }

  .responsive-youtube {
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
  }

  .responsive-youtube iframe
  {left:0; top:0; height:100%; width:100%; position:absolute;}


</style>


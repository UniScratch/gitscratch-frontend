<template>
  <div>
    <v-row>
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-title class="text-h5">
            负载
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="dashboard-card">
            <v-row style="margin-top:0px">
              <v-col cols="6">
                <v-progress-circular
                  :rotate="270"
                  :size="100"
                  :width="6"
                  :value="80"
                  color="primary"
                >
                  80%
                </v-progress-circular>
              </v-col>
              <v-col cols="6">
                <p class="pt-3">
                  1 min: 78%
                  <br>
                  5 min: 78%
                  <br>
                  10 min: 78%
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-title class="text-h5">
            CPU
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="dashboard-card">
            CPU 1:
            <v-progress-linear
              value="15"
              height="6"
              rounded
            />
            CPU 2:
            <v-progress-linear
              value="30"
              height="6"
              rounded
            />
            CPU 3:
            <v-progress-linear
              value="45"
              height="6"
              rounded
            />
            CPU 4:
            <v-progress-linear
              value="60"
              height="6"
              rounded
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-title class="text-h5">
            内存
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="dashboard-card">
            Memory: 1.5G/2.0G
            <v-progress-linear
              value="15"
              height="6"
              rounded
            />
            Swap: 0.5G/2.0G
            <v-progress-linear
              value="30"
              height="6"
              rounded
            />
            <v-row style="margin-top:0px">
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-circle-medium
                </v-icon>
                64 线程
              </v-col>
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-circle-medium
                </v-icon>
                2 活动
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-title class="text-h5">
            用户
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="dashboard-card">
            <span class="text-h5">
              <v-icon color="primary">
                mdi-account-outline
              </v-icon>
              114514
            </span>
            <v-row style="margin-top:20px">
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-up
                </v-icon>
                +32
                <br>
                注册用户
              </v-col>
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-down
                </v-icon>
                -3.2%
                <br>
                留存率
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-title class="text-h5">
            作品
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="dashboard-card">
            <span class="text-h5">
              <v-icon color="primary">
                mdi-book-outline
              </v-icon>
              1919810
            </span>
            <v-row style="margin-top:20px">
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-up
                </v-icon>
                +32
                <br>
                作品数量
              </v-col>
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-up
                </v-icon>
                +3.2%
                <br>
                增加率
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-title class="text-h5">
            组织
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="dashboard-card">
            <span class="text-h5">
              <v-icon color="primary">
                mdi-account-group-outline
              </v-icon>
              1919810
            </span>
            <v-row style="margin-top:20px">
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-up
                </v-icon>
                +32
                <br>
                组织数量
              </v-col>
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-up
                </v-icon>
                +3.2%
                <br>
                增加率
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-title class="text-h5">
            评论
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="dashboard-card">
            <span class="text-h5">
              <v-icon color="primary">
                mdi-comment-outline
              </v-icon>
              1919810
            </span>
            <v-row style="margin-top:20px">
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-up
                </v-icon>
                +32
                <br>
                评论数量
              </v-col>
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-up
                </v-icon>
                +3.2%
                <br>
                增加率
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <v-card>
          <v-card-title class="text-h5">
            举报
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="dashboard-card">
            <span class="text-h5">
              <v-icon color="primary">
                mdi-alert-outline
              </v-icon>
              1919810
            </span>
            <v-row style="margin-top:20px">
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-up
                </v-icon>
                +32
                <br>
                举报数量
              </v-col>
              <v-col cols="6">
                <v-icon color="primary">
                  mdi-arrow-up
                </v-icon>
                +3.2%
                <br>
                通过率
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.dashboard-card {
  height: 130px !important;
  min-height: 130px !important;
  max-height: 130px !important;
}
</style>

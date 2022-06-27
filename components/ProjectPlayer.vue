<template>
  <client-only>
    <div>
      <div>
        <v-btn icon :disabled="!loadFileTrue" @click="greenFlag">
          <v-icon :color="projectRunning ? '#4CAF5088' : '#4CAF50'">
            mdi-play
          </v-icon>
        </v-btn>
        <v-btn icon :disabled="!loadFileTrue" @click="stopAll">
          <v-icon color="red">
            mdi-stop
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>
            mdi-fullscreen
          </v-icon>
        </v-btn>
      </div>
      <v-responsive :aspect-ratio="4/3">
        <<<<<<< HEAD
        =======
        <div style="position: absolute; width: 100%; text-align:center;">
          <v-progress-circular
            v-if="!loadFileTrue"
            indeterminate
            style="margin: auto"
            color="blue lighten-3"
          />
          <br><br>
          <p v-show="!loadFileTrue">
            正在载入项目
          </p>
        </div>
        >>>>>>> 273bbbc4c46984017e8a1ec3ccb730bcd5b06e45
        <canvas id="canvas_sb3" width="480" height="360" style="width:100%;height:100%" />
      </v-responsive>
    </div>
  </client-only>
</template>
<script>
export default {
  data () {
    return {
      loadFileTrue: false,
      vm: null,
      projectRunning: false
    }
  },
  mounted () {
    const ScratchRender = require('scratch-render/dist/web/scratch-render')
    const VirtualMachine = require('scratch-vm/dist/web/scratch-vm')
    const ScratchStorage = require('scratch-storage/dist/web/scratch-storage')
    const ScratchSVGRenderer = require('scratch-svg-renderer/dist/web/scratch-svg-renderer')
    const AudioEngine = require('scratch-audio/src/AudioEngine.js')
    fetch('/test.sb3', {
      method: 'GET'
    }).then(res =>
      res.blob().then((blob) => {
        const canvas = document.getElementById('canvas_sb3')
        const audioEngine = new AudioEngine()
        const render = new ScratchRender(canvas)
        this.vm = new VirtualMachine()
        const storage = new ScratchStorage()
        this.vm.attachAudioEngine(audioEngine)
        this.vm.attachStorage(storage)
        this.vm.attachRenderer(render)
        this.vm.attachV2SVGAdapter(new ScratchSVGRenderer.SVGRenderer())
        this.vm.attachV2BitmapAdapter(new ScratchSVGRenderer.BitmapAdapter())
        // this.bindHandleKey()
        const reader = new FileReader()
        // byte为blob对象
        reader.readAsArrayBuffer(blob)
        reader.onload = () => {
          this.vm.start()
          this.vm.loadProject(reader.result)
            .then(() => {
              this.loadFileTrue = true
            })
        }
      })
    )
  },
  methods: {
    greenFlag () {
      this.vm.greenFlag()
      this.projectRunning = true
    },
    stopAll () {
      this.vm.stopAll()
      this.projectRunning = false
    }
  }
}
</script>

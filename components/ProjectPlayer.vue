<template>
  <client-only>
    <v-responsive :aspect-ratio="4/3">
      <canvas id="canvas_sb3" />
    </v-responsive>
  </client-only>
</template>
<script>
export default {
  mounted () {
    const ScratchRender = require('scratch-render/dist/web/scratch-render')
    const VirtualMachine = require('scratch-vm/dist/web/scratch-vm')
    const ScratchStorage = require('scratch-storage/dist/web/scratch-storage')
    const ScratchSVGRenderer = require('scratch-svg-renderer/dist/web/scratch-svg-renderer')
    const AudioEngine = require('scratch-audio/src/AudioEngine.js')
    const that = this
    // const url = this.$http.adornUrl(
    // '/test.sb3'
    // )

    fetch('/test.sb3', {
      method: 'GET'
    }).then(res =>
      res.blob().then((blob) => {
        const canvas = document.getElementById('canvas_sb3')
        const audioEngine = new AudioEngine()
        const render = new ScratchRender(canvas)
        const vm = new VirtualMachine()
        const storage = new ScratchStorage()
        vm.attachAudioEngine(audioEngine)
        vm.attachStorage(storage)
        vm.attachRenderer(render)
        vm.attachV2SVGAdapter(new ScratchSVGRenderer.SVGRenderer())
        vm.attachV2BitmapAdapter(new ScratchSVGRenderer.BitmapAdapter())
        this.vm = vm
        // this.bindHandleKey()
        const reader = new FileReader()
        // byte为blob对象
        reader.readAsArrayBuffer(blob)
        reader.onload = () => {
          vm.start()
          console.log('start')
          vm.loadProject(reader.result)
            .then(() => {
              that.loadFileTrue = true
              const div = document.createElement('div')
              div.id = 'loaded'
              document.body.appendChild(div)
              vm.greenFlag()
            })
        }
      })
    )
  }
}
</script>

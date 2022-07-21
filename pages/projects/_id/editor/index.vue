<template>
  <div id="scratchgui" class="scratchgui" />
</template>
<script>
import GUI, { AppStateHOC } from 'scratch-gui'
import React from 'react'
import ReactDOM from 'react-dom'

export default {
  layout: 'editor',
  mounted () {
    const appTarget = document.querySelector('#scratchgui')
    GUI.setAppElement(appTarget)
    const WrappedGui = AppStateHOC(GUI)
    window.GUI = ReactDOM.render(React.createElement(WrappedGui, {
      backpackVisible: false
    }), appTarget)
  },
  beforeDestroy () {
    ReactDOM.unmountComponentAtNode(document.querySelector('#scratchgui'))
    window.GUI = null
  }
}
</script>
<style>
.scratchgui {
  height: 100%;
}
</style>

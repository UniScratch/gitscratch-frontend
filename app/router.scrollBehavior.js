import goTo from 'vuetify/lib/services/goto'

export default function (to, from, savedPosition) {
  let scrollTo = 0
  if (savedPosition) {
    scrollTo = savedPosition.y
  }
  return goTo(scrollTo)
}

export default ({ app }, inject) => {
  inject('permission', {
    canComment: () => {
      if (!app.$auth.loggedIn) { // not logged in
        return { status: false, message: '请先登录后再留言' }
      }
      if (app.$auth.user.permission === 'admin') { // admin
        return { status: true }
      }
      if (app.$auth.user.banned !== 0 || app.$auth.user.muted !== 0) { // banned or muted
        return { status: false, message: '帐户被封禁或禁言' }
      }
      return { status: true } // default
    },
    canEditComment: (comment) => {
      if (!app.$auth.loggedIn) { // not logged in
        return { status: false, message: '请先登录' }
      }
      if (app.$auth.user.permission === 'admin') { // admin
        return { status: true }
      }
      if (app.$auth.user.banned !== 0 || app.$auth.user.muted !== 0) { // banned or muted
        return { status: false, message: '帐户被封禁或禁言' }
      }
      if (comment.target_type === 'project') {
        if (comment.target.author.id === app.$auth.user.id) { // author of project
          return { status: true }
        }
      }
      if (comment.target_type === 'user') {
        if (comment.target.id === app.$auth.user.id) { // author of user
          return { status: true }
        }
      }
      if (comment.user.id === app.$auth.user.id) { // comment author
        return { status: true }
      }
      return { status: false, message: '不允许' } // not allowed
    },
    canHideComment: (comment) => {
      if (!app.$auth.loggedIn) { // not logged in
        return { status: false, message: '请先登录' }
      }
      if (app.$auth.user.permission === 'admin') { // admin
        return { status: true }
      }
      if (app.$auth.user.banned !== 0 || app.$auth.user.muted !== 0) { // banned or muted
        return { status: false, message: '帐户被封禁或禁言' }
      }
      if (comment.target_type === 'project') {
        if (comment.target.author.id === app.$auth.user.id) { // author of project
          return { status: true }
        }
      }
      if (comment.target_type === 'user') {
        if (comment.target.id === app.$auth.user.id) { // author of user
          return { status: true }
        }
      }
      if (comment.user.id === app.$auth.user.id) { // comment author
        return { status: true }
      }
      return { status: false, message: '不允许' } // not allowed
    },
    canDeleteComment: (comment) => {
      if (!app.$auth.loggedIn) { // not logged in
        return { status: false, message: '请先登录' }
      }
      if (app.$auth.user.permission === 'admin') { // admin
        return { status: true }
      }
      if (app.$auth.user.banned !== 0 || app.$auth.user.muted !== 0) { // banned or muted
        return { status: false, message: '帐户被封禁或禁言' }
      }
      if (comment.target_type === 'project') {
        if (comment.target.author.id === app.$auth.user.id) { // author of project
          return { status: true }
        }
      }
      if (comment.target_type === 'user') {
        if (comment.target.id === app.$auth.user.id) { // author of user
          return { status: true }
        }
      }
      if (comment.user.id === app.$auth.user.id) { // comment author
        return { status: true }
      }
      return { status: false, message: '不允许' } // not allowed
    },
    canEditProfile: (user) => {
      if (!app.$auth.loggedIn) { // not logged in
        return { status: false, message: '请先登录' }
      }
      if (app.$auth.user.permission === 'admin') { // admin
        return { status: true }
      }
      if (user.id === app.$auth.user.id) { // user self
        return { status: true }
      }
      return { status: false, message: '不允许' } // not allowed
    },
    canEditProfileReadme: (user) => {
      if (!app.$auth.loggedIn) { // not logged in
        return { status: false, message: '请先登录' }
      }
      if (app.$auth.user.permission === 'admin') { // admin
        return { status: true }
      }
      if (user.id === app.$auth.user.id) { // user self
        return { status: true }
      }
      return { status: false, message: '不允许' } // not allowed
    },
    canEditProjectSettings: (project) => {
      if (!app.$auth.loggedIn) { // not logged in
        return { status: false, message: '请先登录' }
      }
      if (app.$auth.user.permission === 'admin') { // admin
        return { status: true }
      }
      if (project.author.id === app.$auth.user.id) { // user self
        return { status: true }
      }
      return { status: false, message: '不允许' } // not allowed
    },
    canEditProjectReadme: (project) => {
      if (!app.$auth.loggedIn) { // not logged in
        return { status: false, message: '请先登录' }
      }
      if (app.$auth.user.permission === 'admin') { // admin
        return { status: true }
      }
      if (project.author.id === app.$auth.user.id) { // user self
        return { status: true }
      }
      return { status: false, message: '不允许' } // not allowed
    }
  })
}

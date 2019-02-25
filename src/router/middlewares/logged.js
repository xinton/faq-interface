export default ({to, next, router}) => {
  const token = window.localStorage.token || null
  const user = window.localStorage.user || null

  if (token && user) {
    return router.push({ name: 'faq' })
  }

  next()
}

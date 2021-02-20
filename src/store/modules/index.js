const modules = {}

const getModules = (r) => {
  r.keys().forEach((fileName) => {
    if (fileName === './index.js') return
    const moduleName = fileName.replace(/(\.\/|\.js)/g, '')
    const data = r(fileName).default
    data.namespaced = true
    modules[moduleName] = data
  })
}

getModules(require.context('.', false, /\.js$/))

export default modules

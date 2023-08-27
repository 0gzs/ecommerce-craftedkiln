function importAll(r) {
 const images = {}
  r.keys().forEach(item => { images[item.replace('./', '')] = r(item); })
 return images
}

export const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/))

import marked from 'marked'

export function markdown(string, param) {
  return marked(resizeImages(string, param))
}

export function resizeImages(str, param) {
  return typeof str === 'undefined' ? '' : str.replace(/a.storyblok.com/g, 'img2.storyblok.com/' + param);
}
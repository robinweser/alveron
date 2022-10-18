export default function getHeadingId(text) {
  return encodeURI(text.replace(/( |:)/gi, '-').toLowerCase())
}

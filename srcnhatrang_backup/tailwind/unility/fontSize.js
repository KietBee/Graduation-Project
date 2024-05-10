const { rem, lineHeight } = require('../utils')
const fontSize = {
  xs: [rem(12), { lineHeight: lineHeight(12, 16) }],
  sm: [rem(14), { lineHeight: lineHeight(14, 18) }],
  base: [rem(16), { lineHeight: lineHeight(16, 26) }],
  lg: [rem(18)],
  xl: [rem(20)],
  '2xl': [rem(24)],
  '3xl': [rem(28)],
  '4xl': [rem(32), { lineHeight: lineHeight(28, 40) }],
  '5xl': [rem(34)],
  '6xl': [rem(40)],
  'h1': [rem(80), { lineHeight: lineHeight(40, 56) }],
  'h2': [rem(32), { lineHeight: lineHeight(32, 48) }],
  'h3': [rem(26), { lineHeight: lineHeight(26, 40) }],
  'h4': [rem(22), { lineHeight: lineHeight(22, 32) }],
  'h5': [rem(18), { lineHeight: lineHeight(18, 26) }],
  'h6': [rem(18), { lineHeight: lineHeight(18, 24) }],
  'h7': [rem(18), { lineHeight: lineHeight(18, 24) }],
  'h1-md': [rem(52), { lineHeight: lineHeight(52, 72) }],
  'h2-md': [rem(40), { lineHeight: lineHeight(40, 56) }],
  'h3-md': [rem(32), { lineHeight: lineHeight(32, 48) }],
  'h4-md': [rem(24), { lineHeight: lineHeight(24, 32) }],
  'h5-md': [rem(22), { lineHeight: lineHeight(22, 32) }],
  'h1-2xl': [rem(64), { lineHeight: lineHeight(64, 88) }],
  'h2-2xl': [rem(48), { lineHeight: lineHeight(48, 64) }],
  'h3-2xl': [rem(36), { lineHeight: lineHeight(36, 48) }],
  'h4-2xl': [rem(28), { lineHeight: lineHeight(28, 40) }],
}
module.exports = {
  fontSize
}

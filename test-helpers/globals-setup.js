// jsdom replaces the global scope, so Node.js built-ins like TextDecoder/TextEncoder
// are not automatically available. undici (a cheerio dependency) requires them at
// module load time, so they must be set before any ESM imports are processed.
const { TextDecoder, TextEncoder } = require('util')
global.TextDecoder = TextDecoder
global.TextEncoder = TextEncoder

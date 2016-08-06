// -----------
// FIRST PARTY
// -----------

// import validate from './validate'

// ------------
// SECOND PARTY
// ------------

import { createClient, CorePlugins } from 'reactotron-core-client'

// -----------
// THIRD PARTY
// -----------

// import R from 'ramda'

// -------------
// THE HACK ZONE
// -------------

// set a userAgent manually so socket.io works.
if (!window.navigator || !window.navigator.userAgent) {
  window.navigator.userAgent = 'reactotron-react-native'
}

// Only then do we load socket.io. This has to be done as a require to preserve
// the order of user agent being set first.  Also, it's a var so it doesn't get
// hoisted.

var io = require('socket.io-client/socket.io')

// ---------------------
// DEFAULT CONFIGURATION
// ---------------------

const DEFAULTS = {
  io,
  host: 'localhost',
  port: 9090,
  name: 'reactotron-react-native'
}

// -----------
// HERE WE GO!
// -----------
// Create the default reactotron.
const reactotron = createClient(DEFAULTS)

// send it back
export default reactotron
// module.js
const debugModule = () => {

    const author = 'npmcool'
    const version = '1.0.0'
    const published = 'prototype'

    console.info('Author: ' + author, '\nVersion: ' + version, '\n' + published)

}

const out  = (output) => {

    /**
 * Outputs what you enter
 * @returns {output}
 */

    console.log(output)

}

const err  = (msg) => {

    /**
 * Throws an error with your message
 * @returns {msg}
 */

    console.error(msg)

}

const inf  = (inf) => {

    /**
 * Outputs info
 * @returns {inf}
 */

    console.info(inf)

}

const wrn  = (msg) => {

/**
 * Warns user based on what you have entered (functions similar to err)
 * @returns {msg}
 */

    console.warn(msg)

}

  module.exports = {
    out,
    err,
    inf,
    wrn
  };  
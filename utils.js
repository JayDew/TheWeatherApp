const c = require('all-the-cities')
const stringSimilarity = require('string-similarity')

// const MIN_POPULATION = 10000
// const MIN_DISTANCE = 0.7

const cities = c.filter(el => el.population > process.env.MIN_POPULATION)
    .map(el => el.name)

console.log('[Loading ' + cities.length + ' cities]')

const isValidCity = (city) => {
    for (var i = 0; i < cities.length; i++) {
        if (cities[i] === city) {
            return true
        }
    }
    return false
}

const bestMatch = (city, distance = process.env.MIN_DISTANCE) => {
    const matches = stringSimilarity.findBestMatch(city, cities)
    if (matches.bestMatch.rating > distance) {
        return matches.bestMatch.target
    }
    return null
}

module.exports = {
    isValidCity: isValidCity,
    bestMatch: bestMatch
};
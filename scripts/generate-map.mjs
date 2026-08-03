import { writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { feature } from 'topojson-client'
import { geoAzimuthalEqualArea, geoGraticule, geoPath } from 'd3-geo'

const require = createRequire(import.meta.url)
const worldData = require('world-atlas/countries-50m.json')

const visited = new Set([
    8,   // Albania
    40,  // Austria
    203, // Czech Republic
    208, // Denmark
    250, // France
    276, // Germany
    348, // Hungary
    380, // Italy
    528, // Netherlands
    620, // Portugal
    705, // Slovenia
    724, // Spain
    752, // Sweden
])

const W = 800
const H = 490

const projection = geoAzimuthalEqualArea()
    .rotate([-20.0, -52.0, 0])
    .scale(700)
    .translate([W / 2, H / 2])

const pathGen = geoPath(projection)
const countries = feature(worldData, worldData.objects.countries)
const graticulePath = pathGen(geoGraticule()())

const countryPaths = countries.features
    .map((country) => ({
        d: pathGen(country),
        fill: visited.has(Number(country.id)) ? '#14b8a6' : '#3f3f46',
    }))
    .filter((country) => country.d !== null)

const paths = [
    `<path d="${graticulePath ?? ''}" fill="none" stroke="#52525b70" stroke-width="0.5"/>`,
    ...countryPaths.map(
        ({ d, fill }) => `<path d="${d}" fill="${fill}" stroke="#09090b" stroke-width="0.5"/>`,
    ),
].join('')

const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${paths}</svg>\n`

writeFileSync('public/map.svg', svg)

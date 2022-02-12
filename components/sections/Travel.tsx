import { ComposableMap, Geographies, Geography, Graticule } from 'react-simple-maps'

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const Travel = () => (
    <div className='max-w-5xl mx-auto mt-40 p-5'>
        <h2 className='text-2xl text-center my-5'>
            <i className='bi bi-geo-fill'></i> Discovering the world
        </h2>
        <hr className='bg-zinc-700 dark:bg-zinc-200 border-0 rounded h-1 w-3/4 mx-auto' />

        <p className='my-5 text-center'>
            I dream of traveling and knowing as many countries as possible. I would love to live in different countries
            throughout my life. Luckily, in software development we have the ability to work from where we want and for
            whoever we want through the internet. What an amazing job!
        </p>

        <ComposableMap
            projection='geoAzimuthalEqualArea'
            projectionConfig={{
                rotate: [-20.0, -52.0, 0],
                scale: 700,
            }}
        >
            <Graticule stroke='#EAEAEC' />
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geo => {
                        const visited = ['Sp.', 'Fr.', 'Ger.', 'Cz.', 'Port.', 'Pol.', 'Italy', 'Neth.']

                        return (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={visited.indexOf(geo.properties.ABBREV) >= 0 ? '#14b8a6' : '#93939352'}
                                stroke='#EAEAECa6'
                            />
                        )
                    })
                }
            </Geographies>
        </ComposableMap>
    </div>
)

export default Travel

import { ComposableMap, Geographies, Geography, Graticule } from 'react-simple-maps'

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

const Travel = () => (
    <div className='mx-auto mt-40 max-w-5xl p-5'>
        <h2 className='my-5 text-center text-2xl'>
            <i className='bi bi-geo-fill'></i> Discovering the world
        </h2>
        <hr className='mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200' />

        <p className='my-5 text-center'>
            I dream of traveling and knowing as many countries as possible. I would love to live in different countries
            throughout my life. Luckily, in tech industry we have the ability to work remotely from where we want thanks
            to bleisure. What an amazing oportunity!
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
                        const visited = ['Spain', 'France', 'Germany', 'Czech Republic', 'Portugal', /*'Pol.',*/ 'Italy', 'Netherlands', 'Slovenia']

                        return (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={visited.indexOf(geo.properties.name) >= 0 ? '#14b8a6' : '#93939352'}
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

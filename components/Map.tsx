import React from 'react'
import { ComposableMap, Geographies, Geography, Graticule } from 'react-simple-maps'
  
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
  
const Map = () => {
	return (
		<ComposableMap
			projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [-20.0, -52.0, 0],
				scale: 700
			}}
		>
			<Graticule stroke="#EAEAEC" />
			<Geographies geography={geoUrl}>
				{({ geographies }) =>
					geographies.map(geo => {
						const visited =  ['Sp.', 'Fr.', 'Ger.', 'Cz.', 'Port.', 'Pol.']

						return (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								fill={visited.indexOf(geo.properties.ABBREV) >= 0 ? '#14b8a6' : '#93939352'}
								stroke="#EAEAECa6"
							/>
						)
					})
				}
			</Geographies>
		</ComposableMap>
	)
}

export default Map

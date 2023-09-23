import { geoEqualEarth, geoGraticule, geoPath } from "d3";

// geoPath() returns a path generator function, which generates SVG path data for a given GeoJSON feature object. You can pass a map projection as parameter, which is a type of cartographic representation of the map. D3 already provides several projections. See more at https://github.com/d3/d3-geo-projection
const projection = geoEqualEarth();
const pathGenerator = geoPath(projection);

// geoGraticule() is a function generator for creating gradicules (a grid of meridians and parallels), that can be used to draw meridian and parallel lines on the map
const graticules = geoGraticule();

// Draw paths to create the geometry of each country of the world.
// It also displays that country's population when mousing over it. 
// Finally, it also draw circles representing cities whose population is larger than 50k
export default function Marks({
    topology,
    population,
    cities,
    sizeScale,
    sizeValue
}) {
    return (
        <g className="worldMap__marks">
            {/* // path creates a shape, based on path commands passed to the d property. See the index.css for properties that can be used to style stroke color and other stuff) */}
            {/* { type: Sphere } is a supported object for path generator that will render the outline of the globe */}
            <path className="worldMap__globe" d={pathGenerator({ type: 'Sphere' })} />
            <path
                className="worldMap__graticules"
                // graticules returns an object of type "MultiLineString", which is compatible with the path generator
                d={pathGenerator(graticules())}
            />
            {/* "features" property is a list of countries and the geometry for each of them (a set of [latitude, longitude] coordinates) */}
            {topology.features.map((feature, index) => {
                const countryName = feature.properties.name;
                const country = population.find(location => +location['Location code'] == +feature.id);
                const populationIn2021 = country ? country['Population'] : null;
                const populationMessage = populationIn2021 ? `Population ${populationIn2021.toLocaleString('en-US')}.` : '';
                return <path
                    className="worldMap__country"
                    key={index}
                    d={pathGenerator(feature)}
                >
                    <title>{`${countryName}. ${populationMessage}`}</title>
                </path>
            })}
            {cities.map(city => {
                // projection is also a function that receives a point (two element array [longitude, latitude]) and returns a new two element array [x, y] with the pixel position of this point in the projection
                const [x, y] = projection([city.lng, city.lat]);
                return <circle
                    key={`${x}_${y}`}
                    className="worldMap__cities"
                    cx={x}
                    cy={y}
                    // radius is based on how big is the population
                    r={sizeScale(sizeValue(city))}
                />
            })}
        </g>
    )
}
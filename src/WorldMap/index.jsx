import { max, scaleSqrt } from "d3";
import Marks from "./Marks";
import { useCities } from "./useCitiesData";
import { useMapData } from "./useMapData";
import { usePopulationData } from "./usePopulationData";

const width = 1024;
const height = 500;

// render a World Map using TopoJSON data
// https://en.wikipedia.org/wiki/GeoJSON#TopoJSON
export default function WorldMap() {
    const mapData = useMapData();
    const populationData = usePopulationData();
    const citiesData = useCities();

    // see what data returns to you
    // console.log(mapData);
    // console.log(populationData);
    // console.log(citiesData)

    if (!mapData || !populationData) return <pre>Loading...</pre>;

    // acessor function to the population of each city
    const sizeValue = d => d.population;
    const maxRadius = 15; // tweak it to your own preference

    // returns a value for a circle radius. This will be used to indicate city density on the map (the larger the population, the larger the radius). Since a circle radius is defined by the square root of the circle area over Pi, we can use a square root scale in order to control the value of the radius to a defined range. This adds more granularity to the scale. Uncomment scaleLinear() to see the difference.
    // const sizeScale = scaleLinear()
    const sizeScale = scaleSqrt()
        .domain([0, max(citiesData, sizeValue)])
        .range([0, maxRadius]);

    return (<>
        <h1>World Population (2021)</h1>
        <h2>Hover over a country to view more details.</h2>
        <svg width={width} height={height}>
            <Marks
                topology={mapData}
                population={populationData}
                cities={citiesData}
                sizeScale={sizeScale}
                sizeValue={sizeValue}
            />
        </svg>
    </>)
}
import Marks from "./Marks";
import { useMapData } from "./useMapData";
import { usePopulationData } from "./usePopulationData";

const width = 1024;
const height = 500;

// render a World Map using TopoJSON data
// https://en.wikipedia.org/wiki/GeoJSON#TopoJSON
export default function WorldMap() {
    const mapData = useMapData();
    const populationData = usePopulationData();

    // see what data returns to you
    // console.log(mapData);
    // console.log(populationData);

    if (!mapData || !populationData) return <pre>Loading...</pre>;

    return (<>
        <h1>World Population (2021)</h1>
        <h2>Hover over a country to view more details.</h2>
        <svg width={width} height={height}>
            <Marks
                topology={mapData}
                population={populationData}
            />
        </svg>
    </>)
}
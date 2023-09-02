import { useEffect, useState } from "react";
import { json } from 'd3';
import { feature } from 'topojson';

// TopoJSON data
const mapUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

// custom hook to return data fetched from a URL
export const useMapData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // d3.json() works similarly as csv(). It performs the fetch, parses the content from the response and returns it as a promise. The content will be a parsed JSON object
        json(mapUrl).then(topoJsonData => {
            // TopoJSON is a great file format for enconding topology shapes (in terms of data size), but its data structure is not easy to work with. GeoJSON, on the other hand, has a data structure more straightforward to link to SVG paths. So we'll convert from TopoJSON to GeoGSON using topojson library, in order to get the data structure to load data point to render countries

            // extract countries property from objects
            const { countries } = topoJsonData.objects
            
            // feature() converts TopoJSON to geoJSON. It returns a FeatureCollection with a property called "features", which is a list of countries and the geometry for each of them (a set of [latitude, longitude] coordinates)
            const geoJsonData = feature(topoJsonData, countries)
            
            setData(geoJsonData);
        });
    }, []);
    return data;
}
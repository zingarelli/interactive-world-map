import { useEffect, useState } from "react";
import { csv } from 'd3';

const populationUrl = 'https://gist.githubusercontent.com/zingarelli/71b2ac297f72d57d12302d1432151de1/raw/7138c055bfc9a2757983f2917329d8bd5e7d294d/UN_world_population_prospects_2022.csv'

// custom hook to return data fetched from a URL
export const usePopulationData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // d3.csv() performs the fetch, parses the content from the response and returns it as a promise. The content will be an array of objects, each corresponding to a line in the csv file. This array also has a "columns" property, which is an array with the csv headers.
        // d3.csv() can also receive a second argument "row", which is a function that you can define to transform the data for each row, for example create new columns (new properties for the object) or filter rows based on some condition, and then return this as the new row
        const row = d => {
            // d represents a line of data
            // get only the rows that have data regarding population in 2021
            if (d.Year === '2021') {
                // create a new column with the full value (including the "thousands" ommited) and as a number, not a string
                d.Population = +d['Population (thousands)'] * 1000;
                return d;
            }
            return null;
        }
        csv(populationUrl, row).then(data => setData(data));
    }, [])

    return data;
}
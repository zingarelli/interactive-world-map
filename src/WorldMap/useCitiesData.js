import { csv } from "d3";
import { useEffect, useState } from "react";

const citiesUrl = 'https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv';

// load a dataset of cities of the world whose population is over 50,000.
export const useCities = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // the second argument of csv() can be any name, not necessarily row
        const anyName = d => {
            // convert latitude, longitude and population to a number using unary plus operator
            d.lat = +d.lat;
            d.lng = +d.lng;
            d.population = +d.population;
            return d;
        }

        // when you only have data => setData(data), you can simplify it by only using setData
        // JavaScript will automatically pass the resolved value (the fetched data) to setData.
        csv(citiesUrl, anyName).then(setData);
    }, [])

    return data;
}
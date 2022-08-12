import { useQuery } from "@tanstack/react-query";
import type { CountriesStatsList } from '../types/index'

export const useGetCountries = (countries: Array<String>) => {
    return useQuery<CountriesStatsList>(["countries"], async () => {
        return fetch(
            `https://disease.sh/v3/covid-19/countries/${encodeURI(String(countries))}`
        )
            .then((res) => res.json())
            .then((finalData) => finalData);
    });
};

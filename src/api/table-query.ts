


import { QueryFunctionContext, useQuery, UseQueryOptions } from "react-query";
import { QueryKey } from "../lib/type";
import http from "../utils/http";
import { API_ENDPOINTS } from "../utils/api-endpoints";
import { CountryData } from "@/containers/charts/Row2";

export const fetchCountries = async ({
  queryKey
}: QueryFunctionContext<QueryKey>) => {
  const [_key] = queryKey;
  const { data } = await http.get(_key);
  return data as CountryData[];
};
export const useCountriesQuery = (options: UseQueryOptions) => {

  return useQuery<CountryData[], Error, CountryData[], QueryKey>({
    queryKey: [API_ENDPOINTS.COUNTRIES.TABLE],
    queryFn: fetchCountries,
    enabled: !!options.enabled
  });
};

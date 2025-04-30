


import { QueryFunctionContext, useQuery, UseQueryOptions } from "react-query";
import { QueryKey } from "../lib/type";
import http from "../utils/http";
import { API_ENDPOINTS } from "../utils/api-endpoints";

export const fetchCountries = async ({
  queryKey
}: QueryFunctionContext<QueryKey>) => {
  const [_key] = queryKey;
  const { data } = await http.get(_key);
  return data as any;
};
export const useCountriesQuery = (options: UseQueryOptions) => {

  return useQuery<any, Error, any, QueryKey>({
    queryKey: [API_ENDPOINTS.COUNTRIES.TABLE],
    queryFn: fetchCountries,
    enabled: !!options.enabled
  });
};

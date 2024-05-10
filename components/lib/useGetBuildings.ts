import { getBuildings, QueryBuildings } from "@/components/lib/helpers";
import useSWR from "swr";

const useGetBuildings = (query: QueryBuildings) => {
  const { data, error } = useSWR(query, getBuildings);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetBuildings;

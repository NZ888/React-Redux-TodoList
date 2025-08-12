import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchCity = async () => {
    const response = await axios.get("https://ipwho.is/");
    return response.data;
}
export function useCity() {
    const {data, isSuccess, isError, isLoading} = useQuery({
        queryKey: ["city"],
        queryFn: fetchCity,
    })
    return {data, isSuccess, isError, isLoading}
}
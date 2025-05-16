import type { ExerciseSearch } from "./exercise";

interface SearchResponse {
    data: ExerciseSearch[];
}

const BASE_URL = "https://work-out-api1.p.rapidapi.com/search"

export const searchExercisesByMuscleGroup = async (query: string): Promise<SearchResponse | string> => {
    const response = await fetch(BASE_URL + `?Muscles=${query}`, {
        method: 'GET',
        headers: {
            "x-rapidapi-key": process.env.WORK_OUT_API_KEY as string,
            "x-rapidapi-host": "work-out-api1.p.rapidapi.com" 
        }
    }).catch(function (error) {
        let errorResult: string;

        if (error.response) {
            // server responded with a status code that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            errorResult = "An error has occured.";
        }
        else if (error.request) {
            // no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser 
            // and an instance of http.ClientRequest in node.js
            console.log(error.request);
            errorResult = "An error has occured.";
        }
        else {
            console.log("unexpected error:", error);
            errorResult = "An unexpected error has occured.";
        }

        return errorResult;
    });

    if (typeof response === "string") {
        return `Couldn't find any exercises for ${query}`;
    }

    return response!.json() as Promise<SearchResponse>;
}
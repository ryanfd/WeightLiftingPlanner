import { useState, type ChangeEvent, useEffect, type SyntheticEvent } from "react";
import Search from "../../Components/Search/Search";
import { searchExercisesByMuscleGroup } from "../../api";
import type { ExerciseSearch } from "../../exercise";

interface Props { }

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<ExerciseSearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    useEffect(() => {
        getExercises();
    }, []);

    const getExercises = () => {

    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchExercisesByMuscleGroup(search);

        if (typeof result === "string") {
            setServerError(result);
        }
        else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }

        console.log(searchResult);
    };

    return (
        <div className="App">
            <Search searchString={search} onSearchSubmit={onSearchSubmit} handleSearchChange={handleSearchChange} />
            {serverError && <div>Unable to connect to API</div>}
        </div>
    )
}

export default SearchPage
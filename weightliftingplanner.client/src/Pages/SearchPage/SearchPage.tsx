import { useState, type ChangeEvent, useEffect, type SyntheticEvent } from "react";
import Search from "../../Components/Search/Search";

interface Props { }

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
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
        //const result = await searchCompanies(search);

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
            <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
            {serverError && <div>Unable to connect to API</div>}
        </div>
    )
}

export default SearchPage
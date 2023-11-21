import { useState, useEffect } from "react";
import { Character } from "./Character";
import Button from '@mui/material/Button';
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";

export function Characters() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?name=${searchQuery}&page=${page}`
            );
            const { results, info } = await response.json();
            
            setCharacters(results);
            setLoading(false);
            setInfo(info);
        }
        fetchData();
    }, [page, searchQuery])

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            { characters == null ? <p className="text-gray-300 uppercase font-bold">These are 0 characters of 0</p> : <p className="text-gray-300 uppercase font-bold">These are {characters.length} characters of {info.count}</p> }
            <div className="flex flex-row justify-between items-center p-5">
                <Button 
                    variant="text"
                    onClick={() => handlePageChange(page !== 1 ? page - 1 : page)}
                >
                    <FaArrowLeft className='text-2xl' />
                </Button>
                <Button 
                    variant="text"
                    onClick={() => handlePageChange(page !== info.pages ? page + 1 : page)}
                >
                    <FaArrowRight className='text-2xl' />
                </Button>
            </div>

            <div className="p-5 flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between text-start">
                { characters == null ? <h1 className="text-white uppercase text-2xl font-bold">0 - 0</h1> : <h1 className="text-white uppercase text-2xl font-bold">{page} - {info.pages}</h1> }
                    <div className="relative flex items-center text-white">
                        <input
                            type="search"
                            className="pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent bg-slate-800"
                            name="search"
                            id="search"
                            value={searchQuery}
                            onChange={handleSearchQueryChange}
                        />
                        <FaSearch className="absolute left-3 text-gray-400" />
                        <label
                            htmlFor="search"
                            className="sr-only"
                        >
                            Search
                        </label>
                    </div>
                </div>
                <div className="text-white">
                    {characters == null ? (
                        <p className="text-xl mt-32">No character found</p> 
                    ) : (
                        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
                            {characters.map((character) => (
                                <Character
                                    key={character.id}
                                    name={character.name} 
                                    image={character.image}
                                    status={character.status}
                                    gender={character.gender}
                                    origin={character.origin.name} 
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

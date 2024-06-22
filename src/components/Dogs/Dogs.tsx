import { useState } from "react";
import { useFetchBreedsQuery } from "../../features/dogs/dogsApiSlice";

const Dogs = () => {
    const [numDogs, setNumDogs] = useState(10);
    const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div
                style={{
                    textAlign: "center",
                    margin: "5rem",
                }}
            >
                <label htmlFor='numDogs'>Number of dogs:</label>
                <select
                    id='numDogs'
                    value={numDogs}
                    onChange={(e) => setNumDogs(Number(e.target.value))}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <div
                style={{
                    textAlign: "center",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((breed) => (
                            <tr key={breed.id}>
                                <td>{breed.id}</td>
                                <td>{breed.name}</td>
                                <td>
                                    <img src={breed.image.url} alt={breed.name} height={250} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dogs;

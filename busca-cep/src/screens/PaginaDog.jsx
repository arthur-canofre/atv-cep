import { useState, useEffect } from "react";

export default function Dogdex(){

    const [id, setId] = useState(0)
    const [dog, setDog] = useState(null)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
          const response = await fetch(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${id}&limit=1&#39;`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setDog(data);
          setError(false)
        } catch (error) {
          setError(true)
          setDog(null);
        }
      };

      
    const nextDog = () => {
        setId(id + 1)
    }

    const previousDog = () => {
        setId(id - 1)
    }

    useEffect(() =>{
        fetchData()
    }, [id])   

    return(
        <section>
            { error && (
                <p>morra</p>
            )}
            { dog && (
                <div>
                <h1>{dog.width}</h1>
                <img src={dog.url}></img>
                </div>
            )}
            <div>
                <button onClick={previousDog}>Anterior</button>
                <button onClick={nextDog}>Proximo</button>
            </div>
        </section>
    )
}
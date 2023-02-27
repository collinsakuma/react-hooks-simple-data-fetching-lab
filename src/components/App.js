import { useState, useEffect } from "react"

// create your App component here
function App() {
    const [dogImage, setDogImage] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(dogImage)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => {
                setDogImage(data.message);
                setIsLoaded(true);
            })
    },[])
    if (!isLoaded) return <h3>Loading...</h3>;
    return (
        <div>
            {/* <h3>{!isLoaded ? "Loading..." : ""}</h3> */}
            <img src={dogImage} alt="A Random Dog"/>
        </div>
    )
}
export default App
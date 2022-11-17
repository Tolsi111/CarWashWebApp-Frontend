import {useState} from "react";

function App() {

    const [carwashes, setCarwashes] = useState([]);

    async function getUsers(event) {
        const response = await fetch('http://localhost:8080/carwash');
        const responseData = await response.json();
        // console.log(responseData)
        const loadedCarwashes = [];

        for (const key in responseData) {
            loadedCarwashes.push({
                id: responseData[key].id,
                address: responseData[key].address,
                name: responseData[key].name
            })
        }
        setCarwashes(loadedCarwashes);
        event.preventDefault();
    }

    const carwashList = carwashes.map((carwash) => {
        return <p key={carwash.id}>id: {carwash.id}, first name: {carwash.address}, last name: {carwash.name}</p>
    })

    return (
        <div>
            <h1>Car wash web app</h1>
            <h3>By Atlas</h3>
            <hr/>
            <button onClick={getUsers}>Fetch Carwashes</button>
            <hr/>
            {carwashList}
        </div>
    );
}

export default App;

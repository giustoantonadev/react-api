import { useState, useEffect } from "react"

export default function AppCard() {

    const api_url = 'https://lanciweb.github.io/demo/api/actors/'
    const api_url_actress = 'https://lanciweb.github.io/demo/api/actresses/'

    const [actors, setActors] = useState([])
    const [actresses, setActresses] = useState([])

    function getActors() {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setActors(data)
            })
    }

    function getActresses() {
        fetch(api_url_actress)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setActresses(data)
            })
    }


    useEffect(getActors, [])
    useEffect(getActresses, [])
    return (

        <div className="container">
            <div className="row">

                {
                    actors.map(actor => (
                        <div className="col">
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{actor.name}</h5>
                                    <img src={actor.image} className="card-img-top" alt="photo" />
                                    <p className="card-text">{actor.birth_year} {actor.nationality}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{actor.biography}</li>
                                    <li className="list-group-item text-center">Known for: <br /> {actor.known_for}</li>
                                    <li className="list-group-item">{actor.awards}</li>
                                </ul>
                                
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>

    )
}


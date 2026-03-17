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
                        <div className="col col-6 col-md-4 col-lg-4 col-xl-3 d-flex text-center pb-4" key={actor.id}>
                            <div className="card bg-dark w-100 h-100">
                                <div className="card-body bg-dark">
                                    <h5 className="card-title text-white">{actor.name}</h5>
                                    <img src={actor.image} className="card-img-top" alt="photo" />
                                    <p className="card-text text-white"><em>{actor.birth_year}  {actor.nationality}</em></p>
                                </div>
                                <ul className="list-group list-group-flush mt-auto">
                                    <li className="list-group-item bg-dark text-white border-0">{actor.biography}</li>
                                    <li className="list-group-item text-center bg-dark border-0 text-danger"><strong><em>Known for:</em></strong> <br />{actor.known_for ? actor.known_for.join(', ') : 'None'} </li>
                                    <li className="list-group-item bg-dark text-warning"><strong><em>Awards:</em></strong> <br />{actor.awards ? actor.awards.join(', ') : 'None'}</li>

                                </ul>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>

    )
}


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

        <main>

        </main>



    )
}
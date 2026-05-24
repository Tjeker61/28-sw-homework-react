import {useEffect, useState} from "react";
import {BASE_URL} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState(() => sessionStorage.getItem("opening_crawl"));

    useEffect(() => {
        if (!openingCrawl) {
            const episode = Math.floor(Math.random() * 6 + 1)
            fetch(`${BASE_URL}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl)
                    sessionStorage.setItem('opening_crawl', data.opening_crawl)
                })
                .catch(() => setOpeningCrawl('Error loading opening crawl'))
        }
    }, []);

    if (openingCrawl) {
        return (
            <p className="text-justify tracking-widest text-3xl leading-normal">
                {openingCrawl}
            </p>
        );
    } else {
        return (
            <p className="text-justify tracking-widest text-3xl leading-normal">
                <span className={'spinner-border'}/> Loading...
            </p>
        )
    }
};

export default OpeningCrawl;
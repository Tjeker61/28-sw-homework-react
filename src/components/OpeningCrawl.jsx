import {useEffect, useState} from "react";
import {BASE_URL} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState();

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6 + 1)
        fetch(`${BASE_URL}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl))
            .catch(() => setOpeningCrawl('Error loading opening crawl'))
    }, []);

    if (openingCrawl) {
        return (
            <p className="far-galaxy fs-2 lh-2">
                {openingCrawl}
            </p>
        );
    } else {
        return (
            <p className="far-galaxy fs-2 lh-2">
                <span className={'spinner-border'}/> Loading...
            </p>
        )
    }
};

export default OpeningCrawl;
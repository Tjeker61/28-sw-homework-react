import {useEffect, useState} from "react";
import {BASE_URL} from "../utils/constants.js";
import main from "../images/main.jpg";

const AboutMe = () => {
    const [heroInfo, setHeroInfo] = useState(() => {
        const hero = JSON.parse(localStorage.getItem("hero"));
        if (hero && Date.now() - hero.timestamp < 1000 * 60 * 60 * 24 * 30) {
            return hero.payload;
        }
    })

    useEffect(() => {
        if (!heroInfo) {
            fetch(`${BASE_URL}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        height: data.height,
                        eyeColor: data.eye_color,
                        birthYear: data.birth_year
                    }
                    setHeroInfo(info)
                    localStorage.setItem('hero', JSON.stringify(
                        {
                            payload: info,
                            timestamp: Date.now(),
                        }
                    ))
                })
                .catch(() => setHeroInfo('Data loading error'))
        }
    }, []);

    if (heroInfo) {
    return (
        <div className={"clearfix"}>
            <img className="w-25 float-start me-3 mb-3 img-shadow" src={main} alt="Luke Skywalker"/>
        <p className="far-galaxy fs-2 lh-2">
            Name: {heroInfo.name}<br/>
            Gender: {heroInfo.gender}<br/>
            Height: {heroInfo.height}<br/>
            Eye color: {heroInfo.eyeColor}<br/>
            Birth Year: {heroInfo.birthYear}
        </p>
        </div>
    );
    } else {
        return (
            <p className="far-galaxy fs-2 lh-2">
                <span className={'spinner-border'}/> Loading...
            </p>
        )
    }
};

export default AboutMe;
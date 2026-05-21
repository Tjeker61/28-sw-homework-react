import {useEffect, useState} from "react";
import {BASE_URL} from "../utils/constants.js";

const Contact = () => {
    const [planetsList, setPlanetsList] = useState(() => {
        const planets = JSON.parse(localStorage.getItem("planets"));
        if (planets && Date.now() - planets.timestamp < 1000 * 60 * 60 * 24 * 30) {
            return planets.payload;
        }
    })

    useEffect(() => {
        if (!planetsList) {
            fetch(`${BASE_URL}/v1/planets`)
                .then(res => res.json())
                .then(data => {
                    const payload = data.map(planet => planet.name)
                    setPlanetsList(payload)
                    localStorage.setItem("planets", JSON.stringify(
                        {
                            payload,
                            timestamp: Date.now(),
                        }
                    ))
                })
        }
    }, []);

    if (planetsList) {
        return (
            <div>
                <form className={'far-galaxy fs-2 lh-2'}>
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    </div>

                    <div>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    </div>

                    <div>
                        <label htmlFor="planet">Planet</label>
                        <select id="planet" name="planet">
                            {planetsList.map(planet => <option value={planet}>{planet}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    </div>

                    <input type="submit" value="Submit" disabled/>

                </form>
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

export default Contact;
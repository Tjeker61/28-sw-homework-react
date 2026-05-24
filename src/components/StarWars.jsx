import {starWarsInfo} from "../utils/constants.js";

const StarWars = () => {
    return (
        <div className={"text-justify tracking-widest text-3xl leading-normal"}>
            {starWarsInfo}
        </div>
    );
};

export default StarWars;
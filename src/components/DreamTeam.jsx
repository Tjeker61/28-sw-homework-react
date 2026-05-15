import {friends} from "../utils/constants.js";
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-5 ms-3 me-0">
            <h2 className="text-center">Dream Team</h2>
            {friends.map((friendJpg, index) => <Friend key={index} src={friendJpg} alt={`friend${index+1}`}/>)}
        </section>
    );
};

export default DreamTeam;
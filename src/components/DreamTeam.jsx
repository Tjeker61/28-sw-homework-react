import friend1 from '../images/friend1.jpg'
import friend2 from '../images/friend2.jpg'
import friend3 from '../images/friend3.jpg'
import friend4 from '../images/friend4.jpg'
import friend5 from '../images/friend5.jpg'
import friend6 from '../images/friend6.jpg'
import friend7 from '../images/friend7.jpg'
import friend8 from '../images/friend8.jpg'
import friend9 from '../images/friend9.jpg'

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-5 ms-3 me-0">
            <h2 className="text-center">Dream Team</h2>

            <img className="col-sm-4 p-1" src={friend1} alt="friend1"/>

            <img className="col-sm-4 p-1" src={friend2} alt="friend2"/>

            <img className="col-sm-4 p-1" src={friend3} alt="friend3"/>

            <img className="col-sm-4 p-1" src={friend4} alt="friend4"/>

            <img className="col-sm-4 p-1" src={friend5} alt="friend5"/>

            <img className="col-sm-4 p-1" src={friend6} alt="friend6"/>

            <img className="col-sm-4 p-1 rounded-bottom-5" src={friend7} alt="friend7"/>

            <img className="col-sm-4 p-1" src={friend8} alt="friend8"/>

            <img className="col-sm-4 p-1 rounded-bottom-5" src={friend9} alt="friend9"/>
        </section>
    );
};

export default DreamTeam;
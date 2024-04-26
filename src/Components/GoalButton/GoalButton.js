import { Button } from "react-bootstrap";
import "./GoalButton.scss";

function GoalButton() {
    return (
        <>
            <Button variant="outline-info" className="mobile-button">Add Goal</Button>
        </>
    );
}

export default GoalButton;
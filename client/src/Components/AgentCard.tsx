import "./AgentCard.css";

interface AgentCardProps {
    name: string;
    description: string;
    location: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, description, location }) => {
    return (
        <div className="agent-card-container">
            <img src="/test.jpg" alt="Agent"></img>
            <h2>{name}</h2>
            <h2>Description</h2>
            <p>{description}</p>
            <h2>Location</h2>
            <p>{location}</p>

            <div className="agent-card-button-div">
                <button>Contact Me</button>
            </div>
        </div>
    );
}

export default AgentCard;
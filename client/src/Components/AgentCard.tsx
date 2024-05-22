import { ViewAgendaOutlined } from "@mui/icons-material";
import "./AgentCard.css";
import { useNavigate } from 'react-router-dom';

interface Agent {
    agentId: string;
    agentName: string;
    agentDescription: string;
}

interface ApiResponse {
    results: Agent[];
}

const AgentCard: React.FC<Agent> = ({ agentId, agentName, agentDescription }) => {
    const navigate = useNavigate();

        // View Individual User
        const viewAgent = async (userId: string) => {

            navigate(`/agent/${userId}`);
        }
    
    return (
        <div className="agent-card-container">
            <div>
                <img src="/test.jpg" alt="Agent"></img>
            </div>
            
            <h2>{ agentName }</h2>
            <h2>Description</h2>
            <p>{ agentDescription }</p>
            <h2>Rating</h2>
            <p>Stars</p>

            <div className="agent-card-button-div">
                <button  onClick={() => viewAgent(agentId)}>Contact Me</button>
            </div>
        </div>
    );
}

export default AgentCard;
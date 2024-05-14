// Imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../api/loginApi';

// Component
import AgentCard from "../../Components/AgentCard";
import "./AgentsHome.css"

// Interface
interface Agent {
    id: number;
    name: string;
    description: string;
    location: string;
  }

interface ApiResponse {
    results: Agent[];
}

const AgentHomePage: React.FC = () => {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAgents = async () => {
          try {
            const response = await api.get<ApiResponse>('/api/agents'); // Adjust the URL as necessary
            console.log('API response:', response.data); // Debugging line
            setAgents(response.data.results);
          } catch (error) {
            setError('Failed to fetch agents');
            console.error('Error fetching agents:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchAgents();
      }, []);

    return (
        <div className="agents-home-container">
            {agents.map((agent) => (
                <AgentCard
                key={agent.name}
                name={agent.name}
                description={agent.description}
                location={agent.location}
                />
            ))}
        </div>
    );
};

export default AgentHomePage;
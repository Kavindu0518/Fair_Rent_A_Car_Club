package com.frac.frac_backend.service;

import com.frac.frac_backend.dto.AgentInputDTO;
import com.frac.frac_backend.dto.AgentOutputDTO;

import java.util.List;

public interface AgentService {

    AgentOutputDTO createAgent(AgentInputDTO dto);

    List<AgentOutputDTO> getAllAgents();

    AgentOutputDTO getAgentById(Long id);

    AgentOutputDTO updateAgent(Long id, AgentInputDTO dto);

    void deleteAgent(Long id);
}
package com.frac.frac_backend.service;

import com.frac.frac_backend.dto.AgentInputDTO;
import com.frac.frac_backend.dto.AgentLoginDTO;
import com.frac.frac_backend.dto.AgentOutputDTO;

import java.util.List;

public interface AgentService {

//    AgentOutputDTO loginAgent(AgentLoginDTO loginDTO);

    AgentOutputDTO loginAgent(AgentLoginDTO dto);  // New method

    AgentOutputDTO createAgent(AgentInputDTO dto);

    List<AgentOutputDTO> getAllAgents();

    AgentOutputDTO getAgentById(Long id);

    AgentOutputDTO updateAgent(Long id, AgentInputDTO dto);

    void deleteAgent(Long id);
}
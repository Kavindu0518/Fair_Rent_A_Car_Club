////package com.frac.frac_backend.service.impl;
////
////import com.frac.frac_backend.dto.AgentInputDTO;
////import com.frac.frac_backend.dto.AgentOutputDTO;
////import com.frac.frac_backend.entity.Agent;
////import com.frac.frac_backend.repository.AgentRepository;
////import com.frac.frac_backend.service.AgentService;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.stereotype.Service;
////
////import java.util.List;
////import java.util.stream.Collectors;
////
////@Service
////public class AgentServiceImpl implements AgentService {
////
////    @Autowired
////    private AgentRepository agentRepository;
////
////    @Override
////    public AgentOutputDTO createAgent(AgentInputDTO dto) {
////        if (agentRepository.existsByCompanyNameIgnoreCase(dto.getCompanyName())) {
////            throw new RuntimeException("Agent with company name already exists");
////        }
////
////        if (agentRepository.existsByEmailIgnoreCase(dto.getEmail())) {
////            throw new RuntimeException("Agent with email already exists");
////        }
////
////        // Create a new Agent from DTO and hash password
////        Agent agent = mapToEntity(dto);
////        return mapToOutputDTO(agentRepository.save(agent));
////    }
////
////    @Override
////    public List<AgentOutputDTO> getAllAgents() {
////        return agentRepository.findAll()
////                .stream()
////                .map(this::mapToOutputDTO)
////                .collect(Collectors.toList());
////    }
////
////    @Override
////    public AgentOutputDTO getAgentById(Long id) {
////        Agent agent = agentRepository.findById(id)
////                .orElseThrow(() -> new RuntimeException("Agent not found"));
////        return mapToOutputDTO(agent);
////    }
////
////    @Override
////    public AgentOutputDTO updateAgent(Long id, AgentInputDTO dto) {
////        Agent existing = agentRepository.findById(id)
////                .orElseThrow(() -> new RuntimeException("Agent not found"));
////
////        existing.setCompanyName(dto.getCompanyName());
////        existing.setTagline(dto.getTagline());
////        existing.setEmail(dto.getEmail());
////        existing.setContactNo(dto.getContactNo());
////        existing.setBusinessRegNo(dto.getBusinessRegNo());
////        existing.setOperatingSince(dto.getOperatingSince());
////        existing.setTourismApproved(dto.getTourismApproved());
////        existing.setInsuranceType(dto.getInsuranceType());
////        existing.setServiceAreas(dto.getServiceAreas());
////        existing.setUserName(dto.getUserName());
////
////        // Hash the password before saving
////        if (dto.getPassword() != null && !dto.getPassword().isEmpty()) {
////            existing.setPassword(new BCryptPasswordEncoder().encode(dto.getPassword()));
////        }
////
////        return mapToOutputDTO(agentRepository.save(existing));
////    }
////
////    @Override
////    public void deleteAgent(Long id) {
////        agentRepository.deleteById(id);
////    }
////
////    private Agent mapToEntity(AgentInputDTO dto) {
////        return Agent.builder()
////                .companyName(dto.getCompanyName())
////                .tagline(dto.getTagline())
////                .email(dto.getEmail())
////                .contactNo(dto.getContactNo())
////                .businessRegNo(dto.getBusinessRegNo())
////                .operatingSince(dto.getOperatingSince())
////                .tourismApproved(dto.getTourismApproved())
////                .insuranceType(dto.getInsuranceType())
////                .serviceAreas(dto.getServiceAreas())
////                .userName(dto.getUserName())
////                .password(dto.getPassword())  // Note: This will be hashed in the entity
////                .build();
////    }
////
////    private AgentOutputDTO mapToOutputDTO(Agent agent) {
////        return AgentOutputDTO.builder()
////                .id(agent.getId())
////                .companyName(agent.getCompanyName())
////                .tagline(agent.getTagline())
////                .email(agent.getEmail())
////                .contactNo(agent.getContactNo())
////                .businessRegNo(agent.getBusinessRegNo())
////                .operatingSince(agent.getOperatingSince())
////                .tourismApproved(agent.getTourismApproved())
////                .insuranceType(agent.getInsuranceType())
////                .serviceAreas(agent.getServiceAreas())
////                .userName(agent.getUserName())
////                .build();
////    }
////}
//
//
//package com.frac.frac_backend.service.impl;
//
//import com.frac.frac_backend.dto.AgentInputDTO;
//import com.frac.frac_backend.dto.AgentOutputDTO;
//import com.frac.frac_backend.entity.Agent;
//import com.frac.frac_backend.repository.AgentRepository;
//import com.frac.frac_backend.service.AgentService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//public class AgentServiceImpl implements AgentService {
//
//    @Autowired
//    private AgentRepository agentRepository;
//
//    @Override
//    public AgentOutputDTO createAgent(AgentInputDTO dto) {
//        if (agentRepository.existsByCompanyNameIgnoreCase(dto.getCompanyName())) {
//            throw new RuntimeException("Agent with company name already exists");
//        }
//
//        if (agentRepository.existsByEmailIgnoreCase(dto.getEmail())) {
//            throw new RuntimeException("Agent with email already exists");
//        }
//
//        // Create a new Agent from DTO and hash password
//        Agent agent = mapToEntity(dto);
//        return mapToOutputDTO(agentRepository.save(agent));
//    }
//
//    @Override
//    public List<AgentOutputDTO> getAllAgents() {
//        return agentRepository.findAll()
//                .stream()
//                .map(this::mapToOutputDTO)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public AgentOutputDTO getAgentById(Long id) {
//        Agent agent = agentRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Agent not found"));
//        return mapToOutputDTO(agent);
//    }
//
//    @Override
//    public AgentOutputDTO updateAgent(Long id, AgentInputDTO dto) {
//        Agent existing = agentRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Agent not found"));
//
//        existing.setCompanyName(dto.getCompanyName());
//        existing.setTagline(dto.getTagline());
//        existing.setEmail(dto.getEmail());
//        existing.setContactNo(dto.getContactNo());
//        existing.setBusinessRegNo(dto.getBusinessRegNo());
//        existing.setOperatingSince(dto.getOperatingSince());
//        existing.setTourismApproved(dto.getTourismApproved());
//        existing.setInsuranceType(dto.getInsuranceType());
//        existing.setServiceAreas(dto.getServiceAreas());
//        existing.setUserName(dto.getUserName());
//
//        // Hash the password before saving
//        if (dto.getPassword() != null && !dto.getPassword().isEmpty()) {
//            existing.setPassword(new BCryptPasswordEncoder().encode(dto.getPassword()));
//        }
//
//        return mapToOutputDTO(agentRepository.save(existing));
//    }
//
//    @Override
//    public void deleteAgent(Long id) {
//        agentRepository.deleteById(id);
//    }
//
//    private Agent mapToEntity(AgentInputDTO dto) {
//        return Agent.builder()
//                .companyName(dto.getCompanyName())
//                .tagline(dto.getTagline())
//                .email(dto.getEmail())
//                .contactNo(dto.getContactNo())
//                .businessRegNo(dto.getBusinessRegNo())
//                .operatingSince(dto.getOperatingSince())
//                .tourismApproved(dto.getTourismApproved())
//                .insuranceType(dto.getInsuranceType())
//                .serviceAreas(dto.getServiceAreas())
//                .userName(dto.getUserName())
//                .password(dto.getPassword())  // Note: This will be hashed in the entity
//                .build();
//    }
//
//    private AgentOutputDTO mapToOutputDTO(Agent agent) {
//        return AgentOutputDTO.builder()
//                .id(agent.getId())
//                .companyName(agent.getCompanyName())
//                .tagline(agent.getTagline())
//                .email(agent.getEmail())
//                .contactNo(agent.getContactNo())
//                .businessRegNo(agent.getBusinessRegNo())
//                .operatingSince(agent.getOperatingSince())
//                .tourismApproved(agent.getTourismApproved())
//                .insuranceType(agent.getInsuranceType())
//                .serviceAreas(agent.getServiceAreas())
//                .userName(agent.getUserName())
//                .build();
//    }
//}



package com.frac.frac_backend.service.impl;

import com.frac.frac_backend.dto.AgentInputDTO;
import com.frac.frac_backend.dto.AgentOutputDTO;
import com.frac.frac_backend.entity.Agent;
import com.frac.frac_backend.repository.AgentRepository;
import com.frac.frac_backend.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AgentServiceImpl implements AgentService {

    @Autowired
    private AgentRepository agentRepository;

    @Override
    public AgentOutputDTO createAgent(AgentInputDTO dto) {
        if (agentRepository.existsByCompanyNameIgnoreCase(dto.getCompanyName())) {
            throw new RuntimeException("Agent with company name already exists");
        }

        if (agentRepository.existsByUserNameIgnoreCase(dto.getUserName())) {
            throw new RuntimeException("Agent with username already exists");
        }

        if (agentRepository.existsByEmailIgnoreCase(dto.getEmail())) {
            throw new RuntimeException("Agent with email already exists");
        }

        if (agentRepository.existsByContactNoIgnoreCase(dto.getContactNo())) {
            throw new RuntimeException("Agent with contact already exists");
        }

        if (agentRepository.existsByBusinessRegNoIgnoreCase(dto.getBusinessRegNo())) {
            throw new RuntimeException("Agent with business registration number  already exists");
        }

        // Create a new Agent from DTO and hash password
        Agent agent = mapToEntity(dto);
        return mapToOutputDTO(agentRepository.save(agent));
    }

    @Override
    public List<AgentOutputDTO> getAllAgents() {
        return agentRepository.findAll()
                .stream()
                .map(this::mapToOutputDTO)
                .collect(Collectors.toList());
    }

    @Override
    public AgentOutputDTO getAgentById(Long id) {
        Agent agent = agentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Agent not found"));
        return mapToOutputDTO(agent);
    }

    @Override
    public AgentOutputDTO updateAgent(Long id, AgentInputDTO dto) {
        Agent existing = agentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Agent not found"));

        existing.setCompanyName(dto.getCompanyName());
        existing.setTagline(dto.getTagline());
        existing.setEmail(dto.getEmail());
        existing.setContactNo(dto.getContactNo());
        existing.setBusinessRegNo(dto.getBusinessRegNo());
        existing.setOperatingSince(dto.getOperatingSince());
        existing.setTourismApproved(dto.getTourismApproved());
        existing.setInsuranceType(dto.getInsuranceType());
        existing.setServiceAreas(dto.getServiceAreas());
        existing.setUserName(dto.getUserName());

        // Hash the password before saving
        if (dto.getPassword() != null && !dto.getPassword().isEmpty()) {
            existing.setPassword(new BCryptPasswordEncoder().encode(dto.getPassword()));
        }

        return mapToOutputDTO(agentRepository.save(existing));
    }

    @Override
    public void deleteAgent(Long id) {
        agentRepository.deleteById(id);
    }

    private Agent mapToEntity(AgentInputDTO dto) {
        return Agent.builder()
                .companyName(dto.getCompanyName())
                .tagline(dto.getTagline())
                .email(dto.getEmail())
                .contactNo(dto.getContactNo())
                .businessRegNo(dto.getBusinessRegNo())
                .operatingSince(dto.getOperatingSince())
                .tourismApproved(dto.getTourismApproved())
                .insuranceType(dto.getInsuranceType())
                .serviceAreas(dto.getServiceAreas())
                .userName(dto.getUserName())
                .password(dto.getPassword())  // Note: This will be hashed in the entity
                .build();
    }

    private AgentOutputDTO mapToOutputDTO(Agent agent) {
        return AgentOutputDTO.builder()
                .id(agent.getId())
                .companyName(agent.getCompanyName())
                .tagline(agent.getTagline())
                .email(agent.getEmail())
                .contactNo(agent.getContactNo())
                .businessRegNo(agent.getBusinessRegNo())
                .operatingSince(agent.getOperatingSince())
                .tourismApproved(agent.getTourismApproved())
                .insuranceType(agent.getInsuranceType())
                .serviceAreas(agent.getServiceAreas())
                .userName(agent.getUserName())
                .build();
    }
}

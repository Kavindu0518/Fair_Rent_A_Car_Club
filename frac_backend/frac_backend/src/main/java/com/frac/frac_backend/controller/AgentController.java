package com.frac.frac_backend.controller;

import com.frac.frac_backend.dto.*;
import com.frac.frac_backend.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/agent")
@CrossOrigin
public class AgentController {

    @Autowired
    private AgentService agentService;

    @PostMapping("/login")
    public ResponseEntity<?> loginAgent(@RequestBody AgentLoginDTO loginDTO) {
        try {
            AgentOutputDTO agentOutputDTO = agentService.loginAgent(loginDTO);
            return ResponseEntity.ok(agentOutputDTO);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<AgentOutputDTO> createAgent(@RequestBody AgentInputDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(agentService.createAgent(dto));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<AgentOutputDTO>> getAllAgents() {
        return ResponseEntity.ok(agentService.getAllAgents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AgentOutputDTO> getAgent(@PathVariable Long id) {
        return ResponseEntity.ok(agentService.getAgentById(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<AgentOutputDTO> updateAgent(
            @PathVariable Long id,
            @RequestBody AgentInputDTO dto) {

        return ResponseEntity.ok(agentService.updateAgent(id, dto));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAgent(@PathVariable Long id) {
        agentService.deleteAgent(id);
        return ResponseEntity.ok("Agent deleted successfully");
    }
}

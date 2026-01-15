//package com.frac.frac_backend.dto;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//
//@Data
//@AllArgsConstructor
//public class AgentLoginDTO {
//    private String userName;
//    private String password;
//}



package com.frac.frac_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AgentLoginDTO {
    private String email;
//    private String userName;
    private String password;
}

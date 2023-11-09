package com.ProyectoIntegradorFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EmailFailDTO {

    private String toUser;

    private String subject;

    private String message;

    private MultipartFile file;
}

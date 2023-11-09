package com.ProyectoIntegradorFinal.controller;

import com.ProyectoIntegradorFinal.dto.EmailDTO;
import com.ProyectoIntegradorFinal.dto.EmailFailDTO;
import com.ProyectoIntegradorFinal.service.IEmailService;
import jakarta.persistence.criteria.Path;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping
public class MailController {

    @Autowired
    private IEmailService emailService;

    @PostMapping("/sendMessage")
    public ResponseEntity<?> receiveRequestEmail(@RequestBody EmailDTO emailDTO) {

        System.out.println("Mensaje recibido" + emailDTO);

        emailService.sendEmail(EmailDTO.getToUser(), emailDTO.getSubject(), emailDTO.getMessage());

        Map<String, String> response = new  HashMap<>();
        response.put("estado", "Enviado");



        return (ResponseEntity.ok (response);
    }


    @PostMapping("/sendMessageFile")
    public ResponseEntity<?> receiveRequestWithFile(@ModelAttribute EmailFailDTO emailFailDTO) {


        try {
            String fileName = emailFailDTO.getFIle().getName();
            Path path = Paths.get("src/mail/resources/files/" + fileName);
            Files.createDirectories(path.getParent());
            Files.copy(EmailFailDTO.getFail().getImputStream(), path, StandardCopyOption.REPLACE_EXISTING);

            File file = path.toFile();

            emailService.sendEmailwithFail(EmailFailDTO.getToUser(), EmailFailDTO.getSubject(), EmailFailDTO.getMessage(), file);

            Map<String, String> response = new HashMap<>();
            response.put("estado", "Enviado");
            response.put("archivo", "fileName");

            return (ResponseEntity.ok(response);
        } catch (IOException e) {
            throw new RuntimeException("Error al enviar el Enmail con el archivo" + e.getMessage());

        }

    }
}

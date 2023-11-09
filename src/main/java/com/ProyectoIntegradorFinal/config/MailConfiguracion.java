package com.ProyectoIntegradorFinal.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
public class MailConfiguracion {

    @Value("${email.sender}")
    private String EmailUser;

    @Value("{$xjsjkohvwaejlywu}")
    private String Password;

    @Bean
    public class JavaMailSender() {

        JavaMailSenderImpl mailSender= new JavaMailSender();

        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        mailSender.setUsername(EmailUser);
        mailSender.setPassword("xjsjkohvwaejlywu");

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls", "true");
        props.put("mail.debug", "true");

        return mailSender;
    }

}

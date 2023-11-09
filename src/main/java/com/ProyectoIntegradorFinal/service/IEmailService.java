package com.ProyectoIntegradorFinal.service;

import java.io.File;

public interface IEmailService {

    public void sendEmail(String[] toUser, String subject, String message);

    public void sendEmailwithFail(String[] toUser, String subject, String message, File file);
}

package com.ProyectoIntegradorFinal.service;

import com.ProyectoIntegradorFinal.dto.ImagenesDto;
import com.ProyectoIntegradorFinal.entity.Imagenes;
import org.springframework.web.multipart.MultipartFile;

public interface IImagenService {
    ImagenesDto agregarImagen(Imagenes imagenes, MultipartFile imagen);
}

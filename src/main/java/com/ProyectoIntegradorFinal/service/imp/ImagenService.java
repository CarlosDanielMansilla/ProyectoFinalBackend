package com.ProyectoIntegradorFinal.service.imp;

import com.ProyectoIntegradorFinal.dto.ImagenesDto;
import com.ProyectoIntegradorFinal.entity.Imagenes;
import com.ProyectoIntegradorFinal.repository.ImagenesRepository;
import com.ProyectoIntegradorFinal.service.IImagenService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImagenService implements IImagenService {

    private static final Logger LOGGER = LoggerFactory.getLogger(IProductoService.class);
    private final ObjectMapper objectMapper;
    private final ImagenesRepository imagenesRepository;

    @Autowired
    public ImagenService(ObjectMapper objectMapper, ImagenesRepository imagenesRepository) {
        this.objectMapper = objectMapper;
        this.imagenesRepository = imagenesRepository;
    }

    @Override
    public ImagenesDto agregarImagen(Imagenes imagenes, MultipartFile imagen) {
        Imagenes imagenesReg = imagenesRepository.save(imagenes);


        LOGGER.info("MotorHome registrado: {}", imagenesReg);
        return objectMapper.convertValue(imagenesReg, ImagenesDto.class);
    }
}

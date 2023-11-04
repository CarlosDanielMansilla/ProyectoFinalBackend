package com.ProyectoIntegradorFinal.controller;

import com.ProyectoIntegradorFinal.dto.ImagenesDto;
import com.ProyectoIntegradorFinal.dto.ProductoDto;
import com.ProyectoIntegradorFinal.entity.Imagenes;
import com.ProyectoIntegradorFinal.entity.Producto;
import com.ProyectoIntegradorFinal.service.IImagenService;
import com.ProyectoIntegradorFinal.service.IProductoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@CrossOrigin
@RestController
@RequestMapping("/imagenes")
public class ImagenController {
    private static final Logger logger = LoggerFactory.getLogger(ProductoController.class);

    private final IImagenService IImagenService;
    private final IProductoService IProductoService;

    @Autowired
    public ImagenController(com.ProyectoIntegradorFinal.service.IImagenService IImagenService, com.ProyectoIntegradorFinal.service.IProductoService IProductoService) {
        this.IImagenService = IImagenService;
        this.IProductoService = IProductoService;
    }

    @PostMapping("/guardar")
    public ResponseEntity<ImagenesDto> registrar(@RequestParam("id") Long id, @RequestParam(value = "file", required = false) MultipartFile imagen) {
        ResponseEntity<ImagenesDto> respuesta;
        try {
            ProductoDto productoDto = IProductoService.buscarMotorHomePorId(id);


            if (productoDto != null) {
                Producto producto = new Producto(productoDto);

                Imagenes imagenes = new Imagenes();

                imagenes.setProducto(producto);

                if (imagen != null) {
                    Path directorioImagenes = Paths.get("src//main//resources//static//frontend//public/images");
                    String rutaAbsoluta = directorioImagenes.toFile().getAbsolutePath();

                    byte[] bytesImg = imagen.getBytes();
                    Path rutaCompleta = Paths.get(rutaAbsoluta + "//" + imagen.getOriginalFilename());
                    Files.write(rutaCompleta, bytesImg);
                    imagenes.setFile(imagen.getOriginalFilename());
                } else {
                    imagenes.setFile("");
                }

                ImagenesDto imagenesGuardadas = IImagenService.agregarImagen(imagenes, imagen);

                if (imagenesGuardadas != null) {
                    logger.info("Imagen guardada exitosamente: {}", imagenesGuardadas);
                    respuesta = new ResponseEntity<>(imagenesGuardadas, null, HttpStatus.CREATED);
                } else {
                    logger.error("No se pudo guardar la imagen");
                    respuesta = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
                }
            } else {
                logger.error("No se pudo encontrar el producto con el id proporcionado: " + id);
                respuesta = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        } catch (Exception e) {
            logger.error("Error al guardar la imagen", e);
            respuesta = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return respuesta;
    }
}

package com.ProyectoIntegradorFinal.controller;

import com.ProyectoIntegradorFinal.dto.MotorHomeDto;
import com.ProyectoIntegradorFinal.entity.MotorHome;
import com.ProyectoIntegradorFinal.service.IMotorHomeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/motorhome")
public class MotorHomeController {
    private static final Logger logger = LoggerFactory.getLogger(MotorHomeController.class);

    private final IMotorHomeService iMotorHomeService;

    @Autowired
    public MotorHomeController(IMotorHomeService iMotorHomeService) {
        this.iMotorHomeService = iMotorHomeService;
    }


    @GetMapping()
    public List<MotorHomeDto> listarTodos(){
        return iMotorHomeService.listarMotorHome();
    }
    @PostMapping("/registrar")
    public ResponseEntity<MotorHomeDto> registrar(@RequestParam("marca") String marca,
                                                  @RequestParam("modelo") String modelo,
                                                  @RequestParam(value = "anioFabricacion", required = false) int anioFabricacion,
                                                  @RequestParam("descripcion") String descripcion,
                                                  @RequestParam("precioAlquiler") double precioAlquiler,
                                                  @RequestParam("file") MultipartFile imagen) {
        ResponseEntity<MotorHomeDto> respuesta;
        try {
            //logger.info("Intentando registrar MotorHome: {}", motorHome);
            MotorHome motorHome = new MotorHome();
            motorHome.setMarca(marca);
            motorHome.setModelo(modelo);
            motorHome.setAnioFabricacion(anioFabricacion);
            motorHome.setDescripcion(descripcion);
            motorHome.setPrecioAlquiler(precioAlquiler);
            if(imagen != null){
                Path directorioImagenes = Paths.get("src//main//resources//static//frontend//public/images");
                String rutaAbsoluta = directorioImagenes.toFile().getAbsolutePath();

                // Convierte las imágenes en bytes
                /*List<byte[]> imagenesEnBytes = Arrays.stream(imagenes)
                        .map(multipartFile -> {
                            try {
                                return multipartFile.getBytes();
                            } catch (IOException e) {
                                // Manejo de la excepción
                                e.printStackTrace(); // Puedes realizar un manejo adecuado de la excepción aquí
                                return new byte[0]; // Otra acción apropiada en caso de excepción
                            }
                        })
                        .collect(Collectors.toList());*/
                byte [] bytesImg = imagen.getBytes();
                Path rutaCompleta= Paths.get(rutaAbsoluta + "//" + imagen.getOriginalFilename());
                Files.write(rutaCompleta, bytesImg);
                motorHome.setFile(imagen.getOriginalFilename());
            }

            MotorHomeDto motorHomeRegistrado = iMotorHomeService.registrarMotorHome(motorHome, imagen);

            if (motorHomeRegistrado != null) {
                logger.info("MotorHome registrado exitosamente: {}", motorHomeRegistrado);
                respuesta = new ResponseEntity<>(motorHomeRegistrado, null, HttpStatus.CREATED);
            } else {
                logger.error("No se pudo registrar el MotorHome");
                respuesta = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
        } catch (Exception e) {
            logger.error("Error al registrar MotorHome", e);
            respuesta = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return respuesta;
    }

    @GetMapping("/detalle/{id}")
    public ResponseEntity<MotorHomeDto> buscarPorId(@PathVariable Long id){
        ResponseEntity<MotorHomeDto> respuesta;
        MotorHomeDto motorHomeDto = iMotorHomeService.buscarMotorHomePorId(id);
        if(motorHomeDto != null) respuesta = new ResponseEntity<>(motorHomeDto, null, HttpStatus.OK);
        else respuesta = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return respuesta;
    }
}

package com.ProyectoIntegradorFinal.controller;

import com.ProyectoIntegradorFinal.dto.ProductoDto;
import com.ProyectoIntegradorFinal.entity.Producto;
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
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/motorhome")
public class ProductoController {
    private static final Logger logger = LoggerFactory.getLogger(ProductoController.class);

    private final IProductoService IProductoService;

    @Autowired
    public ProductoController(IProductoService IProductoService) {
        this.IProductoService = IProductoService;
    }


    @GetMapping()
    public List<ProductoDto> listarTodos(){
        return IProductoService.listarMotorHome();
    }
    @PostMapping("/registrar")
    public ResponseEntity<ProductoDto> registrar(@RequestBody Producto producto) {
        ResponseEntity<ProductoDto> respuesta;
        try {
            logger.info("Intentando registrar MotorHome: {}", producto);

            //if(imagen != null){
                //Path directorioImagenes = Paths.get("src//main//resources//static//frontend//public/images");
                //String rutaAbsoluta = directorioImagenes.toFile().getAbsolutePath();



                //byte [] bytesImg = imagen.getBytes();
                //Path rutaCompleta= Paths.get(rutaAbsoluta + "//" + imagen.getOriginalFilename());
                //Files.write(rutaCompleta, bytesImg);
                //producto.setFile(imagen.getOriginalFilename());
                // Procesar la lista de imágenes
                //List<String> nombresImagenes = new ArrayList<>();

                /*if (imagenes != null && !imagenes.isEmpty()) {
                    Path directorioImagenes = Paths.get("src//main//resources//static//frontend//public/images");
                    String rutaAbsoluta = directorioImagenes.toFile().getAbsolutePath();

                    for (MultipartFile imagen : imagenes) {
                        byte[] bytesImg = imagen.getBytes();
                        String nombreImagen = imagen.getOriginalFilename();
                        Path rutaCompleta = Paths.get(rutaAbsoluta + "//" + nombreImagen);
                        Files.write(rutaCompleta, bytesImg);
                        nombresImagenes.add(nombreImagen);
                    }

                    producto.setFile(nombresImagenes);
                }*/
           // }
           // else {
              //  producto.setFile(null);
           // }
            //MultipartFile[] imagenesArray = imagenes.toArray(new MultipartFile[0]);
            ProductoDto motorHomeRegistrado = IProductoService.registrarMotorHome(producto);

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
    public ResponseEntity<ProductoDto> buscarPorId(@PathVariable Long id){
        ResponseEntity<ProductoDto> respuesta;
        ProductoDto productoDto = IProductoService.buscarMotorHomePorId(id);
        if(productoDto != null) respuesta = new ResponseEntity<>(productoDto, null, HttpStatus.OK);
        else respuesta = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return respuesta;
    }
}

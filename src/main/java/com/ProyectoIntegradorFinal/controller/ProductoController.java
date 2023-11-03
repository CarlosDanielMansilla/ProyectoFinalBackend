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
    public ResponseEntity<ProductoDto> registrar(@RequestParam("nombre") String nombre,
                                                 @RequestParam("marca") String marca,
                                                 @RequestParam("modelo") String modelo,
                                                 @RequestParam(value = "anioFabricacion", required = false) int anioFabricacion,
                                                 @RequestParam("descripcion") String descripcion,
                                                 @RequestParam("precioAlquiler") double precioAlquiler,
                                                 @RequestParam(value= "file" , required = false) MultipartFile imagen) {
        ResponseEntity<ProductoDto> respuesta;
        try {
            //logger.info("Intentando registrar MotorHome: {}", motorHome);
            Producto producto = new Producto();
            producto.setNombre(nombre);
            producto.setMarca(marca);
            producto.setModelo(modelo);
            producto.setAnioFabricacion(anioFabricacion);
            producto.setDescripcion(descripcion);
            producto.setPrecioAlquiler(precioAlquiler);
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
                producto.setFile(imagen.getOriginalFilename());
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
            }
            else {
                producto.setFile(null);
            }
            //MultipartFile[] imagenesArray = imagenes.toArray(new MultipartFile[0]);
            ProductoDto motorHomeRegistrado = IProductoService.registrarMotorHome(producto, imagen);

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

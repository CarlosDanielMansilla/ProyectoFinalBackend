package com.ProyectoIntegradorFinal.controller;

import com.ProyectoIntegradorFinal.dto.CategoriaDto;
import com.ProyectoIntegradorFinal.entity.Categoria;
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
@RequestMapping("/categoria")
public class CategoriaController {

    private static final Logger logger = LoggerFactory.getLogger(CategoriaController.class);

    private final com.ProyectoIntegradorFinal.service.ICategoriaService ICategoriaService;

    @Autowired
    public CategoriaController(com.ProyectoIntegradorFinal.service.ICategoriaService iCategoriaService) {
        ICategoriaService = iCategoriaService;
    }

    @GetMapping()
    public List<CategoriaDto> listarTodos(){
        return ICategoriaService.listarCategoria();
    }
    @PostMapping("/registrar")
    public ResponseEntity<CategoriaDto> registrar(@RequestParam("nombre") String nombre,
                                                 @RequestParam("descripcion") String descripcion,
                                                 @RequestParam(value= "file" , required = false) MultipartFile file) {
        ResponseEntity<CategoriaDto> respuesta;
        try {
            //logger.info("Intentando registrar Categoria: {}", categoria);
            Categoria categoria = new Categoria();
            categoria.setNombre(nombre);
            categoria.setDescripcion(descripcion);
            if(file != null){
            Path directorioImagenes = Paths.get("src//main//resources//static//frontend//public/images");

                String rutaAbsoluta = directorioImagenes.toFile().getAbsolutePath();


                byte [] bytesImg = file.getBytes();
                Path rutaCompleta= Paths.get(rutaAbsoluta + "//" + file.getOriginalFilename());
                Files.write(rutaCompleta, bytesImg);
                categoria.setFile(file.getOriginalFilename());

            }
            else {
                categoria.setFile(null);
            }
            CategoriaDto categoriaRegistrada = ICategoriaService.registrarCategoria(categoria, file);

            if (categoriaRegistrada != null) {
                logger.info("Categoria registrada exitosamente: {}", categoriaRegistrada);
                respuesta = new ResponseEntity<>(categoriaRegistrada, null, HttpStatus.CREATED);
            } else {
                logger.error("No se pudo registrar la Categoria");
                respuesta = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
        } catch (Exception e) {
            logger.error("Error al registrar Categoria", e);
            respuesta = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return respuesta;
    }

    @GetMapping("/detalle/{id}")
    public ResponseEntity<CategoriaDto> buscarPorId(@PathVariable Long id){
        ResponseEntity<CategoriaDto> respuesta;
        CategoriaDto categoriaDto = ICategoriaService.buscarCategoriaPorId(id);
        if(categoriaDto != null) respuesta = new ResponseEntity<>(categoriaDto, null, HttpStatus.OK);
        else respuesta = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return respuesta;
    }
}




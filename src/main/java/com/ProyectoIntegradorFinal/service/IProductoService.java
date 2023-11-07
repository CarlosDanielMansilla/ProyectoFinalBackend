package com.ProyectoIntegradorFinal.service;

import com.ProyectoIntegradorFinal.dto.ProductoDto;
import com.ProyectoIntegradorFinal.entity.Producto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IProductoService {

    List<ProductoDto> listarMotorHome();
    //List<MotorHomeDto> listarInternosFiltro(String modelo);

    ProductoDto buscarMotorHomePorId(Long id);
    Producto buscarProductoPorNombre(String nombre);

    ProductoDto registrarMotorHome(Producto producto);

    ProductoDto actualizarMotorHome(Producto producto);

    void eliminarMotorHome(Long id);

}

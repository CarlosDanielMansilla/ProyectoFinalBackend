package com.ProyectoIntegradorFinal.service.imp;

import com.ProyectoIntegradorFinal.dto.CategoriaDto;
import com.ProyectoIntegradorFinal.dto.ProductoDto;
import com.ProyectoIntegradorFinal.entity.Categoria;
import com.ProyectoIntegradorFinal.entity.Producto;
import com.ProyectoIntegradorFinal.repository.CategoriaRepository;
import com.ProyectoIntegradorFinal.repository.ProductoRepository;
import com.ProyectoIntegradorFinal.service.IProductoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductoService implements IProductoService {
    private static final Logger LOGGER = LoggerFactory.getLogger(ProductoService.class);
    private final ObjectMapper objectMapper;
    private final ProductoRepository productoRepository;
    private final CategoriaRepository categoriaRepository; // Asumiendo que tienes un repositorio para las categorías




    @Autowired
    public ProductoService(ObjectMapper objectMapper, ProductoRepository productoRepository, CategoriaRepository categoriaRepository) {
        this.objectMapper = objectMapper;
        this.productoRepository = productoRepository;
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    public Producto buscarProductoPorNombre(String nombre) {
        Producto producto = productoRepository.findByNombre(nombre);
        //ProductoDto productoDto = null;
        if(producto!= null){
            //productoDto = objectMapper.convertValue(producto , ProductoDto.class);
            LOGGER.info("Producto encontrado: {}", producto);
        }else{
            LOGGER.info("El nombre no se encuentra registrado en la base de datos");
        }
        return producto;
    }


    @Override
    public List<ProductoDto> listarMotorHome() {
        List<Producto> productos = productoRepository.findAll();
        List<ProductoDto> motorHomesDtos = productos.stream()
                .map(producto -> objectMapper.convertValue(producto, ProductoDto.class)).toList();
        LOGGER.info("Listado de todos los motorhomes: {}", motorHomesDtos);
        return motorHomesDtos;
    }

    @Override
    public ProductoDto buscarMotorHomePorId(Long id) {
        Producto producto = productoRepository.findById(id).orElse(null);
        ProductoDto productoDto = null;
        if(producto != null){
            productoDto = objectMapper.convertValue(producto, ProductoDto.class);
            LOGGER.info("MotorHome encontrado: {}", productoDto);
        }else{
            LOGGER.info("El id no se encuentra registrado en la base de datos");
        }
        return productoDto;
    }

    @Override
    public ProductoDto registrarMotorHome(Producto producto) {

        // Asegúrate de que las categorías estén en un estado gestionado
        Set<Categoria> categoriasGestionadas = new HashSet<>();
        for (Categoria categoria : producto.getCategorias()) {
            if (categoria.getId() != null) {
                // La categoría ya existe en la base de datos, así que cargamos la versión gestionada
                categoriasGestionadas.add(categoriaRepository.getReferenceById(categoria.getId())/*.getOne(categoria.getId())*/);
            } else {
                // La categoría es nueva y debe ser persistida
                categoriasGestionadas.add(categoriaRepository.save(categoria));
            }
            // Asigna el producto a la categoría
            categoria.setProducto(producto);
        }

        // Actualiza el conjunto de categorías del producto con las categorías gestionadas
        //producto.setCategorias(categoriasGestionadas);
        //producto.setCategorias(producto.getCategorias());

        Producto productoReg = productoRepository.save(producto);

        Set<CategoriaDto> categoriaDtoSet = productoReg.getCategorias()
                .stream()
                .map(categoria -> objectMapper.convertValue(categoria, CategoriaDto.class))
                .collect(Collectors.toSet());

        ProductoDto productoDtoNuevo = objectMapper.convertValue(productoReg, ProductoDto.class);
        productoDtoNuevo.setCategorias(categoriaDtoSet);
        LOGGER.info("MotorHome registrado: {}", productoReg);

        return productoDtoNuevo;
    }

    @Override
    public ProductoDto actualizarMotorHome(Producto producto) {
        Producto productoEdit = productoRepository.findById(producto.getId()).orElse(null);
        ProductoDto productoDto = null;
        if(productoEdit != null){
            productoEdit = producto;
            productoRepository.save(productoEdit);
            productoDto = objectMapper.convertValue(productoEdit, ProductoDto.class);
            LOGGER.warn("MotorHome actualizado: {}", productoDto);
        }else{
            LOGGER.error("No fue posible actualizar los datos ya que el MotorHome no se encuentra registrado");
        }
        return productoDto;
    }

    @Override
    public void eliminarMotorHome(Long id) {
        if(buscarMotorHomePorId(id) != null){
            ProductoDto productoDto = buscarMotorHomePorId(id);
            productoRepository.deleteById(id);
            LOGGER.warn("Se ha eliminado el MotorHome con id: {}", productoDto);
        }else{
            LOGGER.error("No se ha encontrado el MotorHome con id " + id);
        }
    }
}

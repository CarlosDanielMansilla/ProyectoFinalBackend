package com.ProyectoIntegradorFinal.dto;


import java.util.List;
import java.util.Set;

public class ProductoDto {
    private Long id;
    private String nombre;
    private String marca;
    private String modelo;
    private int anioFabricacion;
    private String descripcion;
    private double precioAlquiler;
    private Set<CategoriaDto> categorias;


    public ProductoDto() {
    }

    public ProductoDto(Long id, String nombre, String marca, String modelo, int anioFabricacion, String descripcion, double precioAlquiler, Set<CategoriaDto> categorias) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
        this.descripcion = descripcion;
        this.precioAlquiler = precioAlquiler;
        this.categorias = categorias;
    }

    public Long getId() {
        return id;
    }


    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getAnioFabricacion() {
        return anioFabricacion;
    }

    public void setAnioFabricacion(int anioFabricacion) {
        this.anioFabricacion = anioFabricacion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecioAlquiler() {
        return precioAlquiler;
    }

    public void setPrecioAlquiler(double precioAlquiler) {
        this.precioAlquiler = precioAlquiler;
    }

    public Set<CategoriaDto> getCategorias() {
        return categorias;
    }

    public void setCategorias(Set<CategoriaDto> categorias) {
        this.categorias = categorias;
    }
}

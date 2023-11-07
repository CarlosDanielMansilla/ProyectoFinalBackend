package com.ProyectoIntegradorFinal.entity;

import com.ProyectoIntegradorFinal.dto.ProductoDto;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String marca;
    private String modelo;
    @Column(name = "anioFabricacion")
    private int anioFabricacion;
    private String descripcion;
    private double precioAlquiler;

    //private String file;

    public Producto() {
    }

    public Producto(String nombre, String marca, String modelo, int anioFabricacion, String descripcion, double precioAlquiler) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
        this.descripcion = descripcion;
        this.precioAlquiler = precioAlquiler;
    }

    public Producto(ProductoDto productoDto) {
        this.id = productoDto.getId();
        this.nombre = productoDto.getNombre();
        this.marca = productoDto.getMarca();
        this.modelo = productoDto.getModelo();
        this.descripcion = productoDto.getDescripcion();
        this.anioFabricacion = productoDto.getAnioFabricacion();
        this.precioAlquiler = productoDto.getPrecioAlquiler();
        // Copia otros atributos aquí
    }

    public Long getId() {
        return id;
    }

    public String getMarca() {
        return marca;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
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


}

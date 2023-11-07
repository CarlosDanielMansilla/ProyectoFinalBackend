package com.ProyectoIntegradorFinal.repository;

import com.ProyectoIntegradorFinal.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    //List<MotorHome> findByMotorHome(String modelo);
    Producto findByNombre(String nombre);
    @Query("select u from Producto u where u.nombre = ?1")
    Optional<Producto> getName(String nombre);
}

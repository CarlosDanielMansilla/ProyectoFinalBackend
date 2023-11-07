package com.ProyectoIntegradorFinal.controller;

import com.ProyectoIntegradorFinal.dto.UsuarioDto;
import com.ProyectoIntegradorFinal.entity.ERole;
import com.ProyectoIntegradorFinal.entity.RolUsuario;
import com.ProyectoIntegradorFinal.entity.Usuario;
import com.ProyectoIntegradorFinal.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UsuarioRepository userRepository;




    @PostMapping("/createUser")
    public ResponseEntity<?> createUser(@Valid @RequestBody UsuarioDto createUserDTO){

        Set<RolUsuario> roles = createUserDTO.getRoles().stream()
                .map(role -> new RolUsuario(ERole.valueOf(role)))
                .collect(Collectors.toSet());

        Usuario userEntity = new Usuario(
                createUserDTO.getEmail(),
                createUserDTO.getUsername(),
                passwordEncoder.encode(createUserDTO.getPassword()),
                roles
        );

        userRepository.save(userEntity);

        return ResponseEntity.ok(userEntity);
    }
}

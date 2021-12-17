package com.inventaire.inventaire;

import com.inventaire.inventaire.dao.EmplacementRepository;
import com.inventaire.inventaire.entites.Article;
import com.inventaire.inventaire.entites.Emplacement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class EmplacementRestServices {
    @Autowired
    EmplacementRepository emplacementRepository;
    @CrossOrigin(origins = "*")
    @GetMapping(value="/listeEmplacement/get")
    public List<Emplacement> listeLigne(){
        return emplacementRepository.findAll();
    }
    @CrossOrigin(origins = "*")
    @GetMapping(value="/listeEmplacement/get/{id}")
    public Optional<Emplacement> listeLigne(@PathVariable(name ="id") String id){
        return emplacementRepository.findById(id);
    }
}

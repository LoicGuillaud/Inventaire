package com.inventaire.inventaire;

import com.inventaire.inventaire.dao.LigneInventaireRepository;
import com.inventaire.inventaire.entites.LigneInventaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LigneInventaireRestServices {
    @Autowired
    private LigneInventaireRepository ligneInventaireRepository;
    @GetMapping(value="/listeLigne/g")
    public List<LigneInventaire> listeLigne(){
        return ligneInventaireRepository.findAll();
    }
    @GetMapping(value="/listeLigne/g/{id}")
    public LigneInventaire listeLigne(@PathVariable(name ="id") Long id){
        return ligneInventaireRepository.findById(id).get();
    }
    @PutMapping(value="/listeLigne/u/{id}")
    public LigneInventaire update(@PathVariable(name ="id") Long id,@RequestBody LigneInventaire li){
        li.setIdLigne(id);
        return ligneInventaireRepository.save(li);
    }
    @PostMapping(value="/listeLigne/s/")
    public LigneInventaire save(@RequestBody LigneInventaire li){
        return ligneInventaireRepository.save(li);
    }
    @PutMapping(value="/listeLigne/d/{id}")
    public void delete(@PathVariable(name ="id") Long id){
        ligneInventaireRepository.deleteById(id);
    }
}

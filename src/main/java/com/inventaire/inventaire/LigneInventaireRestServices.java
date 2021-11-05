package com.inventaire.inventaire;

import com.inventaire.inventaire.dao.LigneInventaireAjoutRepository;
import com.inventaire.inventaire.dao.LigneInventaireRepository;
import com.inventaire.inventaire.entites.LigneInventaire;
import com.inventaire.inventaire.entites.LigneInventaireAjout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LigneInventaireRestServices {

    @Autowired
    private LigneInventaireRepository ligneInventaireRepository;
    @Autowired
    private LigneInventaireAjoutRepository ligneInventaireAjoutRepository;

    @GetMapping(value="/listeLigne/get")
    public List<LigneInventaire> listeLigne(){
        return ligneInventaireRepository.findAll();
    }
    @GetMapping(value="/listeLigne/get/{id}")
    public Optional<LigneInventaire> listeLigne(@PathVariable(name ="id") Long id){
        return ligneInventaireRepository.findById(id);
    }
    @PutMapping(value="/listeLigne/update/{id}")
    public LigneInventaire update(@PathVariable(name ="id") Long id,@RequestBody LigneInventaire li){
        li.setIdLigne(id);
        return ligneInventaireRepository.save(li);
    }
    @CrossOrigin(origins = "*")
    @RequestMapping(value="/listeligne/save/", method = { RequestMethod.GET, RequestMethod.POST })
    public LigneInventaire save(@RequestBody LigneInventaireAjout lia){
        LigneInventaire li = new LigneInventaire();
        li.setCodeArticle(lia.getCodeArticleLot().split("\\.")[0]);
        li.setNumeroLot(lia.getCodeArticleLot().split("\\.")[1]);
        li.setEmplacement(lia.getEmplacement());
        li.setQuantite(lia.getQuantite());
        li.setIdInventaire("2021IC");
        li.setNumEquipe(lia.getNumEquipe());
        li.setNumPassage(lia.getNumPassage());
        li.setZone(lia.getZone());
        return ligneInventaireRepository.save(li);
    }
    @PutMapping(value="/listeLigne/delete/{id}")
    public void delete(@PathVariable(name ="id") Long id){
        ligneInventaireRepository.deleteById(id);
    }
}

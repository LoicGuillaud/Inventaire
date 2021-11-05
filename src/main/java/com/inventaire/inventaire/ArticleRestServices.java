package com.inventaire.inventaire;

import com.inventaire.inventaire.dao.ArticleRepository;
import com.inventaire.inventaire.entites.*;
import com.inventaire.inventaire.entites.LigneInventaire;
import com.inventaire.inventaire.entites.LigneInventaireAjout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ArticleRestServices {

    @Autowired
    ArticleRepository articleRepository;
    @CrossOrigin(origins = "*")
    @GetMapping(value="/listeArticle/get")
    public List<Article> listeLigne(){
        return articleRepository.findAll();
    }
    @CrossOrigin(origins = "*")
    @GetMapping(value="/listeArticle/get/{id}")
    public Optional<Article> listeLigne(@PathVariable(name ="id") String id){
        return articleRepository.findById(id);
    }
    @PutMapping(value="/listeArticle/update/{id}")
    public Article update(@PathVariable(name ="id") String id,@RequestBody Article article){
        article.setArt_id(id);
        return articleRepository.save(article);
    }
    @CrossOrigin(origins = "*")
    @RequestMapping(value="/listeArticle/save/", method = { RequestMethod.GET, RequestMethod.POST })
    public Article save(@RequestBody Article article){
        return articleRepository.save(article);
    }
    @PutMapping(value="/listeArticle/delete/{id}")
    public void delete(@PathVariable(name ="id") String id){
        articleRepository.deleteById(id);
    }
}

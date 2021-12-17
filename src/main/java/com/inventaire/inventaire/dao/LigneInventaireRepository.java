package com.inventaire.inventaire.dao;

import com.inventaire.inventaire.entites.LigneInventaire;
import com.inventaire.inventaire.entites.LigneInventaireAjout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface LigneInventaireRepository extends JpaRepository<LigneInventaire, Integer> {

}
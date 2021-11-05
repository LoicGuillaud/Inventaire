package com.inventaire.inventaire.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class LigneInventaireAjout  implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLigne;
    private String codeArticleLot;
    private String emplacement;
    private Double quantite;
    private String zone ;
    private Integer numEquipe ;
    private Integer numPassage ;

}

package com.inventaire.inventaire.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Immutable
@Table(name="'LU_LISTE_EMPLACEMENTS'")
@Subselect("SELECT em.* FROM LU_LISTE_EMPLACEMENTS em")
public class Emplacement implements Serializable {
    @Id
    private String codeEmplacement;
    private String nomEmplacement;
    private String zoneEmplacement;
}

package com.inventaire.inventaire.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
@Immutable
@Table(name="'LU_ART_INV'")
@Subselect("SELECT ai.* FROM LU_ART_INV ai")
public class Article implements Serializable {
    @Id
    private String Art_id;
    private String Designation;
    private String Unite;

}

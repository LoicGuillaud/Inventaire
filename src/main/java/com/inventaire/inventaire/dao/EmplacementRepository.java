package com.inventaire.inventaire.dao;

import com.inventaire.inventaire.entites.Article;
import com.inventaire.inventaire.entites.Emplacement;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface EmplacementRepository extends PagingAndSortingRepository<Emplacement, String> {
    List<Emplacement> findAll();
}

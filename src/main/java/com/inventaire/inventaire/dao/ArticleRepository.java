package com.inventaire.inventaire.dao;

import com.inventaire.inventaire.entites.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ArticleRepository extends PagingAndSortingRepository<Article, String> {
    List<Article> findAll();
}

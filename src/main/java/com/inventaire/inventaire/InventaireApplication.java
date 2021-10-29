package com.inventaire.inventaire;

import com.inventaire.inventaire.dao.LigneInventaireAjoutRepository;
import com.inventaire.inventaire.dao.LigneInventaireRepository;
import com.inventaire.inventaire.entites.LigneInventaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InventaireApplication implements CommandLineRunner {

	@Autowired
	private LigneInventaireRepository ligneInventaireRepository;
	@Autowired
	private LigneInventaireAjoutRepository ligneInventaireAjoutRepository;

	public static void main(String[] args) {
		SpringApplication.run(InventaireApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		ligneInventaireRepository.findAll().forEach(ligneInv -> {
			System.out.println(ligneInv.toString());
		});
	}

}

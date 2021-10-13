package com.inventaire.inventaire;

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

	public static void main(String[] args) {
		SpringApplication.run(InventaireApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		ligneInventaireRepository.save(new LigneInventaire(null,"2021IC","0200015AB","GC96331","NORMAL",156.15,"LABO",1,1));
		ligneInventaireRepository.save(new LigneInventaire(null,"2021IC","0200015AB","GC96332","NORMAL",75.00,"LABO",1,1));

		ligneInventaireRepository.findAll().forEach(ligneInv -> {
			System.out.println(ligneInv.toString());
		});
	}

}

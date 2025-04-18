package it.epicode.biblioteca_web.caseeditrici;

import com.github.javafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
public class CasaEditriceRunner implements CommandLineRunner {
    @Autowired
    private Faker faker;
    @Autowired
    private CasaEditriceRepository casaEditriceRepository;

    @Override
    @Order(2)
    public void run(String... args) throws Exception {

        if(casaEditriceRepository.count() == 0) {
            for (int i = 0; i < 10; i++) {
                CasaEditrice casaEditrice = new CasaEditrice();
                casaEditrice.setNome(faker.company().name());
                casaEditrice.setIndirizzo(faker.address().city());
                casaEditrice.setTelefono(faker.phoneNumber().phoneNumber());

                casaEditriceRepository.save(casaEditrice);
            }
        }

    }
}

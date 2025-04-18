package it.epicode.pet_shop.pets;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Pet")

public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;
    private String type;
    @Column(length = 200)
    private String description;
    private int yearOfBirth;

}

package it.epicode.pet_shop.pets;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PetRequest {
    @NotBlank(message = "Name is mandatory")
    private String name;
    @NotBlank(message = "Type is mandatory")
    private String type;
    @NotBlank(message = "Description is mandatory")
    private String description;
    @Min(value = 2000, message = "Year of birth must be greater than 2000")
    @Max(value = 2050, message = "Year of birth must be less than 2050")
    private int yearOfBirth;
}

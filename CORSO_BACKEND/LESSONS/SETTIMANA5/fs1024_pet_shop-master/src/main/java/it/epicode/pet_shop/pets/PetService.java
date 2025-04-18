package it.epicode.pet_shop.pets;

import it.epicode.pet_shop.common.CommonResponse;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
public class PetService {
    @Autowired
    private PetRepository petRepository;

    public CommonResponse save(@Valid PetRequest request) {
        Pet pet = new Pet();
        BeanUtils.copyProperties(request, pet);

        petRepository.save(pet);
        return new CommonResponse( pet.getId());

    }

    public Page<PetResponse> findAll(Pageable pageable) {
        return petRepository.findAll(pageable)
                .map(this::fromEntity);

    }

    public PetResponse fromEntity(Pet pet) {
        PetResponse response = new PetResponse();
        BeanUtils.copyProperties(pet, response);
        return response;
    }

}

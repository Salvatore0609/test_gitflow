package it.epicode.pet_shop.pets;

import it.epicode.pet_shop.common.CommonResponse;
import jakarta.validation.Valid;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pets")
public class PetController {
    @Autowired
    private PetService petService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CommonResponse save(@RequestBody @Valid PetRequest request) {
        return petService.save(request);
    }

    @GetMapping
    public Page<PetResponse> findAll(@ParameterObject Pageable pageable) {
        return petService.findAll(pageable);
    }

}

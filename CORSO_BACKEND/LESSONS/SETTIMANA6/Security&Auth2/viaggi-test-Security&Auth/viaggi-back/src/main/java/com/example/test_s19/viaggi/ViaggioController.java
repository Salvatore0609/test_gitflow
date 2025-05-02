package com.example.test_s19.viaggi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/viaggi")
public class ViaggioController {
    @Autowired
    ViaggioService viaggioService;
    @PreAuthorize("isAuthenticated()")
    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Page<Viaggio> findAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, @RequestParam (defaultValue = "id") String sort) {
        return viaggioService.findAll(page, size, sort);
    }
    @PreAuthorize("isAuthenticated()")
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Viaggio findById(@RequestParam Long id) {
        return viaggioService.getViaggioById(id);
    }
    @PreAuthorize("isAuthenticated()")
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Viaggio updateViaggio(@PathVariable Long id, @RequestBody ViaggioRequest viaggioRequest) {
        return viaggioService.updateViaggio(id, viaggioRequest);
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteViaggio(@PathVariable Long id) {
        viaggioService.deleteViaggio(id);
    }
    @PreAuthorize("isAuthenticated()")
    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Viaggio updateStato(@PathVariable Long id) {
        return viaggioService.updateStato(id);
    }
}

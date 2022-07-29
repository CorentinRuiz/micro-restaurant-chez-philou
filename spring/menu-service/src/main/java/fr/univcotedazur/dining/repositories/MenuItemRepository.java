package fr.univcotedazur.dining.repositories;

import fr.univcotedazur.dining.models.MenuItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "menus", path = "menus")
public interface MenuItemRepository extends MongoRepository<MenuItem, String> {

        Optional<MenuItem> findByShortName(@Param("shortname") String shortName);

}
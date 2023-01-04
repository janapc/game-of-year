package me.dio.gameawards.domain.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
	List<Game> findByNameContainingIgnoreCase(String name);
}

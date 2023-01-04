package me.dio.gameawards.service;

import java.util.List;

import me.dio.gameawards.domain.model.Game;

public interface GameService {
	List<Game> all();
	List<Game> searchByName(String name);
	Game findById(Long id);
	Game winner();
	void insert(Game game);
	void update(Long id,Game game);
	void delete(Long id);
	void vote(Long id);
}

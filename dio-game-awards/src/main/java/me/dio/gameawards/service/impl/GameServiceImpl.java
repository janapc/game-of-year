package me.dio.gameawards.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import me.dio.gameawards.domain.model.Game;
import me.dio.gameawards.domain.model.GameRepository;
import me.dio.gameawards.service.GameService;
import me.dio.gameawards.service.exception.BusinessException;
import me.dio.gameawards.service.exception.NoContentException;

@Service
public class GameServiceImpl implements GameService{
	
	@Autowired
	private GameRepository repository;

	@Override
	public List<Game> all() {
		List<Game> games = repository.findAll(Sort.by(Direction.DESC, "votes"));
		return games;
	}
	
	@Override
	public List<Game> searchByName(String name) {
		List<Game> games = repository.findByNameContainingIgnoreCase(name);
		return games;
	}
	
	@Override
	public Game findById(Long id) {
		Optional<Game> game = repository.findById(id);
		return game.orElseThrow(() -> new NoContentException());
	}

	@Override
	public void insert(Game game) {
		if(game.getId() != null) {
			throw new BusinessException("O id é diferente de NULL na inclusão.");
		}		
		repository.save(game);
	}

	@Override
	public void update(Long id, Game game) {
		Game gameDB = this.findById(id);
		if(gameDB.getId().equals(game.getId())) {
			repository.save(game);
		} else {
			throw new BusinessException("Não existe um jogo com esse id");
		}
		
	}

	@Override
	public void delete(Long id) {
		Game gameDB = this.findById(id);
		repository.delete(gameDB);
	}
	
	@Override
	public void vote(Long id) {
		Game gameDB = this.findById(id);
		gameDB.setVotes(gameDB.getVotes() + 1);
		this.update(id, gameDB);
	}

	@Override
	public Game winner() {
		List<Game> games = this.all();
		return games.get(0);
	}

}

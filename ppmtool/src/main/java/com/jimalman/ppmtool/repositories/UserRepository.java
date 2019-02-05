package com.jimalman.ppmtool.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jimalman.ppmtool.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}

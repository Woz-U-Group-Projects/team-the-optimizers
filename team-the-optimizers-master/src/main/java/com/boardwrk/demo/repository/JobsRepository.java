package com.boardwrk.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.boardwrk.demo.model.Jobs;

@Repository
public interface JobsRepository extends JpaRepository<Jobs, Long> {

}

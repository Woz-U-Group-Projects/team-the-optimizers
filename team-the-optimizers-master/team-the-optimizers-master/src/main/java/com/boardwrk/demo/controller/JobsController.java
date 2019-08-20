package com.boardwrk.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boardwrk.demo.model.Jobs;
import com.boardwrk.demo.repository.JobsRepository;
import com.boardwrk.demo.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/jobs")
public class JobsController {

	@Autowired
	private JobsRepository jobsRepository;

	@GetMapping()
	public List<Jobs> getAllJobs() {
		return jobsRepository.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Jobs> getJobsById(@PathVariable(value = "id") Long jobId) throws ResourceNotFoundException {
		Jobs job = jobsRepository.findById(jobId)
				.orElseThrow(() -> new ResourceNotFoundException("Job not found for this id :: " + jobId));
		return ResponseEntity.ok().body(job);
	}

	@PostMapping()
	public Jobs createJobs(@Valid @RequestBody Jobs job) {
		return jobsRepository.save(job);
	}

	@DeleteMapping("/{id}")
	public Map<String, Boolean> deleteJobs(@PathVariable(value = "id") Long jobId) throws ResourceNotFoundException {
		Jobs job = jobsRepository.findById(jobId)
				.orElseThrow(() -> new ResourceNotFoundException("Job not found for this id :: " + jobId));

		jobsRepository.delete(job);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@PutMapping("/{id}")
	public ResponseEntity<Jobs> updateJobs(@PathVariable(value = "id") Long jobId, @Valid @RequestBody Jobs JobsDetails)
			throws ResourceNotFoundException {
		Jobs job = jobsRepository.findById(jobId)
				.orElseThrow(() -> new ResourceNotFoundException("Job not found for this id :: " + jobId));

		job.setId(JobsDetails.getId());
		job.setCompany(JobsDetails.getCompany());
		job.setPosition(JobsDetails.getPosition());
		job.setSalary(JobsDetails.getSalary());
		job.setDescription(JobsDetails.getDescription());
		job.setLocation(JobsDetails.getLocation());
		final Jobs updatedJobs = jobsRepository.save(job);
		return ResponseEntity.ok(updatedJobs);
	}

}
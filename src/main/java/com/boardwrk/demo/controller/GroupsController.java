// package com.boardwrk.demo.controller;

// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;
// import javax.validation.Valid;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.boardwrk.demo.model.Groups;
// import com.boardwrk.demo.repository.GroupsRepository;
// import com.boardwrk.demo.exception.ResourceNotFoundException;

// @CrossOrigin(origins = "http://localhost:4200")
// @RestController
// @RequestMapping("/groups")
// public class GroupsController {

// 	@Autowired
// 	private GroupsRepository groupsRepository;

// 	@GetMapping()
// 	public List<Groups> getAllGroups() {
// 		return groupsRepository.findAll();
// 	}

// 	@GetMapping("/{id}")
// 	public ResponseEntity<Groups> getGroupsById(@PathVariable(value = "id") Long groupid) throws ResourceNotFoundException {
// 		Groups groups = groupsRepository.findById(groupid)
// 				.orElseThrow(() -> new ResourceNotFoundException("Group not found for this id :: " + groupid));
// 		return ResponseEntity.ok().body(groups);
// 	}

// 	@PostMapping()
// 	public Groups createGroups(@Valid @RequestBody Groups group) {
// 		return groupsRepository.save(group);
// 	}

// 	@DeleteMapping("/{id}")
// 	public Map<String, Boolean> deleteGroups(@PathVariable(value = "id") Long groupid) throws ResourceNotFoundException {
// 		Groups group = groupsRepository.findById(groupid)
// 				.orElseThrow(() -> new ResourceNotFoundException("Group not found for this id :: " + groupid));

// 		groupsRepository.delete(group);
// 		Map<String, Boolean> response = new HashMap<>();
// 		response.put("deleted", Boolean.TRUE);
// 		return response;
// 	}

// 	@PutMapping("/{id}")
// 	public ResponseEntity<Groups> updateGroups(@PathVariable(value = "id") Long groupid, @Valid @RequestBody Groups GroupsDetails)
// 			throws ResourceNotFoundException {
// 		Groups groups = groupsRepository.findById(groupid)
// 				.orElseThrow(() -> new ResourceNotFoundException("Group not found for this id :: " + groupid));

// 		groups.setId(GroupsDetails.getId());
// 		groups.setGroupName(GroupsDetails.getGroupName());
// 		groups.setDescription(GroupsDetails.getDescription());
// 		groups.setLocation(GroupsDetails.getLocation());
// 		final Groups updatedGroups = groupsRepository.save(groups);
// 		return ResponseEntity.ok(updatedGroups);
// 	}

// }
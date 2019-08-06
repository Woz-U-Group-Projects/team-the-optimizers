// package com.boardwrk.demo.model;

// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.persistence.Table;

// @Entity
// @Table(name = "groups")
// public class Groups {

// 	@Id
// 	@GeneratedValue(strategy = GenerationType.AUTO)

// 	@Column(name = "id")
// 	private Long id;

// 	@Column(name = "groupsname")
// 	private String groupsname;

// 	@Column(name = "description")
// 	private String description;

// 	@Column(name = "location")
// 	private String location;

// 	public Groups() {
// 	}

// 	public Groups(String groupsname, String description, String location, Long Id) {
// 		this.groupsname = groupsname;
// 		this.description = description;
// 		this.location = location;
// 		this.id = Id;
// 	}

// 	public Long getId() {
// 		return id;
// 	}

// 	public void setId(Long Id) {
// 		this.id= Id;
// 	}

// 	public String getGroupName() {
// 		return groupsname;
// 	}

// 	public void setGroupName(String groupsname) {
// 		this.groupsname = groupsname;
// 	}

// 	public String getDescription() {
// 		return description;
// 	}

// 	public void setDescription(String description) {
// 		this.description = description;
// 	}

// 	public String getLocation() {
// 		return location;
// 	}

// 	public void setLocation(String location) {
// 		this.location = location;
// 	}

// 	@Override
// 	public String toString() {
// 		return "Jobs [groupsname=" + groupsname + ", location=" + location + ", description=" + description + "]";
// 	}
// }

package com.boardwrk.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "groups")
public class Groups {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	@Column(name = "idGroups")
	private Long idGroups;

	@Column(name = "GroupsName")
	private String GroupName;

	@Column(name = "Description")
	private String Description;

	@Column(name = "Location")
	private String Location;

	public Groups() {
	}

	public Groups(String GroupsName, String Description, String Location, Long Id) {
		this.GroupName = GroupsName;
		this.Description = Description;
		this.Location = Location;
		this.idGroups = Id;
	}

	public Long getId() {
		return idGroups;
	}

	public void setId(Long Id) {
		this.idGroups = Id;
	}

	public String getGroupName() {
		return GroupName;
	}

	public void setGroupName(String GroupName) {
		this.GroupName = GroupName;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String Description) {
		this.Description = Description;
	}

	public String getLocation() {
		return Location;
	}

	public void setLocation(String Location) {
		this.Location = Location;
	}

	@Override
	public String toString() {
		return "Jobs [GroupName=" + GroupName + ", Location=" + Location + ", Description=" + Description + "]";
	}
}

package com.boardwrk.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "jobs")
public class Jobs {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	@Column(name = "Id")
	private Long Id;

	@Column(name = "Company")
	private String Company;

	@Column(name = "Position")
	private String Position;

	@Column(name = "Salary")
	private String Salary;

	@Column(name = "Description")
	private String Description;

	@Column(name = "Location")
	private String Location;

	public Jobs() {
	}

	public Jobs(String Company, String Position, String Salary, String Description, String Location, Long Id) {
		this.Company = Company;
		this.Position = Position;
		this.Salary = Salary;
		this.Description = Description;
		this.Location = Location;
		this.Id = Id;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long Id) {
		this.Id = Id;
	}

	public String getCompany() {
		return Company;
	}

	public void setCompany(String Company) {
		this.Company = Company;
	}

	public String getPosition() {
		return Position;
	}

	public void setPosition(String Position) {
		this.Position = Position;
	}

	public String getSalary() {
		return Salary;
	}

	public void setSalary(String Salary) {
		this.Salary = Salary;
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
		return "Jobs [Company=" + Company + ", Position=" + Position + ", Salary=" + Salary + ", Location=" + Location
				+ ", Description=" + Description + "]";
	}
}

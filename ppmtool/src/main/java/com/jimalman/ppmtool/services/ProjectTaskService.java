package com.jimalman.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jimalman.ppmtool.domain.Backlog;
import com.jimalman.ppmtool.domain.Project;
import com.jimalman.ppmtool.domain.ProjectTask;
import com.jimalman.ppmtool.exceptions.ProjectNotFoundException;
import com.jimalman.ppmtool.repositories.BacklogRepository;
import com.jimalman.ppmtool.repositories.ProjectRepository;
import com.jimalman.ppmtool.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskService {

	@Autowired
	private BacklogRepository backlogRepository;
	
	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	
	@Autowired
	private ProjectRepository projectRepository;
	
	public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
		
		// Exception: Project not found
		try {
		  // PT to be added to a specific project, project != null, BL exists
		  Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
		  // Set the BL to the PT
		  projectTask.setBacklog(backlog);
		  // Want project sequence like PROJ-1 PROJ-2
		  Integer backlogSequence = backlog.getPTSequence();
		  // Update BL sequence
		  backlogSequence++;
		  backlog.setPTSequence(backlogSequence);
		
		  // Add Sequence to Project Task
		  projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
		  projectTask.setProjectIdentifier(projectIdentifier);
		
		  // Initial priority when priority is null
		  if(projectTask.getPriority() == null ) {
			projectTask.setPriority(3);
		  }
		  // Initial status when status is null
		  if(projectTask.getStatus() == "" || projectTask.getStatus() == null) {
			projectTask.setStatus("TO_DO");
		  }
		
		  return projectTaskRepository.save(projectTask);
		}catch (Exception e) {
			throw new ProjectNotFoundException("Project ID '" + projectIdentifier.toUpperCase() + "' does not exist");
		}
	}
	
	public Iterable<ProjectTask>findBacklogById(String id) {
		
		Project project = projectRepository.findByProjectIdentifier(id);
		
		if(project==null) {
			throw new ProjectNotFoundException("Project ID '" + id.toUpperCase() + "' does not exist");
		}
		return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
	}
}

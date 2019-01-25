package com.jimalman.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jimalman.ppmtool.domain.Backlog;
import com.jimalman.ppmtool.domain.ProjectTask;
import com.jimalman.ppmtool.repositories.BacklogRepository;
import com.jimalman.ppmtool.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskService {

	@Autowired
	private BacklogRepository backlogRepository;
	
	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	
	public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
		
		// Exception: Project not found
		// PT to be added to a specific project, project != null, BL exists
		Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
		// Set the BL to the PT
		projectTask.setBacklog(backlog);
		// Want project sequence like PROJ-1 PROJ-2
		Integer BacklogSequence = backlog.getPTSequence();
		// Update BL sequence
		BacklogSequence++;
		
		// Add Sequence to Project Task
		projectTask.setProjectSequence(projectIdentifier + "-" + BacklogSequence);
		projectTask.setProjectIdentifier(projectIdentifier);
		
		// Initial priority when priority is null
		//if(projectTask.getPriority() == 0 || projectTask.getPriority() == null) {
		//	projectTask.setPriority(3);
		//}
		// Initial status when status is null
		if(projectTask.getStatus() == "" || projectTask.getStatus() == null) {
			projectTask.setStatus("TO_DO");
		}
		
		return projectTaskRepository.save(projectTask);
		
	}
}

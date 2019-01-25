package com.jimalman.ppmtool.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jimalman.ppmtool.domain.ProjectTask;
import com.jimalman.ppmtool.services.ProjectTaskService;
import com.jimalman.ppmtool.services.ValidationErrorService;

@RestController
@RequestMapping("api/backlog")
@CrossOrigin
public class BacklogController {

	@Autowired
	private ProjectTaskService projectTaskService;
	
	@Autowired
	private ValidationErrorService validationErrorService;
	
	@PostMapping("/{backlogId}")
	public ResponseEntity<?> addPTtoBacklog(@Valid @RequestBody ProjectTask projectTask, BindingResult result, @PathVariable String backlogId) {
		ResponseEntity<?> errorMap = validationErrorService.ValidationService(result);
		if(errorMap != null) return errorMap;
		
		ProjectTask projectTask1 = projectTaskService.addProjectTask(backlogId, projectTask);
		
		return new ResponseEntity<ProjectTask>(projectTask1, HttpStatus.CREATED);
	}
	
	@GetMapping("/{backlogId}")
	public Iterable<ProjectTask> getProjectBacklog(@PathVariable String backlogId) {
		return projectTaskService.findBacklogById(backlogId);
	}
	
	@GetMapping("/{backlogId}/{ptId}")
	public ResponseEntity<?> getProjectTask(@PathVariable String backlogId, @PathVariable String ptId) {
		ProjectTask projectTask = projectTaskService.findPTByProjectSequence(backlogId, ptId);
		return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
	}
}

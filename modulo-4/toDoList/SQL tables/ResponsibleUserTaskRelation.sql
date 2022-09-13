CREATE TABLE TodoListResponsibleUserTaskRelation (
	task_id INT NOT NULL,
    responsible_user_id INT NOT NULL,
    FOREIGN KEY (task_id) REFERENCES ToDoListTasks(task_id),
    FOREIGN KEY (responsible_user_id) REFERENCES ToDoListUsers(id)
);

INSERT INTO TodoListResponsibleUserTaskRelation (task_id, responsible_user_id)
values(3, 3);

SELECT * FROM TodoListResponsibleUserTaskRelation;

SELECT id, name, nickname, email, title, description, status 
FROM TodoListResponsibleUserTaskRelation
JOIN ToDoListUsers
ON TodoListResponsibleUserTaskRelation.responsible_user_id = ToDoListUsers.id
JOIN ToDoListTasks
ON TodoListResponsibleUserTaskRelation.task_id = ToDoListTasks.task_id;
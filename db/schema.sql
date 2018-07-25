CREATE DATABASE weddingPlanner_DB;

USE weddingPlanner_DB;

CREATE TABLE weddingChecklist {
    id INT AUTO_INCREMENT,
    item VARCHAR(64),
    timeline INT,
    done BOOLEAN,
    PRIMARY KEY (id)
};
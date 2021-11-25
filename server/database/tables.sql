-- Install MySQL and manually create a SCHEMA called gomarvelfacts
-- Run the queries below to create all the tables 

USE gomarvelfacts;
CREATE TABLE Movies (
	movieID int NOT NULL,
	title varchar(255),
	length int,
	director varchar(255),
	description varchar(255),
	PRIMARY KEY (movieID)
);

CREATE TABLE Characters (
		charID int NOT NULL, 
        name varchar(255),
        description varchar(255), 
        actorID int, 
        PRIMARY KEY (charID)
);

CREATE TABLE Actors (
		actorID int NOT NULL, 
        name varchar(255),
        age int, 
        birthDate date, 
        charID int, 
        PRIMARY KEY (actorID),
        FOREIGN KEY (charID) REFERENCES Characters(charID)
);

ALTER TABLE Characters 
ADD FOREIGN KEY (actorID) REFERENCES Actors(actorID);

CREATE TABLE inMovie (
	movieID int, 
    actorID int,
    charID int, 
    FOREIGN KEY (movieID) REFERENCES Movies(movieID),
    FOREIGN KEY (actorID) REFERENCES Actors(actorID),
    FOREIGN KEY (charID) REFERENCES Characters(charID)
);
    
        


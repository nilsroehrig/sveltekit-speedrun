CREATE TABLE posts (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT NOT NULL,
	content TEXT NOT NULL,
	author_email TEXT NOT NULL,
	author_name TEXT NOT NULL,
	created_at TEXT,
	modified_at TEXT
);

CREATE TRIGGER update_created_at
AFTER INSERT ON posts
BEGIN
	UPDATE posts
	SET created_at = datetime('now')
	WHERE id = NEW.id;
END;

CREATE TRIGGER update_modified_at
AFTER UPDATE ON posts
BEGIN
	UPDATE posts
	SET modified_at = datetime('now')
	WHERE id = NEW.id;
END;

INSERT INTO posts (title, content, author_email, author_name)
VALUES 
	('Exciting SvelteKit Features', 'SvelteKit is a powerful framework for building web applications.', 'nr@nroehrig.de', 'Nils Röhrig'),
	('Getting Started with SvelteKit', 'Learn how to quickly set up and start building with SvelteKit.', 'nr@nroehrig.de', 'Nils Röhrig'),
	('Advanced Techniques in SvelteKit', 'Discover advanced techniques and best practices for developing with SvelteKit.', 'nr@nroehrig.de', 'Nils Röhrig');
SELECT country_id, country
FROM country
WHERE country IN ('China', 'Bangladesh', 'India');

SELECT first_name, last_name
FROM actor
WHERE last_name LIKE '%OD%'
ORDER BY last_name ASC, first_name ASC;

ALTER TABLE actor
ADD COLUMN middle_name VARCHAR(50) AFTER first_name;

SELECT last_name, COUNT(*) AS number_of_actors
FROM actor
GROUP BY last_name
HAVING COUNT(*) >= 2;

SELECT staff.first_name, staff.last_name, address.address
FROM staff
JOIN address ON staff.address_id = address.address_id;

SELECT * FROM actor;

SELECT COUNT(*) AS total_copies_Hunchback_Impossible
FROM inventory
JOIN film ON inventory.film_id = film.film_id
WHERE film.title = 'Hunchback Impossible';

SELECT film.title, COUNT(rental.rental_id) AS rental_count
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
GROUP BY film.title
ORDER BY rental_count DESC;

SELECT store.store_id, city.city, country.country
FROM store
JOIN address ON store.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id;

SELECT first_name, last_name
FROM actor
WHERE actor_id IN (
    SELECT actor_id
    FROM film_actor
    WHERE film_id = (
        SELECT film_id
        FROM film
        WHERE title = 'Alone Trip'));
        
ALTER TABLE actor
DROP COLUMN middle_name;



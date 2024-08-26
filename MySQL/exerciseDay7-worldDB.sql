SELECT name, population FROM country ORDER BY population DESC LIMIT 1;
SELECT name, population FROM country ORDER BY population DESC LIMIT 1 OFFSET 1;
SELECT name, population FROM country ORDER BY population ASC LIMIT 1;

SELECT name, population
FROM (
    SELECT name, population,
           CASE WHEN population = 0 THEN 0 ELSE 1 END AS population_group
    FROM country
    ORDER BY population_group ASC, population ASC
) AS ordered_countries
WHERE population > 0
LIMIT 1 OFFSET 1;


SELECT continent, SUM(SurfaceArea) AS total_surface_area FROM country 
WHERE LifeExpectancy > 75 GROUP BY continent ORDER BY total_surface_area DESC LIMIT 1;

SELECT * FROM country;


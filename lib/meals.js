import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

// database connection
const db = sql("meals.db");

// function to get all meals from the database
export async function getAllMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Something went wrong!");
  return db.prepare("SELECT * FROM meals").all();
}

// function to get a single meal by its id
export function getMealById(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// function to add a new meal to the database
export async function addNewMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extention = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extention}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Error writing the image to the file system");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
`).run(meal);
}

// function to update an existing meal in the database
export async function updateMeal(meal) {
  const stmt = db.prepare(
    "UPDATE meals SET title = ?, description = ?, price = ?, image = ? WHERE id = ?"
  );
  const result = stmt.run(
    meal.title,
    meal.description,
    meal.price,
    meal.image,
    meal.id
  );
  return result;
}

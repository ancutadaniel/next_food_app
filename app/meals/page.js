import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "Delicious Meals",
  description:
    "Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.",
};

async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals || []} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals{" "}
          <span className={classes.highlight}>for Every Taste</span>
        </h1>
        <p>
          {" "}
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

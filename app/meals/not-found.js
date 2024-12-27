import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1> Meal Not Found</h1>
      <p>Could not find requested meal</p>

      <Link
        href="/meals"
        style={{
          marginTop: "1rem",
          textAlign: "center",
          color: "#f1356d",
          fontSize: "2rem",
          textDecoration: "none",
        }}
      >
        Return Meals
      </Link>
    </main>
  );
}

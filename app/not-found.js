import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>

      <Link
        href="/"
        style={{
          marginTop: "1rem",
          textAlign: "center",
          color: "#f1356d",
          fontSize: "2rem",
          textDecoration: "none",
        }}
      >
        Return Home
      </Link>
    </main>
  );
}

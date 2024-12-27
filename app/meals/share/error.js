"use client";

export default function Error({ error }) {
  //  console.log(error);

  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>Failed to create a new meal. Please try again later.</p>
    </main>
  );
}

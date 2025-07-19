import AppNavbar from "@/components/navbar";

export default async function HomePage() {
  return (
    <div className="flex flex-col justify-center h-full">
      <AppNavbar label="Index Page" />
      <main className="h-full flex">
        <div className="mx-auto my-auto">
          <h1>SOL2.0 UI 디자인 시안</h1>
        </div>
      </main>
    </div>
  );
}

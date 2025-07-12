import Navbar from "./_components/navbar";
import RichTextEditor from "./_components/rich-text-editor";

export default function EditJoPage() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <RichTextEditor />
      </main>
    </>
  );
}

import TermEditor from "./_components/term-editor";
import Condition from "./_components/condition";
import TermStruct from "./_components/term-struct";
import Navbar from "./_components/navbar";
import TermEditorHeader from "./_components/term-editor-header";
import Preview from "./_components/preview";

export default function EditReprCoverageTerm() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-[minmax(30%,50%)_1fr] h-full">
        <section className="flex flex-col border-r">
          <div className="min-h-[50%] max-h-[80%] overflow-y-auto border-b p-4">
            <TermStruct />
          </div>
          <div className="flex-1 p-4">
            <Condition />
          </div>
        </section>
        <section className="p-4 overflow-y-auto">
          <TermEditorHeader />
          <div className="overflow-y-auto h-full">
            <TermEditor />      
          </div>
        </section>
      </main>
    </>
  );
}

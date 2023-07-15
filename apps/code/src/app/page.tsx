import * as Code from "@codinasion/code";

export default function HomePage() {
  return (
    <>
      {
        // iterate over all Code functions and render them as strings
        Object.keys(Code).map((key) => {
          return <div key={key}>{key}</div>;
        })
      }
    </>
  );
}

import React from "react";
import { subjectsData } from "../jsonFiles/subjects";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function SingleSubject() {
  const { subjectName } = useParams();
  const decodedsubjectName = decodeURIComponent(subjectName);
  const sub = subjectsData.records.find(
    (record) => record.subject === decodedsubjectName
  );

  if (!sub) {
    return <div>Book not found</div>;
  }

  const { subject } = sub;
  console.log(sub);
  return (
    <main className="max-w-[1440px] mx-auto lg:px-8 px-4 py-8">
      <Breadcrumbs />

      <h1 className="text-3xl mb-6 mt-8 ">{subject}</h1>

      <div className=" bg-white border border-[#CCCCCC] p-6 flex lg:flex-row flex-col gap-8 ">
        <div className="">
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation
          <br />
          <br />
          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero
          in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam
        </div>
        <div className="lg:pr-4">
          <img
            src="/dummy/rect2.png"
            alt=""
            className="lg:max-w-[500px] w-full lg:w-auto rounded-md overflow-hidden"
          />
        </div>
      </div>
    </main>
  );
}

export default SingleSubject;

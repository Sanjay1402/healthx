import CurrentPage from "@/components/currentpage/CurrentPage";
const Page = ({}) => {
  let pages_text = { start: "Homepage", end: "Blogs" };
  return (
    <div className="container">
      <CurrentPage pages_text={pages_text} />
      <div className="flex">
        <div className="flex flex-col w-30 text-wrap">
          <div>
            <p>Jan 11.24</p>
          </div>
          <div className="">
            <h2 className="text-3xl">
              The Rising Cost of Healthcare: Is It Too Late to Bring Costs Down?
            </h2>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4">
          <p className="green">On this Page</p>
          <div>
            <ul className="list-disc list-inside text-wrap">
              <li>Factors Behind Rising Healthcare Cost</li>
              <li>Medical Advancements</li>
              <li>Aging Population</li>
              <li>Increased Demand</li>
              <li>Embrace Preventive Healthcare</li>
              <li>Promote Generic Medications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

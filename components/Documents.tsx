import PlaceHolderDocument from "./PlaceHolderDocument";

function Documents() {
  return (
    <div className="flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto">
      {/*Need to map all the pdf documents*/}
      <PlaceHolderDocument />
    </div>
  );
}
export default Documents;

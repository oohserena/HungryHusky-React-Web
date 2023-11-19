import * as React from "react";
import "./index.css";

export default function Review(props) {
  return (
    <main className="flex flex-col relative shrink-0 box-border mt-0 min-h-[800px] items-stretch bg-white">
      <section className="flex flex-col relative shrink-0 box-border mt-5">
        <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <h2 className="relative shrink-0 box-border h-auto text-xl font-semibold ml-44 mt-5 max-sm:ml-5 max-sm:mr-auto">
            Recommended Reviews
          </h2>
        </header>
      </section>
      <section className="flex flex-col relative shrink-0 box-border mt-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <h3 className="relative shrink-0 box-border h-auto text-xl ml-52 mt-5 max-sm:ml-7">
              Bryanna O.
            </h3>
            <p className="relative shrink-0 box-border h-auto ml-52 mt-2.5 max-sm:ml-7">
              Oct 30, 2023
            </p>
            <form>
              <textarea
                placeholder="BEST BUNS IVE EVER HAD! We ate at the location in the stadium. We got the vegetable buns and they were everything I was expecting and more! And don't even get me started on the chicken fried rice! The servers were quick and they had the food hot and ready to grab which was great! The environment was fast pace which is always nice especially when you wanna get back to your seats so definitely appreciate that."
                name="review-input1"
                className="flex text-area flex-col relative shrink-0 box-border border text-lg w-[700px] h-[250px] mt-5 mx-auto p-2.5 rounded border-solid border-stone-300 max-sm:w-[300px] max-sm:mx-auto max-sm:pr-40"
                required={false}
              />
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-col relative shrink-0 box-border">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <h3 className="relative shrink-0 box-border h-auto text-xl ml-52 mt-5 max-sm:ml-5">
              Bryanna O.
            </h3>
            <p className="relative shrink-0 box-border h-auto ml-52 mt-2.5 max-sm:ml-5">
              Oct 30, 2023
            </p>
            <form>
              <textarea
                placeholder="BEST BUNS IVE EVER HAD! We ate at the location in the stadium. We got the vegetable buns and they were everything I was expecting and more! And don't even get me started on the chicken fried rice! The servers were quick and they had the food hot and ready to grab which was great! The environment was fast pace which is always nice especially when you wanna get back to your seats so definitely appreciate that."
                name="review-input1"
                className="flex text-area flex-col relative shrink-0 box-border border h-[250px] w-[700px] text-lg mt-5 mx-auto p-2.5 rounded border-solid border-stone-300 max-sm:w-[300px] max-sm:pr-40"
                required={false}
              />
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-col relative shrink-0 box-border">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <h3 className="relative shrink-0 box-border h-auto text-xl ml-52 mt-5 max-sm:ml-5">
              Bryanna O.
            </h3>
            <p className="relative shrink-0 box-border h-auto ml-52 mt-2.5 max-sm:ml-5">
              Oct 30, 2023
            </p>
            <form>
              <textarea
                placeholder="BEST BUNS IVE EVER HAD! We ate at the location in the stadium. We got the vegetable buns and they were everything I was expecting and more! And don't even get me started on the chicken fried rice! The servers were quick and they had the food hot and ready to grab which was great! The environment was fast pace which is always nice especially when you wanna get back to your seats so definitely appreciate that."
                name="review-input1"
                className="flex text-area flex-col relative shrink-0 box-border border h-[250px] w-[700px] text-lg mt-5 mx-auto p-2.5 rounded border-solid border-stone-300 max-sm:w-[300px]"
                required={false}
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
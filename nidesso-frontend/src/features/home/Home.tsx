import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <h2 className="text-lg font-bold text-gray-500">Nidesso Frontend</h2>
      <h1 className="text-2xl font-bold text-gray-800">Stellvertretungen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna urna, molestie et ultricies eget, imperdiet a ipsum. Mauris vel turpis ex. In hac habitasse platea dictumst. Nunc ultricies nibh non purus fermentum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In id consectetur felis, nec sodales felis. Phasellus augue mauris, vestibulum id libero ut, porttitor accumsan nulla. Nulla volutpat lobortis ex, sed faucibus eros fermentum consectetur. Donec eget porttitor nunc. Vivamus non fermentum arcu. Quisque nulla orci, ullamcorper et orci lacinia, porttitor maximus libero.</p>
      <hr className="my-3" />
      <div className="py-14 bg-gray-600 absolute left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 md:flex">
          <iframe className="w-full md:w-3/5 md:mb-0 mb-5" height="315" src="https://www.youtube.com/embed/J3mbDanfoQQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <span className="text-white font-bold self-center text-2xl md:pl-5 md:w-2/5 inline-block text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</span>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
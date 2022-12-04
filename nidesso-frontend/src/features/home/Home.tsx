import { Fragment } from "react";
import FullWidthContainer from "../../components/FullWidthContainer";

function Home() {

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  }

  return (
    <Fragment>
      <h2 className="text-lg font-bold text-th-accent-900">Nidesso</h2>
      <h1 className="text-3xl font-bold text-gray-800">Noch nie war Stellvertretungssuche so einfach!</h1>
      <h2 className="text-lg font-bold text-gray-500">Für Schulen sowie auch Lehrpersonen</h2>
      <hr className="my-3 xl:-mx-5" />
      <h2 className="text-lg font-bold text-gray-800 mb-4">Nidesso vereinigt die Kommunikation zwischen Schulen und Lehrpersonen nahtlos</h2>
      <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="bg-th-primary-100 p-4 grid grid-cols-1 rounded-md">
          <p className='mb-8 text-gray-900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna urna, molestie et ultricies eget, imperdiet a ipsum. Mauris vel turpis ex. In hac habitasse platea dictumst. Nunc ultricies nibh non purus fermentum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In id consectetur felis, nec sodales felis. Phasellus augue mauris, vestibulum id libero ut, porttitor accumsan nulla. Nulla volutpat lobortis ex, sed faucibus eros fermentum consectetur. Donec eget porttitor nunc. Vivamus non fermentum arcu. Quisque nulla orci, ullamcorper et orci lacinia, porttitor maximus libero.</p>
          <button className="bg-th-primary-900 py-2 px-5 rounded-full text-white hover:bg-th-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white"
            onClick={_ => jumpTo("schools")}>
            Nidesso für Schulen
          </button>
        </div>
        <div className="bg-th-accent-200 p-4 grid grid-cols-1 rounded-md">
          <p className='mb-8 text-gray-900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna urna, molestie et ultricies eget, imperdiet a ipsum. Mauris vel turpis ex. In hac habitasse platea dictumst. Nunc ultricies nibh non purus fermentum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In id consectetur felis, nec sodales felis. Phasellus augue mauris, vestibulum id libero ut, porttitor accumsan nulla. Nulla volutpat lobortis ex, sed faucibus eros fermentum consectetur. Donec eget porttitor nunc. Vivamus non fermentum arcu. Quisque nulla orci, ullamcorper et orci lacinia, porttitor maximus libero.</p>
          <button className="bg-th-accent-900 py-2 px-5 rounded-full text-white hover:bg-th-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white"
            onClick={_ => jumpTo("teachers")}>
            Nidesso für Lehrpersonen
          </button>
        </div>
      </section>
      <hr className="my-3 xl:-mx-5" />
      <FullWidthContainer className="bg-th-secondary-800 py-14">
        <div className="max-w-7xl mx-auto px-4 md:flex">
          <iframe className="w-full md:w-3/5 md:mb-0 mb-5 max-w-[600px]" height="315" src="https://www.youtube.com/embed/J3mbDanfoQQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <span className="text-white font-bold self-center text-2xl md:pl-5 md:w-2/5 m-auto inline-block text-center">"Nidesso hat mit seinem Konzept den zweiten Platz bei der Swiss Startup Challenge besetzt!"</span>
        </div>
      </FullWidthContainer>
      <hr className="my-3 xl:-mx-5" />
      <h1 className="text-2xl font-bold text-gray-800">Warum Nidesso?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna urna, molestie et ultricies eget, imperdiet a ipsum. Mauris vel turpis ex. In hac habitasse platea dictumst. Nunc ultricies nibh non purus fermentum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In id consectetur felis, nec sodales felis. Phasellus augue mauris, vestibulum id libero ut, porttitor accumsan nulla. Nulla volutpat lobortis ex, sed faucibus eros fermentum consectetur. Donec eget porttitor nunc. Vivamus non fermentum arcu. Quisque nulla orci, ullamcorper et orci lacinia, porttitor maximus libero.</p>
      <hr className="my-3 xl:-mx-5" />
      <FullWidthContainer className="bg-th-primary-100 py-14">
        <div id="schools" className="max-w-7xl mx-auto px-4 md:flex">
          <h1 className="text-2xl font-bold text-th-primary-900">Nidesso für Schulen</h1>
        </div>
      </FullWidthContainer>
      <hr className="my-3 xl:-mx-5" />
      <FullWidthContainer className="bg-th-accent-200 py-14">
        <div id="teachers" className="max-w-7xl mx-auto px-4 md:flex">
          <h1 className="text-2xl font-bold text-th-accent-900">Nidesso für Lehrpersonen</h1>
        </div>
      </FullWidthContainer>
    </Fragment>
  );
}

export default Home;
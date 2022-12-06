import { Fragment } from "react";
import FullWidthContainer from "../../components/FullWidthContainer";

function Home() {

  const schoolList = [
    "Managen der Ausfälle über den online Vertretungsplan",
    "Jederzeit einen Überblick über alle Vertretungsstellen",
    "Einfaches Inserieren von Vertretungsstellen für interne sowie externe Vertretungen",
    "Zugriff auf einen grossen Pool von Vertretungen",
    "Erstellen der Vertretungsinserate direkt durch die ausfallende Lehrperson"
  ];

  const teacherList = [
    "Grosses Angebot von Vertretungsstellen",
    "Kalenderansicht zum schnellen koordinieren der Vertretungen und weiteren Terminen",
    "Einfacher Zugang in verfügbare Vertretungspools der Schulen",
    "Attraktive Verdienstmöglichkeit",
    "Sofortige Benachrichtigung über passende Vertretungsstellen"
  ]

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
          <ul className="mb-4">
            {schoolList.map(el => (
              <li className="flex items-center mb-4">
                <div className="h-4 w-4 mr-4 bg-th-primary-900 rounded-full flex-grow-1 flex-shrink-0 basis-auto"></div>
                <span className="text-lg text-gray-900">{el}</span>
              </li>
            ))}
          </ul>
          <button className="bg-th-primary-900 py-2 px-5 mt-auto rounded-full text-white hover:bg-th-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white"
            onClick={_ => jumpTo("schools")}>
            Nidesso für Schulen
          </button>
        </div>
        <div className="bg-th-accent-200 p-4 grid grid-cols-1 rounded-md">
          <ul className="mb-4">
            {teacherList.map(el => (
              <li className="flex items-center mb-4">
                <div className="h-4 w-4 mr-4 bg-th-accent-900 rounded-full flex-grow-1 flex-shrink-0 basis-auto"></div>
                <span className="text-lg text-gray-900">{el}</span>
              </li>
            ))}
          </ul>
          <button className="bg-th-accent-900 py-2 px-5 mt-auto rounded-full text-white hover:bg-th-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white"
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
      <p>Die Unternehmung Nidesso verfolgt das Ziel eine rundum Lösung für das Vertretungsmanagement und die externe Vertretungsakquise anzubieten. Schulen haben die Möglichkeit schnell und unkompliziert Ausfälle festzuhalten, verfügbare interne Vertretungen zu koordinieren und ggf. externe Vertretungen über das Nidesso-Netzwerk zu organisieren.</p>
      <hr className="my-3 xl:-mx-5" />
      <FullWidthContainer className="bg-th-primary-100 py-14">
        <div id="schools" className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-th-primary-900">Nidesso für Schulen</h1>
          <p className="mt-6 text-lg text-gray-900">Hier wird demnächst der Registrierungsprozess aufgeschaltet!</p>
        </div>
      </FullWidthContainer>
      <hr className="my-3 xl:-mx-5" />
      <FullWidthContainer className="bg-th-accent-200 py-14">
        <div id="teachers" className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-th-accent-900">Nidesso für Lehrpersonen</h1>
          <p className="mt-6 text-lg text-gray-900">Hier wird demnächst der Registrierungsprozess aufgeschaltet!</p>
        </div>
      </FullWidthContainer>
    </Fragment>
  );
}

export default Home;
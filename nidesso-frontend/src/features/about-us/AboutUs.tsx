import { Fragment } from "react";
import FullWidthContainer from "../../components/FullWidthContainer";

function AboutUs() {
  const members: { name: string, role: string, description: string, email: string, imgUrl: string }[] = [
    {
      name: 'Manuel Käch',
      role: 'Business Analyst / Marketing',
      description: '«Manuel ist der strategische Kopf von Nidesso. Kein Detail wird ausgelassen und kein Dokument liegen gelassen, bevor es nicht vollständig analysiert ist. Mit seiner wirtschaftlichen Denkweise wird Nidesso das, was sich die Kunden wünschen. »',
      email: 'manuel.kaech@nidesso.ch',
      imgUrl: require('./images/mka.jpg')
    },
    {
      name: 'Severin Haas',
      role: 'Software Developer',
      description: '«Severin ist der Spezialist für stressige oder verzwickte Situationen. Er hat stets den Überblick und die Fähigkeit Sachen aus einem anderen Blickwinkel zu betrachten. Keine Aufgabe geht so vergessen. »',
      email: 'severin.haas@nidesso.ch',
      imgUrl: require('./images/sha.jpg')
    },
    {
      name: 'Jan Kuonen',
      role: 'Software Developer',
      description: '«Jan ist der Mann für Aufgaben, bei denen andere nach einer schlaflosen Nacht schon aufgegeben haben. Sein Wille jedes Problem anzugehen und zu lösen, beweist er auch regelmässig bei der Entwicklung von Nidesso. »',
      email: 'jan.kuonen@nidesso.ch',
      imgUrl: require('./images/jak.jpg')
    }
  ];

  return (
    <Fragment>
      <h2 className="text-lg font-bold text-gray-500">Nidesso Team</h2>
      <h1 className="text-2xl font-bold text-gray-800">Wer steht hinter Nidesso?</h1>

      {
        members.map(m =>
          <Fragment>
            <FullWidthContainer className="bg-th-secondary-300 my-6">
              <div key={m.name} className="md:flex max-w-7xl mx-auto px-4 py-4">
                <div className="mx-6">
                  <img className="rounded-full border-2 border-s border-th-secondary-500 h-40 w-40 mx-auto object-cover"
                    src={m.imgUrl}
                    alt='' />
                  <div className="flex flex-col text-center mt-4">
                    <span className="font-bold text-gray-900">{m.name}</span>
                    <span className="text-gray-900">{m.role}</span>
                    <a className="text-blue-900" href={"mailto:" + m.email}>{m.email}</a>
                  </div>
                </div>
                <div className="pt-5 md:pt-0 px-10 text-center flex flex-col">
                  <span className="text-gray-900 text-lg my-auto">{m.description}</span>
                </div>
              </div>
            </FullWidthContainer>
            <hr className="my-3 xl:-mx-5" />
          </Fragment>
        )
      }
    </Fragment>
  );
}

export default AboutUs;
import { Fragment } from "react";
import FullWidthContainer from "../../components/FullWidthContainer";

function AboutUs() {
  const members: { name: string, role: string, description: string, email: string, imgUrl: string }[] = [
    {
      name: 'Manuel Käch',
      role: 'Business Analyst / Marketing',
      description: 'Macht das Requirment Engineering sowie die Marktanalyse.',
      email: 'manuel.kaech@nidesso.ch',
      imgUrl: require('./images/mka.jpg')
    },
    {
      name: 'Severin Haas',
      role: 'Software Developer',
      description: 'Beschäftigt sich gerne mit Machine Learning und Parallel Computing.',
      email: 'severin.haas@nidesso.ch',
      imgUrl: require('./images/sha.jpg')
    },
    {
      name: 'Jan Kuonen',
      role: 'Software Developer',
      description: 'Tüftelt gerne an Software Architektur rum.',
      email: 'jan.kuonen@nidesso.ch',
      imgUrl: require('./images/jak.jpg')
    }
  ];

  return (
    <Fragment>
      <h2 className="text-lg font-bold text-gray-500">Nidesso Team</h2>
      <h1 className="text-2xl font-bold text-gray-800">Wer steht hinter Nidesso?</h1>
      <FullWidthContainer className="bg-th-secondary-800 my-4">
        <div className="max-w-7xl mx-auto px-4 md:flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            members.map(m =>
              <div key={m.name}
                className="grid grid-cols-1 grid-rows-2 content-center pt-5 pr-5">
                <img className="rounded-full border-2 border-s border-th-primary-900 h-40 w-40 mx-auto object-cover"
                  src={m.imgUrl}
                  alt='' />
                <div className="pt-5 text-center flex flex-col">
                  <span className="font-bold text-gray-800">{m.name}</span>
                  <span className="text-gray-700">{m.role}</span>
                  <span className="text-gray-700">{m.description}</span>
                  <a href={"mailto:" + m.email}>{m.email}</a>
                </div>
              </div>
            )
          }
        </div>
      </FullWidthContainer>
    </Fragment>
  );
}

export default AboutUs;
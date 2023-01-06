import { Vacancy } from "../../models/vacancy/vacancy";

function VacancyCard(props: { vacancy: Vacancy, onClick: () => void }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer duration-300"
            onClick={props.onClick}>
            <h3>{`${props.vacancy.school.name} ${props.vacancy.startDate.toLocaleDateString()} - ${props.vacancy.endDate.toLocaleDateString()}`}</h3>
            <p>{props.vacancy.school.name}</p>
            <p>{props.vacancy.description}</p>
        </div>
    )
}

export default VacancyCard;
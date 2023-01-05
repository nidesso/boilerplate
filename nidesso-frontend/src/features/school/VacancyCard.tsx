import { VacancyFormFields } from "./VacancyForm";

function VacancyCard(props: { vacancy: VacancyFormFields & { id: string }, onClick: () => void }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer duration-300"
            onClick={props.onClick}>
            <h3>{props.vacancy.id}</h3>
            <p>{props.vacancy.teacher.username}</p>
        </div>
    )
}

export default VacancyCard;
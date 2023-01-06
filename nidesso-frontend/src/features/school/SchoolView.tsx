import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import FullWidthContainer from "../../components/FullWidthContainer";
import Button from "../../components/ui-lib/Button";
import UiDialog from "../../components/ui-lib/UiDialog";
import api from "../../helpers/network/api";
import { School } from "../../models/school/school";
import { CreateVacancy, Vacancy } from "../../models/vacancy/vacancy";
import VacancyCard from "./VacancyCard";
import VacancyForm, { VacancyFormFields } from "./VacancyForm";

function SchoolView() {
    const [dialogState, setDialogState] = useState<{ isOpen: boolean; vacancy?: Vacancy }>({ isOpen: false });
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [school, setSchool] = useState<School>();

    useEffect(() => {
        api.doApiCall(api.getSchools)
            .then(schools => schools[0])
            .then(setSchool)
    }, [])

    useEffect(() => {
        if (school) {
            api.doApiCall(() => api.getSchoolVacancies(school.id))
                .then(data => setVacancies(data));
        }
    }, [school])

    const reload = () => {
        api.doApiCall(() => api.getSchoolVacancies(school?.id!))
                .then(data => setVacancies(data));
    }

    const onSubmit = (data: VacancyFormFields) => {
        const vacancy: CreateVacancy = {
            absentTeacherId: data.teacher.id,
            startDate: new Date(data.start),
            endDate: new Date(data.end),
            scheduleId: data.scheduleId,
            description: data.description,
            lessons: data.lessons
        };
        api.createVacancy(vacancy)
            .then(() => setDialogState({ isOpen: false }))
            .then(() => reload());
    }

    return (
        <>
            <header className="flex md:justify-between flex-col md:flex-row">
                <h1 className="mb-2 md:mb-0">Meine Ausschreibungen</h1>
                <Button className="mb-2 md:mb-0" onClick={() => setDialogState({ isOpen: true })}>Erstellen</Button>
            </header>
            <main>
                <section className="mb-4">
                    <p>Hier ist eine Übersicht über alle ausgeschriebenen Stellen.</p>
                </section>
                <section>
                    <FullWidthContainer className="bg-th-primary-200 p-4">
                        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-4">
                            {
                                vacancies.map(v => (
                                    <VacancyCard key={v.id} vacancy={v} onClick={() => setDialogState({ isOpen: true, vacancy: v })}></VacancyCard>
                                ))
                            }
                        </div>
                    </FullWidthContainer>
                </section>
            </main>
            <UiDialog open={dialogState.isOpen} onClose={() => setDialogState({ isOpen: false })}>
                <>
                    <Dialog.Title as="h3">Neue Ausschreibung</Dialog.Title>
                    <Dialog.Description className="text-gray-800 my-2">
                        Informationen ausfüllen um eine neue Ausschreibung zu erstellen
                    </Dialog.Description>
                    {school && <VacancyForm
                        school={school}
                        onSubmit={onSubmit}
                        actions={[
                            <Button key='cancel' theme="secondary" className="ml-2" onClick={() => setDialogState({ isOpen: false })}>Abbrechen</Button>
                        ]}
                    ></VacancyForm>}
                </>
            </UiDialog>
        </>
    );
}

export default SchoolView;
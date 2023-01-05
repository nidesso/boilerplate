import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import FullWidthContainer from "../../components/FullWidthContainer";
import Button from "../../components/ui-lib/Button";
import UiDialog from "../../components/ui-lib/UiDialog";
import api from "../../helpers/network/api";
import { Vacancy } from "../../models/vacancy/Vacancy";
import VacancyCard from "../school/VacancyCard";

function TeacherView() {
    const [dialogState, setDialogState] = useState<{ isOpen: boolean; vacancy?: Vacancy }>({ isOpen: false });
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);

    useEffect(() => {
        api.getVacancies()
            .then(data => setVacancies(data))
    }, []);

    return (
        <>
            <header>
                <h1 className="mb-2 md:mb-0">Meine Ausschreibungen</h1>
            </header>
            <main>
                <section className="mb-4">
                    <p>Hier ist eine Übersicht über alle ausgeschriebenen Stellen.</p>
                </section>
                <section>
                    <FullWidthContainer className="bg-th-primary-200 p-4">
                        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
                            {(
                                vacancies.map((v) => (
                                    <VacancyCard key={v.id} vacancy={v} onClick={() => setDialogState({ isOpen: true, vacancy: v })}></VacancyCard>
                                ))
                            )}
                        </div>
                    </FullWidthContainer>
                </section>
            </main>
            <UiDialog open={dialogState.isOpen} onClose={() => setDialogState({ isOpen: false })}>
                <>
                    <Dialog.Title as="h3">{dialogState.vacancy?.startDate.toString()}</Dialog.Title>
                    <Dialog.Description className="text-gray-800 my-2">
                        {dialogState.vacancy?.absentTeacher?.name}
                    </Dialog.Description>
                    <Button className="mt-4 mr-2">Bewerben</Button>
                    <Button theme="secondary" onClick={() => setDialogState({ isOpen: false })}>Abbrechen</Button>
                </>
            </UiDialog>
        </>
    )
}

export default TeacherView;
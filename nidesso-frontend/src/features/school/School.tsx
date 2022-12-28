import { Dialog } from "@headlessui/react";
import { useState } from "react";
import FullWidthContainer from "../../components/FullWidthContainer";
import Button from "../../components/ui-lib/Button";
import UiDialog from "../../components/ui-lib/UiDialog";
import api from "../../helpers/network/api";
import VacancyForm, { VacancyFormFields } from "./VacancyForm";

function School() {
    const [dialogState, setDialogState] = useState<{ isOpen: boolean; vacancy?: VacancyFormFields }>({ isOpen: false });
    const [vacancies, setVacancies] = useState<VacancyFormFields[]>([
        { title: 'Ausschreibung 1', description: 'Dies ist eine Beschreibung einer Ausschreibung zum testen' },
        { title: 'Ausschreibung 2', description: 'Dies ist eine Beschreibung einer Ausschreibung zum testen' }
    ]);

    const onSubmit = (data: VacancyFormFields) => {
        api.createVacancy(data)
            .then(() => setVacancies([...vacancies, data]))
            .then(() => setDialogState({ isOpen: false }));
    }

    return (
        <>
            <header className="flex justify-between">
                <h1>Meine Ausschreibungen</h1>
                <Button onClick={() => setDialogState({ isOpen: true })}>Erstellen</Button>
            </header>
            <main>
                <section className="mb-4">
                    <p>Hier ist eine Übersicht über alle ausgeschriebenen Stellen.</p>
                </section>
                <section>
                    <FullWidthContainer className="bg-th-primary-200 p-4">
                        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-4">
                            {
                                vacancies.map(v => (
                                    <div key={v.title}
                                        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer duration-300"
                                        onClick={() => setDialogState({ isOpen: true, vacancy: v })}>
                                        <h3>{v.title}</h3>
                                        <p>{v.description}</p>
                                    </div>
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
                    <VacancyForm onSubmit={onSubmit}
                        vacancy={dialogState.vacancy}
                        actions={[
                            <Button key='cancel' theme="secondary" className="ml-2" onClick={() => setDialogState({ isOpen: false })}>Cancel</Button>
                        ]}></VacancyForm>
                </>
            </UiDialog>
        </>
    );
}

export default School;
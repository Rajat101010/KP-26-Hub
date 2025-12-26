import { useEffect, useState } from "react";

import { FiDownload } from "react-icons/fi";

export default function AddToHomeScreen() {
    const [promptEvent, setPromptEvent] = useState(null);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            setPromptEvent(e);
        });
    }, []);

    const installApp = async () => {
        if (!promptEvent) {
            alert("Install not available");
            return;
        }
        promptEvent.prompt();
        await promptEvent.userChoice;
        setPromptEvent(null);
    };

    return (
        <FiDownload  onClick={installApp}/>
    );
}

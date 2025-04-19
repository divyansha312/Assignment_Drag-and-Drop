import React, { useState } from 'react';
import { TemplateList } from './components/TemplateList';
import Sidebar from "./components/Sidebar";
import {Info, Mic, Share, Trash} from "lucide-react";

const initialTemplates = [
    { id: "1", title: "Subjective:", subTitle: "Toothache for few days" },
    { id: "2", title: "History of presenting complains:", subTitle: "Toothache present for few days" },
    { id: "3", title: "Extra oral examinations:", subTitle: "Not performed" },
    { id: "4", title: "Infra oral examinations:", subTitle: "Tenderness around molar" },
    { id: "5", title: "Radiography findings:", subTitle: "X-ray planned to confirm extend of infection" },
    { id: "6", title: "Diagnosis:", subTitle: "Suspect tooth abscess" },
];


function App() {
  const [templates, setTemplates] = useState(initialTemplates);

  return (
      <div style={styles.app}>
        <Sidebar />
        <div style={styles.main}>
            <div style={styles.rootCanal}>
                <div style={styles.header}>
                    <h2>Root Canal</h2>
                    <Info size={18} />
                </div>
                <div style={styles.resumeControl}>
                    <button style={styles.resumeBtn}>
                        <Mic size={18} />
                        <span>Resume</span>
                    </button>

                        <Share size={20} />

                        <Trash style={styles.deleteBtn} size={20} />


                </div>
            </div>
            <div style={styles.content}>
                <TemplateList templates={templates} setTemplates={setTemplates} />
            </div>
        </div>
      </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {

    app: {
        display: 'flex',
        padding: '16px',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        gap: '20px'
    },

    main: {
        flex: 1,
        padding: '13px',
        overflowY : "auto",
        backgroundColor: '#ededed',
        paddingLeft: '45px',
        paddingRight: '25px',
        borderRadius: '8px',
        scrollbarWidth: 'none'
    },

    content: {
        backgroundColor: 'white',
        paddingTop: '30px',
        paddingBottom: '20px',
        paddingLeft: '15px',
        paddingRight: '15px',
        height: '100%',

    },

    header: {
        display: "flex",
        alignItems: "center",
        gap: '10px',
    },

    rootCanal: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    resumeControl: {
        display: "flex",
        alignItems: "center",
        gap: '15px',

    },
    resumeBtn: {
        display: 'flex',
        alignItems: "center",
        gap: '10px',
        backgroundColor: 'white',
        borderRadius: '50px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '10px',
        paddingBottom: '10px',
        border: '1px solid black'
    },

    deleteBtn: {
        color: '#c50000',
    }









};

export default App;
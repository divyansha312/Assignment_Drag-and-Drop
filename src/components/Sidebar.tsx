import React from 'react';
import {Mic, Pencil, Search} from "lucide-react";

const templates = [
    "Subjective",
    "Objective",
    "Assessment & Plan",
    "Findings",
    "Diagnoses",
    "Treatment",
    "Recovery",
    "Objective",
    "Assessment & Plan",
    "Treatment"
];

const Sidebar = () => {
    // @ts-ignore
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Template</h2>
            <div style={styles.content}>
                <div style={styles.searchContainer}>
                    <input type="text" placeholder="Search Templates" style={styles.searchInput} />
                    <Search style={styles.searchIcon} size={18} />
                </div>
                <div style={styles.buttonContainer}>
                    {templates.map((template, index) => (
                        <button key={index} style={styles.button}>
                            {template}
                        </button>
                    ))}
                </div>
                <div style={styles.editFooter}>
                    <button style={styles.editButton}>
                        <p>
                            Edit
                    </p>
                        <Pencil size={18} />
                    </button>

                </div>

            </div>

        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '280px',
        backgroundColor: '#EDEDED',
        padding: '20px',
        borderRadius: '10px',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',

    },
    header: {
        fontSize: '24px',
        textAlign: 'center' as const,
        marginBottom: '20px',
    },
    searchContainer: {
        position: 'relative' as const,
        marginBottom: '20px',
        width: '77%',
    },
    searchInput: {
        width: '100%',
        padding: '10px 40px 10px 10px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        fontSize: '14px',
        backgroundColor: '#f2f2f2',
    },
    searchIcon: {
        position: 'absolute' as const,
        right: '-30px',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    buttonContainer: {
        flexGrow: 1,
        overflowY: 'auto' as const,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '20px',
        paddingRight: '5px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',

    },
    button: {
        backgroundColor: '#f2f2f2',
        border: 'none',
        borderRadius: '10px',
        padding: '10px',
        fontSize: '16px',
        textAlign: 'center' as const,
        cursor: 'pointer',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    editFooter: {
        marginTop: '20px',
        textAlign: 'center' as const,
    },
    editButton: {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '10px 20px',
        fontSize: '14px',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',

    },
    content: {
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '8px',

    }
};

export default Sidebar;
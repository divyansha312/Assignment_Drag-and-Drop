import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import React from "react";

interface Props {
    id: string;
    template: { title: string; subTitle: string };
}

export function TemplateCard({ id, template }: Props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundColor: '#f2f2f2',
        border: 'none',
        borderRadius: '10px',
        padding: '5px',
        fontSize: '16px',
        cursor: 'grab',
        width: '50%',
        height: '80px',
        marginBottom: '20px',
        paddingLeft: '15px',

        title: {
            fontSize: '19px',
            fontWeight: 'bold',
            lineHeight: '0px',

        },
        subtitle: {
            fontSize: '19px',
            lineHeight: '0px',


        },

        subtitleContainer: {
            display: 'flex',
            gap: '10px',
        },

        bullet: {
            lineHeight: '0px',
            fontWeight: 'bold',
            fontSize: '15px',
        }


    };


    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <p style={style.title}>{template.title}</p>
            <div style={style.subtitleContainer}>
                <p style={style.bullet}>•</p>
                <p style={style.subtitle}>{template.subTitle}</p>
            </div>
            {/*// <p style={style.subtitle}>{template.subTitle}</p>*/}
        </div>
    );
}

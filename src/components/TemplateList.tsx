import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from '@dnd-kit/sortable';
import { TemplateCard } from './TemplateCard';
import React from "react";

interface Props {
    templates: any;
    setTemplates: React.Dispatch<React.SetStateAction<any>>;
}

export function TemplateList({ templates, setTemplates }: Props) {
    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            setTemplates((items: string | any[]) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                // @ts-ignore
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={templates} strategy={verticalListSortingStrategy}>
                {templates.map((template: any) => (
                    <TemplateCard key={template.id} id={template.id} template={template} />
                ))}

            </SortableContext>
        </DndContext>
    );
}

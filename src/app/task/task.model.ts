import { AbstractModel } from "@afd-core/abstract/abstract.interface";

export type Tasks = Task[];

export interface Task extends AbstractModel {
    title: string;
    completed: boolean;
    createdAt: Date;
    finishedAt: Date;
}

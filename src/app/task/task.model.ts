import { AbstractModel } from "@afd-core/abstract/abstract.interface";

export interface Task extends AbstractModel {
    title: string;
    done: boolean;
    createAt: Date;
}

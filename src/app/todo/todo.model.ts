import { AbstractModel } from "@afd-core/abstract/abstract.interface";

export interface Todo extends AbstractModel {
    title: string;
    done: boolean;
    createAt: Date;
}

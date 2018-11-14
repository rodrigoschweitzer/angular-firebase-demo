import { Injectable } from '@angular/core';
import { AbstractModel } from './abstract.interface';
import { AngularFirestore, AngularFirestoreCollection, QueryFn, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class AbstractService<M extends AbstractModel> {

    protected _collectionRef: AngularFirestoreCollection<M>;

    get collectionRef(): AngularFirestoreCollection<M> {
        return this._collectionRef;
    }

    set collectionRef(collectionRef: AngularFirestoreCollection<M>) {
        if (!this._collectionRef) this._collectionRef = collectionRef;
    }

    constructor(
        protected afs: AngularFirestore,
        protected path: string) {
            this.collectionRef = afs.collection(path);
        }

    list(queryFunction?: QueryFn): Observable<M[]> {
        return this.afs.collection<M>(this.path, queryFunction).valueChanges();
    }

    get(path: string): AngularFirestoreDocument<M> {
        return this._collectionRef.doc<M>(path);
    }

    save(model: M) {
		if (model.id) {
			return this.update(model);
		}

		return this.add(model);
	}

	add(model: M) {
        const batch = this.afs.firestore.batch();
        const id = this.afs.createId();

        const docRef = this._collectionRef.doc(id).ref;

        batch.set(docRef, model);

        const newModel = Object.assign(model, { id: docRef.id });
        return this.update(newModel, batch);
	}

	async update(model: M, batch?: firebase.firestore.WriteBatch) {
        if (!model.id) return Promise.reject();

        try {
            if (batch) {
                const docRef = this._collectionRef.doc(model.id).ref;
                batch.update(docRef, model);
                await batch.commit();
                return Promise.resolve(model);
            }

            await this._collectionRef.doc(model.id).update(model);
            return Promise.resolve(model);
        } catch (error) {
            return Promise.reject(error);
        }
	}

	delete(id: string) {
		return this.get(id).delete();
	}

}
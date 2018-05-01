import { Injectable } from '@angular/core';
import { AbstractModel } from './abstract.interface';
import { AngularFirestore, AngularFirestoreCollection, QueryFn, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

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
		return this._collectionRef.add(model);
	}

	update(model: M) {
		if (!model.id) return Promise.resolve();
		return this._collectionRef.doc(model.id).update(model);
	}

	delete(model: M | string) {
        let id = typeof model === 'string' ? model : model.id;
		if (!id) return Promise.resolve();
		return this.get(id).delete();
	}

}
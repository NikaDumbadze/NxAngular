import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import { Customer } from './customer';
import { LineItem } from './line-item';
import { Order } from './order';
import { Product } from './product';

export type EntityType = Customer | LineItem | Order | Product;
export type EntityTypeNames = 'customer' | 'lineItem' | 'order' | 'product';

// export type EntityTypeNames1 = {
//   'customer': unknown 'lineItem' | 'order' | 'product'
// };

/**
 * A cache of collections for each "entity type" in your model
 */
export interface EntityCache {
  [key: string]: EntityType[];
  customers: Customer[];
  orders: Order[];
  lineItems: LineItem[];
  products: Product[];
}

/** Observable store of the EntityCache. Actually an RxJS subject. An impoverished ngrx store. */
export type CacheStore = Subject<EntityCache>;

/** Get the current value (a "snapshot") of the entire Entity Cache */
export function cacheSnapShot(cache$: Observable<EntityCache>) {
  let cache!: EntityCache;
  cache$.pipe(first()).subscribe(c => (cache = c));
  return cache;
}

/** Get the current value (a "snapshot") of a named collection in cache */
export function collectionSnapShot<T extends EntityType>(
  collectionName: keyof EntityCache,
  cache$: Observable<EntityCache>
) {
  return cacheSnapShot(cache$)[collectionName] as T[];
}

// interface IProduct {

// }
// interface IUser {

// }

// interface IServerData {
//   products: IProduct[];
//   users: IUser[];
// }

// interface IAbstractServerData {
//   [name: keyof EntityTypeNames ]: EntityType;
// }


// class Manager {
//   constructor(
//     private store: Store,
//     private data: IServerData
//   ) {
//     this.init();
//   }

//   private init() {
//     for (let key in this.data) {
//       this.store.store(key, this.data[key]);
//     }
//   }
// }


// interface IStorableBase {
// }

// class Store {

//   private _stream = new Map<string, { stream: BehaviorSubject<any> }>();

//   store<T extends IStorableBase>(key: string, data: T) {
//     this._stream.set(key, {
//       stream: new BehaviorSubject<T>(data)
//     });
//   }

//   retrieve(key: string) {
//     const stream = this._stream.get(key);
//     if (!stream)
//       return null;
    
//     return stream.stream.getValue();
//   }

//   retrieveStream(key: string) {
//     const stream = this._stream.get(key);
//     if (!stream)
//       return of();
    
//     return stream.stream.asObservable();
//   }

//   update<T extends IStorableBase>(key: string, value: T) {
//     const stream = this._stream.get(key);
//     if (!stream)
//       return;

//     stream.stream.next(value);
//   }

// }
import {BehaviorSubject} from 'rxjs';

export const LOAD = 'LOAD';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';

type Id = string | number;
interface Identifiable {
  id?: Id;
}

@Injectable({
  providedIn: 'root'
})
export class Store<T extends Identifiable> {
  items = [];
  items$ = new BehaviorSubject<T[]>([]);

  dispatch(action) {
    this.items = this._reduce(this.items, action);
    this.items$.next(this.items);
  }

  _reduce(items: T[], action) {
    switch (action.type) {
      case LOAD:
        return [...action.data];
      case ADD:
        return [...items, action.data];
      case EDIT:
        return items.map(item => {
          const editedItem = action.data;
          if (item.id !== editedItem.id) {
            return item;
          }
          return editedItem;
        });
      case REMOVE:
        return items.filter(item => item.id !== action.data.id);
      default:
        return items;
    }
  }
}

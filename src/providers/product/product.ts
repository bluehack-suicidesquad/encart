import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {AngularFireDatabase} from "angularfire2/database/database";

/*
 Generated class for the ProductProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ProductProvider {

  constructor(public http: Http,
              private db: AngularFireDatabase) {

  }

  get(start?: number, end?: number) {
    return this.db.list('products');
  }

}

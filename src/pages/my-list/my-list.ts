import { ProductProvider } from './../../providers/product/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-list',
  templateUrl: 'my-list.html',
})
export class MyListPage {

  products: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public product: ProductProvider) {
    this.product.get().subscribe(data => {
      this.products = data.splice(30,60);
    });
  }

  ionViewDidLoad() {

  }

}

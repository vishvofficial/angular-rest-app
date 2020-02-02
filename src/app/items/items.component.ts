import {Component, Input, OnInit} from '@angular/core';
import { ServerService, Item } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  currentItem: Item;
  readonly = true;

  constructor(private itemsService: ServerService) {
    this.itemsService.configService(`items`);
  }

  ngOnInit() {
    this.getItems();
    this.resetCurrentItem();
  }

  resetCurrentItem() {
    this.currentItem = { id: null, name: '', description: '' };
  }

  selectItem(item) {
    this.currentItem = item;
  }

  cancel() {
    this.resetCurrentItem();
  }

  getItems() {
    return this.itemsService.all()
      .subscribe(items => this.items = items);
  }

  saveItem(item) {
    if (!item.id) {
      this.createItem(item);
    } else {
      this.updateItem(item);
    }
  }

  execute(item: Item, action) {
    this.itemsService[action](item)
      .subscribe(() => {
        this.getItems();
        this.resetCurrentItem();
      })
  }

  createItem(item) {
    this.execute(item, 'createItem');
  }

  updateItem(item) {
    this.execute(item, 'updateItem');
  }

  deleteItem(item) {
    this.execute(item, 'deleteItem');
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-documents-item',
  templateUrl: './documents-item.component.html',
  styleUrls: ['./documents-item.component.css']
})

export class DocumentsItemComponent implements OnInit {
  @Input() document!: Document;

  constructor() { }

  ngOnInit(): void {

  }

}
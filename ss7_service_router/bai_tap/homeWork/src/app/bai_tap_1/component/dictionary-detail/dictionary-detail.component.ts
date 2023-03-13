// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../../model/dictionary";
// @ts-ignore
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
 dictionary:Dictionary;

  constructor(private activatedRoute:ActivatedRoute,
              private dictionaryService:DictionaryService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const id =parseInt(paramMap.get('id'));
      console.log(id);
      debugger
      this.dictionary=this.dictionaryService.findById(id);
    })
  }

}

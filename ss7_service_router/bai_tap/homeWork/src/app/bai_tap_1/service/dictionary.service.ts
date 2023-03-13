// @ts-ignore
import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [{
    id: 1,
    word: 'i love you',
    mean: 'anh yeu em'
  }, {
    id: 2,
    word: 'star',
    mean: 'ngoi sao'
  },
    {
      id: 3,
      word: 'fuck you',
      mean: 'DCM may'
    }
  ]

  constructor() {
  }

  findAll(): Dictionary[] {
    return this.dictionary;
  }

  findById(id: number): Dictionary {
    return this.dictionary.filter(it => it.id === id)[0];
  }
}

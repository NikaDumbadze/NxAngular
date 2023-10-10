import { Component, OnInit } from "@angular/core";
import { Observable, of } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';
import { HttpClientRxJSService } from "../../core/services/http-client-rxjs.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'nx-angular-httpclientrxjs',
  templateUrl: './http-client-rxjs.component.html',
  styleUrls: ['./http-client-rxjs.component.scss']
})
export class HttpClientRxJSComponent implements OnInit {

  formGroup!: FormGroup;
  searchCharacters$!: Observable<any[]>;
  characters$!: Observable<any[]>;
  characterWithHomeworld$!: Observable<{}>;
  charactersWithHomeworld$!: Observable<any>;
  planets$!: Observable<any[]>;
  charactersAndPlanets!: { characters: any[], planets: any[] };
  showCharactersAndPlanetsJSON = false;
  showCharacterAndHomeworldJSON = false;

  constructor(
    private readonly httpClientRxJSService: HttpClientRxJSService
  ) { }

  ngOnInit() {
    // Get both characters and planets ar same time
    // Uses forkJoin
    this.httpClientRxJSService.getCharactersAndPlanets()
      .subscribe(data => this.charactersAndPlanets = data);

    //Get character and its howmworld
    // Uses switchMap
    this.characterWithHomeworld$ = this.httpClientRxJSService.getCharacterAndHomeworld();

    this.charactersWithHomeworld$ = this.httpClientRxJSService.getCharactersAndHomeworlds();

    this.searchCharacters();
  }

  searchCharacters() {
    this.formGroup = new FormGroup({
      characterName: new FormControl('', [Validators.required])
    });

    const valueChanges = this.formGroup.get('characterName')?.valueChanges;
    if (valueChanges) {
      this.searchCharacters$ = valueChanges
        .pipe(
          debounceTime(500),
          switchMap((name: string) => {
            return this.httpClientRxJSService.getCharacter(name);
          })
        );
    }
  }
}
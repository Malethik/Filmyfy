export interface Root {
  film: Film[];
}

export interface Film {
  id: string;
  titolo: string;
  anno: string;
  regista: string;
  genere: string[];
  valutazione: string;
}

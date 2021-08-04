export default class Project {
 // 1. Typage des propiétés d'un pokémon.
 id: number;
 name: string;
 picture: string;
 songs: Array<string>;
 created: string;
  
 // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
 constructor(
  id: number,
  name: string = 'name',
  picture: string = 'http://...',
  songs: Array<string> = [''],
  created: string = ""
 ) {
  // 3. Initialisation des propiétés d'un pokémons.
  this.id = id;
  this.name = name;
  this.picture = picture;
  this.songs = songs;
  this.created = created;
 }
}